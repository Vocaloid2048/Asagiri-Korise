const { Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } = require('discord.js');
const fs = require('fs');
var lang = require('../lang/zh-TW')
var langName = "zh-TW"
var style = require('../style')
var item_rss = require("../itemRSS")
const TurndownService = require('turndown');
const ABS_PATH = require("../../private").ABS_PATH
const path = require("path")

var interaction = null;
var returnFile = "";
var returnFileName = "";

const turndownService = new TurndownService();

var lastItemName = "";


// For language, pls make a SQL database ASAP
exports.run = async function(interactionRoot, itemName, targetID){
    /*
    /character <itemName>
        <itemName> : name of character, support locale
    */
    interaction = interactionRoot;

    var paths = ABS_PATH+"/rss/db/weapons/"+new String(langName).replace("zh-TW", "zh-HK")+"/"+new String(itemName).replace(" ","_")+".json"
    
    console.log(paths)
    if(fs.existsSync(paths)){
        console.log(paths)
        var jsonString = fs.readFileSync(paths, "utf-8");
        returnFile = ABS_PATH+new String(item_rss.getWeaponByName(itemName)[1]) ;
        returnFileName = new String(item_rss.getWeaponByName(itemName)[1]).replace(/^.*[\\\/]/, '');
        lastItemName = itemName;

        console.log(jsonString)

        await interaction.reply({ embeds: [JsonStrToEmbed(jsonString, targetID)], files : [returnFile]}) ;
    }else{
        await interaction.reply({ content: `【${item_rss.getWeaponByName(itemName)[0]}】 : `+lang.none_info, fetchReply: true }) ; //fetchReply : 告訴API我們將會對這個指令做出進一步的回應
    }
}

exports.getLastItemName = function(){
  return lastItemName;
}

function JsonStrToEmbed(str, targetID){
    try{
        const json = JSON.parse(str)

        var embed = new EmbedBuilder()
        .setColor(style.embedColor)
        .setTitle(
            item_rss.getWeaponTypeIMG(json["weapon"])[0]+ " "+
            "**"+item_rss.getWeaponByName(json["name"])[0]+"**")
        .setThumbnail("attachment://"+returnFileName)
        .setFields(
            {
              name: lang.rarity,
              value: ((json["rare"] === 1) ? "⭐" : (json["rare"] === 2) ? "⭐⭐" : (json["rare"] === 3) ? "⭐⭐⭐" : (json["rare"] === 4) ? "⭐⭐⭐⭐" : "⭐⭐⭐⭐⭐"),
              inline: true
            },
            {
              name: lang.obtain_way,
              value: item_rss.getObtainCode(json["obtain_way"]),
              inline: true
            },
            {
            name: "**"+json["skill_name"]+"**",
            value: json["skill_desc"]
            },
            {
            name: " ",
            value: "*"+json["desc"]+"*"
            }
        );

        return embed;
        

    } catch (err) {
        // Error MSG
        console.log(err);

        return new EmbedBuilder()
        .setColor(style.embedColor)
        .setTitle("ERROR")
        .setDescription("new String(err)");
    }
}

function isUndefinded(value){
    if(value === undefined){
        return lang.obtain_no;
    }
    return value;
}