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

    var paths = ABS_PATH+"/rss/db/tcg/"+new String(langName).replace("zh-TW", "zh-HK")+"/"+new String(itemName).toLowerCase().replaceAll(" ","").replaceAll("-","").replaceAll("'","")+".json"
    
    if(fs.existsSync(paths)){
        var jsonString = fs.readFileSync(paths, "utf-8");
        returnFile = ABS_PATH+new String(item_rss.getTCGByName(itemName)[0]) ;
        returnFileName = new String(item_rss.getTCGByName(itemName)[0]).replace(/^.*[\\\/]/, '');
        lastItemName = itemName;

        await interaction.reply({ embeds: [JsonStrToEmbed(jsonString, targetID)], files : [returnFile]}) ;
    }else{
        await interaction.reply({ content: `【${item_rss.getTCGByName(itemName)[1]}】 : `+lang.none_info, fetchReply: true }) ; //fetchReply : 告訴API我們將會對這個指令做出進一步的回應
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
          "**"+item_rss.getCharByName(json["name"])[1]+"**"
          )
        .setThumbnail("attachment://"+returnFileName);

        if(json["hp"] !== undefined){
          embed.addFields(
            {
              name: " ",
              value: "<:bg_tcg_hp:1069538778131218463> x "+json["hp"],
              inline: true
            }
          );
        }
        
        /*
        if(json["maxenergy"] !== undefined){
          embed.addFields(
            {
              name: " ",
              value: "<:bg_tcg_recharge:1069538781167890453> x "+json["maxenergy"],
              inline: true
            }
          );
        }
        */

        if(json["storytitle"] !== undefined){
          diceCostTmp = "";
          if (json["playcost"] !== undefined){
            diceCostTmp = item_rss.getTCGDice(json["playcost"][0]["costtype"])+" x "+json["playcost"][0]["count"]
          }

          embed.addFields(
            {
              name: "*"+json["storytitle"]+"*",
              value: json["storytext"] + diceCostTmp
            }
          );
        }

        if(json["source"] !== undefined){
          embed.addFields(
            {
              name: "> "+lang.obtain_way,
              value: "> "+json["source"]
            }
          );
        }

        if(json["skills"] !== undefined){
          for(var x = 0 ; x < json["skills"].length ; x ++){
            embed.addFields(
              {
                name: json["skills"][x]["name"]+" ( "+listToTCGDice(json["skills"][x]["playcost"])+" ) ",
                value: json["skills"][x]["description"]+"\n"
              }
            );
          }
        }



        return embed;
        

    } catch (err) {
        // Error MSG
        console.log("ERR2 : "+err);

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

function listToTCGDice(list){
  if(list === undefined) return "" ;
  tmp_str = "";
  for(var y = 0 ; y < list.length; y++){
    tmp_str = tmp_str + item_rss.getTCGDice(list[y]["costtype"]) +" x "+list[y]["count"];
    if(y + 1 < list.length){tmp_str = tmp_str + " ";}
  }
  return tmp_str;
}