const { Client,Collection, GatewayIntentBits, ActivityType , Partials, SlashCommandBuilder } = require('discord.js');
const { TOKEN, CLIENT_ID, ABS_PATH } = require('./private')
const { REST, Routes } = require('discord.js');
const COMMAND = require('./javascript/command')
const item_rss = require("./javascript/itemRSS")
const fs = require('fs');
var lang = require('./javascript/lang/zh-TW');
const { channel } = require('diagnostics_channel');
const { search } = require('./javascript/command');

var langName = "zh-TW"
const client = new Client({ 
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.Reaction
    ]
});

var charList = [];
var weaponList = [];
var artList = [];
var tcgList = [];

//https://hackmd.io/@winsonOTP/discord-js-v14-ep5-0

client.on('ready', () => {
    registCommand();
    client.user.setStatus('online'); //設置狀態為閒置
    client.user.setActivity('Genshin Spirit', { type: ActivityType.Watching }); //將機器人的行為設置為正在看
    console.log(`Logged in as ${client.user.tag}!`);
    
    char_list_load();
    weapon_list_load();
    art_list_load();
    tcg_list_load();
});

client.on('messageCreate', async (message) => {
    //console.log(message.content);
    //if(message.author.bot) return;
    //const koori_asai = require("./javascript/chatbot")
    //koori_asai.ask2(message, client)

});

client.on('interactionCreate', async interaction => {
    if (interaction.user.bot) return;
    if (interaction.isChatInputCommand()){
        //editReply是指修改回覆，使用此函數是因為我們先前已經發送過指令，若用reply會發生錯誤
        switch(interaction.commandName){
            case "help" : {
                const help = require('./javascript/run/help');
                if(interaction.options.get("type") != null){
                    help.help_customize(interaction.options.get("type").value)
                }else{
                    help.help_customize(0)
                }
                interaction.reply({ embeds: [help.help_embed] , files: [help.help_img_url] }) ;
                break;
            }
            case "data" : {
                if(interaction.options.get("name_char") !== null){
                    const character = require('./javascript/run/character');
                    await character.run(interaction, [interaction.options.get("name_char").value,"MAIN"])
                }else if(interaction.options.get("name_weapon") !== null){
                    const weapon = require('./javascript/run/weapon');
                    await weapon.run(interaction, interaction.options.get("name_weapon").value)
                }else if(interaction.options.get("name_artifact") !== null){
                    const artifact = require('./javascript/run/artifact');
                    await artifact.run(interaction, interaction.options.get("name_artifact").value)
                }else if(interaction.options.get("name_tcg") !== null){
                    const tcg = require('./javascript/run/tcg');
                    await tcg.run(interaction, interaction.options.get("name_tcg").value)
                }
                break;
            }
            case "search" : {
                try {
                    var searchX = require("./javascript/run/search")
                    switch(interaction.options.getSubcommand()){
                        case "character" : {await searchX.run(interaction, charList, "step_char"); break;}
                        case "weapon" : {await searchX.run(interaction, weaponList, "step_weapon"); break;}
                        case "artifact" : {await searchX.run(interaction, artList, "step_art"); break;}
                        case "genius_invokation_tcg" : {await searchX.run(interaction, tcgList, "type_tcg"); break;}
                    }
                } catch (error) {
                    console.error(error);
                }
                break;
            }
            case "koori_asai":{
                const koori_asai = require("./javascript/chatbot")
                if(interaction.options.get("want_to_say") !== null){
                    koori_asai.ask(interaction, interaction.options.get("want_to_say").value)
                }
                break
            }
        }
    } else if (interaction.isAutocomplete()) {
        if(interaction.client.commands === undefined){return;}
		const command = interaction.client.commands.get(interaction.commandName);
		switch(interaction.commandName){
            case "data" : {
                try {
                    switch(interaction.options.getSubcommand()){
                        case "character" : {await command.autocomplete(interaction, charList, "name_char"); break;}
                        case "weapon" : {await command.autocomplete(interaction, weaponList, "name_weapon"); break;}
                        case "artifact" : {await command.autocomplete(interaction, artList, "name_artifact"); break;}
                        case "genius_invokation_tcg" : {await command.autocomplete(interaction, tcgList, "name_tcg"); break;}
                    }
                } catch (error) {
                    console.error(error);
                }
                break;
            }
        }
	} else if (interaction.isButton()){
        const command = interaction.client.commands.get(interaction.commandName);
        const character = require('./javascript/run/character');
        
		try {
            interaction.message.delete();
            var dataList = interaction.customId.split("XPR") ;
            //switch(targetID){
                // Common
                //case "deleteMSG" : {interaction.message.delete(); break;}
                // Character Info Display 
                // [MAIN]
                //case "char_battle_talent" : {await character.run(interaction, interaction.customId.split("XPR")[1], targetID, "MAIN"); break;}
                //case "char_basic_talent" : {await character.run(interaction, interaction.customId.split("XPR")[1], targetID, "MAIN"); break;}
                //case "char_sof" : {await character.run(interaction, interaction.customId.split("XPR")[1], targetID, "MAIN"); break;}
                // [BATTLE_SKILL]
                //case "char_battle_talent_normal" : {await character.run(interaction, interaction.customId.split("XPR")[1], targetID, "BATTLE_SKILL"); break;}
                //case "char_battle_talent_element" : {await character.run(interaction, interaction.customId.split("XPR")[1], targetID, "BATTLE_SKILL"); break;}
                //case "char_battle_talent_burst" : {await character.run(interaction, interaction.customId.split("XPR")[1], targetID, "BATTLE_SKILL"); break;}
            
            //}
            await character.run(interaction, dataList);
            
        } catch (error) {
            console.error(error);
        }
    }
});

async function char_list_load(){
    charList = [];
    fs.readFile("./rss/db/char/char_list.json" , "utf-8", async (err, jsonString) => {
        // Error MSG
        if(err){
            console.log("ERR : "+err);
        } else {
            try{
                const json = JSON.parse(jsonString);
                for(var x = 0 ; x < Object.keys(json).length ; x++){
                    charList.push(json[x].name);
                }
            } catch (err) {
                // Error MSG
                console.log("ERR : "+err);
            }
        }
    });
}

async function weapon_list_load(){
    weaponList = [];
    fs.readFile("./rss/db/weapons/weapon_list.json" , "utf-8", async (err, jsonString) => {
        // Error MSG
        if(err){
            console.log("ERR : "+err);
        } else {
            try{
                const json = JSON.parse(jsonString);
                for(var x = 0 ; x < Object.keys(json).length ; x++){
                    weaponList.push(json[x].name);
                }
            } catch (err) {
                // Error MSG
                console.log("ERR : "+err);
            }
        }
    });
}

async function art_list_load(){
    artList = [];
    fs.readFile("./rss/db/artifacts/artifact_list.json" , "utf-8", async (err, jsonString) => {
        // Error MSG
        if(err){
            console.log("ERR : "+err);
        } else {
            try{
                const json = JSON.parse(jsonString);
                for(var x = 0 ; x < Object.keys(json).length ; x++){
                    artList.push(json[x].name);
                }
            } catch (err) {
                // Error MSG
                console.log("ERR : "+err);
            }
        }
    });
}

async function tcg_list_load(){
    tcgList = [];
    fs.readFile("./rss/db/tcg/tcg_list.json" , "utf-8", async (err, jsonString) => {
        // Error MSG
        if(err){
            console.log("ERR : "+err);
        } else {
            try{
                const json = JSON.parse(jsonString);
                for(var x = 0 ; x < Object.keys(json).length ; x++){
                    tcgList.push(json[x].name);
                }
            } catch (err) {
                // Error MSG
                console.log("ERR : "+err);
            }
        }
    });
}

async function registCommand(){
    //https://hackmd.io/@winsonOTP/discord-js-v14-ep5-1

    /**
     * 要製作一個新的指令之前，第一步便是構想指令的大致架構，在此分為以下五項：
     ．指令名稱
    ．指令說明
    ．指令用途
    ．回應內容
    ．其他功能
    前兩項是在輸入斜線 (/) 時使用者會看到的資訊，通常會讓使用者對於指令的用途和用法一目了然。
    而第三～五項是協助您設計指令的程式，讓您有明確的方向製作並供使用者使用。
    */

    //指令註冊--斜線表
    const commands = [
        COMMAND.help,
        COMMAND.data,
        //COMMAND.search,
        COMMAND.koori_asai
    ];
    const rest = new REST({ version: '10' }).setToken(TOKEN);
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');

        //指令註冊--功能  
        client.commands = new Collection();
        client.commands.set(COMMAND.help.name, COMMAND);
        client.commands.set(COMMAND.data.name, COMMAND);
        //client.commands.set(COMMAND.search.name, COMMAND);
        client.commands.set(COMMAND.koori_asai.name, COMMAND);
    } catch (error) {
        console.error(error);
    }
}

function msToHMS(ms) {
    let sec = ms / 1000; //將毫秒轉換為秒
    const days = parseInt( sec / 86400);
    sec = sec % 86400; //去除已轉換為天的秒
    const hours = parseInt( sec / 3600 ); //將可以轉為小時的秒轉換為小時
    sec = sec % 3600; //去除已轉換為小時的秒
    const minutes = parseInt( sec / 60 ); //將可以轉為分鐘的秒轉換為分鐘
    sec = sec % 60; //去除已轉換為分鐘的秒
    const seconds = parseInt(sec)
    
    return(`${days}d ${hours}:${minutes}:${~~(seconds)}`); //回傳轉換後的結果，秒數進行四捨五入
}

client.login(TOKEN);