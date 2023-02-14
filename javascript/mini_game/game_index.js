const { Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events} = require('discord.js');
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
const sqlite = require("sqlite3")

var game_user_status = new sqlite.Database(ABS_PATH+"/db/game_user_status.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
var game_backpacks = new sqlite.Database(ABS_PATH+"/db/game_backpacks.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
var game_events = new sqlite.Database(ABS_PATH+"/db/game_events.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);

exports.init = function(){
    game_user_status = new sqlite.Database(ABS_PATH+"/db/game_user_status.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    game_backpacks = new sqlite.Database(ABS_PATH+"/db/game_backpacks.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    game_events = new sqlite.Database(ABS_PATH+"/db/game_events.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    
	game_user_status.run('CREATE TABLE if not exists status(user_id TEXT, user_name TEXT, user_lvl INTEGER, user_exp INTEGER, remain_korise_ball INTEGER, remain_korise_coin INTEGER, init_unix TEXT)');
}

exports.run = async function (interaction){
    command = interaction.options.getSubcommand()
    switch(command){
        case "account" :
            await account_print(interaction, interaction.user)
    }
}

async function account_print (interaction, user){

    cmd = "SELECT COUNT(*) AS item FROM status WHERE user_id = \""+user.id+"\""
    game_user_status.get(cmd, async (err,count) => {
        sendError(err)
        if(count.item > 0){
            cmd = "SELECT * FROM status WHERE user_id = \""+user.id+"\""
            game_user_status.get(cmd, (err,data) => {
                var result_embed = new EmbedBuilder()
                .setColor(style.embedColor)
                .setTitle(data.user_name+"的帳戶清單")
                .setDescription(
                    "等級："+data.user_lvl+"\n"+
                    //"經驗："+progressBar(data.user_exp, 200)+"\n"+
                    "經驗："+progressBar(data.user_lvl, 200)+"\n"
                );
            interaction.reply({ embeds: [result_embed]})
            }) ;
        }else{
            game_user_status.run(
                "INSERT INTO status (user_id, user_name, user_lvl, user_exp, remain_korise_ball, remain_korise_coin, init_unix) VALUES("
                +"\""+user.id+"\""+","
                +"\""+user.username+"\","
                +"1"+","
                +"0"+","
                +"20"+","
                +"10000"+","
                +"\""+new Date().getTime()+"\""+")"
            )
            account_print(interaction, user)
        }
    })
}

function sendError (err){
	if(err !== undefined && err !== null && err !== "null" && err !== ""){
		var embedForVoc = new MessageEmbed()
		.setColor(dc_embed_color)
		.setTitle("胡桃，不准狂妄！【錯誤報告】")
		.setDescription("```"+err+"```");
		client.users.cache.get('417665898548166678').send(embedForVoc);

		var embedForChannel = new MessageEmbed()
		.setColor(dc_embed_color)
		.setTitle("胡桃，不准狂妄！")
		.setDescription("<@417665898548166678> : 好啦，相信你應該看不懂這些錯誤堆棧了。欸欸欸別怕，錯誤報告已轉發給芷冰了，等一下應該就會修復了。\n"
						+"```"+err+"```"
		);
		
		const channelX = client.channels.cache.find(x => x.id == onlineID);
		channelX.send(embedForChannel);
	}
}

function progressBar(curr, max){
    var int_progress = Math.trunc((curr/max)*20)
    pb = ""
    for(var x = 0 ; x < 20 ; x++){
        if(x < int_progress){
            pb = pb + "🟦"
        }else{
            pb = pb + "⬛"
        }
    }
    return pb;
}