const { Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } = require('discord.js');
const fs = require('fs');
var lang = require('../lang/zh-TW')
var langName = "zh-TW"
var style = require('../style')
var item_rss = require("../itemRSS")
const TurndownService = require('turndown');
const ABS_PATH = require("../../private").ABS_PATH
const BOT_ENV  = require("../../private").BOT_ENV
const path = require("path")

var interaction = null;
var returnFile = "";
var returnFileName = "";

const turndownService = new TurndownService();

var lastItemName = "";

// [MAIN]
const MAIN = "MAIN";
const BATTLE_TALENT = "BATTLE_TALENT";
const BASIC_TALENT = "BASIC_TALENT";
const SOF_P1 = "SOF_P1";
const SOF_P2 = "SOF_P2";
const TEAM_ADVICE = "TEAM_ADVICE";

// [BATTLE_TALENT]
const BATTLE_TALENT_NORMAL = "BATTLE_TALENT_NORMAL";
const BATTLE_TALENT_ELEMENT = "BATTLE_TALENT_ELEMENT";
const BATTLE_TALENT_FINAL = "BATTLE_TALENT_FINAL";
const BATTLE_TALENT_OTHER = "BATTLE_TALENT_OTHER";


const ADD = "ADD"
const DEL = "DEL"

var isOtherSkillExist = false;


// For language, pls make a SQL database ASAP
exports.run = async function(interactionRoot, dataList){
    /*
    dataList :
    [0]       : itemName
    [1]...[n] : position (no duplicate) 
    this will look like a stack, which pop top item when user back to previous
    backID    : Previous page
    thisID    : This page (Page that u will see after pressed button)
    */
    var len      = dataList.length;
    var itemName = dataList[0];
    var backID   = (len > 2 ? dataList[len-2] : MAIN);
    var thisID   = (len > 2 ? dataList[len-1] : MAIN);

    var interaction = interactionRoot;
    var isFirstBack = false;

    console.log(dataList);

    var paths = ABS_PATH+"/rss/db/char/"+new String(langName).replace("zh-TW", "zh-HK")+"/"+new String(itemName).replace(" ","_")+".json"
    
    if(fs.existsSync(paths)){
        var jsonString = fs.readFileSync(paths, "utf-8");
        returnFile = ABS_PATH+new String(item_rss.getCharByName(itemName)[3]) ;
        returnFileName = new String(item_rss.getCharByName(itemName)[3]).replace(/^.*[\\\/]/, '');
        lastItemName = itemName;

        await interaction.reply({ embeds: [JsonStrToEmbed(jsonString, thisID)], files : [returnFile], components: [getButtonByTag(dataList, itemName, thisID, backID)]}) ;
        
    }else{
        await interaction.reply({ content: `【${item_rss.getCharByName(itemName)[1]}】 : `+lang.none_info, fetchReply: true }) ; //fetchReply : 告訴API我們將會對這個指令做出進一步的回應
    }
}

exports.getLastItemName = function(){
  return lastItemName;
}

function JsonStrToEmbed(str, thisID){
    try{
        const json = JSON.parse(str)

        if(json["battle_talent"]["other_name"] !== undefined){isOtherSkillExist = true}else{isOtherSkillExist = false}

        var star = (json["rare"] === 4) ? "⭐⭐⭐⭐" : "⭐⭐⭐⭐⭐"

        var embed = new EmbedBuilder()
        .setColor(item_rss.getElementByName(json["element"])[2])
        .setTitle(
            "**"+item_rss.getCharByName(json["name"])[1]+"**  "+
            item_rss.getElementByName(json["element"])[0]+ "  "+
            star
        )
        .setThumbnail("attachment://"+returnFileName)
        .setFields(
            {
              name: "🗡️ "+lang.weapon,
              value: item_rss.getWeaponTypeIMG(json["weapon"])[0],
              inline: true
            },
            {
              name: "🗺️ "+lang.district,
              value: item_rss.getLocaleName(json["area"]),
              inline: true
            },
            {
              name: "🎂 "+lang.birth,
              value: item_rss.getLocaleBirth(json["birth"], false),
              inline: true
            },
            {
            name: "**"+json["nick"]+"**",
            value: json["desc"]
            }
        );

        if(new String(thisID).includes(BATTLE_TALENT)){
          if(thisID === BATTLE_TALENT){
            embed.addFields(
              {
                name : "\n",
                value:"⚔️"+lang.battle_talent+"\n"+
                      "**"+"1️⃣ "+lang.noraml_atk+" : "+json["battle_talent"]["normal_name"]+"\n"+
                           "2️⃣ "+lang.element_atk+" : "+ json["battle_talent"]["element_name"]+"\n"+
                           "3️⃣ "+lang.final_atk+" : "+json["battle_talent"]["final_name"]+"\n"+
                           (json["battle_talent"]["other_name"] === undefined ? "" : "4️⃣ "+lang.other_title+" : "+json["battle_talent"]["other_name"])+"**"
              }
            );
          }

          if(thisID === BATTLE_TALENT_NORMAL){
            embed.addFields(
              {
                name : "\n",
                value:"⚔️"+lang.battle_talent
              },
              {
                name: "1️⃣ "+lang.noraml_atk+" : "+json["battle_talent"]["normal_name"],
                value: lang.noraml_atk+" : "+ json["battle_talent"]["normal_desc1"] + "\n" + 
                        lang.charged_atk + " : "+ json["battle_talent"]["normal_desc2"] + "\n" + 
                        lang.plunging_atk + " : "+ json["battle_talent"]["normal_desc3"]
              }
            )
          }
          if(thisID === BATTLE_TALENT_ELEMENT){
            embed.addFields(
              {
                name: "2️⃣ "+lang.element_atk+" : "+ json["battle_talent"]["element_name"],
                value: turndownService.turndown(json["battle_talent"]["element_desc"])
              }
            )
          }
          if(thisID === BATTLE_TALENT_FINAL){
            embed.addFields(
              {
                name: "3️⃣ "+lang.final_atk+" : "+json["battle_talent"]["final_name"],
                value: turndownService.turndown(json["battle_talent"]["final_desc"])
              }
            )
          }
          if(thisID === BATTLE_TALENT_OTHER){
            embed.addFields({
              name: "4️⃣ "+lang.other_title+" : "+isUndefinded(json["battle_talent"]["other_name"]),
              value: turndownService.turndown(isUndefinded(json["battle_talent"]["other_desc"]))+" "
            })
          }
        }

        if(thisID === BASIC_TALENT){
          embed.addFields(
            {
                name : "\n",
              value: "👶"+lang.basic_talent
            },
            {
              name: "1️⃣ "+lang.asc1_unlock+" : "+isUndefinded(json["basic_talent"]["talent1_name"]),
              value: turndownService.turndown(isUndefinded(json["basic_talent"]["talent1_desc"]))+" "
            },
            {
              name: "2️⃣ "+lang.asc4_unlock+" : "+ isUndefinded(json["basic_talent"]["talent2_name"]),
              value: turndownService.turndown(isUndefinded(json["basic_talent"]["talent2_desc"]))+" "
            }
          )

          if(json["basic_talent"]["talent3_name"] !== undefined){
            embed.addFields({
                name: "3️⃣ "+lang.asc0_unlock+" : "+isUndefinded(json["basic_talent"]["talent3_name"]),
                value: turndownService.turndown(isUndefinded(json["basic_talent"]["talent3_desc"]))+" "
            })
          }
        }

        if(thisID === SOF_P1){
          embed.addFields(
            {
              name: "\n",
              value: "✡️ "+lang.sof
            },
            {
              name: "1️⃣ "+lang.sof1+" : "+json["sof"]["sof1_name"],
              value: json["sof"]["sof1_desc"]+" "
            },
            {
              name: "2️⃣ "+lang.sof2+" : "+json["sof"]["sof2_name"],
              value: json["sof"]["sof2_desc"]+" "
            },
            {
              name: "3️⃣ "+lang.sof3+" : "+json["sof"]["sof3_name"],
              value: json["sof"]["sof3_desc"]+" "
            }
          )
        }
        if(thisID === SOF_P2){
          embed.addFields(
            {
              name: "4️⃣ "+lang.sof4+" : "+json["sof"]["sof4_name"],
              value: json["sof"]["sof4_desc"]+" "
            },
            {
              name: "5️⃣ "+lang.sof5+" : "+json["sof"]["sof5_name"],
              value: json["sof"]["sof5_desc"]+" "
            },
            {
              name: "6️⃣ "+lang.sof6+" : "+json["sof"]["sof6_name"],
              value: json["sof"]["sof6_desc"]+" "
            }
          )
        }

        return embed;
        

    } catch (err) {
        // Error MSG
        console.log("ERR2 : ");
        console.log(err);

        return new EmbedBuilder()
        .setColor(style.embedColor)
        .setTitle("ERROR")
        .setDescription("new String(err)");
    }
}

function getButtonByTag(dataList, itemName, thisID, backID){
  var buttons = new ActionRowBuilder();

  if(thisID === MAIN){
    buttons.addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT, ADD))
        .setEmoji("⚔️")
        .setLabel(lang.battle_talent)
        .setStyle(ButtonStyle.Secondary),
    )
    .addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, BASIC_TALENT, ADD))
        .setEmoji("👶")
        .setLabel(lang.basic_talent)
        .setStyle(ButtonStyle.Secondary),
    )
    .addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, SOF_P1, ADD))
        .setEmoji("✡️")
        .setLabel(lang.sof)
        .setStyle(ButtonStyle.Secondary),
    )
    .addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, TEAM_ADVICE, ADD))
        .setEmoji("👥")
        .setLabel(lang.team_advice)
        .setStyle(ButtonStyle.Secondary),
    )
  }

  if(thisID === BATTLE_TALENT){
    buttons.addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_NORMAL, ADD))
        .setEmoji("1️⃣")
        .setLabel(lang.noraml_atk)
        .setStyle(ButtonStyle.Secondary),
    )
    .addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_ELEMENT, ADD))
        .setEmoji("2️⃣")
        .setLabel(lang.element_atk)
        .setStyle(ButtonStyle.Secondary),
    )
    .addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_FINAL, ADD))
        .setEmoji("3️⃣")
        .setLabel(lang.final_atk)
        .setStyle(ButtonStyle.Secondary),
    )
    if(isOtherSkillExist){
      buttons.addComponents(
        new ButtonBuilder()
          .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_OTHER, ADD))
          .setEmoji("4️⃣")
          .setLabel(lang.other_title)
          .setStyle(ButtonStyle.Secondary),
      )
    }
  }
  
  if(thisID === BASIC_TALENT){
    // NOTHING NEED TO ADD
  }

  if(thisID === SOF_P1){
    buttons.addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, SOF_P2, ADD))
        .setEmoji("🔽")
        .setLabel("下一頁 Next")
        .setStyle(ButtonStyle.Secondary),
    )
  }else if(thisID === SOF_P2){
    buttons.addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, SOF_P1, ADD))
        .setEmoji("🔼")
        .setLabel("上一頁 Previous")
        .setStyle(ButtonStyle.Secondary),
    )
  }

  // Back ID
  if(backID.includes(BATTLE_TALENT)){
    if(thisID !== BATTLE_TALENT_NORMAL){
      buttons.addComponents(
        new ButtonBuilder()
          .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_NORMAL, ADD))
          .setEmoji("1️⃣")
          .setLabel(lang.noraml_atk)
          .setStyle(ButtonStyle.Secondary),
      )
    }
    
    if(thisID !== BATTLE_TALENT_ELEMENT){
      buttons.addComponents(
        new ButtonBuilder()
          .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_ELEMENT, ADD))
          .setEmoji("2️⃣")
          .setLabel(lang.element_atk)
          .setStyle(ButtonStyle.Secondary),
      )
    }
      
    if(thisID !== BATTLE_TALENT_FINAL){
      buttons.addComponents(
        new ButtonBuilder()
          .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_FINAL, ADD))
          .setEmoji("3️⃣")
          .setLabel(lang.final_atk)
          .setStyle(ButtonStyle.Secondary),
      )
    }
      
    if(thisID !== BATTLE_TALENT_OTHER && isOtherSkillExist){
      buttons.addComponents(
        new ButtonBuilder()
          .setCustomId(arrToStr(itemName, dataList, BATTLE_TALENT_OTHER, ADD))
          .setEmoji("4️⃣")
          .setLabel(lang.other_title)
          .setStyle(ButtonStyle.Secondary),
      )
    }
    
  }

  if(thisID !== MAIN){
    buttons.addComponents(
      new ButtonBuilder()
        .setCustomId(arrToStr(itemName, dataList, thisID, DEL))
        .setEmoji("↩️")
        .setLabel("返回 Back")
        .setStyle(ButtonStyle.Secondary),
    )
  }

  /**
   * if(buttons.components.length < 5 && BOT_ENV !== "RELEASE"){
    buttons.addComponents(
      new ButtonBuilder()
        .setCustomId('deleteMSG'+"XPR"+itemName+"XPR"+backID)
        .setEmoji("🗑️")
        .setLabel("刪除 Delete")
        .setStyle(ButtonStyle.Danger),
    )
  }
   */


  return buttons;
}

function isUndefinded(value){
    if(value === undefined){
        return lang.obtain_no;
    }
    return value;
}

function arrToStr(itemName, arr, pageID, command){
  var str = itemName
  for(var i = 1; i < arr.length ; i++){
    str = str + "XPR" + arr[i]
  }

  if(command === ADD){
    if(!str.includes(pageID)){
      str = str + "XPR" + pageID;
    }else{
      str = str.replace("XPR"+pageID, "");
      str = str + "XPR" + pageID;
    }
  }else if (command === DEL){
    if(str.includes(pageID)){
      str = str.replace("XPR"+pageID, "");
    }    
  }
  return str;
}