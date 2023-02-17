const { Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events, User} = require('discord.js');
const fs = require('fs');
var lang = require('../lang/zh-TW')
var langName = "zh-TW"
var style = require('../style')
var item_rss = require("../itemRSS")
const TurndownService = require('turndown');
const ABS_PATH = require("../../private").ABS_PATH
const BOT_ENV  = require("../../private").BOT_ENV
const path = require("path")
const db = require('../../javascript/database');
const sqlite = require("sqlite3");
const sendError = require("../run/sendError")

var game_user_status = new sqlite.Database(ABS_PATH+"/db/game_user_status.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
var game_backpacks = new sqlite.Database(ABS_PATH+"/db/game_backpacks.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
var game_events = new sqlite.Database(ABS_PATH+"/db/game_events.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);

const global_delay = 100

exports.init = function(){
    game_user_status = new sqlite.Database(ABS_PATH+"/db/game_user_status.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    game_backpacks = new sqlite.Database(ABS_PATH+"/db/game_backpacks.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    game_events = new sqlite.Database(ABS_PATH+"/db/game_events.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    
	game_user_status.run('CREATE TABLE if not exists status(user_id TEXT, user_name TEXT, user_lvl INTEGER, user_exp INTEGER, remain_korise_ball INTEGER, remain_korise_coin INTEGER, init_unix TEXT)');
}

/**
 * 
 * @param {import('discord.js').Interaction} interaction 
 */
exports.run = async function (interaction){
    command = interaction.options.getSubcommand()
    switch(command){
        case "account" :{
            await account_print(interaction, interaction.user);
            break;
        }
        case "backpack" :{
            await backpack_print(interaction, interaction.user, 1);
            break;
        }
    }
}

exports.backpack_print = async function(interaction, user, page, choiceID){
    await backpack_print (interaction, user, page, choiceID);
}

/**
 * @param {import('discord.js').Interaction} interaction 
 * @param {User} user 
 * @param {String} item_type 
 * @param {Number} page 
 */
async function backpack_print (interaction, user, page, choiceID){
    init_user(interaction,user)
    setTimeout(() => {
        item_type = "CHAR"

        if(!interaction.isButton()){
            if(interaction.options.get("backpack_type") === undefined || interaction.options.get("backpack_type") === null || interaction.options.get("backpack_type") === "" || interaction.options.get("backpack_type") === " "){
                sendError.run(interaction, "/game backpack <'MISSED_VALUE'> <<--- ",sendError.USER_INPUT,interaction.commandId,"/game backpack"  )
                return;
            }else if(interaction.options.get("backpack_type").value !== undefined && interaction.options.get("backpack_type").value !== null){
                item_type = interaction.options.get("backpack_type").value
            }
        }else{
            item_type = choiceID;
        }
        cmd = "SELECT * FROM \""+user.id+"\" WHERE item_type = \""+item_type+"\""
        game_backpacks.all(cmd, (err,data) => {
            sendError.run(interaction, err,sendError.CODE_ERROR)
            dataStr = ""
            for(var x = 20*(page-1); (x < 20*page) && (x < data.length); x++){
                if(data !== undefined){
                    if(data[x].item_name !== undefined && data[x].item_count !== undefined){
                        // Display items
                        dataStr = dataStr + data[x].item_name + " : " + data[x].item_count+"\n";
                    }
                }
            }
            if(dataStr === "") {dataStr = "空空如也 EMPTY"}

            var result_embed = new EmbedBuilder()
            .setColor(style.embedColor)
            .setTitle(user.username+"的背包清單")
            .setDescription(
                dataStr
            );

            var buttons = new ActionRowBuilder();
            if(page > 1){
                buttons.addComponents(
                    new ButtonBuilder()
                      .setCustomId("BACKPACK.class"+"XPR"+"game_page"+"XPR"+(page-1)+"XPR"+item_type)
                      .setEmoji("🔼")
                      .setLabel("上一頁 Previous")
                      .setStyle(ButtonStyle.Secondary),
                  )
              }
            if(data.length - 20*page > 0){
                buttons.addComponents(
                    new ButtonBuilder()
                      .setCustomId("BACKPACK.class"+"XPR"+"game_page"+"XPR"+(page+1)+"XPR"+item_type)
                      .setEmoji("🔽")
                      .setLabel("下一頁 Next")
                      .setStyle(ButtonStyle.Secondary),
                  )
            }

            if(buttons.components.length > 0){
                interaction.reply({ embeds: [result_embed], components:[buttons]})
            }else{
                interaction.reply({ embeds: [result_embed]})
            }
        });
    }, global_delay);

}

exports.account_print = async function(interaction, user){
    await account_print (interaction, user);
}

/**
 * @param {import('discord.js').Interaction} interaction 
 * @param {User} user
 */
async function account_print (interaction, user){
    init_user(interaction, user);
    
    setTimeout(() => {
        cmd = "SELECT * FROM status WHERE user_id = \""+user.id+"\""
        game_user_status.get(cmd, (err,data) => {
            sendError.run(interaction, err,sendError.CODE_ERROR)

            var result_embed = new EmbedBuilder()
            .setColor(style.embedColor)
            .setTitle(data.user_name+"的帳戶清單")
            .setDescription(
                "等級："+data.user_lvl+"\n"+
                "經驗："+progressBar(data.user_exp, 100*data.user_lvl^1.2)+"\n"
            );

            interaction.reply({ embeds: [result_embed]});
        });
    }, global_delay);
}


/**
 * @param {import('discord.js').Interaction} interaction
 * @param {User} user
 */
async function init_user(interaction, user){
    return new Promise((res, rej) =>{
        cmd = "SELECT COUNT(*) AS item FROM status WHERE user_id = \""+user.id+"\""
        game_user_status.get(cmd, async (err,count) => {
            sendError.run(interaction, err,sendError.CODE_ERROR)
            if(count.item < 1){
                // User status
                game_user_status.run(
                    "INSERT INTO status (user_id, user_name, user_lvl, user_exp, remain_korise_ball, remain_korise_coin, init_unix) VALUES("
                    +"\""+user.id+"\""+","
                    +"\""+user.username+"\","
                    +"1"+","
                    +"0"+","
                    +"20"+","
                    +"10000"+","
                    +"\""+new Date().getTime()+"\""+")"
                );
    
                // Backpack
                game_backpacks.run(
                    "CREATE TABLE if not exists "+"\""+user.id+"\""+" ( item_id TEXT, item_type TEXT, item_name TEXT, item_count INTEGER, item_rare INTEGER, item_lvl INTEGER, item_exp INTEGER, item_equipper TEXT);"
                );
                // Game event
                // NOT DONE
    
                var result_embed = new EmbedBuilder()
                    .setColor(style.embedColor)
                    .setTitle("帳戶初始化")
                    .setDescription(
                        "<@"+user.id+"> "+"冰瀬已經幫你自動完成帳戶註冊了，稍後可以輸入 `/game account` 查看帳戶狀態哦~"
                    );
    
                interaction.client.channels.cache.get(interaction.channelId).send({embeds: [result_embed]});
                res(true)
            }else{
                res(true)
            }
        });
    })
}

function progressBar(curr, max){
    const progress_max_block = 10
    var int_progress = Math.trunc((curr/max)*progress_max_block)
    pb = ""
    for(var x = 0 ; x < progress_max_block ; x++){
    
        if(x < int_progress){
            pb = pb + "🟦"
        }else{
            pb = pb + "⬛"
        }
    }
    pb = pb+" ["+Math.trunc((curr/max)*100)+"%]"
    return pb;
}