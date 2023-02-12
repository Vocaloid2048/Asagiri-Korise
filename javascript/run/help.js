const { Client, EmbedBuilder } = require('discord.js');
const style = require("../style")

const help_InformationDisplay = 
        "**Information Display**"+"\n"+
        " `/data <itemType> <name> <parts_of_data>`"+"\n"+
        "> **Display information** from database :"+"\n"+
        "> <itemType> : [character, weapon, artifact, tcg]"+"\n"+
        "> <name> : item's name (E.g. `Hu Tao`)"+"\n"+
        "> <parts_of_data> : [activeTalents, passiveTalents, constellation, team]"+"\n\n"+

        " `/search <itemType> <subType...> `"+"\n"+
        "> **Search** items by **TAGS** : "+"\n"+
        "> <itemType> : [character, weapon, artifact, tcg]"+"\n"+
        "> <subType...> : [element, weaponType, rarity, release_state, role, diceType, subType]"+"\n\n";

const help_Calculator = 
        "**Calculator**"+"\n"+
        " `/cal <asc> <char> <>`"+"\n"+
        "> **Calculate** ascension material cost"+"\n"+
        "> <sheet_name> : Name of the Ascension Sheet (Auto create if missed)"+"\n"+
        "> <itemType> : [character, weapon, artifact]"+"\n"+
        "> <info...> : [doLater]"+"\n\n";

const help_DailyHighlights = 
        "**Daily Highlights**"+"\n"+
        "`/highlights`"+"\n"+
        "> Display summary of today's highlights"+"\n\n"+

        "`/birthday <month> <day>`"+"\n"+
        "> Display who has **birthday"+"\n"+
        "> <month> : [now,01,02,...,11,12]"+"\n"+
        "> <day> : [now,01,02,...,30,31]"+"\n\n"+

        "`/character_asc <day_of_week>`"+"\n"+
        "> Display **Character Ascension Materials**"+"\n"+
        "> <day_of_week> : [Monday, Tuesday,..., Sunday]"+"\n\n"+

        "`/weapon_asc <day_of_week>`"+"\n"+
        "> Display **Weapon Ascension Materials**"+"\n"+
        "> <day_of_week> : [Monday, Tuesday,..., Sunday]"+"\n\n";

const help_OtherFunctions = 
        "**Other Functions**"+"\n"+
        "`/account setup <hoyoUID> <hoyoToken>`"+"\n"+
        "> Setup account for using dailyMemo"+"\n\n"+

        "`/account clean <dataType>`"+"\n"+
        "> Clean your data"+"\n"+
        "> <dataType> : [All, Calculator, dailyMemo]"+"\n\n"+

        "`/dailyMemo <account>`"+"\n"+
        "> Display your account's status (If you have already registed via `/account`)"+"\n"+
        "> <account> : Selection, E.g. `901546986 -- 屑狐`"+"\n\n"  ;      

var help_request_str = ""        

var help_embed = new EmbedBuilder()
	.setColor(style.embedColor)
	.setTitle("Helping List")
	.setThumbnail('attachment://app_ico_round.png')
	.setDescription(
        "Hi there, if you want to know more about this bot, please input `/bio`"+"\n\n"+
        help_request_str+
        "\n"
    );

exports.help_customize = function (TYPE){
    /*
    TYPE : integer between 0 and 4
        0 : ALL
        1 : Information Display
        2 : Calculator
        3 : Daily Highlights
        4 : Other Functions
    */
    help_request_str = ""
    if(TYPE == null){TYPE = 0;}
    switch(TYPE){
        case 0 : {help_request_str = help_InformationDisplay + help_Calculator + help_DailyHighlights + help_OtherFunctions; break; }
        case 1 : {help_request_str = help_InformationDisplay ; break; }
        case 2 : {help_request_str = help_Calculator; break; }
        case 3 : {help_request_str = help_DailyHighlights; break; }
        case 4 : {help_request_str = help_OtherFunctions; break; }
    }

    help_embed = new EmbedBuilder()
	.setColor(style.embedColor)
	.setTitle("Helping List")
	.setThumbnail('attachment://app_ico_round.png')
	.setDescription(
        "Hi there, if you want to know more about this bot, please input `/bio`"+"\n\n"+
        help_request_str+
        "\n"
    );
    exports.help_img_url = "./rss/bot/app_ico_round.png"     
    exports.help_embed = help_embed;
}

exports.help_img_url = "./rss/bot/app_ico_round.png";
exports.help_embed = help_embed;