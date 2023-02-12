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

    var paths = ABS_PATH+"/rss/db/artifacts/"+new String(langName).replace("zh-TW", "zh-HK")+"/"+new String(itemName).toLowerCase().replaceAll(" ","_")+".json"
    console.log(paths)
    if(fs.existsSync(paths)){
        console.log(paths)
        var jsonString = fs.readFileSync(paths, "utf-8");
        returnFile = ABS_PATH+new String(item_rss.getArtifactByName(itemName)[1]) ;
        returnFileName = new String(item_rss.getArtifactByName(itemName)[1]).replace(/^.*[\\\/]/, '');
        lastItemName = itemName;

        await interaction.reply({ embeds: [JsonStrToEmbed(jsonString, targetID)], files : [returnFile]}) ;
    }else{
        await interaction.reply({ content: `【${item_rss.getArtifactByName(itemName)[0]}】 : `+lang.none_info, fetchReply: true }) ; //fetchReply : 告訴API我們將會對這個指令做出進一步的回應
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
        .setTitle("**"+item_rss.getWeaponByName(json["name"])[0]+"**")
        .setThumbnail("attachment://"+returnFileName)
        .setFields(
            {
              name: lang.rarity,
              value: (getRare(json["rarity"]))
            }
        );

        if(json["1pc"] !== undefined){
            embed.addFields({
                name: lang.artifact_stat1,
                value: isUndefinded(item_rss.getObtainCode(json["1pc"])),
                inline: true
              });
        }
        if(json["2pc"] !== undefined){
            embed.addFields({
                name: lang.artifact_stat2,
                value: isUndefinded(item_rss.getObtainCode(json["2pc"])),
                inline: true
              });
        }
        if(json["4pc"] !== undefined){
            embed.addFields({
                name: lang.artifact_stat4,
                value: isUndefinded(item_rss.getObtainCode(json["4pc"]))
              });
        }

        if(json["flower"] !== undefined){
            embed.addFields({
                name: isUndefinded(json["flower"]["name"]),
                value: isUndefinded(json["flower"]["description"])
              });
        }
        if(json["plume"] !== undefined){
            embed.addFields({
                name: isUndefinded(json["plume"]["name"]),
                value: isUndefinded(json["plume"]["description"])
              });
        }
        if(json["sands"] !== undefined){
            embed.addFields({
                name: isUndefinded(json["sands"]["name"]),
                value: isUndefinded(json["sands"]["description"])
              });
        }
        if(json["goblet"] !== undefined){
            embed.addFields({
                name: isUndefinded(json["goblet"]["name"]),
                value: isUndefinded(json["goblet"]["description"])
              });
        }
        if(json["circlet"] !== undefined){
            embed.addFields({
                name: isUndefinded(json["circlet"]["name"]),
                value: isUndefinded(json["circlet"]["description"])
              });
        }

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

function getRare(item){
    console.log(item.length)
    if(item !== null && item !== undefined){
        tmp_str = ""
        for(var x = 0 ; x < item.length ; x++){
            console.log(item[x])
            tmp_str = tmp_str + ((item[x] === "1") ? "⭐" : (item[x] === "2") ? "⭐⭐" : (item[x] === "3") ? "⭐⭐⭐" : (item[x] === "4") ? "⭐⭐⭐⭐" : "⭐⭐⭐⭐⭐")
            if(x+1 < item.length){
                tmp_str = tmp_str + " / "
            }
        }
    }
    if(tmp_str === ""){
        tmp_str = lang.obtain_no;
    }
   return tmp_str
}