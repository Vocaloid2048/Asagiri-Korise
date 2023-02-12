const { Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } = require('discord.js');
const fs = require('fs');
var lang = require('../lang/zh-TW')
var langName = "zh-TW"
var style = require('../style')
var item_rss = require("../itemRSS")
const TurndownService = require('turndown');
const { data } = require('../command');
const ABS_PATH = require("../../private").ABS_PATH

exports.SELECT_ELEMENT = 101;
exports.SELECT_WEAPON = 102;
exports.SELECT_RARE = 103;
exports.SELECT_RELEASED = 104;
exports.SELECT_DICETYPE = 105;
exports.SELECT_SUBTYPE = 106;

const SELECT_ELEMENT_TAG = lang.elements;
const SELECT_WEAPON_TAG = lang.weapon;
const SELECT_RARE_TAG = lang.rarity;
const SELECT_RELEASED_TAG = lang.release_state;
const SELECT_DICETYPE_TAG = "DiceType";
const SELECT_SUBTYPE_TAG = "SubType";

const list_title = [SELECT_ELEMENT_TAG, SELECT_WEAPON_TAG, SELECT_RARE_TAG, SELECT_DICETYPE_TAG, SELECT_SUBTYPE_TAG, SELECT_RELEASED_TAG]
const list_element = [lang.element_Anemo, lang.element_Cryo, lang.element_Dendor, lang.element_Electro, lang.element_Geo, lang.element_Hydro, lang.element_Pyro];
const list_weapon = [lang.bow, lang.catalyst, lang.claymore, lang.sword, lang.polearm]
const list_rare_char = [4,5]
const list_rare = [1,2,3,4,5]
const list_release = [lang.unreleased, lang.released]
const list_dice_type = [lang.tcg_keyword_anemo, lang.tcg_keyword_cryo, lang.tcg_keyword_dendro, lang.tcg_keyword_electro, lang.tcg_keyword_geo, lang.tcg_keyword_hydro, lang.tcg_keyword_pyro, lang.tcg_keyword_unalignedelement, "Specific"]

const step_char = [this.SELECT_ELEMENT, this.SELECT_WEAPON, this.SELECT_RARE, this.SELECT_RELEASED];
const step_weapon = [this.SELECT_WEAPON, this.SELECT_RARE, this.SELECT_RELEASED];
const step_art = [this.SELECT_RARE, this.SELECT_RELEASED];
const step_tcg = [this.SELECT_DICETYPE, this.SELECT_SUBTYPE, this.SELECT_RELEASED];

var interaction = null;

exports.run = async function(interactionRoot, dataList, targetID){
    /*
    dataList : String list of saving temporate data, which includes :
    [0] : itemStep (E.g. "step_char+1")
    [1] : itemElements (combine by ",")
    [2] : itemWeapon (combine by ",")
    [3] : itemRarity
    [4] : itemReleased
    [5] : itemDiceType (combine by ",")
    [6] : itemSubType (combine by ",")
    */

    interaction = interactionRoot;

    if(dataList === null){
        dataList = [targetID+"+1","","","","","",""]
    }
    
    switch (targetID) {
            case "step_char" : embedGenerate(dataList,step_char); break;
            case "step_weapon" : embedGenerate(dataList,step_weapon); break;
            case "step_art" : embedGenerate(dataList,step_art); break;
            case "step_tcg" : embedGenerate(dataList,step_tcg); break;
        }
}

async function embedGenerate (dataList, partArr){
    const buttons = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('ok')
        .setLabel("OK")
        .setStyle(ButtonStyle.Primary),
    )
    .addComponents(
      new ButtonBuilder()
        .setCustomId('deleteMSG')
        .setLabel(lang.delete)  
        .setStyle(ButtonStyle.Danger),
    );

    var embed = new EmbedBuilder()
    .setColor(style.embedColor)
    .setTitle(
        "Search for ... "+list_title[partArr[new Number(dataList[0].split("+")[1])-1] - 101]
    );

    await interaction.reply({ embeds: [embed], components: [buttons]}) ;
}