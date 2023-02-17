const { Client,Collection, GatewayIntentBits, ActivityType , Partials, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var lang = require('../lang/zh-TW')
var langName = "zh-TW"
var style = require('../style')
var item_rss = require("../itemRSS")
const global_delay = 100
const CODE_ERROR = "CODE_ERROR";
const USER_INPUT = "USER_INPUT";

exports.global_delay = global_delay;
exports.CODE_ERROR = CODE_ERROR;
exports.USER_INPUT = USER_INPUT;

/**
 * @param {(import('discord.js').Interaction)|(Client)} interaction
 * @param {Error} errBase
 * @param {String} type
 * @param {String} redoCommandID
 * @param {String} redoCommandStr
 */
exports.run = function (interaction, errBase, type, redoCommandID, redoCommandStr){
	if(errBase !== undefined && errBase !== null && errBase !== ""){
        err = "NULL"
        if(typeof errBase === String){
            err = errBase;
        }else if (typeof errBase === Error){
            err = errBase.name+"\n\n"+errBase.message+"\n-----\n"+errBase.stack
        }else{
            err = new String(errBase)
        }

        if(type === CODE_ERROR){
            var embedForVoc = new EmbedBuilder()
            .setColor(style.embedColor)
            .setTitle("冰瀬，不准説壞話！【錯誤報告】 ("+new Date().getTime()+")")
            .setDescription("```"+err+"```");
    
            var embedForChannel = new EmbedBuilder()
            .setColor(style.embedColor)
            .setTitle("冰瀬，不准説壞話！【錯誤報告】 ("+new Date().getTime()+")")
            .setDescription("好啦，相信你應該看不懂這些錯誤堆棧了。欸欸欸別怕，錯誤報告已轉發給芷冰了，等一下應該就會修復了。\n"
                            +"```"+err+"```"
            );

            if(typeof interaction === Client){
                interaction.users.cache.get('417665898548166678').send({embeds: [embedForVoc]});
                interaction.channels.cache.get(interaction.channelId).send({embeds: [embedForChannel]});
            }else{
                interaction.client.users.cache.get('417665898548166678').send({embeds: [embedForVoc]});
                interaction.client.channels.cache.get(interaction.channelId).send({embeds: [embedForChannel]});
            }
        
        }else if (type === USER_INPUT){
            // User input error, i.e. /game backpacks "" <<-- Missed value
            var embedForChannel = new EmbedBuilder()
            .setColor(style.embedColor)
            .setTitle("欸？指令好像差了一點東西誒")
            .setDescription("```"+err+"```\n"+"不如重新試試 <"+redoCommandStr+":"+redoCommandID+">"
            );

            if(typeof interaction === Client){
                interaction.channels.cache.get(interaction.channelId).send({embeds: [embedForChannel]});
            }else{
                interaction.deferReply()
                interaction.deleteReply()
                interaction.client.channels.cache.get(interaction.channelId).send({embeds: [embedForChannel]});
            }
        }
	}
}