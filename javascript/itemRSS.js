// INCLUDED 3.0 CHAR. => 20221003
// INCLUDED 3.1 CHAR. => 20221003
// INCLUDED 3.2 CHAR. => 20221210
// INCLUDED 3.3 CHAR. => 20221210
// INCLUDED 3.4 CHAR. => 20230117

/**Default init */
var lang = require("./lang/zh-TW");
var style = require("./style");
var langName = "zh-TW"
const fs = require('fs');
const color = require("./style")

var charBirthName = [
    "Wanderer","Thoma","Diona","Rosaria",
    "Alhaitham","Beidou","Sangonomiya Kokomi","Bennett",
    "Qiqi","Yaoyao","Shenhe","Jean","Noelle","Kamisato Ayato",
    "Aloy","Xiao","Yelan","Diluc",
    "Candace","Collei","Gorou","Yun Jin","Fischl",
    "Arataki Itto","Lisa","Venti","Yoimiya","Cyno","Raiden Shogun","Yae Miko","Kuki Shinobu",
    "Barbara","Kujou Sara","Hu Tao","Voc-夜芷冰","Tartaglia","Shikanoin Heizou","Klee","Yanfei",
    "Amber","Faruzan","Ningguang","Mona",
    "Diona","Razor","Albedo","Kamisato Ayaka",
    "Xingqiu","Xinyan","Sayu","Eula","Nahida","Kaedehara Kazuha",
    "Xiangling","Keqing","Sucrose","Kaeya",
    "Ganyu","Nilou","Layla","Dori","Tighnari","Zhongli"];
var charBirthDay = [
        3,9,18,24,
        11,14,22,29,
        3,6,10,14,21,26,
        4,17,20,30,
        3,8,18,21,27,
        1,6,9,21,23,26,27,28,
        5,14,15,19,20,24,27,28,
        10,20,26,31,
        7,9,13,28,
        9,16,19,25,27,29,
        2,20,26,30,
        2,3,19,21,29,31];
var charBirthMonth = [
        0,0,0,0,
        1,1,1,1,
        2,2,2,2,2,2,
        3,3,3,3,
        4,4,4,4,4,
        5,5,5,5,5,5,5,5,
        6,6,6,6,6,6,6,6,
        7,7,7,7,
        8,8,8,8,
        9,9,9,9,9,9,
        10,10,10,10,
        11,11,11,11,11,11];

exports.getLocaleName = function (str) {
    /** Area Name */
    if (str === "Mondstadt"){return lang.mondstadt;}
    else if (str === "Liyue"){return lang.liyue;}
    else if (str === "Inazuma"){return lang.inazuma;}
    else if (str === "Nora Fortis"){return lang.nora_fortis;}
    else if (str === "Snezhnaya"){return lang.snezhnaya;}
    else if (str === "Sumeru"){return lang.sumeru;}
    else if (str === "Fontaine"){return lang.fontaine;}
    else if (str === "Natlan"){return lang.natlan;}
    else if (str === "Another World"){return lang.another_world;}
    /** Char's Role Name*/
    else if (str === "Main_DPS"){return lang.main_dps;}
    else if (str === "Support_DPS"){return lang.support_dps;}
    else if (str === "Utility"){return lang.utility;}
    // add in 20220411
    else if (str === "N/A"){return lang.unknown;}
    /** Sex Name */
    else if (str === "Female"){return lang.female;}
    else if (str === "Male"){return lang.male;}
    else if (str === "SET_BY_PLAYER"){return lang.set_by_player;}
    else {return str}
}            

exports.getObtainCode = function (str){
    switch (str){
        case "N/A" : return lang.obtain_no;
        case "FORGE_MISSION_NMDBJ" : return lang.obtain_forge_mission_nmdbj;
        case "LIMITED_WISH" : return lang.obtain_limited_wish;
        case "WISH" : return lang.obtain_wish;
        case "FIRST_GIFT" : return lang.obtain_first_gift;
        case "SHOP" : return lang.obtain_shop;
        case "CHEST_SHOP" : return lang.obtain_chest_shop;
        case "FORGE" : return lang.obtain_forge;
        case "CHAT_YMDJY" : return lang.obtain_chat_ymdjy;
        case "BATTLEPASS" : return lang.obtain_battlepass;
        case "WISH_CHEST" : return lang.obtain_wish_chest;
        case "EVENT" : return lang.obtain_event;
        case "FORGE_EVENT" : return lang.obtain_forge_event;
        case "WISH_EVENT_GLYJYJG" : return lang.obtain_wish_event_glyjyjg;
        case "FORGE_YHBH" : return lang.obtain_forge_yhbh;
        case "CHEST" : return lang.obtain_chest;
        case "FORGE_HLDW" : return lang.obtain_forge_hldw;
        case "WISH_EVENT_HDBBHJYJJ" : return lang.obtain_wish_event_hdbbhjyjj;
        case "FORGE_TBMY" : return lang.obtain_forge_tbmy;
        case "FORGE_YLYSWS" : return lang.obtain_forge_ylysws;
        case "CHESR_MD" : return lang.obtain_chesr_md;
        case "PLAYSTATION_LOGIN" : return lang.obtain_playstation_login;
        case "FORGE_LVL10_SJGW" : return lang.obtain_forge_lvl10_sjgw;
        case "PLAYSTATION_SP_GIFT" : return lang.obtain_playstation_sp_gift;
        case "NPC_DCDYHW" : return lang.obtain_npc_dcdyhw;
        case "CHESR_LY" : return lang.obtain_chesr_ly;
        case "CHEST_GWK" : return lang.obtain_chest_gwk;
        default: return str;

    }
}

exports.getWeaponTypeIMG = function (str){
    if(str === "Bow" || str === lang.bow){return [lang.bow,"<:ico_bow:1069441784138170478>"];}
    else if(str === "Catalyst" || str === lang.catalyst){return [lang.catalyst, "<:ico_catalyst:1069441785983684638>"];}
    else if(str === "Claymore" || str === lang.claymore){return [lang.claymore,"<:ico_claymore:1069441791654367302>"];}
    else if(str === "Polearm" || str === lang.polearm){return [lang.polearm,"<:ico_polearm:1069441801229971518>"];}
    else if(str === "Sword" || str === lang.sword){return [lang.sword,"<:ico_sword:1069441806154088548>"];}
    else {return [lang.bow,"<:ico_bow:1069441784138170478>"];}
}
exports.getDistrictIMG = function (str){
    if(str === "Mondstadt"){return "/rss/bot/mondstadt_ico";}
    else if(str === "Liyue"){return "/rss/bot/liyue_ico";}
    else if(str === "Inazuma"){return "/rss/bot/inazuma_ico";}
    else if(str === "Sumeru"){return "/rss/bot/sumeru_ico";}
    else {return "/rss/bot/unknown";}
}

// add in 20220207
exports.getEnemyByName = function (str){
    switch (str){
        case "Pyro Slime" : return [lang.pyro_slime,"/rss/drawable/pyro_slime.png"];
        case "Large Pyro Slime" : return [lang.large_pyro_slime,"/rss/drawable/large_pyro_slime.png"];
        case "Electro Slime" : return [lang.electro_slime,"/rss/drawable/electro_slime.png"];
        case "Large Electro Slime" : return [lang.large_electro_slime,"/rss/drawable/large_electro_slime.png"];
        case "Mutant Electro Slime" : return [lang.mutant_electro_slime,"/rss/drawable/mutant_electro_slime.png"];
        case "Cryo Slime" : return [lang.cryo_slime,"/rss/drawable/cryo_slime.png"];
        case "Large Cryo Slime" : return [lang.large_cryo_slime,"/rss/drawable/large_cryo_slime.png"];
        case "Hydro Slime" : return [lang.hydro_slime,"/rss/drawable/hydro_slime.png"];
        case "Large Hydro Slime" : return [lang.large_hydro_slime,"/rss/drawable/large_hydro_slime.png"];
        case "Anemo Slime" : return [lang.anemo_slime,"/rss/drawable/anemo_slime.png"];
        case "Large Anemo Slime" : return [lang.large_anemo_slime,"/rss/drawable/large_anemo_slime.png"];
        case "Geo Slime" : return [lang.geo_slime,"/rss/drawable/geo_slime.png"];
        case "Large Geo Slime" : return [lang.large_geo_slime,"/rss/drawable/large_geo_slime.png"];
        case "Dendro Slime" : return [lang.dendro_slime,"/rss/drawable/dendro_slime.png"];
        case "Large Dendro Slime" : return [lang.large_dendro_slime,"/rss/drawable/large_dendro_slime.png"];
        case "Eye of the Storm" : return [lang.eye_of_the_storm,"/rss/drawable/eye_of_the_storm.png"];
        case "Pyro Hypostasis" : return [lang.pyro_hypostasis,"/rss/drawable/pyro_hypostasis.png"];
        case "Electro Hypostasis" : return [lang.electro_hypostasis,"/rss/drawable/electro_hypostasis.png"];
        case "Cryo Hypostasis" : return [lang.cryo_hypostasis,"/rss/drawable/cryo_hypostasis.png"];
        case "Hydro Hypostasis" : return [lang.hydro_hypostasis,"/rss/drawable/hydro_hypostasis.png"];
        case "Anemo Hypostasis" : return [lang.anemo_hypostasis,"/rss/drawable/anemo_hypostasis.png"];
        case "Geo Hypostasis" : return [lang.geo_hypostasis,"/rss/drawable/geo_hypostasis.png"];
        case "Oceanid" : return [lang.oceanid,"/rss/drawable/oceanid.png"];
        case "Hydro Specter" : return [lang.hydro_specter,"/rss/drawable/hydro_specter.png"];
        case "Geo Specter" : return [lang.geo_specter,"/rss/drawable/geo_specter.png"];
        case "Anemo Specter" : return [lang.anemo_specter,"/rss/drawable/anemo_specter.png"];
        case "Cryo Specter" : return [lang.cryo_specter,"/rss/drawable/cryo_specter.png"];
        case "Electro Specter" : return [lang.electro_specter,"/rss/drawable/electro_specter.png"];
        case "Pyro Specter" : return [lang.pyro_specter,"/rss/drawable/pyro_specter.png"];
        case "Thunder Manifestation" : return [lang.thunder_manifestation,"/rss/drawable/thunder_manifestation.png"];
        case "Hilichurl" : return [lang.hilichurl,"/rss/drawable/hilichurl.png"];
        case "Hilichurl Fighter" : return [lang.hilichurl_fighter,"/rss/drawable/hilichurl_fighter.png"];
        case "Wooden Shield Hilichurl Guard" : return [lang.wooden_shield_hilichurl_guard,"/rss/drawable/wooden_shield_hilichurl_guard.png"];
        case "Hilichurl Shooter" : return [lang.hilichurl_shooter,"/rss/drawable/hilichurl_shooter.png"];
        case "Pyro Hilichurl Shooter" : return [lang.pyro_hilichurl_shooter,"/rss/drawable/pyro_hilichurl_shooter.png"];
        case "Hilichurl Grenadier" : return [lang.hilichurl_grenadier,"/rss/drawable/hilichurl_grenadier.png"];
        case "Hilichurl Berserker" : return [lang.hilichurl_berserker,"/rss/drawable/hilichurl_berserker.png"];
        case "Cryo Hilichurl Shooter" : return [lang.cryo_hilichurl_shooter,"/rss/drawable/cryo_hilichurl_shooter.png"];
        case "Electro Hilichurl Shooter" : return [lang.electro_hilichurl_shooter,"/rss/drawable/electro_hilichurl_shooter.png"];
        case "Rock Shield Hilichurl Guard" : return [lang.rock_shield_hilichurl_guard,"/rss/drawable/rock_shield_hilichurl_guard.png"];
        case "Cryo Hilichurl Grenadier" : return [lang.cryo_hilichurl_grenadier,"/rss/drawable/cryo_hilichurl_grenadier.png"];
        case "Ice Shield Hilichurl Guard" : return [lang.ice_shield_hilichurl_guard,"/rss/drawable/ice_shield_hilichurl_guard.png"];
        case "Unusual Hilichurl" : return [lang.unusual_hilichurl,"/rss/drawable/unusual_hilichurl.png"];
        case "Electro Hilichurl Grenadier" : return [lang.electro_hilichurl_grenadier,"/rss/drawable/electro_hilichurl_grenadier.png"];
        case "Wooden Shieldwall Mitachurl" : return [lang.wooden_shieldwall_mitachurl,"/rss/drawable/wooden_shieldwall_mitachurl.png"];
        case "Blazing Axe Mitachurl" : return [lang.blazing_axe_mitachurl,"/rss/drawable/blazing_axe_mitachurl.png"];
        case "Rock Shieldwall Mitachurl" : return [lang.rock_shieldwall_mitachurl,"/rss/drawable/rock_shieldwall_mitachurl.png"];
        case "Frostarm Lawachurl" : return [lang.frostarm_lawachurl,"/rss/drawable/frostarm_lawachurl.png"];
        case "Stonehide Lawachurl" : return [lang.stonehide_lawachurl,"/rss/drawable/stonehide_lawachurl.png"];
        case "Thunderhelm Lawachurl" : return [lang.thunderhelm_lawachurl,"/rss/drawable/thunderhelm_lawachurl.png"];
        case "Ice Shieldwall Mitachurl" : return [lang.ice_shieldwall_mitachurl,"/rss/drawable/ice_shieldwall_mitachurl.png"];
        case "Crackling Axe Mitachurl" : return [lang.crackling_axe_mitachurl,"/rss/drawable/crackling_axe_mitachurl.png"];
        case "Hydro Samachurl" : return [lang.hydro_samachurl,"/rss/drawable/hydro_samachurl.png"];
        case "Dendro Samachurl" : return [lang.dendro_samachurl,"/rss/drawable/dendro_samachurl.png"];
        case "Anemo Samachurl" : return [lang.anemo_samachurl,"/rss/drawable/anemo_samachurl.png"];
        case "Geo Samachurl" : return [lang.geo_samachurl,"/rss/drawable/geo_samachurl.png"];
        case "Cryo Samachurl" : return [lang.cryo_samachurl,"/rss/drawable/cryo_samachurl.png"];
        case "Electro Samachurl" : return [lang.electro_samachurl,"/rss/drawable/electro_samachurl.png"];
        case "Pyro Abyss Mage" : return [lang.pyro_abyss_mage,"/rss/drawable/pyro_abyss_mage.png"];
        case "Cryo Abyss Mage" : return [lang.cryo_abyss_mage,"/rss/drawable/cryo_abyss_mage.png"];
        case "Hydro Abyss Mage" : return [lang.hydro_abyss_mage,"/rss/drawable/hydro_abyss_mage.png"];
        case "Electro Abyss Mage" : return [lang.electro_abyss_mage,"/rss/drawable/electro_abyss_mage.png"];
        case "Abyss Herald: Wicked Torrents" : return [lang.abyss_herald_wicked_torrents,"/rss/drawable/abyss_herald_wicked_torrents.png"];
        case "Abyss Lector: Violet Lightning" : return [lang.abyss_lector_violet_lightning,"/rss/drawable/abyss_lector_violet_lightning.png"];
        case "Abyss Lector: Fathomless Flames" : return [lang.abyss_lector_fathomless_flames,"/rss/drawable/abyss_lector_fathomless_flames.png"];
        case "Rockfond Rifthound Whelp" : return [lang.rockfond_rifthound_whelp,"/rss/drawable/rockfond_rifthound_whelp.png"];
        case "Thundercraven Rifthound Whelp" : return [lang.thundercraven_rifthound_whelp,"/rss/drawable/thundercraven_rifthound_whelp.png"];
        case "Rockfond Rifthound" : return [lang.rockfond_rifthound,"/rss/drawable/rockfond_rifthound.png"];
        case "Thundercraven Rifthound" : return [lang.thundercraven_rifthound,"/rss/drawable/thundercraven_rifthound.png"];
        case "Beginning : Golden Wolflord" : return [lang.beginning_golden_wolflord,"/rss/drawable/golden_wolflord.png"];
        case "Golden Wolflord" : return [lang.golden_wolflord,"/rss/drawable/golden_wolflord.png"];
        case "Head-Broken : Golden Wolflord" : return [lang.headbroken_golden_wolflord,"/rss/drawable/golden_wolflord.png"];
        case "Shadowy Husk: Standard Bearer" : return [lang.shadowy_husk_standard_bearer,"/rss/drawable/shadowy_husk_standard_bearer.png"];
        case "Shadowy Husk: Line Breaker" : return [lang.shadowy_husk_line_breaker,"/rss/drawable/shadowy_husk_line_breaker.png"];
        case "Shadowy Husk: Defender" : return [lang.shadowy_husk_defender,"/rss/drawable/shadowy_husk_defender.png"];
        case "Fatui Skirmisher - Cryogunner Legionnaire" : return [lang.fatui_skirmisher_cryogunner_legionnaire,"/rss/drawable/fatui_skirmisher_cryogunner_legionnaire.png"];
        case "Fatui Skirmisher - Hydrogunner Legionnaire" : return [lang.fatui_skirmisher_hydrogunner_legionnaire,"/rss/drawable/fatui_skirmisher_hydrogunner_legionnaire.png"];
        case "Fatui Skirmisher - Electrohammer Vanguard" : return [lang.fatui_skirmisher_electrohammer_vanguard,"/rss/drawable/fatui_skirmisher_electrohammer_vanguard.png"];
        case "Fatui Skirmisher - Geochanter Bracer" : return [lang.fatui_skirmisher_geochanter_bracer,"/rss/drawable/fatui_skirmisher_geochanter_bracer.png"];
        case "Fatui Skirmisher - Anemoboxer Vanguard" : return [lang.fatui_skirmisher_anemoboxer_vanguard,"/rss/drawable/fatui_skirmisher_anemoboxer_vanguard.png"];
        case "Fatui Skirmisher - Pyroslinger Bracer" : return [lang.fatui_skirmisher_pyroslinger_bracer,"/rss/drawable/fatui_skirmisher_pyroslinger_bracer.png"];
        case "Fatui Pyro Agent" : return [lang.fatui_pyro_agent,"/rss/drawable/fatui_pyro_agent.png"];
        case "Fatui Electro Cicin Mage" : return [lang.fatui_electro_cicin_mage,"/rss/drawable/fatui_electro_cicin_mage.png"];
        case "Fatui Cryo Cicin Mage" : return [lang.fatui_cryo_cicin_mage,"/rss/drawable/fatui_cryo_cicin_mage.png"];
        case "Mirror Maiden" : return [lang.mirror_maiden,"/rss/drawable/mirror_maiden.png"];
        case "Ruin Guard" : return [lang.ruin_guard,"/rss/drawable/ruin_guard.png"];
        case "Ruin Hunter" : return [lang.ruin_hunter,"/rss/drawable/ruin_hunter.png"];
        case "Ruin Grader" : return [lang.ruin_grader,"/rss/drawable/ruin_grader.png"];
        case "Ruin Cruiser" : return [lang.ruin_cruiser,"/rss/drawable/ruin_cruiser.png"];
        case "Ruin Destroyer" : return [lang.ruin_destroyer,"/rss/drawable/ruin_destroyer.png"];
        case "Ruin Defender" : return [lang.ruin_defender,"/rss/drawable/ruin_defender.png"];
        case "Ruin Scout" : return [lang.ruin_scout,"/rss/drawable/ruin_scout.png"];
        case "Perpetual Mechanical Array" : return [lang.perpetual_mechanical_array,"/rss/drawable/perpetual_mechanical_array.png"];
        case "Stunned Perpetual Mechanical Array" : return [lang.stunned_perpetual_mechanical_array,"/rss/drawable/perpetual_mechanical_array.png"];
        case "Treasure Hoarders - Liuliu" : return [lang.treasure_hoarders_liuliu,"/rss/drawable/treasure_hoarders_liuliu.png"];
        case "Treasure Hoarders - Scout" : return [lang.treasure_hoarders_scout,"/rss/drawable/treasure_hoarders_scout.png"];
        case "Treasure Hoarders: Pyro Potioneer" : return [lang.treasure_hoarders_pyro_potioneer,"/rss/drawable/treasure_hoarders_pyro_potioneer.png"];
        case "Treasure Hoarders: Hydro Potioneer" : return [lang.treasure_hoarders_hydro_potioneer,"/rss/drawable/treasure_hoarders_hydro_potioneer.png"];
        case "Treasure Hoarders: Electro Potioneer" : return [lang.treasure_hoarders_electro_potioneer,"/rss/drawable/treasure_hoarders_electro_potioneer.png"];
        case "Treasure Hoarders: Cryo Potioneer" : return [lang.treasure_hoarders_cryo_potioneer,"/rss/drawable/treasure_hoarders_cryo_potioneer.png"];
        case "Treasure Hoarders: Handyman" : return [lang.treasure_hoarders_handyman,"/rss/drawable/treasure_hoarders_handyman.png"];
        case "Treasure Hoarders - Raptor" : return [lang.treasure_hoarders_raptor,"/rss/drawable/treasure_hoarders_raptor.png"];
        case "Treasure Hoarders - Marksman" : return [lang.treasure_hoarders_marksman,"/rss/drawable/treasure_hoarders_marksman.png"];
        case "Treasure Hoarders - Carmen" : return [lang.treasure_hoarders_carmen,"/rss/drawable/treasure_hoarders_carmen.png"];
        case "Treasure Hoarders: Gravedigger" : return [lang.treasure_hoarders_gravedigger,"/rss/drawable/treasure_hoarders_gravedigger.png"];
        case "Treasure Hoarders - Seaman" : return [lang.treasure_hoarders_seaman,"/rss/drawable/treasure_hoarders_seaman.png"];
        case "Treasure Hoarders - Boss" : return [lang.treasure_hoarders_boss,"/rss/drawable/treasure_hoarders_boss.png"];
        case "Millelith Soldier" : return [lang.millelith_soldier,"/rss/drawable/millelith_soldier.png"];
        case "Millelith Sergeant" : return [lang.millelith_sergeant,"/rss/drawable/millelith_sergeant.png"];
        case "Treasure Hoarders - Pugilist" : return [lang.treasure_hoarders_pugilist,"/rss/drawable/treasure_hoarders_pugilist.png"];
        case "Treasure Hoarders - Crusher" : return [lang.treasure_hoarders_crusher,"/rss/drawable/treasure_hoarders_crusher.png"];
        case "Nobushi: Jintouban" : return [lang.nobushi_jintouban,"/rss/drawable/nobushi_jintouban.png"];
        case "Nobushi: Hitsukeban" : return [lang.nobushi_hitsukeban,"/rss/drawable/nobushi_hitsukeban.png"];
        case "Nobushi: Kikouban" : return [lang.nobushi_kikouban,"/rss/drawable/nobushi_kikouban.png"];
        case "Maguu Kenki" : return [lang.maguu_kenki,"/rss/drawable/maguu_kenki.png"];
        case "Kairagi: Dancing Thunder" : return [lang.kairagi_dancing_thunder,"/rss/drawable/kairagi_dancing_thunder.png"];
        case "Kairagi: Fiery Might" : return [lang.kairagi_fiery_might,"/rss/drawable/kairagi_fiery_might.png"];
        case "Cryo Whopperflower" : return [lang.cryo_whopperflower,"/rss/drawable/cryo_whopperflower.png"];
        case "Pyro Whopperflower" : return [lang.pyro_whopperflower,"/rss/drawable/pyro_whopperflower.png"];
        case "Electro Whopperflower" : return [lang.electro_whopperflower,"/rss/drawable/electro_whopperflower.png"];
        case "Stunned Pyro Whopperflower" : return [lang.stunned_pyro_whopperflower,"/rss/drawable/cryo_whopperflower.png"];
        case "Stunned Electro Whopperflower" : return [lang.stunned_electro_whopperflower,"/rss/drawable/pyro_whopperflower.png"];
        case "Stunned Cryo Whopperflower" : return [lang.stunned_cryo_whopperflower,"/rss/drawable/electro_whopperflower.png"];
        case "Cryo Regisvine" : return [lang.cryo_regisvine,"/rss/drawable/cryo_regisvine.png"];
        case "Pyro Regisvine" : return [lang.pyro_regisvine,"/rss/drawable/pyro_regisvine.png"];
        case "Stunned Cryo Regisvine" : return [lang.stunned_cryo_regisvine,"/rss/drawable/cryo_regisvine.png"];
        case "Stunned Pyro Regisvine" : return [lang.stunned_pyro_regisvine,"/rss/drawable/pyro_regisvine.png"];
        case "Geovishap Hatchling" : return [lang.geovishap_hatchling,"/rss/drawable/geovishap_hatchling.png"];
        case "Geovishap" : return [lang.geovishap,"/rss/drawable/geovishap.png"];
        case "Pyro-infused Geovishap" : return [lang.pyroinfused_geovishap,"/rss/drawable/geovishap.png"];
        case "Electro-infused Geovishap" : return [lang.electroinfused_geovishap,"/rss/drawable/geovishap.png"];
        case "Cryo-infused Geovishap" : return [lang.cryoinfused_geovishap,"/rss/drawable/geovishap.png"];
        case "Hydro-infused Geovishap" : return [lang.hydroinfused_geovishap,"/rss/drawable/geovishap.png"];
        case "Primo Geovishap" : return [lang.primo_geovishap,"/rss/drawable/primo_geovishap.png"];
        case "Primordial Bathysmal Vishap" : return [lang.primordial_bathysmal_vishap,"/rss/drawable/primordial_bathysmal_vishap.png"];
        case "Rimebiter Bathysmal Vishap" : return [lang.rimebiter_bathysmal_vishap,"/rss/drawable/rimebiter_bathysmal_vishap.png"];
        case "Bolteater Bathysmal Vishap" : return [lang.bolteater_bathysmal_vishap,"/rss/drawable/bolteater_bathysmal_vishap.png"];
        case "Electro Bathysmal Vishap" : return [lang.electro_bathysmal_vishap,"/rss/drawable/electro_bathysmal_vishap.png"];
        case "Cyro Bathysmal Vishap" : return [lang.cyro_bathysmal_vishap,"/rss/drawable/cyro_bathysmal_vishap.png"];
        case "Electro Cicin" : return [lang.electro_cicin,"/rss/drawable/electro_cicin.png"];
        case "Hydro Cicin" : return [lang.hydro_cicin,"/rss/drawable/hydro_cicin.png"];
        case "Cryo Cicin" : return [lang.cryo_cicin,"/rss/drawable/cryo_cicin.png"];
        case "Stormterror" : return [lang.stormterror,"/rss/drawable/stormterror.png"];
        case "Lupus Boreas" : return [lang.lupus_boreas,"/rss/drawable/lupus_boreas.png"];
        case "Phase 1 Childe" : return [lang.phase_1_childe,"/rss/drawable/childe.png"];
        case "Stunned Phase 1 Childe " : return [lang.stunned_phase_1_childe_,"/rss/drawable/childe.png"];
        case "Phase 2 Childe" : return [lang.phase_2_childe,"/rss/drawable/childe.png"];
        case "Stunned Phase 2 Childe" : return [lang.stunned_phase_2_childe,"/rss/drawable/childe.png"];
        case "Phase 3 Childe" : return [lang.phase_3_childe,"/rss/drawable/childe.png"];
        case "Azhdaha" : return [lang.azhdaha,"/rss/drawable/azhdaha.png"];
        case "Pyro Azhdaha" : return [lang.pyro_azhdaha,"/rss/drawable/azhdaha.png"];
        case "Hydro Azhdaha" : return [lang.hydro_azhdaha,"/rss/drawable/azhdaha.png"];
        case "Fire-Cryo Azhdaha" : return [lang.firecryo_azhdaha,"/rss/drawable/azhdaha.png"];
        case "Fire-Electro Azhdaha" : return [lang.fireelectro_azhdaha,"/rss/drawable/azhdaha.png"];
        case "Hydro-Cryo Azhdaha" : return [lang.hydrocryo_azhdaha,"/rss/drawable/azhdaha.png"];
        case "Hydro-Electro Azhdaha" : return [lang.hydroelectro_azhdaha,"/rss/drawable/azhdaha.png"];
        case "Phase 1 La Signora" : return [lang.phase_1_la_signora,"/rss/drawable/la_signora.png"];
        case "Phase 2 La Signora" : return [lang.phase_2_la_signora,"/rss/drawable/la_signora.png"];
        case "Magatsu Mitake Narukami no Mikoto" : return [lang.magatsu_mitake_narukami_no_mikoto,"/rss/drawable/magatsu_mitake_narukami_no_mikoto.png"];
        case "Hydro Mimic Boar" : return [lang.hydro_mimic_boar,"/rss/drawable/hydro_mimic_boar.png"];
        case "Hydro Mimic Crane" : return [lang.hydro_mimic_crane,"/rss/drawable/hydro_mimic_crane.png"];
        case "Hydro Mimic Crab" : return [lang.hydro_mimic_crab,"/rss/drawable/hydro_mimic_crab.png"];
        case "Hydro Mimic Finch" : return [lang.hydro_mimic_finch,"/rss/drawable/hydro_mimic_finch.png"];
        case "Hydro Mimic Mallard" : return [lang.hydro_mimic_mallard,"/rss/drawable/hydro_mimic_mallard.png"];
        case "Hydro Mimic Ferret" : return [lang.hydro_mimic_ferret,"/rss/drawable/hydro_mimic_ferret.png"];
        case "Hydro Mimic Frog" : return [lang.hydro_mimic_frog,"/rss/drawable/hydro_mimic_frog.png"];
        case "Hydro Mimic Raptor" : return [lang.hydro_mimic_raptor,"/rss/drawable/hydro_mimic_raptor.png"];
        case "Shogunate Infantry" : return [lang.shogunate_infantry,"/rss/drawable/shogunate_infantry.png"];
        case "Shogunate Infantry Captain" : return [lang.shogunate_infantry_captain,"/rss/drawable/shogunate_infantry_captain.png"];
        case "Sangonomiya Cohort" : return [lang.sangonomiya_cohort,"/rss/drawable/sangonomiya_cohort.png"];
        case "Yoriki Samurai" : return [lang.yoriki_samurai,"/rss/drawable/yoriki_samurai.png"];
        case "Ochimusha: Ensorcelled Thunder" : return [lang.ochimusha_ensorcelled_thunder,"/rss/drawable/ochimusha_ensorcelled_thunder.png"];
        case "Ochimusha: Cankered Flame" : return [lang.ochimusha_cankered_flame,"/rss/drawable/ochimusha_cankered_flame.png"];
        case "Maguu Kenki: Lone Gale" : return [lang.maguu_kenki_lone_gale,"/rss/drawable/maguu_kenki_lone_gale.png"];
        case "Maguu Kenki: Galloping Frost" : return [lang.maguu_kenki_galloping_frost,"/rss/drawable/maguu_kenki_galloping_frost.png"];
        case "Maguu Kenki: Mask of Terror" : return [lang.maguu_kenki_mask_of_terror,"/rss/drawable/maguu_kenki_mask_of_terror.png"];
        case "The Great Snowboar King" : return [lang.the_great_snowboar_king,"/rss/drawable/the_great_snowboar_king.png"];

        default : return [lang.unknown,"/rss/drawable/hu_tao_unknown.png"];
    }
}

// add in 20220207
exports.getEnemyByFileName = function (str){
    switch (str){
        case "pyro_slime" : return "Pyro Slime";
        case "large_pyro_slime" : return "Large Pyro Slime";
        case "electro_slime" : return "Electro Slime";
        case "large_electro_slime" : return "Large Electro Slime";
        case "mutant_electro_slime" : return "Mutant Electro Slime";
        case "cryo_slime" : return "Cryo Slime";
        case "large_cryo_slime" : return "Large Cryo Slime";
        case "hydro_slime" : return "Hydro Slime";
        case "large_hydro_slime" : return "Large Hydro Slime";
        case "anemo_slime" : return "Anemo Slime";
        case "large_anemo_slime" : return "Large Anemo Slime";
        case "geo_slime" : return "Geo Slime";
        case "large_geo_slime" : return "Large Geo Slime";
        case "dendro_slime" : return "Dendro Slime";
        case "large_dendro_slime" : return "Large Dendro Slime";
        case "eye_of_the_storm" : return "Eye of the Storm";
        case "pyro_hypostasis" : return "Pyro Hypostasis";
        case "electro_hypostasis" : return "Electro Hypostasis";
        case "cryo_hypostasis" : return "Cryo Hypostasis";
        case "hydro_hypostasis" : return "Hydro Hypostasis";
        case "anemo_hypostasis" : return "Anemo Hypostasis";
        case "geo_hypostasis" : return "Geo Hypostasis";
        case "oceanid" : return "Oceanid";
        case "hydro_specter" : return "Hydro Specter";
        case "geo_specter" : return "Geo Specter";
        case "anemo_specter" : return "Anemo Specter";
        case "cryo_specter" : return "Cryo Specter";
        case "electro_specter" : return "Electro Specter";
        case "pyro_specter" : return "Pyro Specter";
        case "thunder_manifestation" : return "Thunder Manifestation";
        case "hilichurl" : return "Hilichurl";
        case "hilichurl_fighter" : return "Hilichurl Fighter";
        case "wooden_shield_hilichurl_guard" : return "Wooden Shield Hilichurl Guard";
        case "hilichurl_shooter" : return "Hilichurl Shooter";
        case "pyro_hilichurl_shooter" : return "Pyro Hilichurl Shooter";
        case "hilichurl_grenadier" : return "Hilichurl Grenadier";
        case "hilichurl_berserker" : return "Hilichurl Berserker";
        case "cryo_hilichurl_shooter" : return "Cryo Hilichurl Shooter";
        case "electro_hilichurl_shooter" : return "Electro Hilichurl Shooter";
        case "rock_shield_hilichurl_guard" : return "Rock Shield Hilichurl Guard";
        case "cryo_hilichurl_grenadier" : return "Cryo Hilichurl Grenadier";
        case "ice_shield_hilichurl_guard" : return "Ice Shield Hilichurl Guard";
        case "unusual_hilichurl" : return "Unusual Hilichurl";
        case "electro_hilichurl_grenadier" : return "Electro Hilichurl Grenadier";
        case "wooden_shieldwall_mitachurl" : return "Wooden Shieldwall Mitachurl";
        case "blazing_axe_mitachurl" : return "Blazing Axe Mitachurl";
        case "rock_shieldwall_mitachurl" : return "Rock Shieldwall Mitachurl";
        case "frostarm_lawachurl" : return "Frostarm Lawachurl";
        case "stonehide_lawachurl" : return "Stonehide Lawachurl";
        case "thunderhelm_lawachurl" : return "Thunderhelm Lawachurl";
        case "ice_shieldwall_mitachurl" : return "Ice Shieldwall Mitachurl";
        case "crackling_axe_mitachurl" : return "Crackling Axe Mitachurl";
        case "hydro_samachurl" : return "Hydro Samachurl";
        case "dendro_samachurl" : return "Dendro Samachurl";
        case "anemo_samachurl" : return "Anemo Samachurl";
        case "geo_samachurl" : return "Geo Samachurl";
        case "cryo_samachurl" : return "Cryo Samachurl";
        case "electro_samachurl" : return "Electro Samachurl";
        case "pyro_abyss_mage" : return "Pyro Abyss Mage";
        case "cryo_abyss_mage" : return "Cryo Abyss Mage";
        case "hydro_abyss_mage" : return "Hydro Abyss Mage";
        case "electro_abyss_mage" : return "Electro Abyss Mage";
        case "abyss_herald_wicked_torrents" : return "Abyss Herald: Wicked Torrents";
        case "abyss_lector_violet_lightning" : return "Abyss Lector: Violet Lightning";
        case "abyss_lector_fathomless_flames" : return "Abyss Lector: Fathomless Flames";
        case "rockfond_rifthound_whelp" : return "Rockfond Rifthound Whelp";
        case "thundercraven_rifthound_whelp" : return "Thundercraven Rifthound Whelp";
        case "rockfond_rifthound" : return "Rockfond Rifthound";
        case "thundercraven_rifthound" : return "Thundercraven Rifthound";
        case "beginning_golden_wolflord" : return "Beginning : Golden Wolflord";
        case "golden_wolflord" : return "Golden Wolflord";
        case "headbroken_golden_wolflord" : return "Head-Broken : Golden Wolflord";
        case "shadowy_husk_standard_bearer" : return "Shadowy Husk: Standard Bearer";
        case "shadowy_husk_line_breaker" : return "Shadowy Husk: Line Breaker";
        case "shadowy_husk_defender" : return "Shadowy Husk: Defender";
        case "fatui_skirmisher_cryogunner_legionnaire" : return "Fatui Skirmisher - Cryogunner Legionnaire";
        case "fatui_skirmisher_hydrogunner_legionnaire" : return "Fatui Skirmisher - Hydrogunner Legionnaire";
        case "fatui_skirmisher_electrohammer_vanguard" : return "Fatui Skirmisher - Electrohammer Vanguard";
        case "fatui_skirmisher_geochanter_bracer" : return "Fatui Skirmisher - Geochanter Bracer";
        case "fatui_skirmisher_anemoboxer_vanguard" : return "Fatui Skirmisher - Anemoboxer Vanguard";
        case "fatui_skirmisher_pyroslinger_bracer" : return "Fatui Skirmisher - Pyroslinger Bracer";
        case "fatui_pyro_agent" : return "Fatui Pyro Agent";
        case "fatui_electro_cicin_mage" : return "Fatui Electro Cicin Mage";
        case "fatui_cryo_cicin_mage" : return "Fatui Cryo Cicin Mage";
        case "mirror_maiden" : return "Mirror Maiden";
        case "ruin_guard" : return "Ruin Guard";
        case "ruin_hunter" : return "Ruin Hunter";
        case "ruin_grader" : return "Ruin Grader";
        case "ruin_cruiser" : return "Ruin Cruiser";
        case "ruin_destroyer" : return "Ruin Destroyer";
        case "ruin_defender" : return "Ruin Defender";
        case "ruin_scout" : return "Ruin Scout";
        case "perpetual_mechanical_array" : return "Perpetual Mechanical Array";
        case "stunned_perpetual_mechanical_array" : return "Stunned Perpetual Mechanical Array";
        case "treasure_hoarders_liuliu" : return "Treasure Hoarders - Liuliu";
        case "treasure_hoarders_scout" : return "Treasure Hoarders - Scout";
        case "treasure_hoarders_pyro_potioneer" : return "Treasure Hoarders: Pyro Potioneer";
        case "treasure_hoarders_hydro_potioneer" : return "Treasure Hoarders: Hydro Potioneer";
        case "treasure_hoarders_electro_potioneer" : return "Treasure Hoarders: Electro Potioneer";
        case "treasure_hoarders_cryo_potioneer" : return "Treasure Hoarders: Cryo Potioneer";
        case "treasure_hoarders_handyman" : return "Treasure Hoarders: Handyman";
        case "treasure_hoarders_raptor" : return "Treasure Hoarders - Raptor";
        case "treasure_hoarders_marksman" : return "Treasure Hoarders - Marksman";
        case "treasure_hoarders_carmen" : return "Treasure Hoarders - Carmen";
        case "treasure_hoarders_gravedigger" : return "Treasure Hoarders: Gravedigger";
        case "treasure_hoarders_seaman" : return "Treasure Hoarders - Seaman";
        case "treasure_hoarders_boss" : return "Treasure Hoarders - Boss";
        case "millelith_soldier" : return "Millelith Soldier";
        case "millelith_sergeant" : return "Millelith Sergeant";
        case "treasure_hoarders_pugilist" : return "Treasure Hoarders - Pugilist";
        case "treasure_hoarders_crusher" : return "Treasure Hoarders - Crusher";
        case "nobushi_jintouban" : return "Nobushi: Jintouban";
        case "nobushi_hitsukeban" : return "Nobushi: Hitsukeban";
        case "nobushi_kikouban" : return "Nobushi: Kikouban";
        case "maguu_kenki" : return "Maguu Kenki";
        case "kairagi_dancing_thunder" : return "Kairagi: Dancing Thunder";
        case "kairagi_fiery_might" : return "Kairagi: Fiery Might";
        case "cryo_whopperflower" : return "Cryo Whopperflower";
        case "pyro_whopperflower" : return "Pyro Whopperflower";
        case "electro_whopperflower" : return "Electro Whopperflower";
        case "stunned_pyro_whopperflower" : return "Stunned Pyro Whopperflower";
        case "stunned_electro_whopperflower" : return "Stunned Electro Whopperflower";
        case "stunned_cryo_whopperflower" : return "Stunned Cryo Whopperflower";
        case "cryo_regisvine" : return "Cryo Regisvine";
        case "pyro_regisvine" : return "Pyro Regisvine";
        case "stunned_cryo_regisvine" : return "Stunned Cryo Regisvine";
        case "stunned_pyro_regisvine" : return "Stunned Pyro Regisvine";
        case "geovishap_hatchling" : return "Geovishap Hatchling";
        case "geovishap" : return "Geovishap";
        case "pyroinfused_geovishap" : return "Pyro-infused Geovishap";
        case "electroinfused_geovishap" : return "Electro-infused Geovishap";
        case "cryoinfused_geovishap" : return "Cryo-infused Geovishap";
        case "hydroinfused_geovishap" : return "Hydro-infused Geovishap";
        case "primo_geovishap" : return "Primo Geovishap";
        case "primordial_bathysmal_vishap" : return "Primordial Bathysmal Vishap";
        case "rimebiter_bathysmal_vishap" : return "Rimebiter Bathysmal Vishap";
        case "bolteater_bathysmal_vishap" : return "Bolteater Bathysmal Vishap";
        case "electro_bathysmal_vishap" : return "Electro Bathysmal Vishap";
        case "cyro_bathysmal_vishap" : return "Cyro Bathysmal Vishap";
        case "electro_cicin" : return "Electro Cicin";
        case "hydro_cicin" : return "Hydro Cicin";
        case "cryo_cicin" : return "Cryo Cicin";
        case "stormterror" : return "Stormterror";
        case "lupus_boreas" : return "Lupus Boreas";
        case "phase_1_childe" : return "Phase 1 Childe";
        case "stunned_phase_1_childe_" : return "Stunned Phase 1 Childe ";
        case "phase_2_childe" : return "Phase 2 Childe";
        case "stunned_phase_2_childe" : return "Stunned Phase 2 Childe";
        case "phase_3_childe" : return "Phase 3 Childe";
        case "azhdaha" : return "Azhdaha";
        case "pyro_azhdaha" : return "Pyro Azhdaha";
        case "hydro_azhdaha" : return "Hydro Azhdaha";
        case "firecryo_azhdaha" : return "Fire-Cryo Azhdaha";
        case "fireelectro_azhdaha" : return "Fire-Electro Azhdaha";
        case "hydrocryo_azhdaha" : return "Hydro-Cryo Azhdaha";
        case "hydroelectro_azhdaha" : return "Hydro-Electro Azhdaha";
        case "phase_1_la_signora" : return "Phase 1 La Signora";
        case "phase_2_la_signora" : return "Phase 2 La Signora";
        case "magatsu_mitake_narukami_no_mikoto" : return "Magatsu Mitake Narukami no Mikoto";
        case "hydro_mimic_boar" : return "Hydro Mimic Boar";
        case "hydro_mimic_crane" : return "Hydro Mimic Crane";
        case "hydro_mimic_crab" : return "Hydro Mimic Crab";
        case "hydro_mimic_finch" : return "Hydro Mimic Finch";
        case "hydro_mimic_mallard" : return "Hydro Mimic Mallard";
        case "hydro_mimic_ferret" : return "Hydro Mimic Ferret";
        case "hydro_mimic_frog" : return "Hydro Mimic Frog";
        case "hydro_mimic_raptor" : return "Hydro Mimic Raptor";
        case "shogunate_infantry" : return "Shogunate Infantry";
        case "shogunate_infantry_captain" : return "Shogunate Infantry Captain";
        case "sangonomiya_cohort" : return "Sangonomiya Cohort";
        case "yoriki_samurai" : return "Yoriki Samurai";
        case "ochimusha_ensorcelled_thunder" : return "Ochimusha: Ensorcelled Thunder";
        case "ochimusha_cankered_flame" : return "Ochimusha: Cankered Flame";
        case "maguu_kenki_lone_gale" : return "Maguu Kenki: Lone Gale";
        case "maguu_kenki_galloping_frost" : return "Maguu Kenki: Galloping Frost";
        case "maguu_kenki_mask_of_terror" : return "Maguu Kenki: Mask of Terror";
        case "the_great_snowboar_king" : return "The Great Snowboar King";

        default: return  "PAIMON_ATE";
    }
}

exports.getWeaponByName = function (str) {
    switch (str){
        case "Amenoma Kageuchi" : return [lang.amenoma_kageuchi,"/rss/drawable/amenoma_kageuchi.png"];
        case "Aquila Favonia" : return [lang.aquila_favonia,"/rss/drawable/aquila_favonia.png"];
        case "Blackcliff Longsword" : return [lang.blackcliff_longsword,"/rss/drawable/blackcliff_longsword.png"];
        case "Cool Steel" : return [lang.cool_steel,"/rss/drawable/cool_steel.png"];
        case "Dark Iron Sword" : return [lang.dark_iron_sword,"/rss/drawable/dark_iron_sword.png"];
        case "Dull Blade" : return [lang.dull_blade,"/rss/drawable/dull_blade.png"];
        case "Favonius Sword" : return [lang.favonius_sword,"/rss/drawable/favonius_sword.png"];
        case "Festering Desire" : return [lang.festering_desire,"/rss/drawable/festering_desire.png"];
        case "Fillet Blade" : return [lang.fillet_blade,"/rss/drawable/fillet_blade.png"];
        case "Freedom-Sworn" : return [lang.freedom_sworn,"/rss/drawable/freedom_sworn.png"];
        case "Freedom Sworn" : return [lang.freedom_sworn,"/rss/drawable/freedom_sworn.png"];
        case "Harbinger of Dawn" : return [lang.harbinger_of_dawn,"/rss/drawable/harbinger_of_dawn.png"];
        case "Iron Sting" : return [lang.iron_sting,"/rss/drawable/iron_sting.png"];
        case "Lion's Roar" : return [lang.lions_roar,"/rss/drawable/lions_roar.png"];
        case "Mistsplitter Reforged" : return [lang.mistsplitter_reforged,"/rss/drawable/mistsplitter_reforged.png"];
        case "Primordial Jade Cutter" : return [lang.primordial_jade_cutter,"/rss/drawable/primordial_jade_cutter.png"];
        case "Prototype Rancour" : return [lang.prototype_rancour,"/rss/drawable/prototype_rancour.png"];
        case "Royal Longsword" : return [lang.royal_longsword,"/rss/drawable/royal_longsword.png"];
        case "Sacrificial Sword" : return [lang.sacrificial_sword,"/rss/drawable/sacrificial_sword.png"];
        case "Silver Sword" : return [lang.silver_sword,"/rss/drawable/silver_sword.png"];
        case "Skyrider Sword" : return [lang.skyrider_sword,"/rss/drawable/skyrider_sword.png"];
        case "Skyward Blade" : return [lang.skyward_blade,"/rss/drawable/skyward_blade.png"];
        case "Summit Shaper" : return [lang.summit_shaper,"/rss/drawable/summit_shaper.png"];
        case "Sword of Descension" : return [lang.sword_of_descension,"/rss/drawable/sword_of_descension.png"];
        case "The Alley Flash" : return [lang.the_alley_flash,"/rss/drawable/the_alley_flash.png"];
        case "The Black Sword" : return [lang.the_black_sword,"/rss/drawable/the_black_sword.png"];
        case "The Flute" : return [lang.the_flute,"/rss/drawable/the_flute.png"];
        case "Traveler's Handy Sword" : return [lang.travelers_handy_sword,"/rss/drawable/travelers_handy_sword.png"];
        case "Cinnabar Spindle" : return [lang.cinnabar_spindle,"/rss/drawable/cinnabar_spindle.png"];

        case "Waster Greatsword" : return [lang.waster_greatsword,"/rss/drawable/waster_greatsword.png"];
        case "Old Merc's Pal" : return [lang.old_mercs_pal,"/rss/drawable/old_mercs_pal.png"];
        case "Bloodtainted Greatsword" : return [lang.bloodtainted_greatsword,"/rss/drawable/bloodtainted_greatsword.png"];
        case "Debate Club" : return [lang.debate_club,"/rss/drawable/debate_club.png"];
        case "Quartz" : return [lang.quartz,"/rss/drawable/quartz.png"];
        case "Ferrous Shadow" : return [lang.ferrous_shadow,"/rss/drawable/ferrous_shadow.png"];
        case "Skyrider Greatsword" : return [lang.skyrider_greatsword,"/rss/drawable/skyrider_greatsword.png"];
        case "White Iron Greatsword" : return [lang.white_iron_greatsword,"/rss/drawable/white_iron_greatsword.png"];
        case "Blackcliff Slasher" : return [lang.blackcliff_slasher,"/rss/drawable/blackcliff_slasher.png"];
        case "Favonius Greatsword" : return [lang.favonius_greatsword,"/rss/drawable/favonius_greatsword.png"];
        case "Katsuragikiri Nagamasa" : return [lang.katsuragikiri_nagamasa,"/rss/drawable/katsuragikiri_nagamasa.png"];
        case "Lithic Blade" : return [lang.lithic_blade,"/rss/drawable/lithic_blade.png"];
        case "Luxurious Sea-Lord" : return [lang.luxurious_sea_lord,"/rss/drawable/luxurious_sea_lord.png"];
        case "Prototype Archaic" : return [lang.prototype_archaic,"/rss/drawable/prototype_archaic.png"];
        case "Rainslasher" : return [lang.rainslasher,"/rss/drawable/rainslasher.png"];
        case "Royal Greatsword" : return [lang.royal_greatsword,"/rss/drawable/royal_greatsword.png"];
        case "Sacrificial Greatsword" : return [lang.sacrificial_greatsword,"/rss/drawable/sacrificial_greatsword.png"];
        case "Serpent Spine" : return [lang.serpent_spine,"/rss/drawable/serpent_spine.png"];
        case "Snow-Tombed Starsilver" : return [lang.snow_tombed_starsilver,"/rss/drawable/snow_tombed_starsilver.png"];
        case "The Bell" : return [lang.the_bell,"/rss/drawable/the_bell.png"];
        case "Whiteblind" : return [lang.whiteblind,"/rss/drawable/whiteblind.png"];
        case "Skyward Pride" : return [lang.skyward_pride,"/rss/drawable/skyward_pride.png"];
        case "Song of Broken Pines" : return [lang.song_of_broken_pines,"/rss/drawable/song_of_broken_pines.png"];
        case "The Unforged" : return [lang.the_unforged,"/rss/drawable/the_unforged.png"];
        case "Wolf's Gravestone" : return [lang.wolfs_gravestone,"/rss/drawable/wolfs_gravestone.png"];
        case "Akuoumaru" : return [lang.akuoumaru,"/rss/drawable/akuoumaru.png"];
        case "Redhorn Stonethresher" : return [lang.redhorn_stonethresher,"/rss/drawable/redhorn_stonethresher.png"];

        case "Beginner's Protector" : return [lang.beginners_protector,"/rss/drawable/beginners_protector.png"];
        case "Iron Point" : return [lang.iron_point,"/rss/drawable/iron_point.png"];
        case "Black Tassel" : return [lang.black_tassel,"/rss/drawable/black_tassel.png"];
        case "Halberd" : return [lang.halberd,"/rss/drawable/halberd.png"];
        case "White Tassel" : return [lang.white_tassel,"/rss/drawable/white_tassel.png"];
        case "Blackcliff Pole" : return [lang.blackcliff_pole,"/rss/drawable/blackcliff_pole.png"];
        case "Crescent Pike" : return [lang.crescent_pike,"/rss/drawable/crescent_pike.png"];
        case "Deathmatch" : return [lang.deathmatch,"/rss/drawable/deathmatch.png"];
        case "Dragon's Bane" : return [lang.dragons_bane,"/rss/drawable/dragons_bane.png"];
        case "Dragonspine Spear" : return [lang.dragonspine_spear,"/rss/drawable/dragonspine_spear.png"];
        case "Favonius Lance" : return [lang.favonius_lance,"/rss/drawable/favonius_lance.png"];
        case "Kitain Cross Spear" : return [lang.kitain_cross_spear,"/rss/drawable/kitain_cross_spear.png"];
        case "Lithic Spear" : return [lang.lithic_spear,"/rss/drawable/lithic_spear.png"];
        case "Prototype Starglitter" : return [lang.prototype_starglitter,"/rss/drawable/prototype_starglitter.png"];
        case "Royal Spear" : return [lang.royal_spear,"/rss/drawable/royal_spear.png"];
        case "The Catch" : return [lang.the_catch,"/rss/drawable/the_catch.png"];
        case "Engulfing Lightning" : return [lang.engulfing_lightning,"/rss/drawable/engulfing_lightning.png"];
        case "Primordial Jade Winged-Spear" : return [lang.primordial_jade_winged_spear,"/rss/drawable/primordial_jade_winged_spear.png"];
        case "Skyward Spine" : return [lang.skyward_spine,"/rss/drawable/skyward_spine.png"];
        case "Staff of Homa" : return [lang.staff_of_homa,"/rss/drawable/staff_of_homa.png"];
        case "Vortex Vanquisher" : return [lang.vortex_vanquisher,"/rss/drawable/vortex_vanquisher.png"];
        case "Wavebreaker's Fin" : return [lang.wavebreakers_fin,"/rss/drawable/wavebreakers_fin.png"];
        case "Calamity Queller" : return [lang.calamity_queller,"/rss/drawable/calamity_queller.png"];

        case "Apprentice's Notes" : return [lang.apprentices_notes,"/rss/drawable/apprentices_notes.png"];
        case "Pocket Grimoire" : return [lang.pocket_grimoire,"/rss/drawable/pocket_grimoire.png"];
        case "Amber Catalyst" : return [lang.amber_catalyst,"/rss/drawable/amber_catalyst.png"];
        case "Emerald Orb" : return [lang.emerald_orb,"/rss/drawable/emerald_orb.png"];
        case "Magic Guide" : return [lang.magic_guide,"/rss/drawable/magic_guide.png"];
        case "Otherworldly Story" : return [lang.otherworldly_story,"/rss/drawable/otherworldly_story.png"];
        case "Thrilling Tales of Dragon Slayers" : return [lang.thrilling_tales_of_dragon_slayers,"/rss/drawable/thrilling_tales_of_dragon_slayers.png"];
        case "Twin Nephrite" : return [lang.twin_nephrite,"/rss/drawable/twin_nephrite.png"];
        case "Blackcliff Agate" : return [lang.blackcliff_agate,"/rss/drawable/blackcliff_agate.png"];
        case "Dodoco Tales" : return [lang.dodoco_tales,"/rss/drawable/dodoco_tales.png"];
        case "Eye of Perception" : return [lang.eye_of_perception,"/rss/drawable/eye_of_perception.png"];
        case "Favonius Codex" : return [lang.favonius_codex,"/rss/drawable/favonius_codex.png"];
        case "Frostbearer" : return [lang.frostbearer,"/rss/drawable/frostbearer.png"];
        case "Hakushin Ring" : return [lang.hakushin_ring,"/rss/drawable/hakushin_ring.png"];
        case "Mappa Mare" : return [lang.mappa_mare,"/rss/drawable/mappa_mare.png"];
        case "Prototype Amber" : return [lang.prototype_amber,"/rss/drawable/prototype_amber.png"];
        case "Royal Grimoire" : return [lang.royal_grimoire,"/rss/drawable/royal_grimoire.png"];
        case "Sacrificial Fragments" : return [lang.sacrificial_fragments,"/rss/drawable/sacrificial_fragments.png"];
        case "Solar Pearl" : return [lang.solar_pearl,"/rss/drawable/solar_pearl.png"];
        case "The Widsith" : return [lang.the_widsith,"/rss/drawable/the_widsith.png"];
        case "Wine and Song" : return [lang.wine_and_song,"/rss/drawable/wine_and_song.png"];
        case "Everlasting Moonglow" : return [lang.everlasting_moonglow,"/rss/drawable/everlasting_moonglow.png"];
        case "Lost Prayer to the Sacred Winds" : return [lang.lost_prayer_to_the_sacred_winds,"/rss/drawable/lost_prayer_to_the_sacred_winds.png"];
        case "Memory of Dust" : return [lang.memory_of_dust,"/rss/drawable/memory_of_dust.png"];
        case "Skyward Atlas" : return [lang.skyward_atlas,"/rss/drawable/skyward_atlas.png"];

        case "Hunter's Bow" : return [lang.hunters_bow,"/rss/drawable/hunters_bow.png"];
        case "Seasoned Hunter's Bow" : return [lang.seasoned_hunters_bow,"/rss/drawable/seasoned_hunters_bow.png"];
        case "Ebony Bow" : return [lang.ebony_bow,"/rss/drawable/ebony_bow.png"];
        case "Messenger" : return [lang.messenger,"/rss/drawable/messenger.png"];
        case "Raven Bow" : return [lang.raven_bow,"/rss/drawable/raven_bow.png"];
        case "Recurve Bow" : return [lang.recurve_bow,"/rss/drawable/recurve_bow.png"];
        case "Sharpshooter's Oath" : return [lang.sharpshooters_oath,"/rss/drawable/sharpshooters_oath.png"];
        case "Slingshot" : return [lang.slingshot,"/rss/drawable/slingshot.png"];
        case "Alley Hunter" : return [lang.alley_hunter,"/rss/drawable/alley_hunter.png"];
        case "Blackcliff Warbow" : return [lang.blackcliff_warbow,"/rss/drawable/blackcliff_warbow.png"];
        case "Compound Bow" : return [lang.compound_bow,"/rss/drawable/compound_bow.png"];
        case "Favonius Warbow" : return [lang.favonius_warbow,"/rss/drawable/favonius_warbow.png"];
        case "Hamayumi" : return [lang.hamayumi,"/rss/drawable/hamayumi.png"];
        case "Mitternachts Waltz" : return [lang.mitternachts_waltz,"/rss/drawable/mitternachts_waltz.png"];
        case "Predator" : return [lang.predator,"/rss/drawable/predator.png"];
        case "Prototype Crescent" : return [lang.prototype_crescent,"/rss/drawable/prototype_crescent.png"];
        case "Royal Bow" : return [lang.royal_bow,"/rss/drawable/royal_bow.png"];
        case "Rust" : return [lang.rust,"/rss/drawable/rust.png"];
        case "Sacrificial Bow" : return [lang.sacrificial_bow,"/rss/drawable/sacrificial_bow.png"];
        case "The Stringless" : return [lang.the_stringless,"/rss/drawable/the_stringless.png"];
        case "The Viridescent Hunt" : return [lang.the_viridescent_hunt,"/rss/drawable/the_viridescent_hunt.png"];
        case "Windblume Ode" : return [lang.windblume_ode,"/rss/drawable/windblume_ode.png"];
        case "Amos' Bow" : return [lang.amos_bow,"/rss/drawable/amos_bow.png"];
        case "Elegy for the End" : return [lang.elegy_for_the_end,"/rss/drawable/elegy_for_the_end.png"];
        case "Skyward Harp" : return [lang.skyward_harp,"/rss/drawable/skyward_harp.png"];
        case "Thundering Pulse" : return [lang.thundering_pulse,"/rss/drawable/thundering_pulse.png"];
        case "Mouun's Moon" : return [lang.mouuns_moon,"/rss/drawable/mouuns_moon.png"];
        //add in 20220126
        case "Kagura's Verity" : return [lang.kaguras_verity,"/rss/drawable/kaguras_verity.png"];
        case "Oathsworn Eye" : return [lang.oathsworn_eye,"/rss/drawable/oathsworn_eye.png"];
        //add in 20220329
        case "Haran Geppaku Futsu" : return [lang.haran_geppaku_futsu,"/rss/drawable/haran_geppaku_futsu.png"];
        //add in 20220521
        case "Aqua Simulacra" : return [lang.aqua_simulacra,"/rss/drawable/aqua_simulacra.png"];
        case "Kagotsurube Isshin" : return [lang.kagotsurube_isshin,"/rss/drawable/kagotsurube_isshin.png"];
        case "Fading Twilight" : return [lang.fading_twilight,"/rss/drawable/fading_twilight.png"];
        //add in 20220714
        case "Sapwood Blade" : return [lang.sapwood_blade,"/rss/drawable/timber_blade.png"];
        case "Forest Regalia" : return [lang.forest_regalia,"/rss/drawable/forest_regalia.png"];
        case "Moonpiercer" : return [lang.moonpiercer,"/rss/drawable/moonpiercer.png"];
        case "King's Squire" : return [lang.kings_squire,"/rss/drawable/kings_squire.png"];
        case "End of the Line" : return [lang.end_of_the_line,"/rss/drawable/trawler.png"];
        case "Hunter's Path" : return [lang.hunters_path,"/rss/drawable/hunters_path.png"];
        case "Fruit of Fulfillment" : return [lang.fruit_of_fulfillment,"/rss/drawable/fruit_of_fulfillment.png"];
        //add in 20220924
        case "Xiphos' Moonlight" : return [lang.xiphos_moonlight,"/rss/drawable/xiphos_moonlight.png"];
        case "Key of Khaj-Nisut" : return [lang.key_of_khaj_nisut,"/rss/drawable/key_of_khaj_nisut.png"];
        case "Makhaira Aquamarine" : return [lang.makhaira_aquamarine,"/rss/drawable/makhaira_aquamarine.png"];
        case "Missive Windspear" : return [lang.missive_windspear,"/rss/drawable/missive_windspear.png"];
        case "Staff of the Scarlet Sands" : return [lang.staff_of_the_scarlet_sands,"/rss/drawable/staff_of_the_scarlet_sands.png"];
        case "Wandering Evenstar" : return [lang.wandering_evenstar,"/rss/drawable/wandering_evenstar.png"];
        //add in 20221001
        case "A Thousand Floating Dreams" : return [lang.a_thousand_floating_dreams,"/rss/drawable/a_thousand_floating_dreams.png"];
        //add in 20221210
        case "Polar Star" : return [lang.polar_star,"/rss/drawable/polar_star.png"];
        case "Toukabou Shigure" : return [lang.toukabou_shigure,"/rss/drawable/toukabou_shigure.png"];
        case "Tulaytullah's Remembrance" : return [lang.tulaytullahs_remembrance,"/rss/drawable/tulaytullahs_remembrance.png"];
        //add in 20230118
        case "Light of Foliar Incision" : return [lang.light_of_foliar_incision,"/rss/drawable/light_of_foliar_incision.png"];


        default :
            return [str,"/rss/drawable/"+new String(str).toLowerCase().replace("'","").replace(" ","_")+".png"];
    }
}

exports.getWeaponGachaByName = function (str) {
    switch (str){
        case "Amenoma Kageuchi" : return [lang.amenoma_kageuchi,"/rss/drawable/amenoma_kageuchi_gacha.png"];
        case "Aquila Favonia" : return [lang.aquila_favonia,"/rss/drawable/aquila_favonia_gacha.png"];
        case "Blackcliff Longsword" : return [lang.blackcliff_longsword,"/rss/drawable/blackcliff_longsword_gacha.png"];
        case "Cool Steel" : return [lang.cool_steel,"/rss/drawable/cool_steel_gacha.png"];
        case "Dark Iron Sword" : return [lang.dark_iron_sword,"/rss/drawable/dark_iron_sword_gacha.png"];
        case "Dull Blade" : return [lang.dull_blade,"/rss/drawable/dull_blade_gacha.png"];
        case "Favonius Sword" : return [lang.favonius_sword,"/rss/drawable/favonius_sword_gacha.png"];
        case "Festering Desire" : return [lang.festering_desire,"/rss/drawable/festering_desire_gacha.png"];
        case "Fillet Blade" : return [lang.fillet_blade,"/rss/drawable/fillet_blade_gacha.png"];
        case "Freedom-Sworn" : return [lang.freedom_sworn,"/rss/drawable/freedom_sworn_gacha.png"];
        case "Freedom Sworn" : return [lang.freedom_sworn,"/rss/drawable/freedom_sworn_gacha.png"];
        case "Harbinger of Dawn" : return [lang.harbinger_of_dawn,"/rss/drawable/harbinger_of_dawn_gacha.png"];
        case "Iron Sting" : return [lang.iron_sting,"/rss/drawable/iron_sting_gacha.png"];
        case "Lion's Roar" : return [lang.lions_roar,"/rss/drawable/lions_roar_gacha.png"];
        case "Mistsplitter Reforged" : return [lang.mistsplitter_reforged,"/rss/drawable/mistsplitter_reforged_gacha.png"];
        case "Primordial Jade Cutter" : return [lang.primordial_jade_cutter,"/rss/drawable/primordial_jade_cutter_gacha.png"];
        case "Prototype Rancour" : return [lang.prototype_rancour,"/rss/drawable/prototype_rancour_gacha.png"];
        case "Royal Longsword" : return [lang.royal_longsword,"/rss/drawable/royal_longsword_gacha.png"];
        case "Sacrificial Sword" : return [lang.sacrificial_sword,"/rss/drawable/sacrificial_sword_gacha.png"];
        case "Silver Sword" : return [lang.silver_sword,"/rss/drawable/silver_sword_gacha.png"];
        case "Skyrider Sword" : return [lang.skyrider_sword,"/rss/drawable/skyrider_sword_gacha.png"];
        case "Skyward Blade" : return [lang.skyward_blade,"/rss/drawable/skyward_blade_gacha.png"];
        case "Summit Shaper" : return [lang.summit_shaper,"/rss/drawable/summit_shaper_gacha.png"];
        case "Sword of Descension" : return [lang.sword_of_descension,"/rss/drawable/sword_of_descension_gacha.png"];
        case "The Alley Flash" : return [lang.the_alley_flash,"/rss/drawable/the_alley_flash_gacha.png"];
        case "The Black Sword" : return [lang.the_black_sword,"/rss/drawable/the_black_sword_gacha.png"];
        case "The Flute" : return [lang.the_flute,"/rss/drawable/the_flute_gacha.png"];
        case "Traveler's Handy Sword" : return [lang.travelers_handy_sword,"/rss/drawable/travelers_handy_sword_gacha.png"];
        case "Cinnabar Spindle" : return [lang.cinnabar_spindle,"/rss/drawable/cinnabar_spindle_gacha.png"];

        case "Waster Greatsword" : return [lang.waster_greatsword,"/rss/drawable/waster_greatsword_gacha.png"];
        case "Old Merc's Pal" : return [lang.old_mercs_pal,"/rss/drawable/old_mercs_pal_gacha.png"];
        case "Bloodtainted Greatsword" : return [lang.bloodtainted_greatsword,"/rss/drawable/bloodtainted_greatsword_gacha.png"];
        case "Debate Club" : return [lang.debate_club,"/rss/drawable/debate_club_gacha.png"];
        case "Quartz" : return [lang.quartz,"/rss/drawable/quartz_gacha.png"];
        case "Ferrous Shadow" : return [lang.ferrous_shadow,"/rss/drawable/ferrous_shadow_gacha.png"];
        case "Skyrider Greatsword" : return [lang.skyrider_greatsword,"/rss/drawable/skyrider_greatsword_gacha.png"];
        case "White Iron Greatsword" : return [lang.white_iron_greatsword,"/rss/drawable/white_iron_greatsword_gacha.png"];
        case "Blackcliff Slasher" : return [lang.blackcliff_slasher,"/rss/drawable/blackcliff_slasher_gacha.png"];
        case "Favonius Greatsword" : return [lang.favonius_greatsword,"/rss/drawable/favonius_greatsword_gacha.png"];
        case "Katsuragikiri Nagamasa" : return [lang.katsuragikiri_nagamasa,"/rss/drawable/katsuragikiri_nagamasa_gacha.png"];
        case "Lithic Blade" : return [lang.lithic_blade,"/rss/drawable/lithic_blade_gacha.png"];
        case "Luxurious Sea-Lord" : return [lang.luxurious_sea_lord,"/rss/drawable/luxurious_sea_lord_gacha.png"];
        case "Prototype Archaic" : return [lang.prototype_archaic,"/rss/drawable/prototype_archaic_gacha.png"];
        case "Rainslasher" : return [lang.rainslasher,"/rss/drawable/rainslasher_gacha.png"];
        case "Royal Greatsword" : return [lang.royal_greatsword,"/rss/drawable/royal_greatsword_gacha.png"];
        case "Sacrificial Greatsword" : return [lang.sacrificial_greatsword,"/rss/drawable/sacrificial_greatsword_gacha.png"];
        case "Serpent Spine" : return [lang.serpent_spine,"/rss/drawable/serpent_spine_gacha.png"];
        case "Snow-Tombed Starsilver" : return [lang.snow_tombed_starsilver,"/rss/drawable/snow_tombed_starsilver_gacha.png"];
        case "The Bell" : return [lang.the_bell,"/rss/drawable/the_bell_gacha.png"];
        case "Whiteblind" : return [lang.whiteblind,"/rss/drawable/whiteblind_gacha.png"];
        case "Skyward Pride" : return [lang.skyward_pride,"/rss/drawable/skyward_pride_gacha.png"];
        case "Song of Broken Pines" : return [lang.song_of_broken_pines,"/rss/drawable/song_of_broken_pines_gacha.png"];
        case "The Unforged" : return [lang.the_unforged,"/rss/drawable/the_unforged_gacha.png"];
        case "Wolf's Gravestone" : return [lang.wolfs_gravestone,"/rss/drawable/wolfs_gravestone_gacha.png"];
        case "Akuoumaru" : return [lang.akuoumaru,"/rss/drawable/akuoumaru_gacha.png"];
        case "Redhorn Stonethresher" : return [lang.redhorn_stonethresher,"/rss/drawable/redhorn_stonethresher_gacha.png"];

        case "Beginner's Protector" : return [lang.beginners_protector,"/rss/drawable/beginners_protector_gacha.png"];
        case "Iron Point" : return [lang.iron_point,"/rss/drawable/iron_point_gacha.png"];
        case "Black Tassel" : return [lang.black_tassel,"/rss/drawable/black_tassel_gacha.png"];
        case "Halberd" : return [lang.halberd,"/rss/drawable/halberd_gacha.png"];
        case "White Tassel" : return [lang.white_tassel,"/rss/drawable/white_tassel_gacha.png"];
        case "Blackcliff Pole" : return [lang.blackcliff_pole,"/rss/drawable/blackcliff_pole_gacha.png"];
        case "Crescent Pike" : return [lang.crescent_pike,"/rss/drawable/crescent_pike_gacha.png"];
        case "Deathmatch" : return [lang.deathmatch,"/rss/drawable/deathmatch_gacha.png"];
        case "Dragon's Bane" : return [lang.dragons_bane,"/rss/drawable/dragons_bane_gacha.png"];
        case "Dragonspine Spear" : return [lang.dragonspine_spear,"/rss/drawable/dragonspine_spear_gacha.png"];
        case "Favonius Lance" : return [lang.favonius_lance,"/rss/drawable/favonius_lance_gacha.png"];
        case "Kitain Cross Spear" : return [lang.kitain_cross_spear,"/rss/drawable/kitain_cross_spear_gacha.png"];
        case "Lithic Spear" : return [lang.lithic_spear,"/rss/drawable/lithic_spear_gacha.png"];
        case "Prototype Starglitter" : return [lang.prototype_starglitter,"/rss/drawable/prototype_starglitter_gacha.png"];
        case "Royal Spear" : return [lang.royal_spear,"/rss/drawable/royal_spear_gacha.png"];
        case "The Catch" : return [lang.the_catch,"/rss/drawable/the_catch_gacha.png"];
        case "Engulfing Lightning" : return [lang.engulfing_lightning,"/rss/drawable/engulfing_lightning_gacha.png"];
        case "Primordial Jade Winged-Spear" : return [lang.primordial_jade_winged_spear,"/rss/drawable/primordial_jade_winged_spear_gacha.png"];
        case "Skyward Spine" : return [lang.skyward_spine,"/rss/drawable/skyward_spine_gacha.png"];
        case "Staff of Homa" : return [lang.staff_of_homa,"/rss/drawable/staff_of_homa_gacha.png"];
        case "Vortex Vanquisher" : return [lang.vortex_vanquisher,"/rss/drawable/vortex_vanquisher_gacha.png"];
        case "Wavebreaker's Fin" : return [lang.wavebreakers_fin,"/rss/drawable/wavebreakers_fin_gacha.png"];
        case "Calamity Queller" : return [lang.calamity_queller,"/rss/drawable/calamity_queller_gacha.png"];

        case "Apprentice's Notes" : return [lang.apprentices_notes,"/rss/drawable/apprentices_notes_gacha.png"];
        case "Pocket Grimoire" : return [lang.pocket_grimoire,"/rss/drawable/pocket_grimoire_gacha.png"];
        case "Amber Catalyst" : return [lang.amber_catalyst,"/rss/drawable/amber_catalyst_gacha.png"];
        case "Emerald Orb" : return [lang.emerald_orb,"/rss/drawable/emerald_orb_gacha.png"];
        case "Magic Guide" : return [lang.magic_guide,"/rss/drawable/magic_guide_gacha.png"];
        case "Otherworldly Story" : return [lang.otherworldly_story,"/rss/drawable/otherworldly_story_gacha.png"];
        case "Thrilling Tales of Dragon Slayers" : return [lang.thrilling_tales_of_dragon_slayers,"/rss/drawable/thrilling_tales_of_dragon_slayers_gacha.png"];
        case "Twin Nephrite" : return [lang.twin_nephrite,"/rss/drawable/twin_nephrite_gacha.png"];
        case "Blackcliff Agate" : return [lang.blackcliff_agate,"/rss/drawable/blackcliff_agate_gacha.png"];
        case "Dodoco Tales" : return [lang.dodoco_tales,"/rss/drawable/dodoco_tales_gacha.png"];
        case "Eye of Perception" : return [lang.eye_of_perception,"/rss/drawable/eye_of_perception_gacha.png"];
        case "Favonius Codex" : return [lang.favonius_codex,"/rss/drawable/favonius_codex_gacha.png"];
        case "Frostbearer" : return [lang.frostbearer,"/rss/drawable/frostbearer_gacha.png"];
        case "Hakushin Ring" : return [lang.hakushin_ring,"/rss/drawable/hakushin_ring_gacha.png"];
        case "Mappa Mare" : return [lang.mappa_mare,"/rss/drawable/mappa_mare_gacha.png"];
        case "Prototype Amber" : return [lang.prototype_amber,"/rss/drawable/prototype_amber_gacha.png"];
        case "Royal Grimoire" : return [lang.royal_grimoire,"/rss/drawable/royal_grimoire_gacha.png"];
        case "Sacrificial Fragments" : return [lang.sacrificial_fragments,"/rss/drawable/sacrificial_fragments_gacha.png"];
        case "Solar Pearl" : return [lang.solar_pearl,"/rss/drawable/solar_pearl_gacha.png"];
        case "The Widsith" : return [lang.the_widsith,"/rss/drawable/the_widsith_gacha.png"];
        case "Wine and Song" : return [lang.wine_and_song,"/rss/drawable/wine_and_song_gacha.png"];
        case "Everlasting Moonglow" : return [lang.everlasting_moonglow,"/rss/drawable/everlasting_moonglow_gacha.png"];
        case "Lost Prayer to the Sacred Winds" : return [lang.lost_prayer_to_the_sacred_winds,"/rss/drawable/lost_prayer_to_the_sacred_winds_gacha.png"];
        case "Memory of Dust" : return [lang.memory_of_dust,"/rss/drawable/memory_of_dust_gacha.png"];
        case "Skyward Atlas" : return [lang.skyward_atlas,"/rss/drawable/skyward_atlas_gacha.png"];

        case "Hunter's Bow" : return [lang.hunters_bow,"/rss/drawable/hunters_bow_gacha.png"];
        case "Seasoned Hunter's Bow" : return [lang.seasoned_hunters_bow,"/rss/drawable/seasoned_hunters_bow_gacha.png"];
        case "Ebony Bow" : return [lang.ebony_bow,"/rss/drawable/ebony_bow_gacha.png"];
        case "Messenger" : return [lang.messenger,"/rss/drawable/messenger_gacha.png"];
        case "Raven Bow" : return [lang.raven_bow,"/rss/drawable/raven_bow_gacha.png"];
        case "Recurve Bow" : return [lang.recurve_bow,"/rss/drawable/recurve_bow_gacha.png"];
        case "Sharpshooter's Oath" : return [lang.sharpshooters_oath,"/rss/drawable/sharpshooters_oath_gacha.png"];
        case "Slingshot" : return [lang.slingshot,"/rss/drawable/slingshot_gacha.png"];
        case "Alley Hunter" : return [lang.alley_hunter,"/rss/drawable/alley_hunter_gacha.png"];
        case "Blackcliff Warbow" : return [lang.blackcliff_warbow,"/rss/drawable/blackcliff_warbow_gacha.png"];
        case "Compound Bow" : return [lang.compound_bow,"/rss/drawable/compound_bow_gacha.png"];
        case "Favonius Warbow" : return [lang.favonius_warbow,"/rss/drawable/favonius_warbow_gacha.png"];
        case "Hamayumi" : return [lang.hamayumi,"/rss/drawable/hamayumi_gacha.png"];
        case "Mitternachts Waltz" : return [lang.mitternachts_waltz,"/rss/drawable/mitternachts_waltz_gacha.png"];
        case "Predator" : return [lang.predator,"/rss/drawable/predator_gacha.png"];
        case "Prototype Crescent" : return [lang.prototype_crescent,"/rss/drawable/prototype_crescent_gacha.png"];
        case "Royal Bow" : return [lang.royal_bow,"/rss/drawable/royal_bow_gacha.png"];
        case "Rust" : return [lang.rust,"/rss/drawable/rust_gacha.png"];
        case "Sacrificial Bow" : return [lang.sacrificial_bow,"/rss/drawable/sacrificial_bow_gacha.png"];
        case "The Stringless" : return [lang.the_stringless,"/rss/drawable/the_stringless_gacha.png"];
        case "The Viridescent Hunt" : return [lang.the_viridescent_hunt,"/rss/drawable/the_viridescent_hunt_gacha.png"];
        case "Windblume Ode" : return [lang.windblume_ode,"/rss/drawable/windblume_ode_gacha.png"];
        case "Amos' Bow" : return [lang.amos_bow,"/rss/drawable/amos_bow_gacha.png"];
        case "Elegy for the End" : return [lang.elegy_for_the_end,"/rss/drawable/elegy_for_the_end_gacha.png"];
        case "Skyward Harp" : return [lang.skyward_harp,"/rss/drawable/skyward_harp_gacha.png"];
        case "Thundering Pulse" : return [lang.thundering_pulse,"/rss/drawable/thundering_pulse_gacha.png"];
        case "Mouun's Moon" : return [lang.mouuns_moon,"/rss/drawable/mouuns_moon_gacha.png"];
        //add in 20220126
        case "Kagura's Verity" : return [lang.kaguras_verity,"/rss/drawable/kaguras_verity_gacha.png"];
        case "Oathsworn Eye" : return [lang.oathsworn_eye,"/rss/drawable/oathsworn_eye_gacha.png"];
        //add in 20220329
        case "Haran Geppaku Futsu" : return [lang.haran_geppaku_futsu,"/rss/drawable/haran_geppaku_futsu_gacha.png"];
        // add in 20220521
        case "Aqua Simulacra" : return [lang.aqua_simulacra,"/rss/drawable/aqua_simulacra_gacha.png"];
        case "Kagotsurube Isshin" : return [lang.kagotsurube_isshin,"/rss/drawable/kagotsurube_isshin_gacha.png"];
        case "Fading Twilight" : return [lang.fading_twilight,"/rss/drawable/fading_twilight_gacha.png"];
        //add in 20220714
        case "Sapwood Blade" : return [lang.sapwood_blade,"/rss/drawable/timber_blade_gacha.png"];
        case "Forest Regalia" : return [lang.forest_regalia,"/rss/drawable/forest_regalia_gacha.png"];
        case "Moonpiercer" : return [lang.moonpiercer,"/rss/drawable/moonpiercer_gacha.png"];
        case "King's Squire" : return [lang.kings_squire,"/rss/drawable/kings_squire_gacha.png"];
        case "End of the Line" : return [lang.end_of_the_line,"/rss/drawable/trawler_gacha.png"];
        case "Hunter's Path" : return [lang.hunters_path,"/rss/drawable/hunters_path_gacha.png"];
        case "Fruit of Fulfillment" : return [lang.fruit_of_fulfillment,"/rss/drawable/fruit_of_fulfillment_gacha.png"];
        //add in 20220924
        case "Xiphos' Moonlight" : return [lang.xiphos_moonlight,"/rss/drawable/xiphos_moonlight_gacha.png"];
        case "Key of Khaj-Nisut" : return [lang.key_of_khaj_nisut,"/rss/drawable/key_of_khaj_nisut_gacha.png"];
        case "Makhaira Aquamarine" : return [lang.makhaira_aquamarine,"/rss/drawable/makhaira_aquamarine_gacha.png"];
        case "Missive Windspear" : return [lang.missive_windspear,"/rss/drawable/missive_windspear_gacha.png"];
        case "Staff of the Scarlet Sands" : return [lang.staff_of_the_scarlet_sands,"/rss/drawable/staff_of_the_scarlet_sands_gacha.png"];
        case "Wandering Evenstar" : return [lang.wandering_evenstar,"/rss/drawable/wandering_evenstar_gacha.png"];
        //add in 20221003
        case "A Thousand Floating Dreams" : return [lang.a_thousand_floating_dreams,"/rss/drawable/a_thousand_floating_dreams_gacha.png"];
        //add in 20221210
        case "Polar Star" : return [lang.polar_star,"/rss/drawable/polar_star_gacha.png"];
        case "Toukabou Shigure" : return [lang.toukabou_shigure,"/rss/drawable/toukabou_shigure_gacha.png"];
        case "Tulaytullah's Remembrance" : return [lang.tulaytullahs_remembrance,"/rss/drawable/tulaytullahs_remembrance_gacha.png"];
        //add in 20230118
        case "Light of Foliar Incision" : return [lang.light_of_foliar_incision,"/rss/drawable/light_of_foliar_incision_gacha.png"];


        default :
            return [str,"/rss/drawable/"+ new String(str).toLowerCase().replace("'","").replace(" ","_")+"_gacha.png"];
    }
}

exports.getWeaponNameByFileName = function (str){
    switch (str){
        case "amenoma_kageuchi" : return "Amenoma Kageuchi";
        case "aquila_favonia" : return "Aquila Favonia";
        case "blackcliff_longsword" : return "Blackcliff Longsword";
        case "cool_steel" : return "Cool Steel";
        case "dark_iron_sword" : return "Dark Iron Sword";
        case "dull_blade" : return "Dull Blade";
        case "favonius_sword" : return "Favonius Sword";
        case "festering_desire" : return "Festering Desire";
        case "fillet_blade" : return "Fillet Blade";
        case "freedom_sworn" : return "Freedom Sworn";
        case "harbinger_of_dawn" : return "Harbinger of Dawn";
        case "iron_sting" : return "Iron Sting";
        case "lions_roar" : return "Lion's Roar";
        case "mistsplitter_reforged" : return "Mistsplitter Reforged";
        case "primordial_jade_cutter" : return "Primordial Jade Cutter";
        case "prototype_rancour" : return "Prototype Rancour";
        case "royal_longsword" : return "Royal Longsword";
        case "sacrificial_sword" : return "Sacrificial Sword";
        case "silver_sword" : return "Silver Sword";
        case "skyrider_sword" : return "Skyrider Sword";
        case "skyward_blade" : return "Skyward Blade";
        case "summit_shaper" : return "Summit Shaper";
        case "sword_of_descension" : return "Sword of Descension";
        case "the_alley_flash" : return "The Alley Flash";
        case "the_black_sword" : return "The Black Sword";
        case "the_flute" : return "The Flute";
        case "travelers_handy_sword" : return "Traveler's Handy Sword";

        case "waster_greatsword" : return "Waster Greatsword";
        case "old_mercs_pal" : return "Old Merc's Pal";
        case "bloodtainted_greatsword" : return "Bloodtainted Greatsword";
        case "debate_club" : return "Debate Club";
        case "quartz" : return "Quartz";
        case "ferrous_shadow" : return "Ferrous Shadow";
        case "skyrider_greatsword" : return "Skyrider Greatsword";
        case "white_iron_greatsword" : return "White Iron Greatsword";
        case "blackcliff_slasher" : return "Blackcliff Slasher";
        case "favonius_greatsword" : return "Favonius Greatsword";
        case "katsuragikiri_nagamasa" : return "Katsuragikiri Nagamasa";
        case "lithic_blade" : return "Lithic Blade";
        case "luxurious_sea_lord" : return "Luxurious Sea-Lord";
        case "prototype_archaic" : return "Prototype Archaic";
        case "rainslasher" : return "Rainslasher";
        case "royal_greatsword" : return "Royal Greatsword";
        case "sacrificial_greatsword" : return "Sacrificial Greatsword";
        case "serpent_spine" : return "Serpent Spine";
        case "snow_tombed_starsilver" : return "Snow-Tombed Starsilver";
        case "the_bell" : return "The Bell";
        case "whiteblind" : return "Whiteblind";
        case "skyward_pride" : return "Skyward Pride";
        case "song_of_broken_pines" : return "Song of Broken Pines";
        case "the_unforged" : return "The Unforged";
        case "wolfs_gravestone" : return "Wolf's Gravestone";

        case "beginners_protector" : return "Beginner's Protector";
        case "iron_point" : return "Iron Point";
        case "black_tassel" : return "Black Tassel";
        case "halberd" : return "Halberd";
        case "white_tassel" : return "White Tassel";
        case "blackcliff_pole" : return "Blackcliff Pole";
        case "crescent_pike" : return "Crescent Pike";
        case "deathmatch" : return "Deathmatch";
        case "dragons_bane" : return "Dragon's Bane";
        case "dragonspine_spear" : return "Dragonspine Spear";
        case "favonius_lance" : return "Favonius Lance";
        case "kitain_cross_spear" : return "Kitain Cross Spear";
        case "lithic_spear" : return "Lithic Spear";
        case "prototype_starglitter" : return "Prototype Starglitter";
        case "royal_spear" : return "Royal Spear";
        case "the_catch" : return "The Catch";
        case "engulfing_lightning" : return "Engulfing Lightning";
        case "primordial_jade_winged_spear" : return "Primordial Jade Winged-Spear";
        case "skyward_spine" : return "Skyward Spine";
        case "staff_of_homa" : return "Staff of Homa";
        case "vortex_vanquisher" : return "Vortex Vanquisher";

        case "apprentices_notes" : return "Apprentice's Notes";
        case "pocket_grimoire" : return "Pocket Grimoire";
        case "amber_catalyst" : return "Amber Catalyst";
        case "emerald_orb" : return "Emerald Orb";
        case "magic_guide" : return "Magic Guide";
        case "otherworldly_story" : return "Otherworldly Story";
        case "thrilling_tales_of_dragon_slayers" : return "Thrilling Tales of Dragon Slayers";
        case "twin_nephrite" : return "Twin Nephrite";
        case "blackcliff_agate" : return "Blackcliff Agate";
        case "dodoco_tales" : return "Dodoco Tales";
        case "eye_of_perception" : return "Eye of Perception";
        case "favonius_codex" : return "Favonius Codex";
        case "frostbearer" : return "Frostbearer";
        case "hakushin_ring" : return "Hakushin Ring";
        case "mappa_mare" : return "Mappa Mare";
        case "prototype_amber" : return "Prototype Amber";
        case "royal_grimoire" : return "Royal Grimoire";
        case "sacrificial_fragments" : return "Sacrificial Fragments";
        case "solar_pearl" : return "Solar Pearl";
        case "the_widsith" : return "The Widsith";
        case "wine_and_song" : return "Wine and Song";
        case "everlasting_moonglow" : return "Everlasting Moonglow";
        case "lost_prayer_to_the_sacred_winds" : return "Lost Prayer to the Sacred Winds";
        case "memory_of_dust" : return "Memory of Dust";
        case "skyward_atlas" : return "Skyward Atlas";

        case "hunters_bow" : return "Hunter's Bow";
        case "seasoned_hunters_bow" : return "Seasoned Hunter's Bow";
        case "ebony_bow" : return "Ebony Bow";
        case "messenger" : return "Messenger";
        case "raven_bow" : return "Raven Bow";
        case "recurve_bow" : return "Recurve Bow";
        case "sharpshooters_oath" : return "Sharpshooter's Oath";
        case "slingshot" : return "Slingshot";
        case "alley_hunter" : return "Alley Hunter";
        case "blackcliff_warbow" : return "Blackcliff Warbow";
        case "compound_bow" : return "Compound Bow";
        case "favonius_warbow" : return "Favonius Warbow";
        case "hamayumi" : return "Hamayumi";
        case "mitternachts_waltz" : return "Mitternachts Waltz";
        case "predator" : return "Predator";
        case "prototype_crescent" : return "Prototype Crescent";
        case "royal_bow" : return "Royal Bow";
        case "rust" : return "Rust";
        case "sacrificial_bow" : return "Sacrificial Bow";
        case "the_stringless" : return "The Stringless";
        case "the_viridescent_hunt" : return "The Viridescent Hunt";
        case "windblume_ode" : return "Windblume Ode";
        case "amos_bow" : return "Amos' Bow";
        case "elegy_for_the_end" : return "Elegy for the End";
        case "skyward_harp" : return "Skyward Harp";
        case "thundering_pulse" : return "Thundering Pulse";

        // add in 20211030
        case "akuoumaru" : return "Akuoumaru";
        case "wavebreakers_fin" : return "Wavebreaker's Fin";
        case "mouuns_moon" : return "Mouun's Moon";
        // add in 20211127
        case "cinnabar_spindle" : return "Cinnabar Spindle";
        // add in 20220104
        case "redhorn_stonethresher" : return "Redhorn Stonethresher";
        case "calamity_queller" : return "Calamity Queller";
        // add in 20220126
        case "kaguras_verity" : return "Kagura's Verity";
        case "oathsworn_eye" : return "Oathsworn Eye";
        // add in 20220329
        case "haran_geppaku_futsu" : return "Haran Geppaku Futsu";
        // add in 20220521
        case "aqua_simulacra" : return "Aqua Simulacra";
        case "kagotsurube_isshin" : return "Kagotsurube Iisshin";
        case "fading_twilight" : return "Fading Twilight";
        //add in 20220714
        case "sapwood_blade" : return "Sapwood Blade";
        case "forest_regalia" : return "Forest Regalia";
        case "moonpiercer" : return "Moonpiercer";
        case "kings_squire" : return "King's Squire";
        case "end_of_the_line" : return "End of the Line";
        case "hunters_path" : return "Hunter's Path";
        case "fruit_of_fulfillment" : return "Fruit of Fulfillment" ;
        //add in 20220924
        case "xiphos_moonlight" : return "Xiphos' Moonlight" ;
        case "key_of_khaj_nisut" : return "Key of Khaj-Nisut" ;
        case "makhaira_aquamarine" : return "Makhaira Aquamarine" ;
        case "missive_windspear" : return "Missive Windspear" ;
        case "staff_of_the_scarlet_sands" : return "Staff of the Scarlet Sands" ;
        case "wandering_evenstar" : return "Wandering Evenstar" ;
        case "a_thousand_floating_dreams" : return "A Thousand Floating Dreams";
        //add in 20221210
        case "polar_star" : return "Polar Star" ;
        case "toukabou_shigure" : return "Toukabou Shigure" ;
        case "tulaytullahs_remembrance" : return "Tulaytullah's Remembrance";
        //add in 20230118
        case "light_of_foliar_incision" : return "Light of Foliar Incision";

        default: return str;
    }
}

exports.getArtifactByName = function (str){
    switch (str){
        case "Adventurer" : return [lang.adventurer,"/rss/drawable/adventurer_1.png","/rss/drawable/adventurer_2.png","/rss/drawable/adventurer_3.png","/rss/drawable/adventurer_4.png","/rss/drawable/adventurer_5.png"];
        case "Archaic Petra" : return [lang.archaic_petra,"/rss/drawable/archaic_petra_1.png","/rss/drawable/archaic_petra_2.png","/rss/drawable/archaic_petra_3.png","/rss/drawable/archaic_petra_4.png","/rss/drawable/archaic_petra_5.png"];
        case "Berserker" : return [lang.berserker,"/rss/drawable/berserker_1.png","/rss/drawable/berserker_2.png","/rss/drawable/berserker_3.png","/rss/drawable/berserker_4.png","/rss/drawable/berserker_5.png"];
        case "Blizzard Strayer" : return [lang.blizzard_strayer,"/rss/drawable/blizzard_strayer_1.png","/rss/drawable/blizzard_strayer_2.png","/rss/drawable/blizzard_strayer_3.png","/rss/drawable/blizzard_strayer_4.png","/rss/drawable/blizzard_strayer_5.png"];
        case "Bloodstained Chivalry" : return [lang.bloodstained_chivalry,"/rss/drawable/bloodstained_chivalry_1.png","/rss/drawable/bloodstained_chivalry_2.png","/rss/drawable/bloodstained_chivalry_3.png","/rss/drawable/bloodstained_chivalry_4.png","/rss/drawable/bloodstained_chivalry_5.png"];
        case "Brave Heart" : return [lang.brave_heart,"/rss/drawable/brave_heart_1.png","/rss/drawable/brave_heart_2.png","/rss/drawable/brave_heart_3.png","/rss/drawable/brave_heart_4.png","/rss/drawable/brave_heart_5.png"];
        case "Crimson Witch of Flames" : return [lang.crimson_witch_of_flames,"/rss/drawable/crimson_witch_of_flames_1.png","/rss/drawable/crimson_witch_of_flames_2.png","/rss/drawable/crimson_witch_of_flames_3.png","/rss/drawable/crimson_witch_of_flames_4.png","/rss/drawable/crimson_witch_of_flames_5.png"];
        case "Defender's Will" : return [lang.defenders_will,"/rss/drawable/defenders_will_1.png","/rss/drawable/defenders_will_2.png","/rss/drawable/defenders_will_3.png","/rss/drawable/defenders_will_4.png","/rss/drawable/defenders_will_5.png"];
        case "Emblem of Severed Fate" : return [lang.emblem_of_severed_fate,"/rss/drawable/emblem_of_severed_fate_1.png","/rss/drawable/emblem_of_severed_fate_2.png","/rss/drawable/emblem_of_severed_fate_3.png","/rss/drawable/emblem_of_severed_fate_4.png","/rss/drawable/emblem_of_severed_fate_5.png"];
        case "Gambler" : return [lang.gambler,"/rss/drawable/gambler_1.png","/rss/drawable/gambler_2.png","/rss/drawable/gambler_3.png","/rss/drawable/gambler_4.png","/rss/drawable/gambler_5.png"];
        case "Gladiator's Finale" : return [lang.gladiators_finale,"/rss/drawable/gladiators_finale_1.png","/rss/drawable/gladiators_finale_2.png","/rss/drawable/gladiators_finale_3.png","/rss/drawable/gladiators_finale_4.png","/rss/drawable/gladiators_finale_5.png"];
        case "Heart of Depth" : return [lang.heart_of_depth,"/rss/drawable/heart_of_depth_1.png","/rss/drawable/heart_of_depth_2.png","/rss/drawable/heart_of_depth_3.png","/rss/drawable/heart_of_depth_4.png","/rss/drawable/heart_of_depth_5.png"];
        case "Instructor" : return [lang.instructor,"/rss/drawable/instructor_1.png","/rss/drawable/instructor_2.png","/rss/drawable/instructor_3.png","/rss/drawable/instructor_4.png","/rss/drawable/instructor_5.png"];
        case "Lavawalker" : return [lang.lavawalker,"/rss/drawable/lavawalker_1.png","/rss/drawable/lavawalker_2.png","/rss/drawable/lavawalker_3.png","/rss/drawable/lavawalker_4.png","/rss/drawable/lavawalker_5.png"];
        case "Lucky Dog" : return [lang.lucky_dog,"/rss/drawable/lucky_dog_1.png","/rss/drawable/lucky_dog_2.png","/rss/drawable/lucky_dog_3.png","/rss/drawable/lucky_dog_4.png","/rss/drawable/lucky_dog_5.png"];
        case "Maiden Beloved" : return [lang.maiden_beloved,"/rss/drawable/maiden_beloved_1.png","/rss/drawable/maiden_beloved_2.png","/rss/drawable/maiden_beloved_3.png","/rss/drawable/maiden_beloved_4.png","/rss/drawable/maiden_beloved_5.png"];
        case "Martial Artist" : return [lang.martial_artist,"/rss/drawable/martial_artist_1.png","/rss/drawable/martial_artist_2.png","/rss/drawable/martial_artist_3.png","/rss/drawable/martial_artist_4.png","/rss/drawable/martial_artist_5.png"];
        case "Noblesse Oblige" : return [lang.noblesse_oblige,"/rss/drawable/noblesse_oblige_1.png","/rss/drawable/noblesse_oblige_2.png","/rss/drawable/noblesse_oblige_3.png","/rss/drawable/noblesse_oblige_4.png","/rss/drawable/noblesse_oblige_5.png"];
        case "Pale Flame" : return [lang.pale_flame,"/rss/drawable/pale_flame_1.png","/rss/drawable/pale_flame_2.png","/rss/drawable/pale_flame_3.png","/rss/drawable/pale_flame_4.png","/rss/drawable/pale_flame_5.png"];
        case "Prayers of Destiny" : return [lang.prayers_of_destiny,"/rss/drawable/prayers_of_destiny_4.png","/rss/drawable/prayers_of_destiny_4.png","/rss/drawable/prayers_of_destiny_4.png","/rss/drawable/prayers_of_destiny_4.png","/rss/drawable/prayers_of_destiny_4.png"];
        case "Prayers of Illumination" : return [lang.prayers_of_illumination,"/rss/drawable/prayers_of_illumination_4.png","/rss/drawable/prayers_of_illumination_4.png","/rss/drawable/prayers_of_illumination_4.png","/rss/drawable/prayers_of_illumination_4.png","/rss/drawable/prayers_of_illumination_4.png"];
        case "Prayers of Wisdom" : return [lang.prayers_of_wisdom,"/rss/drawable/prayers_of_wisdom_4.png","/rss/drawable/prayers_of_wisdom_4.png","/rss/drawable/prayers_of_wisdom_4.png","/rss/drawable/prayers_of_wisdom_4.png","/rss/drawable/prayers_of_wisdom_4.png"];
        case "Prayers of Springtime" : return [lang.prayers_of_springtime,"/rss/drawable/prayers_of_springtime_4.png","/rss/drawable/prayers_of_springtime_4.png","/rss/drawable/prayers_of_springtime_4.png","/rss/drawable/prayers_of_springtime_4.png","/rss/drawable/prayers_of_springtime_4.png"];
        case "Resolution of Sojourner" : return [lang.resolution_of_sojourner,"/rss/drawable/resolution_of_sojourner_1.png","/rss/drawable/resolution_of_sojourner_2.png","/rss/drawable/resolution_of_sojourner_3.png","/rss/drawable/resolution_of_sojourner_4.png","/rss/drawable/resolution_of_sojourner_5.png"];
        case "Retracing Bolide" : return [lang.retracing_bolide,"/rss/drawable/retracing_bolide_1.png","/rss/drawable/retracing_bolide_2.png","/rss/drawable/retracing_bolide_3.png","/rss/drawable/retracing_bolide_4.png","/rss/drawable/retracing_bolide_5.png"];
        case "Scholar" : return [lang.scholar,"/rss/drawable/scholar_1.png","/rss/drawable/scholar_2.png","/rss/drawable/scholar_3.png","/rss/drawable/scholar_4.png","/rss/drawable/scholar_5.png"];
        case "Shimenawa's Reminiscence" : return [lang.shimenawas_reminiscence,"/rss/drawable/shimenawas_reminiscence_1.png","/rss/drawable/shimenawas_reminiscence_2.png","/rss/drawable/shimenawas_reminiscence_3.png","/rss/drawable/shimenawas_reminiscence_4.png","/rss/drawable/shimenawas_reminiscence_5.png"];
        case "Tenacity of the Millelith" : return [lang.tenacity_of_the_millelith,"/rss/drawable/tenacity_of_the_millelith_1.png","/rss/drawable/tenacity_of_the_millelith_2.png","/rss/drawable/tenacity_of_the_millelith_3.png","/rss/drawable/tenacity_of_the_millelith_4.png","/rss/drawable/tenacity_of_the_millelith_5.png"];
        case "The Exile" : return [lang.the_exile,"/rss/drawable/the_exile_1.png","/rss/drawable/the_exile_2.png","/rss/drawable/the_exile_3.png","/rss/drawable/the_exile_4.png","/rss/drawable/the_exile_5.png"];
        case "Thundering Fury" : return [lang.thundering_fury,"/rss/drawable/thundering_fury_1.png","/rss/drawable/thundering_fury_2.png","/rss/drawable/thundering_fury_3.png","/rss/drawable/thundering_fury_4.png","/rss/drawable/thundering_fury_5.png"];
        case "Thunder-soother" : return [lang.thundersoother,"/rss/drawable/thundersoother_1.png","/rss/drawable/thundersoother_2.png","/rss/drawable/thundersoother_3.png","/rss/drawable/thundersoother_4.png","/rss/drawable/thundersoother_5.png"];
        case "Tiny Miracle" : return [lang.tiny_miracle,"/rss/drawable/tiny_miracle_1.png","/rss/drawable/tiny_miracle_2.png","/rss/drawable/tiny_miracle_3.png","/rss/drawable/tiny_miracle_4.png","/rss/drawable/tiny_miracle_5.png"];
        case "Traveling Doctor" : return [lang.traveling_doctor,"/rss/drawable/traveling_doctor_1.png","/rss/drawable/traveling_doctor_2.png","/rss/drawable/traveling_doctor_3.png","/rss/drawable/traveling_doctor_4.png","/rss/drawable/traveling_doctor_5.png"];
        case "Viridescent Venerer" : return [lang.viridescent_venerer,"/rss/drawable/viridescent_venerer_1.png","/rss/drawable/viridescent_venerer_2.png","/rss/drawable/viridescent_venerer_3.png","/rss/drawable/viridescent_venerer_4.png","/rss/drawable/viridescent_venerer_5.png"];
        case "Wanderer's Troupe" : return [lang.wanderers_troupe,"/rss/drawable/wanderers_troupe_1.png","/rss/drawable/wanderers_troupe_2.png","/rss/drawable/wanderers_troupe_3.png","/rss/drawable/wanderers_troupe_4.png","/rss/drawable/wanderers_troupe_5.png"];

        // add in 20211127
        case "Husk of Opulent Dreams" : return [lang.husk_of_opulent_dreams,"/rss/drawable/husk_of_opulent_dreams_1.png","/rss/drawable/husk_of_opulent_dreams_2.png","/rss/drawable/husk_of_opulent_dreams_3.png","/rss/drawable/husk_of_opulent_dreams_4.png","/rss/drawable/husk_of_opulent_dreams_5.png"];
        case "Ocean-Hued Clam" : return [lang.ocean_hued_clam,"/rss/drawable/ocean_hued_clam_1.png","/rss/drawable/ocean_hued_clam_2.png","/rss/drawable/ocean_hued_clam_3.png","/rss/drawable/ocean_hued_clam_4.png","/rss/drawable/ocean_hued_clam_5.png"];
        // add in 20220329
        case "Echoes of an Offering" : return [lang.echoes_of_an_offering,"/rss/drawable/echoes_of_an_offering_1.png","/rss/drawable/echoes_of_an_offering_2.png","/rss/drawable/echoes_of_an_offering_3.png","/rss/drawable/echoes_of_an_offering_4.png","/rss/drawable/echoes_of_an_offering_5.png"];
        case "Vermillion Hereafter" : return [lang.vermillion_hereafter,"/rss/drawable/vermillion_hereafter_1.png","/rss/drawable/vermillion_hereafter_2.png","/rss/drawable/vermillion_hereafter_3.png","/rss/drawable/vermillion_hereafter_4.png","/rss/drawable/vermillion_hereafter_5.png"];
        case "Deepwood Memories" : return [lang.deepwood_memories,"/rss/drawable/deepwood_memories_1.png","/rss/drawable/deepwood_memories_2.png","/rss/drawable/deepwood_memories_3.png","/rss/drawable/deepwood_memories_4.png","/rss/drawable/deepwood_memories_5.png"];
        case "Gilded Dreams" : return [lang.gilded_dreams,"/rss/drawable/gilded_dreams_1.png","/rss/drawable/gilded_dreams_2.png","/rss/drawable/gilded_dreams_3.png","/rss/drawable/gilded_dreams_4.png","/rss/drawable/gilded_dreams_5.png"];
        // add in 20221210
        case "Desert Pavilion Chronicle" : return [lang.desert_pavilion_chronicle,"/rss/drawable/desert_pavilion_chronicle_1.png","/rss/drawable/desert_pavilion_chronicle_2.png","/rss/drawable/desert_pavilion_chronicle_3.png","/rss/drawable/desert_pavilion_chronicle_4.png","/rss/drawable/desert_pavilion_chronicle_5.png"];
        case "Flower of Paradise Lost" : return [lang.flower_of_paradise_lost,"/rss/drawable/flower_of_paradise_lost_1.png","/rss/drawable/flower_of_paradise_lost_2.png","/rss/drawable/flower_of_paradise_lost_3.png","/rss/drawable/flower_of_paradise_lost_4.png","/rss/drawable/flower_of_paradise_lost_5.png"];

        default:
            return [str,"/rss/drawable/"+str+"1.png","/rss/drawable/"+str+"2.png","/rss/drawable/"+str+"3.png","/rss/drawable/"+str+"4.png","/rss/drawable/"+str+"5.png",];

    }
}

exports.getArtifactNameByFileName = function (str){
    switch (str){
        case "adventurer" : return "Adventurer";
        case "archaic_petra" : return "Archaic Petra";
        case "berserker" : return "Berserker";
        case "blizzard_strayer" : return "Blizzard Strayer";
        case "bloodstained_chivalry" : return "Bloodstained Chivalry";
        case "brave_heart" : return "Brave Heart";
        case "crimson_witch_of_flames" : return "Crimson Witch of Flames";
        case "defenders_will" : return "Defender's Will";
        case "emblem_of_severed_fate" : return "Emblem of Severed Fate";
        case "gambler" : return "Gambler";
        case "gladiators_finale" : return "Gladiator's Finale";
        case "heart_of_depth" : return "Heart of Depth";
        case "instructor" : return "Instructor";
        case "lavawalker" : return "Lavawalker";
        case "lucky_dog" : return "Lucky Dog";
        case "maiden_beloved" : return "Maiden Beloved";
        case "martial_artist" : return "Martial Artist";
        case "noblesse_oblige" : return "Noblesse Oblige";
        case "pale_flame" : return "Pale Flame";
        case "prayers_of_destiny" : return "Prayers of Destiny";
        case "prayers_of_illumination" : return "Prayers of Illumination";
        case "prayers_of_wisdom" : return "Prayers of Wisdom";
        case "prayers_of_springtime" : return "Prayers of Springtime";
        case "resolution_of_sojourner" : return "Resolution of Sojourner";
        case "retracing_bolide" : return "Retracing Bolide";
        case "scholar" : return "Scholar";
        case "shimenawas_reminiscence" : return "Shimenawa's Reminiscence";
        case "tenacity_of_the_millelith" : return "Tenacity of the Millelith";
        case "the_exile" : return "The Exile";
        case "thundering_fury" : return "Thundering Fury";
        case "thundersoother" : return "Thunder-soother";
        case "tiny_miracle" : return "Tiny Miracle";
        case "traveling_doctor" : return "Traveling Doctor";
        case "viridescent_venerer" : return "Viridescent Venerer";
        case "wanderers_troupe" : return "Wanderer's Troupe";
        // add in 20211127
        case "husk_of_opulent_dreams" : return "Husk of Opulent Dreams";
        case "ocean_hued_clam" : return "Ocean-Hued Clam";
        // add in 20220329
        case "echoes_of_an_offering" : return "Echoes of an Offering";
        case "vermillion_hereafter" : return "Vermillion Hereafter";
        // add in 20220821
        case "deepwood_memories" : return "Deepwood Memories";
        case "gilded_dreams" : return "Gilded Dreams";
        // add in 20221210
        case "desert_pavilion_chronicle" : return "Desert Pavilion Chronicle";
        case "flower_of_paradise_lost" : return "Flower of Paradise Lost";

        default: return str;
    }
}

// In Fact, we still haven't made enemy card.
exports.getTCGByName = function (name){
    switch (name){
        case "Ganyu" : return ["/rss/drawable/tcg_ganyu.png", lang.tcg_ganyu];
        case "Kaeya" : return ["/rss/drawable/tcg_kaeya.png", lang.tcg_kaeya];
        case "Chongyun" : return ["/rss/drawable/tcg_chongyun.png", lang.tcg_chongyun];
        case "Kamisato Ayaka" : return ["/rss/drawable/tcg_kamisato_ayaka.png", lang.tcg_kamisato_ayaka];
        case "Xingqiu" : return ["/rss/drawable/tcg_xingqiu.png", lang.tcg_xingqiu];
        case "Mona" : return ["/rss/drawable/tcg_mona.png", lang.tcg_mona];
        case "Diluc" : return ["/rss/drawable/tcg_diluc.png", lang.tcg_diluc];
        case "Xiangling" : return ["/rss/drawable/tcg_xiangling.png", lang.tcg_xiangling];
        case "Bennett" : return ["/rss/drawable/tcg_bennett.png", lang.tcg_bennett];
        case "Yoimiya" : return ["/rss/drawable/tcg_yoimiya.png", lang.tcg_yoimiya];
        case "Fischl" : return ["/rss/drawable/tcg_fischl.png", lang.tcg_fischl];
        case "Razor" : return ["/rss/drawable/tcg_razor.png", lang.tcg_razor];
        case "Keqing" : return ["/rss/drawable/tcg_keqing.png", lang.tcg_keqing];
        case "Sucrose" : return ["/rss/drawable/tcg_sucrose.png", lang.tcg_sucrose];
        case "Jean" : return ["/rss/drawable/tcg_jean.png", lang.tcg_jean];
        case "Ningguang" : return ["/rss/drawable/tcg_ningguang.png", lang.tcg_ningguang];
        case "Noelle" : return ["/rss/drawable/tcg_noelle.png", lang.tcg_noelle];
        case "Collei" : return ["/rss/drawable/tcg_collei.png", lang.tcg_collei];
        case "Rhodeia of Loch" : return ["/rss/drawable/tcg_rhodeia_of_loch.png", lang.tcg_rhodeia_of_loch];
        case "Fatui Pyro Agent" : return ["/rss/drawable/tcg_fatui_pyro_agent.png", lang.tcg_fatui_pyro_agent];
        case "Maguu Kenki" : return ["/rss/drawable/tcg_maguu_kenki.png", lang.tcg_maguu_kenki];
        case "Stonehide Lawachurl" : return ["/rss/drawable/tcg_stonehide_lawachurl.png", lang.tcg_stonehide_lawachurl];
        case "Diona" : return ["/rss/drawable/tcg_diona.png", lang.tcg_diona];
        case "Cyno" : return ["/rss/drawable/tcg_cyno.png", lang.tcg_cyno];
        case "Barbara" : return ["/rss/drawable/tcg_barbara.png", lang.tcg_barbara];
        case "Mirror Maiden" : return ["/rss/drawable/tcg_mirror_maiden.png", lang.tcg_mirror_maiden];
        case "Jadeplume Terrorshroom" : return ["/rss/drawable/tcg_jadeplume_terrorshroom.png", lang.tcg_jadeplume_terrorshroom];
        case "Undivided Heart" : return ["/rss/drawable/tcg_undivided_heart.png", lang.tcg_undivided_heart];
        case "Cold-Blooded Strike" : return ["/rss/drawable/tcg_cold_blooded_strike.png", lang.tcg_cold_blooded_strike];
        case "Steady Breathing" : return ["/rss/drawable/tcg_steady_breathing.png", lang.tcg_steady_breathing];
        case "Kanten Senmyou Blessing" : return ["/rss/drawable/tcg_kanten_senmyou_blessing.png", lang.tcg_kanten_senmyou_blessing];
        case "The Scent Remained" : return ["/rss/drawable/tcg_the_scent_remained.png", lang.tcg_the_scent_remained];
        case "Prophecy of Submersion" : return ["/rss/drawable/tcg_prophecy_of_submersion.png", lang.tcg_prophecy_of_submersion];
        case "Flowing Flame" : return ["/rss/drawable/tcg_flowing_flame.png", lang.tcg_flowing_flame];
        case "Crossfire" : return ["/rss/drawable/tcg_crossfire.png", lang.tcg_crossfire];
        case "Grand Expectation" : return ["/rss/drawable/tcg_grand_expectation.png", lang.tcg_grand_expectation];
        case "Naganohara Meteor Swarm" : return ["/rss/drawable/tcg_naganohara_meteor_swarm.png", lang.tcg_naganohara_meteor_swarm];
        case "Stellar Predator" : return ["/rss/drawable/tcg_stellar_predator.png", lang.tcg_stellar_predator];
        case "Awakening" : return ["/rss/drawable/tcg_awakening.png", lang.tcg_awakening];
        case "Thundering Penance" : return ["/rss/drawable/tcg_thundering_penance.png", lang.tcg_thundering_penance];
        case "Chaotic Entropy" : return ["/rss/drawable/tcg_chaotic_entropy.png", lang.tcg_chaotic_entropy];
        case "Lands of Dandelion" : return ["/rss/drawable/tcg_lands_of_dandelion.png", lang.tcg_lands_of_dandelion];
        case "Strategic Reserve" : return ["/rss/drawable/tcg_strategic_reserve.png", lang.tcg_strategic_reserve];
        case "I Got Your Back" : return ["/rss/drawable/tcg_i_got_your_back.png", lang.tcg_i_got_your_back];
        case "Floral Sidewinder" : return ["/rss/drawable/tcg_floral_sidewinder.png", lang.tcg_floral_sidewinder];
        case "Streaming Surge" : return ["/rss/drawable/tcg_streaming_surge.png", lang.tcg_streaming_surge];
        case "Paid in Full" : return ["/rss/drawable/tcg_paid_in_full.png", lang.tcg_paid_in_full];
        case "Transcendent Automaton" : return ["/rss/drawable/tcg_transcendent_automaton.png", lang.tcg_transcendent_automaton];
        case "Stonehide Reforged" : return ["/rss/drawable/tcg_stonehide_reforged.png", lang.tcg_stonehide_reforged];
        case "Shaken, Not Purred" : return ["/rss/drawable/tcg_shaken_not_purred.png", lang.tcg_shaken_not_purred];
        case "Featherfall Judgment" : return ["/rss/drawable/tcg_featherfall_judgment.png", lang.tcg_featherfall_judgment];
        case "Glorious Season" : return ["/rss/drawable/tcg_glorious_season.png", lang.tcg_glorious_season];
        case "Mirror Cage" : return ["/rss/drawable/tcg_mirror_cage.png", lang.tcg_mirror_cage];
        case "Proliferating Spores" : return ["/rss/drawable/tcg_proliferating_spores.png", lang.tcg_proliferating_spores];
        case "Magic Guide" : return ["/rss/drawable/tcg_magic_guide.png", lang.tcg_magic_guide];
        case "Sacrificial Fragments" : return ["/rss/drawable/tcg_sacrificial_fragments.png", lang.tcg_sacrificial_fragments];
        case "Skyward Atlas" : return ["/rss/drawable/tcg_skyward_atlas.png", lang.tcg_skyward_atlas];
        case "Raven Bow" : return ["/rss/drawable/tcg_raven_bow.png", lang.tcg_raven_bow];
        case "Sacrificial Bow" : return ["/rss/drawable/tcg_sacrificial_bow.png", lang.tcg_sacrificial_bow];
        case "Skyward Harp" : return ["/rss/drawable/tcg_skyward_harp.png", lang.tcg_skyward_harp];
        case "White Iron Greatsword" : return ["/rss/drawable/tcg_white_iron_greatsword.png", lang.tcg_white_iron_greatsword];
        case "Sacrificial Greatsword" : return ["/rss/drawable/tcg_sacrificial_greatsword.png", lang.tcg_sacrificial_greatsword];
        case "Wolf's Gravestone" : return ["/rss/drawable/tcg_wolfs_gravestone.png", lang.tcg_wolfs_gravestone];
        case "White Tassel" : return ["/rss/drawable/tcg_white_tassel.png", lang.tcg_white_tassel];
        case "Lithic Spear" : return ["/rss/drawable/tcg_lithic_spear.png", lang.tcg_lithic_spear];
        case "Skyward Spine" : return ["/rss/drawable/tcg_skyward_spine.png", lang.tcg_skyward_spine];
        case "Traveler's Handy Sword" : return ["/rss/drawable/tcg_travelers_handy_sword.png", lang.tcg_travelers_handy_sword];
        case "Sacrificial Sword" : return ["/rss/drawable/tcg_sacrificial_sword.png", lang.tcg_sacrificial_sword];
        case "Aquila Favonia" : return ["/rss/drawable/tcg_aquila_favonia.png", lang.tcg_aquila_favonia];
        case "Adventurer's Bandana" : return ["/rss/drawable/tcg_adventurers_bandana.png", lang.tcg_adventurers_bandana];
        case "Lucky Dog's Silver Circlet" : return ["/rss/drawable/tcg_lucky_dogs_silver_circlet.png", lang.tcg_lucky_dogs_silver_circlet];
        case "Traveling Doctor's Handkerchief" : return ["/rss/drawable/tcg_traveling_doctors_handkerchief.png", lang.tcg_traveling_doctors_handkerchief];
        case "Gambler's Earrings" : return ["/rss/drawable/tcg_gamblers_earrings.png", lang.tcg_gamblers_earrings];
        case "Instructor's Cap" : return ["/rss/drawable/tcg_instructors_cap.png", lang.tcg_instructors_cap];
        case "Exile's Circlet" : return ["/rss/drawable/tcg_exiles_circlet.png", lang.tcg_exiles_circlet];
        case "Broken Rime's Echo" : return ["/rss/drawable/tcg_broken_rimes_echo.png", lang.tcg_broken_rimes_echo];
        case "Blizzard Strayer" : return ["/rss/drawable/tcg_blizzard_strayer.png", lang.tcg_blizzard_strayer];
        case "Wine-Stained Tricorne" : return ["/rss/drawable/tcg_wine_stained_tricorne.png", lang.tcg_wine_stained_tricorne];
        case "Heart of Depth" : return ["/rss/drawable/tcg_heart_of_depth.png", lang.tcg_heart_of_depth];
        case "Witch's Scorching Hat" : return ["/rss/drawable/tcg_witchs_scorching_hat.png", lang.tcg_witchs_scorching_hat];
        case "Crimson Witch of Flames" : return ["/rss/drawable/tcg_crimson_witch_of_flames.png", lang.tcg_crimson_witch_of_flames];
        case "Thunder Summoner's Crown" : return ["/rss/drawable/tcg_thunder_summoners_crown.png", lang.tcg_thunder_summoners_crown];
        case "Thundering Fury" : return ["/rss/drawable/tcg_thundering_fury.png", lang.tcg_thundering_fury];
        case "Viridescent Venerer's Diadem" : return ["/rss/drawable/tcg_viridescent_venerers_diadem.png", lang.tcg_viridescent_venerers_diadem];
        case "Viridescent Venerer" : return ["/rss/drawable/tcg_viridescent_venerer.png", lang.tcg_viridescent_venerer];
        case "Mask of Solitude Basalt" : return ["/rss/drawable/tcg_mask_of_solitude_basalt.png", lang.tcg_mask_of_solitude_basalt];
        case "Archaic Petra" : return ["/rss/drawable/tcg_archaic_petra.png", lang.tcg_archaic_petra];
        case "Laurel Coronet" : return ["/rss/drawable/tcg_laurel_coronet.png", lang.tcg_laurel_coronet];
        case "Deepwood Memories" : return ["/rss/drawable/tcg_deepwood_memories.png", lang.tcg_deepwood_memories];
        case "Liyue Harbor Wharf" : return ["/rss/drawable/tcg_liyue_harbor_wharf.png", lang.tcg_liyue_harbor_wharf];
        case "Knights of Favonius Library" : return ["/rss/drawable/tcg_knights_of_favonius_library.png", lang.tcg_knights_of_favonius_library];
        case "Jade Chamber" : return ["/rss/drawable/tcg_jade_chamber.png", lang.tcg_jade_chamber];
        case "Dawn Winery" : return ["/rss/drawable/tcg_dawn_winery.png", lang.tcg_dawn_winery];
        case "Wangshu Inn" : return ["/rss/drawable/tcg_wangshu_inn.png", lang.tcg_wangshu_inn];
        case "Favonius Cathedral" : return ["/rss/drawable/tcg_favonius_cathedral.png", lang.tcg_favonius_cathedral];
        case "Paimon" : return ["/rss/drawable/tcg_paimon.png", lang.tcg_paimon];
        case "Katheryne" : return ["/rss/drawable/tcg_katheryne.png", lang.tcg_katheryne];
        case "Timaeus" : return ["/rss/drawable/tcg_timaeus.png", lang.tcg_timaeus];
        case "Wagner" : return ["/rss/drawable/tcg_wagner.png", lang.tcg_wagner];
        case "Chef Mao" : return ["/rss/drawable/tcg_chef_mao.png", lang.tcg_chef_mao];
        case "Tubby" : return ["/rss/drawable/tcg_tubby.png", lang.tcg_tubby];
        case "Timmie" : return ["/rss/drawable/tcg_timmie.png", lang.tcg_timmie];
        case "Liben" : return ["/rss/drawable/tcg_liben.png", lang.tcg_liben];
        case "Chang the Ninth" : return ["/rss/drawable/tcg_chang_the_ninth.png", lang.tcg_chang_the_ninth];
        case "Ellin" : return ["/rss/drawable/tcg_ellin.png", lang.tcg_ellin];
        case "Iron Tongue Tian" : return ["/rss/drawable/tcg_iron_tongue_tian.png", lang.tcg_iron_tongue_tian];
        case "Liu Su" : return ["/rss/drawable/tcg_liu_su.png", lang.tcg_liu_su];
        case "Parametric Transformer" : return ["/rss/drawable/tcg_parametric_transformer.png", lang.tcg_parametric_transformer];
        case "NRE" : return ["/rss/drawable/tcg_nre.png", lang.tcg_nre];
        case "Elemental Resonance: Woven Ice" : return ["/rss/drawable/tcg_elemental_resonance_woven_ice.png", lang.tcg_elemental_resonance_woven_ice];
        case "Elemental Resonance: Shattering Ice" : return ["/rss/drawable/tcg_elemental_resonance_shattering_ice.png", lang.tcg_elemental_resonance_shattering_ice];
        case "Elemental Resonance: Woven Waters" : return ["/rss/drawable/tcg_elemental_resonance_woven_waters.png", lang.tcg_elemental_resonance_woven_waters];
        case "Elemental Resonance: Soothing Water" : return ["/rss/drawable/tcg_elemental_resonance_soothing_water.png", lang.tcg_elemental_resonance_soothing_water];
        case "Elemental Resonance: Woven Flames" : return ["/rss/drawable/tcg_elemental_resonance_woven_flames.png", lang.tcg_elemental_resonance_woven_flames];
        case "Elemental Resonance: Fervent Flames" : return ["/rss/drawable/tcg_elemental_resonance_fervent_flames.png", lang.tcg_elemental_resonance_fervent_flames];
        case "Elemental Resonance: Woven Thunder" : return ["/rss/drawable/tcg_elemental_resonance_woven_thunder.png", lang.tcg_elemental_resonance_woven_thunder];
        case "Elemental Resonance: High Voltage" : return ["/rss/drawable/tcg_elemental_resonance_high_voltage.png", lang.tcg_elemental_resonance_high_voltage];
        case "Elemental Resonance: Woven Winds" : return ["/rss/drawable/tcg_elemental_resonance_woven_winds.png", lang.tcg_elemental_resonance_woven_winds];
        case "Elemental Resonance: Impetuous Winds" : return ["/rss/drawable/tcg_elemental_resonance_impetuous_winds.png", lang.tcg_elemental_resonance_impetuous_winds];
        case "Elemental Resonance: Woven Stone" : return ["/rss/drawable/tcg_elemental_resonance_woven_stone.png", lang.tcg_elemental_resonance_woven_stone];
        case "Elemental Resonance: Enduring Rock" : return ["/rss/drawable/tcg_elemental_resonance_enduring_rock.png", lang.tcg_elemental_resonance_enduring_rock];
        case "Elemental Resonance: Woven Weeds" : return ["/rss/drawable/tcg_elemental_resonance_woven_weeds.png", lang.tcg_elemental_resonance_woven_weeds];
        case "Elemental Resonance: Sprawling Greenery" : return ["/rss/drawable/tcg_elemental_resonance_sprawling_greenery.png", lang.tcg_elemental_resonance_sprawling_greenery];
        case "The Bestest Travel Companion!" : return ["/rss/drawable/tcg_the_bestest_travel_companion.png", lang.tcg_the_bestest_travel_companion];
        case "Changing Shifts" : return ["/rss/drawable/tcg_changing_shifts.png", lang.tcg_changing_shifts];
        case "Toss-Up" : return ["/rss/drawable/tcg_toss_up.png", lang.tcg_toss_up];
        case "Strategize" : return ["/rss/drawable/tcg_strategize.png", lang.tcg_strategize];
        case "I Haven't Lost Yet!" : return ["/rss/drawable/tcg_i_havent_lost_yet.png", lang.tcg_i_havent_lost_yet];
        case "Leave it to Me!" : return ["/rss/drawable/tcg_leave_it_to_me.png", lang.tcg_leave_it_to_me];
        case "When the Crane Returned" : return ["/rss/drawable/tcg_when_the_crane_returned.png", lang.tcg_when_the_crane_returned];
        case "Starsigns" : return ["/rss/drawable/tcg_starsigns.png", lang.tcg_starsigns];
        case "Calx's Arts" : return ["/rss/drawable/tcg_calxs_arts.png", lang.tcg_calxs_arts];
        case "Master of Weaponry" : return ["/rss/drawable/tcg_master_of_weaponry.png", lang.tcg_master_of_weaponry];
        case "Blessing of the Divine Relic's Installation" : return ["/rss/drawable/tcg_blessing_of_the_divine_relics_installation.png", lang.tcg_blessing_of_the_divine_relics_installation];
        case "Quick Knit" : return ["/rss/drawable/tcg_quick_knit.png", lang.tcg_quick_knit];
        case "Send Off" : return ["/rss/drawable/tcg_send_off.png", lang.tcg_send_off];
        case "Guardian's Oath" : return ["/rss/drawable/tcg_guardians_oath.png", lang.tcg_guardians_oath];
        case "Abyssal Summons" : return ["/rss/drawable/tcg_abyssal_summons.png", lang.tcg_abyssal_summons];
        case "Jueyun Guoba" : return ["/rss/drawable/tcg_jueyun_guoba.png", lang.tcg_jueyun_guoba];
        case "Adeptus' Temptation" : return ["/rss/drawable/tcg_adeptus_temptation.png", lang.tcg_adeptus_temptation];
        case "Lotus Flower Crisp" : return ["/rss/drawable/tcg_lotus_flower_crisp.png", lang.tcg_lotus_flower_crisp];
        case "Northern Smoked Chicken" : return ["/rss/drawable/tcg_northern_smoked_chicken.png", lang.tcg_northern_smoked_chicken];
        case "Sweet Madame" : return ["/rss/drawable/tcg_sweet_madame.png", lang.tcg_sweet_madame];
        case "Mondstadt Hash Brown" : return ["/rss/drawable/tcg_mondstadt_hash_brown.png", lang.tcg_mondstadt_hash_brown];
        case "Mushroom Pizza" : return ["/rss/drawable/tcg_mushroom_pizza.png", lang.tcg_mushroom_pizza];
        case "Minty Meat Rolls" : return ["/rss/drawable/tcg_minty_meat_rolls.png", lang.tcg_minty_meat_rolls];
        case "Origin" : return ["/rss/drawable/tcg_origin.png", lang.tcg_origin];
        case "Mondstadt" : return ["/rss/drawable/tcg_mondstadt.png", lang.tcg_mondstadt];
        case "Liyue" : return ["/rss/drawable/tcg_liyue.png", lang.tcg_liyue];
        case "Inazuma" : return ["/rss/drawable/tcg_inazuma.png", lang.tcg_inazuma];
        case "Sumeru" : return ["/rss/drawable/tcg_sumeru.png", lang.tcg_sumeru];
        case "Legend" : return ["/rss/drawable/tcg_legend.png", lang.tcg_legend];
        case "Adept" : return ["/rss/drawable/tcg_adept.png", lang.tcg_adept];
        case "Hydro Crystal Chunk" : return ["/rss/drawable/tcg_hydro_crystal_chunk.png", lang.tcg_hydro_crystal_chunk];
        case "Magical Crystal Chunk" : return ["/rss/drawable/tcg_magical_crystal_chunk.png", lang.tcg_magical_crystal_chunk];
        case "Amethyst Lump" : return ["/rss/drawable/tcg_amethyst_lump.png", lang.tcg_amethyst_lump];
        case "Flaming Flower Stamen" : return ["/rss/drawable/tcg_flaming_flower_stamen.png", lang.tcg_flaming_flower_stamen];
        case "Mist Flower Corolla" : return ["/rss/drawable/tcg_mist_flower_corolla.png", lang.tcg_mist_flower_corolla];
        case "Electro Crystal" : return ["/rss/drawable/tcg_electro_crystal.png", lang.tcg_electro_crystal];
        case "Dandelion Seed" : return ["/rss/drawable/tcg_dandelion_seed.png", lang.tcg_dandelion_seed];
        case "Cecilia" : return ["/rss/drawable/tcg_cecilia.png", lang.tcg_cecilia];
        case "Glaze Lily" : return ["/rss/drawable/tcg_glaze_lily.png", lang.tcg_glaze_lily];
        case "Dendrobium" : return ["/rss/drawable/tcg_dendrobium.png", lang.tcg_dendrobium];
        //add in 20230118
        case "Klee" : return ["/rss/drawable/tcg_klee.png", lang.tcg_klee];
        case "Beidou" : return ["/rss/drawable/tcg_beidou.png", lang.tcg_beidou];
        case "Lightning Storm" : return ["/rss/drawable/tcg_lightning_storm.png", lang.tcg_lightning_storm];
        case "Pounding Surprise" : return ["/rss/drawable/tcg_pounding_surprise.png", lang.tcg_pounding_surprise];

        default: return [
                "/rss/drawable/tcg"+new String(name).toLowerCase()
                        .replace("'","")
                        .replace(":","")
                        .replace(" ","_")
                        .replace(",","")
                        .replace("-","_")
                        +".png", name];

    }
}

// Since it isn't in use, so 3.4 wont update it.. 20230118
exports.getTCGByFileName = function (name){
    switch (name){
        case "tcg_ganyu" : return "Ganyu";
        case "tcg_kaeya" : return "Kaeya";
        case "tcg_chongyun" : return "Chongyun";
        case "tcg_kamisato_ayaka" : return "Kamisato Ayaka";
        case "tcg_xingqiu" : return "Xingqiu";
        case "tcg_mona" : return "Mona";
        case "tcg_diluc" : return "Diluc";
        case "tcg_xiangling" : return "Xiangling";
        case "tcg_bennett" : return "Bennett";
        case "tcg_yoimiya" : return "Yoimiya";
        case "tcg_fischl" : return "Fischl";
        case "tcg_razor" : return "Razor";
        case "tcg_keqing" : return "Keqing";
        case "tcg_sucrose" : return "Sucrose";
        case "tcg_jean" : return "Jean";
        case "tcg_ningguang" : return "Ningguang";
        case "tcg_noelle" : return "Noelle";
        case "tcg_collei" : return "Collei";
        case "tcg_rhodeia_of_loch" : return "Rhodeia of Loch";
        case "tcg_fatui_pyro_agent" : return "Fatui Pyro Agent";
        case "tcg_maguu_kenki" : return "Maguu Kenki";
        case "tcg_stonehide_lawachurl" : return "Stonehide Lawachurl";
        case "tcg_diona" : return "Diona";
        case "tcg_cyno" : return "Cyno";
        case "tcg_barbara" : return "Barbara";
        case "tcg_mirror_maiden" : return "Mirror Maiden";
        case "tcg_jadeplume_terrorshroom" : return "Jadeplume Terrorshroom";
        case "tcg_undivided_heart" : return "Undivided Heart";
        case "tcg_cold_blooded_strike" : return "Cold-Blooded Strike";
        case "tcg_steady_breathing" : return "Steady Breathing";
        case "tcg_kanten_senmyou_blessing" : return "Kanten Senmyou Blessing";
        case "tcg_the_scent_remained" : return "The Scent Remained";
        case "tcg_prophecy_of_submersion" : return "Prophecy of Submersion";
        case "tcg_flowing_flame" : return "Flowing Flame";
        case "tcg_crossfire" : return "Crossfire";
        case "tcg_grand_expectation" : return "Grand Expectation";
        case "tcg_naganohara_meteor_swarm" : return "Naganohara Meteor Swarm";
        case "tcg_stellar_predator" : return "Stellar Predator";
        case "tcg_awakening" : return "Awakening";
        case "tcg_thundering_penance" : return "Thundering Penance";
        case "tcg_chaotic_entropy" : return "Chaotic Entropy";
        case "tcg_lands_of_dandelion" : return "Lands of Dandelion";
        case "tcg_strategic_reserve" : return "Strategic Reserve";
        case "tcg_i_got_your_back" : return "I Got Your Back";
        case "tcg_floral_sidewinder" : return "Floral Sidewinder";
        case "tcg_streaming_surge" : return "Streaming Surge";
        case "tcg_paid_in_full" : return "Paid in Full";
        case "tcg_transcendent_automaton" : return "Transcendent Automaton";
        case "tcg_stonehide_reforged" : return "Stonehide Reforged";
        case "tcg_shaken_not_purred" : return "Shaken, Not Purred";
        case "tcg_featherfall_judgment" : return "Featherfall Judgment";
        case "tcg_glorious_season" : return "Glorious Season";
        case "tcg_mirror_cage" : return "Mirror Cage";
        case "tcg_proliferating_spores" : return "Proliferating Spores";
        case "tcg_magic_guide" : return "Magic Guide";
        case "tcg_sacrificial_fragments" : return "Sacrificial Fragments";
        case "tcg_skyward_atlas" : return "Skyward Atlas";
        case "tcg_raven_bow" : return "Raven Bow";
        case "tcg_sacrificial_bow" : return "Sacrificial Bow";
        case "tcg_skyward_harp" : return "Skyward Harp";
        case "tcg_white_iron_greatsword" : return "White Iron Greatsword";
        case "tcg_sacrificial_greatsword" : return "Sacrificial Greatsword";
        case "tcg_wolfs_gravestone" : return "Wolf's Gravestone";
        case "tcg_white_tassel" : return "White Tassel";
        case "tcg_lithic_spear" : return "Lithic Spear";
        case "tcg_skyward_spine" : return "Skyward Spine";
        case "tcg_travelers_handy_sword" : return "Traveler's Handy Sword";
        case "tcg_sacrificial_sword" : return "Sacrificial Sword";
        case "tcg_aquila_favonia" : return "Aquila Favonia";
        case "tcg_adventurers_bandana" : return "Adventurer's Bandana";
        case "tcg_lucky_dogs_silver_circlet" : return "Lucky Dog's Silver Circlet";
        case "tcg_traveling_doctors_handkerchief" : return "Traveling Doctor's Handkerchief";
        case "tcg_gamblers_earrings" : return "Gambler's Earrings";
        case "tcg_instructors_cap" : return "Instructor's Cap";
        case "tcg_exiles_circlet" : return "Exile's Circlet";
        case "tcg_broken_rimes_echo" : return "Broken Rime's Echo";
        case "tcg_blizzard_strayer" : return "Blizzard Strayer";
        case "tcg_wine_stained_tricorne" : return "Wine-Stained Tricorne";
        case "tcg_heart_of_depth" : return "Heart of Depth";
        case "tcg_witchs_scorching_hat" : return "Witch's Scorching Hat";
        case "tcg_crimson_witch_of_flames" : return "Crimson Witch of Flames";
        case "tcg_thunder_summoners_crown" : return "Thunder Summoner's Crown";
        case "tcg_thundering_fury" : return "Thundering Fury";
        case "tcg_viridescent_venerers_diadem" : return "Viridescent Venerer's Diadem";
        case "tcg_viridescent_venerer" : return "Viridescent Venerer";
        case "tcg_mask_of_solitude_basalt" : return "Mask of Solitude Basalt";
        case "tcg_archaic_petra" : return "Archaic Petra";
        case "tcg_laurel_coronet" : return "Laurel Coronet";
        case "tcg_deepwood_memories" : return "Deepwood Memories";
        case "tcg_liyue_harbor_wharf" : return "Liyue Harbor Wharf";
        case "tcg_knights_of_favonius_library" : return "Knights of Favonius Library";
        case "tcg_jade_chamber" : return "Jade Chamber";
        case "tcg_dawn_winery" : return "Dawn Winery";
        case "tcg_wangshu_inn" : return "Wangshu Inn";
        case "tcg_favonius_cathedral" : return "Favonius Cathedral";
        case "tcg_paimon" : return "Paimon";
        case "tcg_katheryne" : return "Katheryne";
        case "tcg_timaeus" : return "Timaeus";
        case "tcg_wagner" : return "Wagner";
        case "tcg_chef_mao" : return "Chef Mao";
        case "tcg_tubby" : return "Tubby";
        case "tcg_timmie" : return "Timmie";
        case "tcg_liben" : return "Liben";
        case "tcg_chang_the_ninth" : return "Chang the Ninth";
        case "tcg_ellin" : return "Ellin";
        case "tcg_iron_tongue_tian" : return "Iron Tongue Tian";
        case "tcg_liu_su" : return "Liu Su";
        case "tcg_parametric_transformer" : return "Parametric Transformer";
        case "tcg_nre" : return "NRE";
        case "tcg_elemental_resonance_woven_ice" : return "Elemental Resonance: Woven Ice";
        case "tcg_elemental_resonance_shattering_ice" : return "Elemental Resonance: Shattering Ice";
        case "tcg_elemental_resonance_woven_waters" : return "Elemental Resonance: Woven Waters";
        case "tcg_elemental_resonance_soothing_water" : return "Elemental Resonance: Soothing Water";
        case "tcg_elemental_resonance_woven_flames" : return "Elemental Resonance: Woven Flames";
        case "tcg_elemental_resonance_fervent_flames" : return "Elemental Resonance: Fervent Flames";
        case "tcg_elemental_resonance_woven_thunder" : return "Elemental Resonance: Woven Thunder";
        case "tcg_elemental_resonance_high_voltage" : return "Elemental Resonance: High Voltage";
        case "tcg_elemental_resonance_woven_winds" : return "Elemental Resonance: Woven Winds";
        case "tcg_elemental_resonance_impetuous_winds" : return "Elemental Resonance: Impetuous Winds";
        case "tcg_elemental_resonance_woven_stone" : return "Elemental Resonance: Woven Stone";
        case "tcg_elemental_resonance_enduring_rock" : return "Elemental Resonance: Enduring Rock";
        case "tcg_elemental_resonance_woven_weeds" : return "Elemental Resonance: Woven Weeds";
        case "tcg_elemental_resonance_sprawling_greenery" : return "Elemental Resonance: Sprawling Greenery";
        case "tcg_the_bestest_travel_companion" : return "The Bestest Travel Companion!";
        case "tcg_changing_shifts" : return "Changing Shifts";
        case "tcg_toss_up" : return "Toss-Up";
        case "tcg_strategize" : return "Strategize";
        case "tcg_i_havent_lost_yet" : return "I Haven't Lost Yet!";
        case "tcg_leave_it_to_me" : return "Leave it to Me!";
        case "tcg_when_the_crane_returned" : return "When the Crane Returned";
        case "tcg_starsigns" : return "Starsigns";
        case "tcg_calxs_arts" : return "Calx's Arts";
        case "tcg_master_of_weaponry" : return "Master of Weaponry";
        case "tcg_blessing_of_the_divine_relics_installation" : return "Blessing of the Divine Relic's Installation";
        case "tcg_quick_knit" : return "Quick Knit";
        case "tcg_send_off" : return "Send Off";
        case "tcg_guardians_oath" : return "Guardian's Oath";
        case "tcg_abyssal_summons" : return "Abyssal Summons";
        case "tcg_jueyun_guoba" : return "Jueyun Guoba";
        case "tcg_adeptus_temptation" : return "Adeptus' Temptation";
        case "tcg_lotus_flower_crisp" : return "Lotus Flower Crisp";
        case "tcg_northern_smoked_chicken" : return "Northern Smoked Chicken";
        case "tcg_sweet_madame" : return "Sweet Madame";
        case "tcg_mondstadt_hash_brown" : return "Mondstadt Hash Brown";
        case "tcg_mushroom_pizza" : return "Mushroom Pizza";
        case "tcg_minty_meat_rolls" : return "Minty Meat Rolls";
        case "tcg_origin" : return "Origin";
        case "tcg_mondstadt" : return "Mondstadt";
        case "tcg_liyue" : return "Liyue";
        case "tcg_inazuma" : return "Inazuma";
        case "tcg_sumeru" : return "Sumeru";
        case "tcg_legend" : return "Legend";
        case "tcg_adept" : return "Adept";
        case "tcg_hydro_crystal_chunk" : return "Hydro Crystal Chunk";
        case "tcg_magical_crystal_chunk" : return "Magical Crystal Chunk";
        case "tcg_amethyst_lump" : return "Amethyst Lump";
        case "tcg_flaming_flower_stamen" : return "Flaming Flower Stamen";
        case "tcg_mist_flower_corolla" : return "Mist Flower Corolla";
        case "tcg_electro_crystal" : return "Electro Crystal";
        case "tcg_dandelion_seed" : return "Dandelion Seed";
        case "tcg_cecilia" : return "Cecilia";
        case "tcg_glaze_lily" : return "Glaze Lily";
        case "tcg_dendrobium" : return "Dendrobium";
        default: return name;
    }
}

exports.getTypeLocaleByName = function (type){
    switch (type){
        case "CHAR" : return lang.tcg_type_char
        case "EQUIP": return lang.tcg_type_equip
        case "SUPPORT": return lang.tcg_type_support
        case "EVENT": return lang.tcg_type_event
        case "BACKSIDE": return lang.tcg_type_backside
        default: return lang.unknown
    }
}

/**
    * @param name is Char's Identify Name -> JSON
    * @return IMG_ID , NAME_LOCAL , FULL_IMG_ID , ICO_IMG_ID , CARD_ID
*/

/**EDIT WHEN ADD NEW ITEMS*/
exports.getCharByName = function (name, isCharChangeEventSuit){
    if(isCharChangeEventSuit == true){
        switch (name) {
            case "Ningguang": return ["/rss/drawable/ningguang_suit1_gacha_splash.png",lang.ningguang, "/rss/drawable/ningguang_suit1_gacha_splash.png", "/rss/drawable/ningguang_suit1_ico.png", "/rss/drawable/ningguang_card.png"];
            case "Barbara": return ["/rss/drawable/barbara_suit1_gacha_splash.png",lang.barbara, "/rss/drawable/barbara_suit1_gacha_splash.png", "/rss/drawable/barbara_suit1_ico.png", "/rss/drawable/barbara_card.png"];
            case "Jean": return ["/rss/drawable/jean_suit2_gacha_splash.png",lang.jean, "/rss/drawable/jean_suit2_gacha_splash.png", "/rss/drawable/jean_suit2_ico.png", "/rss/drawable/jean_card.png"];
            case "Keqing": return ["/rss/drawable/keqing_suit1_gacha_splash.png",lang.keqing, "/rss/drawable/keqing_suit1_gacha_splash.png", "/rss/drawable/keqing_suit1_ico.png", "/rss/drawable/keqing_card.png"];
            case "Diluc": return ["/rss/drawable/diluc_suit1_gacha_splash.png",lang.diluc, "/rss/drawable/diluc_suit1_gacha_splash.png", "/rss/drawable/diluc_suit1_ico.png", "/rss/drawable/diluc_card.png"];
            case "Fischl": return ["/rss/drawable/fischl_suit1_gacha_splash.png",lang.fischl, "/rss/drawable/fischl_suit1_gacha_splash.png", "/rss/drawable/fischl_suit1_ico.png", "/rss/drawable/fischl_card.png"];
        }
    }else{
        switch (name) {
            case "Alhaitham": return ["/rss/drawable/alhaitham_full.png",lang.alhaitham, "/rss/drawable/alhaitham_gacha_splash.png", "/rss/drawable/alhaitham_ico.png", "/rss/drawable/alhaitham_card.png"];
            case "Yaoyao": return ["/rss/drawable/yaoyao_full.png",lang.yaoyao, "/rss/drawable/yaoyao_gacha_splash.png", "/rss/drawable/yaoyao_ico.png", "/rss/drawable/yaoyao_card.png"];
    
            case "Faruzan": return ["/rss/drawable/faruzan_full.png",lang.faruzan, "/rss/drawable/faruzan_gacha_splash.png", "/rss/drawable/faruzan_ico.png", "/rss/drawable/faruzan_card.png"];
            case "Wanderer": return ["/rss/drawable/wanderer_full.png",lang.wanderer, "/rss/drawable/wanderer_gacha_splash.png", "/rss/drawable/wanderer_ico.png", "/rss/drawable/wanderer_card.png"];
    
            case "Nahida": return ["/rss/drawable/nahida_full.png",lang.nahida, "/rss/drawable/nahida_gacha_splash.png", "/rss/drawable/nahida_ico.png", "/rss/drawable/nahida_card.png"];
            case "Layla": return ["/rss/drawable/layla_full.png",lang.layla, "/rss/drawable/layla_gacha_splash.png", "/rss/drawable/layla_ico.png", "/rss/drawable/layla_card.png"];
    
            case "Nilou": return ["/rss/drawable/nilou_full.png",lang.nilou, "/rss/drawable/nilou_gacha_splash.png", "/rss/drawable/nilou_ico.png", "/rss/drawable/nilou_card.png"];
            case "Cyno": return ["/rss/drawable/cyno_full.png",lang.cyno, "/rss/drawable/cyno_gacha_splash.png", "/rss/drawable/cyno_ico.png", "/rss/drawable/cyno_card.png"];
            case "Candace": return ["/rss/drawable/candace_full.png",lang.candace, "/rss/drawable/candace_gacha_splash.png", "/rss/drawable/candace_ico.png", "/rss/drawable/candace_card.png"];
    
            case "Collei": return ["/rss/drawable/collei_full.png",lang.collei, "/rss/drawable/collei_gacha_splash.png", "/rss/drawable/collei_ico.png", "/rss/drawable/collei_card.png"];
            case "Dori": return ["/rss/drawable/dori_full.png",lang.dori, "/rss/drawable/dori_gacha_splash.png", "/rss/drawable/dori_ico.png", "/rss/drawable/dori_card.png"];
            case "Tighnari": return ["/rss/drawable/tighnari_full.png",lang.tighnari, "/rss/drawable/tighnari_gacha_splash.png", "/rss/drawable/tighnari_ico.png", "/rss/drawable/tighnari_card.png"];
            case "Shikanoin Heizou": return ["/rss/drawable/shikanoin_heizou_full.png",lang.shikanoin_heizou, "/rss/drawable/shikanoin_heizou_gacha_splash.png", "/rss/drawable/shikanoin_heizou_ico.png", "/rss/drawable/shikanoin_heizou_card.png"];
            case "Kuki Shinobu": return ["/rss/drawable/kuki_shinobu_full.png",lang.kuki_shinobu, "/rss/drawable/kuki_shinobu_gacha_splash.png", "/rss/drawable/kuki_shinobu_ico.png", "/rss/drawable/kuki_shinobu_card.png"];
            case "Yelan": return ["/rss/drawable/yelan_full.png",lang.yelan, "/rss/drawable/yelan_gacha_splash.png", "/rss/drawable/yelan_ico.png", "/rss/drawable/yelan_card.png"];
            case "Kamisato Ayato": return ["/rss/drawable/kamisato_ayato_full.png",lang.kamisato_ayato, "/rss/drawable/kamisato_ayato_gacha_splash.png", "/rss/drawable/kamisato_ayato_ico.png", "/rss/drawable/kamisato_ayato_card.png"];
            case "Yae Miko": return ["/rss/drawable/yae_miko_full.png",lang.yae_miko, "/rss/drawable/yae_miko_gacha_splash.png", "/rss/drawable/yae_miko_ico.png", "/rss/drawable/yae_miko_card.png"];
            case "Shenhe": return ["/rss/drawable/shenhe_full.png",lang.shenhe, "/rss/drawable/shenhe_gacha_splash.png", "/rss/drawable/shenhe_ico.png", "/rss/drawable/shenhe_card.png"];
            case "Yun Jin": return ["/rss/drawable/yun_jin_full.png",lang.yun_jin, "/rss/drawable/yun_jin_gacha_splash.png", "/rss/drawable/yun_jin_ico.png", "/rss/drawable/yun_jin_card.png"];
            case "Gorou": return ["/rss/drawable/gorou_full.png",lang.gorou, "/rss/drawable/gorou_gacha_splash.png", "/rss/drawable/gorou_ico.png", "/rss/drawable/gorou_card.png"];
            case "Arataki Itto": return ["/rss/drawable/arataki_itto_full.png",lang.arataki_itto, "/rss/drawable/arataki_itto_gacha_splash.png", "/rss/drawable/arataki_itto_ico.png", "/rss/drawable/arataki_itto_card.png"];
            case "Thoma": return ["/rss/drawable/thoma_full.png",lang.thoma, "/rss/drawable/thoma_gacha_splash.png", "/rss/drawable/thoma_ico.png", "/rss/drawable/thoma_card.png"];
            case "Sangonomiya Kokomi": return ["/rss/drawable/sangonomiya_kokomi_full.png",lang.sangonomiya_kokomi, "/rss/drawable/sangonomiya_kokomi_gacha_splash.png", "/rss/drawable/sangonomiya_kokomi_ico.png", "/rss/drawable/sangonomiya_kokomi_card.png"];
            case "Aloy": return ["/rss/drawable/aloy_full.png",lang.aloy, "/rss/drawable/aloy_gacha_splash.png", "/rss/drawable/aloy_ico.png", "/rss/drawable/aloy_card.png"];
            case "Kujou Sara": return ["/rss/drawable/kujou_sara_full.png",lang.kujou_sara, "/rss/drawable/kujor_sara_gacha_splash.png", "/rss/drawable/kujou_sara_ico.png", "/rss/drawable/kujor_sara_card.png"];
            case "Raiden Shogun": return ["/rss/drawable/raiden_shogun_full.png",lang.raiden_shogun, "/rss/drawable/raiden_shogun_gacha_splash.png", "/rss/drawable/raiden_shogun_ico.png", "/rss/drawable/raiden_shogun_card.png"];
            case "Sayu": return ["/rss/drawable/sayu_full.png",lang.sayu, "/rss/drawable/sayu_gacha_splash.png", "/rss/drawable/sayu_ico.png", "/rss/drawable/sayu_card.png"];
            case "Yoimiya": return ["/rss/drawable/yoimiya_full.png",lang.yoimiya, "/rss/drawable/yoimiya_gacha_splash.png", "/rss/drawable/yoimiya_ico.png", "/rss/drawable/yoimiya_card.png"];
            case "Kamisato Ayaka": return ["/rss/drawable/ayaka_full.png",lang.kamisato_ayaka, "/rss/drawable/kamisato_ayaka_gacha_splash.png", "/rss/drawable/ayaka_ico.png", "/rss/drawable/kamisato_ayaka_card.png"];
            case "Kaedehara Kazuha": return ["/rss/drawable/kazuha_full.png",lang.kaedehara_kazuha, "/rss/drawable/kaedehara_kazuha_gacha_splash.png", "/rss/drawable/kazuha_ico.png", "/rss/drawable/kaedehara_kazuha_card.png"];
            case "Yanfei": return ["/rss/drawable/yanfei_full.png",lang.yanfei, "/rss/drawable/yanfei_gacha_splash.png", "/rss/drawable/yanfei_ico.png", "/rss/drawable/yanfei_card.png"];
            case "Eula": return ["/rss/drawable/eula_full.png",lang.eula, "/rss/drawable/eula_gacha_splash.png", "/rss/drawable/eula_ico.png", "/rss/drawable/eula_card.png"];
            case "Rosaria": return ["/rss/drawable/rosaria_full.png",lang.rosaria, "/rss/drawable/rosaria_gacha_splash.png", "/rss/drawable/rosaria_ico.png", "/rss/drawable/rosaria_card.png"];
            case "Xiao": return ["/rss/drawable/xiao_full.png",lang.xiao, "/rss/drawable/xiao_gacha_splash.png", "/rss/drawable/xiao_ico.png", "/rss/drawable/xiao_card.png"];
            case "Hu Tao": return ["/rss/drawable/hu_tao_full.png",lang.hu_tao, "/rss/drawable/hu_tao_gacha_splash.png", "/rss/drawable/hu_tao_ico.png", "/rss/drawable/hu_tao_card.png"];
            case "Ganyu": return ["/rss/drawable/ganyu_full.png",lang.ganyu, "/rss/drawable/ganyu_gacha_splash.png", "/rss/drawable/ganyu_ico.png", "/rss/drawable/ganyu_card.png"];
            case "Albedo": return ["/rss/drawable/albedo_full.png",lang.albedo, "/rss/drawable/albedo_gacha_splash.png", "/rss/drawable/albedo_ico.png", "/rss/drawable/albedo_card.png"];
            case "Zhongli": return ["/rss/drawable/zhongli_full.png",lang.zhongli, "/rss/drawable/zhongli_gacha_splash.png", "/rss/drawable/zhongli_ico.png", "/rss/drawable/zhongli_card.png"];
            case "Xinyan": return ["/rss/drawable/xinyan_full.png",lang.xinyan, "/rss/drawable/xinyan_gacha_splash.png", "/rss/drawable/xinyan_ico.png", "/rss/drawable/xinyan_card.png"];
            case "Tartaglia": return ["/rss/drawable/tartaglia_full.png",lang.tartaglia, "/rss/drawable/tartaglia_gacha_splash.png", "/rss/drawable/tartaglia_ico.png", "/rss/drawable/tartaglia_card.png"];
            case "Diona": return ["/rss/drawable/diona_full.png",lang.diona, "/rss/drawable/diona_gacha_splash.png", "/rss/drawable/diona_ico.png", "/rss/drawable/diona_card.png"];
            case "Xingqiu": return ["/rss/drawable/xingqiu_full.png",lang.xingqiu, "/rss/drawable/xingqiu_gacha_splash.png", "/rss/drawable/xingqiu_ico.png", "/rss/drawable/xingqiu_card.png"];
            case "Xiangling": return ["/rss/drawable/xiangling_full.png",lang.xiangling, "/rss/drawable/xiangling_gacha_splash.png", "/rss/drawable/xiangling_ico.png", "/rss/drawable/xiangling_card.png"];
            case "Venti": return ["/rss/drawable/venti_full.png",lang.venti, "/rss/drawable/venti_gacha_splash.png", "/rss/drawable/venti_ico.png", "/rss/drawable/venti_card.png"];
            case "Sucrose": return ["/rss/drawable/sucrose_full.png",lang.sucrose, "/rss/drawable/sucrose_gacha_splash.png", "/rss/drawable/sucrose_ico.png", "/rss/drawable/sucrose_card.png"];
            case "Razor": return ["/rss/drawable/razor_full.png",lang.razor, "/rss/drawable/razor_gacha_splash.png", "/rss/drawable/razor_ico.png", "/rss/drawable/razor_card.png"];
            case "Qiqi": return ["/rss/drawable/qiqi_full.png",lang.qiqi, "/rss/drawable/qiqi_gacha_splash.png", "/rss/drawable/qiqi_ico.png", "/rss/drawable/qiqi_card.png"];
            case "Noelle": return ["/rss/drawable/noelle_full.png",lang.noelle, "/rss/drawable/noelle_gacha_splash.png", "/rss/drawable/noelle_ico.png", "/rss/drawable/noelle_card.png"];
            case "Ningguang": return ["/rss/drawable/ningguang_full.png",lang.ningguang, "/rss/drawable/ningguang_gacha_splash.png", "/rss/drawable/ningguang_ico.png", "/rss/drawable/ningguang_card.png"];
            case "Mona": return ["/rss/drawable/mona_full.png",lang.mona, "/rss/drawable/mona_gacha_splash.png", "/rss/drawable/mona_ico.png", "/rss/drawable/mona_card.png"];
            case "Lisa": return ["/rss/drawable/lisa_full.png",lang.lisa, "/rss/drawable/lisa_gacha_splash.png", "/rss/drawable/lisa_ico.png", "/rss/drawable/lisa_card.png"];
            case "Klee": return ["/rss/drawable/klee_full.png",lang.klee, "/rss/drawable/klee_gacha_splash.png", "/rss/drawable/klee_ico.png", "/rss/drawable/klee_card.png"];
            case "Keqing": return ["/rss/drawable/keqing_full.png",lang.keqing, "/rss/drawable/keqing_gacha_splash.png", "/rss/drawable/keqing_ico.png", "/rss/drawable/keqing_card.png"];
            case "Kaeya": return ["/rss/drawable/kaeya_full.png",lang.kaeya, "/rss/drawable/kaeya_gacha_splash.png", "/rss/drawable/kaeya_ico.png", "/rss/drawable/kaeya_card.png"];
            case "Jean": return ["/rss/drawable/jean_full.png",lang.jean, "/rss/drawable/jean_gacha_splash.png", "/rss/drawable/jean_ico.png", "/rss/drawable/jean_card.png"];
            case "Fischl": return ["/rss/drawable/fischl_full.png",lang.fischl, "/rss/drawable/fischl_gacha_splash.png", "/rss/drawable/fischl_ico.png", "/rss/drawable/fischl_card.png"];
            case "Diluc": return ["/rss/drawable/diluc_full.png",lang.diluc, "/rss/drawable/diluc_gacha_splash.png", "/rss/drawable/diluc_ico.png", "/rss/drawable/diluc_card.png"];
            case "Chongyun": return ["/rss/drawable/chongyun_full.png",lang.chongyun, "/rss/drawable/chongyun_gacha_splash.png", "/rss/drawable/chongyun_ico.png", "/rss/drawable/chongyun_card.png"];
            case "Bennett": return ["/rss/drawable/bennett_full.png",lang.bennett, "/rss/drawable/bennett_gacha_splash.png", "/rss/drawable/bennett_ico.png", "/rss/drawable/bennett_card.png"];
            case "Beidou": return ["/rss/drawable/beidou_full.png",lang.beidou, "/rss/drawable/beidou_gacha_splash.png", "/rss/drawable/beidou_ico.png", "/rss/drawable/beidou_card.png"];
            case "Barbara": return ["/rss/drawable/barbara_full.png",lang.barbara, "/rss/drawable/barbara_gacha_splash.png", "/rss/drawable/barbara_ico.png", "/rss/drawable/barbara_card.png"];
            case "Amber": return ["/rss/drawable/amber_full.png",lang.amber, "/rss/drawable/amber_gacha_splash.png", "/rss/drawable/amber_ico.png", "/rss/drawable/amber_card.png"];
            //Add at 20210820, update at 20220109, add CARD at 20220411
            case "Traveler-Anemo": {
                // PLEASE EDIT IT !!!
                traveler_sex = "F";
    
                if (new String(traveler_sex) === ("M")) {	return ["/rss/drawable/aether_full.png",lang.traveler_anemo, "/rss/drawable/aether_full.png", "/rss/drawable/aether_ico.png", "/rss/drawable/traveler_card.png"];
                } else {
                    return ["/rss/drawable/lumine_full.png",lang.traveler_anemo, "/rss/drawable/lumine_full.png", "/rss/drawable/lumine_ico.png", "/rss/drawable/traveler_card.png"];
                }
            }
            //Add at 20210820, update at 20220109, add CARD at 20220411
            case "Traveler-Geo": {
                traveler_sex = "F";
    
                if (new String(traveler_sex) === ("M")) {
                    return ["/rss/drawable/aether_full.png",lang.traveler_geo, "/rss/drawable/aether_full.png", "/rss/drawable/aether_ico.png", "/rss/drawable/traveler_card.png"];
                } else {
                    return ["/rss/drawable/lumine_full.png",lang.traveler_geo, "/rss/drawable/lumine_full.png", "/rss/drawable/lumine_ico.png", "/rss/drawable/traveler_card.png"];
                }
            }
            //Add at 20210820, update at 20220109, add CARD at 20220411
            case "Traveler-Electro": {
                traveler_sex = "F";
    
                if (new String(traveler_sex) === ("M")) {
                    return ["/rss/drawable/aether_full.png",lang.traveler_electro, "/rss/drawable/aether_full.png", "/rss/drawable/aether_ico.png", "/rss/drawable/traveler_card.png"];
                } else {
                    return ["/rss/drawable/lumine_full.png",lang.traveler_electro, "/rss/drawable/lumine_full.png", "/rss/drawable/lumine_ico.png", "/rss/drawable/traveler_card.png"];
                }
            }
            //Add at 20220714
            case "Traveler-Dendro": {
                traveler_sex = "F";
    
                if (new String(traveler_sex) === ("M")) {
                    return ["/rss/drawable/aether_full.png",lang.traveler_dendor, "/rss/drawable/aether_full.png", "/rss/drawable/aether_ico.png", "/rss/drawable/traveler_card.png"];
                } else {
                    return ["/rss/drawable/lumine_full.png",lang.traveler_dendor, "/rss/drawable/lumine_full.png", "/rss/drawable/lumine_ico.png", "/rss/drawable/traveler_card.png"];
                }
            }
            // ???
            case "Voc-夜芷冰": return ["/rss/drawable/voc_full.png",lang.voc, "/rss/drawable/voc_full.png", "/rss/drawable/voc_ico.png", "/rss/drawable/mascot_card.png"];
            case "N/A" : return ["/rss/drawable/paimon_full.png",lang.unknown, "/rss/drawable/paimon_full.png","/rss/drawable/paimon_lost.png", "/rss/drawable/unknown_card.png"];
        }
        // Suitable for display upcoming characters
        upcoming = new String(name).toLowerCase().replace(" ","_");
        return ["/rss/drawable/"+upcoming+"_full.png", name, "/rss/drawable/"+upcoming+"_gacha_splash.png", "/rss/drawable/"+upcoming+"_ico.png", "/rss/drawable/"+upcoming+"_card.png"];
    
    }
}

exports.getCharNameByTranslatedName = function (name){
    if(name === "Albedo" || name === "阿貝多" || name === "阿贝多" || name === "アルベド" || name === "Альбедо"){ return "Albedo";}
    else if(name === "Aloy" || name === "亞蘿伊" || name === "亚萝伊" || name === "アーロイ" || name === "Элой"){ return "Aloy";}
    else if(name === "Amber" || name === "安柏" || name === "安柏" || name === "アンバー" || name === "Эмбер"){ return "Amber";}
    else if(name === "Barbara" || name === "芭芭拉" || name === "芭芭拉" || name === "バーバラ" || name === "Барбара"){ return "Barbara";}
    else if(name === "Beidou" || name === "北斗" || name === "北斗" || name === "北斗" || name === "Бэй Доу"){ return "Beidou";}
    else if(name === "Bennett" || name === "班尼特" || name === "班尼特" || name === "ベネット" || name === "Беннет"){ return "Bennett";}
    else if(name === "Chongyun" || name === "重雲" || name === "重云" || name === "重雲" || name === "Чун Юнь"){ return "Chongyun";}
    else if(name === "Diluc" || name === "迪盧克" || name === "迪卢克" || name === "ディルック" || name === "Дилюк"){ return "Diluc";}
    else if(name === "Diona" || name === "迪奧娜" || name === "迪奥娜" || name === "ディオナ" || name === "Диона"){ return "Diona";}
    else if(name === "Eula" || name === "優菈" || name === "优菈" || name === "エウルア" || name === "Эола"){ return "Eula";}
    else if(name === "Fischl" || name === "菲謝爾" || name === "菲谢尔" || name === "フィッシュル" || name === "Фишль"){ return "Fischl";}
    else if(name === "Ganyu" || name === "甘雨" || name === "甘雨" || name === "甘雨" || name === "Гань Юй"){ return "Ganyu";}
    else if(name === "Hu Tao" || name === "胡桃" || name === "胡桃" || name === "胡桃" || name === "Ху Тао"){ return "Hu Tao";}
    else if(name === "Jean" || name === "琴" || name === "琴" || name === "ジン" || name === "Джинн"){ return "Jean";}
    else if(name === "Kaedehara Kazuha" || name === "楓原萬葉" || name === "枫原万叶" || name === "楓原万葉" || name === "Каэдэхара Кадзуха"){ return "Kaedehara Kazuha";}
    else if(name === "Kaeya" || name === "凱亞" || name === "凯亚" || name === "ガイア" || name === "Кэйа"){ return "Kaeya";}
    else if(name === "Kamisato Ayaka" || name === "神里綾華" || name === "神里绫华" || name === "神里綾華" || name === "Камисато Аяка"){ return "Kamisato Ayaka";}
    else if(name === "Keqing" || name === "刻晴" || name === "刻晴" || name === "刻晴" || name === "Кэ Цин"){ return "Keqing";}
    else if(name === "Klee" || name === "可莉" || name === "可莉" || name === "クレー" || name === "Кли"){ return "Klee";}
    else if(name === "Kujou Sara" || name === "九條娑羅" || name === "九条娑罗" || name === "九条裟羅" || name === "Кудзё Сара"){ return "Kujou Sara";}
    else if(name === "Lisa" || name === "麗莎" || name === "莉萨" || name === "リサ" || name === "Лиза"){ return "Lisa";}
    else if(name === "Mona" || name === "莫娜" || name === "莫娜" || name === "モナ" || name === "Мона"){ return "Mona";}
    else if(name === "Ningguang" || name === "凝光" || name === "凝光" || name === "凝光" || name === "Нин Гуан"){ return "Ningguang";}
    else if(name === "Noelle" || name === "諾艾爾" || name === "诺艾尔" || name === "ノエル" || name === "Ноэль"){ return "Noelle";}
    else if(name === "Qiqi" || name === "七七" || name === "七七" || name === "七七" || name === "Ци Ци"){ return "Qiqi";}
    else if(name === "Raiden Shogun" || name === "雷電將軍" || name === "雷电将军" || name === "雷電将軍" || name === "Сёгун Райдэн"){ return "Raiden Shogun";}
    else if(name === "Razor" || name === "雷澤" || name === "雷泽" || name === "レザー" || name === "Рэйзор"){ return "Razor";}
    else if(name === "Rosaria" || name === "羅莎莉亞" || name === "罗莎莉亚" || name === "ロサリア" || name === "Розария"){ return "Rosaria";}
    else if(name === "Sangonomiya Kokomi" || name === "珊瑚宮心海" || name === "珊瑚宫心海" || name === "珊瑚宮心海" || name === "Сангономия Кокоми"){ return "Sangonomiya Kokomi";}
    else if(name === "Sayu" || name === "早柚" || name === "早柚" || name === "早柚" || name === "Саю"){ return "Sayu";}
    else if(name === "Sucrose" || name === "砂糖" || name === "砂糖" || name === "スクロース" || name === "Сахароза"){ return "Sucrose";}
    else if(name === "Tartaglia" || name === "達達利亞" || name === "达达利亚" || name === "タルタリヤ" || name === "Тарталья"){ return "Tartaglia";}
    else if(name === "Venti" || name === "溫迪" || name === "温迪" || name === "ウェンティ" || name === "Венти"){ return "Venti";}
    else if(name === "Xiangling" || name === "香菱" || name === "香菱" || name === "香菱" || name === "Сян Лин"){ return "Xiangling";}
    else if(name === "Xiao" || name === "魈" || name === "魈" || name === "魈" || name === "Сяо"){ return "Xiao";}
    else if(name === "Xingqiu" || name === "行秋" || name === "行秋" || name === "行秋" || name === "Син Цю"){ return "Xingqiu";}
    else if(name === "Xinyan" || name === "辛焱" || name === "辛焱" || name === "辛炎" || name === "Синь Янь"){ return "Xinyan";}
    else if(name === "Yanfei" || name === "煙緋" || name === "烟绯" || name === "煙緋" || name === "Янь Фэй"){ return "Yanfei";}
    else if(name === "Yoimiya" || name === "宵宮" || name === "宵宫" || name === "宵宮" || name === "Ёимия"){ return "Yoimiya";}
    else if(name === "Zhongli" || name === "鍾離" || name === "钟离" || name === "鍾離" || name === "Чжун Ли"){ return "Zhongli";}
    else if(name === "Arataki Itto" || name === "荒瀧一斗" || name === "荒泷一斗" || name === "荒瀧一斗" || name === "Аратаки Итто"){ return "Arataki Itto";}
    else if(name === "Gorou" || name === "五郎" || name === "五郎" || name === "ゴロー" || name === "Горо"){ return "Gorou";}
    else if(name === "Yun Jin" || name === "雲菫" || name === "云菫" || name === "雲菫" || name === "Юнь Цзинь"){ return "Yun Jin";}
    else if(name === "Shenhe" || name === "申鶴" || name === "申鹤" || name === "申鶴" || name === "Шэнь Хэ"){ return "Shenhe";}
    else if(name === "Yae Miko" || name === "八重神子" || name === "八重神子" || name === "八重神子" || name === "Яэ Мико"){ return "Yae Miko";}
    else if(name === "Thoma" || name === "托馬" || name === "托马" || name === "トーマ" || name === "Тома"){ return "Thoma";}
    else if(name === "Kamisato Ayato" || name === "神里綾人" || name === "神里绫人" || name === "神里綾人" || name === "Камисато Аято"){ return "Kamisato Ayato";}
    else if(name === "Kuki Shinobu" || name === "久岐忍" || name === "久岐忍" || name === "久岐忍" || name === "Куки Синобу"){ return "Kuki Shinobu";}
    else if(name === "Yelan" || name === "夜蘭" || name === "夜兰" || name === "夜蘭" || name === "Е Лань"){ return "Yelan";}
    else if(name === "Shikanoin Heizou" || name === "鹿野院平藏" || name === "鹿野院平藏" || name === "鹿野院平蔵" || name === "Сиканоин Хэйдзо"){ return "Shikanoin Heizou";}
    else if(name === "Collei" || name === "柯萊" || name === "柯莱" || name === "コレイ" || name === "Коллеи"){ return "Collei";}
    else if(name === "Dori" || name === "多莉" || name === "多莉" || name === "ドリー" || name === "Дори"){ return "Dori";}
    else if(name === "Tighnari" || name === "提納里" || name === "提纳里" || name === "ティナリ" || name === "Тигнари"){ return "Tighnari";}
    else if(name === "Cyno" || name === "赛诺" || name === "賽諾" || name === "セノ" || name === "Сайно"){ return "Cyno";}
    else if(name === "Nilou" || name === "坎蒂丝" || name === "坎蒂絲" || name === "ニィロウ" || name === "Нилу"){ return "Nilou";}
    else if(name === "Candace" || name === "提納里" || name === "提纳里" || name === "キャンディス" || name === "Кандакия"){ return "Candace";}
    else if(name === "Nahida" || name === "纳西妲" || name === "納西妲" || name === "ナヒーダ" || name === "Нахида"){ return "Nahida";}
    else if(name === "Layla" || name === "莱依拉" || name === "萊依拉" || name === "レイラ" || name === "Лайла"){ return "Layla";}
    else if(name === "Faruzan" || name === "珐露珊" || name === "琺露珊" || name === "ファルザン" || name === "Фарузан"){ return "Faruzan";}
    else if(name === "Wanderer" || name === "流浪者" || name === "流浪者" || name === "放浪者" || name === "Странник"){ return "Wanderer";}
    else if(name === "Yaoyao" || name === "瑤瑤" || name === "瑶瑶" || name === "ヨォーヨ" || name === "Яо Яо"){ return "Yaoyao";}
    else if(name === "Alhaitham" || name === "艾爾海森" || name === "艾尔海森" || name === "アルハイゼン" || name === "Аль-Хайтам"){ return "Alhaitham";}

    else if(name === "Traveler-Anemo" || name === "旅行者(風)" || name === "旅行者(风)" || name === "旅人 (風)" || name === "Путешественник(Анемо)"){ return "Traveler-Anemo";}
    else if(name === "Traveler-Electro" || name === "旅行者(岩)" || name === "旅行者(岩)" || name === "旅人 (岩)" || name === "Путешественник(Гео)"){ return "Traveler-Electro";}
    else if(name === "Traveler-Geo" || name === "旅行者(雷)" || name === "旅行者(雷)" || name === "旅人 (雷)" || name === "Путешественник(Электро)"){ return "Traveler-Geo";}
    else if(name === "Traveler-Dendro" || name === "旅行者(草)" || name === "旅行者(草)" || name === "旅人 (草)" || name === "Путешественник(Элементы)"){ return "Traveler-Dendro";}
    else if(name === "N/A"){ return "N/A";}
    else if(name === "Voc-夜芷冰"){ return "Voc-夜芷冰";}

    else return lang.unknown;
}

/**
     * @param element Element Name
     * @return ICON_ID , RAD_BG_ID , BG_COLOR_ID
     */
exports.getElementByName = function (element) {
    switch (element) {
        case "Anemo":
            return ["<:anemo_ico:1069442659581689916>", "/rss/bot/bg_anemo_char", color.anemo];
        case "Cryo":
            return ["<:cryo_ico:1069442662802919425>", "/rss/bot/bg_cryo_char", color.cryo];
        case "Dendro":
            return ["<:dendro_ico:1069442664929439805>", "/rss/bot/bg_dendro_char", color.dendor];
        case "Electro":
            return ["<:electro_ico:1069442667999670382>", "/rss/bot/bg_electro_char", color.electro];
        case "Geo":
            return ["<:geo_ico:1069442670965051493>", "/rss/bot/bg_geo_char", style.geo];
        case "Hydro":
            return ["<:hydro_ico:1069442672923770951>", "/rss/bot/bg_hydro_char", style.hydro];
        case "Pyro":
            return ["<:pyro_ico:1069442676295999508>", "/rss/bot/bg_pyro_char", style.pyro];
        default:
            return ["<:anemo_ico:1069442659581689916>", "/rss/bot/hu_tao_unknown", style.anemo];
    }
}

exports.getElementByNameTCG = function (element) {
    switch(element){
        case lang.element_Anemo : {return ["/rss/bot/anemo_ico", "/rss/bot/bg_tcg_dice_anemo", style.anemo];}break;
        case lang.element_Cryo : {return ["/rss/bot/cryo_ico", "/rss/bot/bg_tcg_dice_cryo", style.cryo];}break;
        case lang.element_Dendor : {return ["/rss/bot/dendro_ico", "/rss/bot/bg_tcg_dice_dendro", style.dendor];}break;
        case lang.element_Electro : {return ["/rss/bot/electro_ico", "/rss/bot/bg_tcg_dice_electro", style.electro];}break;
        case lang.element_Hydro : {return ["/rss/bot/hydro_ico", "/rss/bot/bg_tcg_dice_hydro", style.hydro];}break;
        case lang.element_Geo : {return ["/rss/bot/geo_ico", "/rss/bot/bg_tcg_dice_geo", style.geo];}break;
        case lang.element_Pyro : {return ["/rss/bot/pyro_ico", "/rss/bot/bg_tcg_dice_pyro", style.pyro];}break;
        default : return ["/rss/bot/hu_tao_unknown", "/rss/bot/hu_tao_unknown", style.anemo];break;
    }
}

exports.getTalentIcoByName = function (name){
    return "/rss/skills/"+name+".png";
}

exports.getSecAttr = function (str) {
    switch (str){
        case "CritRate%" : return lang.weapon_stat_CritRateP;
        case "ATK" : return lang.weapon_stat_atk;
        case "HP%" : return lang.weapon_stat_HPP;
        case "ATK%" : return lang.weapon_stat_atkP;
        case "DEF%" : return lang.weapon_stat_DEFP;
        case "EnRech%" : return lang.weapon_stat_EnRechP;
        case "PhyDMG%" : return lang.weapon_stat_PhyDMGP;
        case "CritDMG%" : return lang.weapon_stat_CritDMGP;
        case "EleMas" : return lang.weapon_stat_EleMas;
        default: return  lang.weapon_stat_no;
    }
}

/**EDIT WHEN ADD NEW ITEMS*/
exports.getItemIcoByName = function (name ,lang){
    switch (name) {
        /** Boss*/
        case "常燃火種":
            return "/rss/drawable/everflame_seed.png";
        case "淨水之心":
            return "/rss/drawable/cleansing_heart.png";
        case "雷光棱鏡":
            return "/rss/drawable/lightning_prism.png";
        case "極寒之核":
            return "/rss/drawable/hoarfrost_core.png";
        case "颶風之種":
            return "/rss/drawable/hurricane_seed.png";
        case "玄岩之塔":
            return "/rss/drawable/basalt_pillar.png";
        case "未熟之玉":
            return "/rss/drawable/juvenile_jade.png";
        case "晶凝之華":
            return "/rss/drawable/crystalline_bloom.png";
        case "魔偶機心":
            return "/rss/drawable/maguu_kishin.png";
        case "恒常機關之心":
            return "/rss/drawable/perpetual_heart.png";
        case "陰燃之珠":
            return "/rss/drawable/smoldering_pearl.png";
        //add in 20210910
        case "雷霆數珠":
            return "/rss/drawable/storm_beads.png";
        case "排異之露":
            return "/rss/drawable/dew_of_repudiation.png";
        //add in 20220105
        case "獸境王器":
            return "/rss/drawable/riftborn_regalia.png";
        case "龍嗣偽鰭":
            return "/rss/drawable/dragonheirs_false_fin.png";
        //add in 20220331
        case "符紋之齒":
            return "/rss/drawable/runic_fang.png";
        //add in 20220716
        case "蕈王鉤喙":
            return "/rss/drawable/majestic_hooked_beak.png";
        case "藏雷野實":
            return "/rss/drawable/thunderclap_fruitcore.png";
        //add in 20221001
        case "永續機芯":
            return "/rss/drawable/perpetual_caliber.png";
        case "導光四面體":
            return "/rss/drawable/light_guiding_tetrahedron.png";
        case "滅諍草蔓":
            return "/rss/drawable/quelled_creeper.png";
        //add in 20230115
        case "蒼礫蕊羽":
            return "/rss/drawable/pseudo_stamens.png";

        /** Local*/
        case "小燈草":
            return "/rss/drawable/small_lamp_grass.png";
        case "慕風蘑菇":
            return "/rss/drawable/philanemo_mushroom.png";
        case "夜泊石":
            return "/rss/drawable/noctilous_jade.png";
        case "風車菊":
            return "/rss/drawable/windwheel_aster.png";
        case "石珀":
            return "/rss/drawable/cor_lapis.png";
        case "蒲公英籽":
            return "/rss/drawable/dandelion_seed.png";
        case "嘟嘟蓮":
            return "/rss/drawable/calla_lily.png";
        case "落落莓":
            return "/rss/drawable/valberry.png";
        case "琉璃百合":
            return "/rss/drawable/glaze_lily.png";
        case "琉璃袋":
            return "/rss/drawable/violetgrass.png";
        case "鉤鉤果":
            return "/rss/drawable/wolfhook.png";
        case "塞西莉亞花":
            return "/rss/drawable/cecilia.png";
        case "絕雲椒椒":
            return "/rss/drawable/jueyun_chili.png";
        case "霓裳花":
            return "/rss/drawable/silk_flower.png";
        case "星螺":
            return "/rss/drawable/starconch.png";
        case "清心":
            return "/rss/drawable/qingxin.png";
        case "海靈芝":
            return "/rss/drawable/sea_ganoderma.png";
        case "緋櫻繡球":
            return "/rss/drawable/sakura_bloom.png";
        case "鳴草":
            return "/rss/drawable/naku_weed.png";
        case "晶化骨髓":
            return "/rss/drawable/crystal_marrow.png";
        //add in 20210910
        case "天雲草實":
            return "/rss/drawable/amakumo_fruit.png";
        case "血斛":
            return "/rss/drawable/dendrobium.png";
        case "幽燈蕈":
            return "/rss/drawable/fluorescent_fungus.png";
        case "珊瑚真珠":
            return "/rss/drawable/sango_pearl.png";
        //add in 20220517
        case "鬼兜蟲":
            return "/rss/drawable/onikabuto.png";
        //add in 20220716
        case "樹王聖體菇":
            return "/rss/drawable/onikabuto.png";
        case "月蓮":
            return "/rss/drawable/lunar_lotus.png";
        case "劫波蓮":
            return "/rss/drawable/kalpalata.png";
        //add in 20230115
        case "赤念果":
            return "/rss/drawable/redcrest.png";
        case "聖金蟲":
            return "/rss/drawable/scarab.png";
        case "帕蒂沙蘭":
            return "/rss/drawable/padisarah.png";
        case "沙脂蛹":
            return "/rss/drawable/sand_grease_pupa.png";

        /** T-Boss*/
        case "北風之環":
            return "/rss/drawable/ring_of_boreas.png";
        case "東風的吐息":
            return "/rss/drawable/dvalins_sigh.png";
        case "東風之翎":
            return "/rss/drawable/dvalins_plume.png";
        case "北風的魂匣":
            return "/rss/drawable/spirit_locket_of_boreas.png";
        case "東風之爪":
            return "/rss/drawable/dvalins_claw.png";
        case "北風之尾":
            return "/rss/drawable/tail_of_boreas.png";
        case "魔王之刃·殘片":
            return "/rss/drawable/shard_of_foul_legacy.png";
        case "吞天之鯨·只角":
            return "/rss/drawable/tusk_of_monoceros_caeli.png";
        case "武煉之魂·孤影":
            return "/rss/drawable/shadow_of_the_warrior.png";
        case "龍王之冕":
            return "/rss/drawable/dragon_lords_crown.png";
        case "血玉之枝":
            return "/rss/drawable/bloodjade_branch.png";
        case "鎏金之鱗":
            return "/rss/drawable/gilded_scale.png";
        //add in 20210910
        case "熔毀之刻":
            return "/rss/drawable/molten_moment.png";
        case "灰燼之心":
            return "/rss/drawable/ashen_heart.png";
        case "獄火之蝶":
            return "/rss/drawable/hellfire_butterfly.png";
        //add in 20220216
        case "萬劫之真意":
            return "/rss/drawable/the_meaning_of_aeons.png";
        case "凶將之手眼":
            return "/rss/drawable/mudra_of_the_malefic_general.png";
        case "禍神之禊淚":
            return "/rss/drawable/tears_of_the_calamitous_god.png";
        //add in 20221102
        case "傀儡的懸絲":
            return "/rss/drawable/puppet_strings.png";
        case "無心的淵鏡":
            return "/rss/drawable/miirror_of_mushin.png";
        case "空行的虛鈴":
            return "/rss/drawable/dakas_bell.png";

        /** Common*/
        case "牢固的箭簇":
            return "/rss/drawable/firm_arrowhead.png";
        case "銳利的箭簇":
            return "/rss/drawable/sharp_arrowhead.png";
        case "歷戰的箭簇":
            return "/rss/drawable/weathered_arrowhead.png";
        case "導能繪卷":
            return "/rss/drawable/divining_scroll.png";
        case "封魔繪卷":
            return "/rss/drawable/sealed_scroll.png";
        case "禁咒繪卷":
            return "/rss/drawable/forbidden_curse_scroll.png";
        case "尋寶鴉印":
            return "/rss/drawable/treasure_hoarder_insignia.png";
        case "藏銀鴉印":
            return "/rss/drawable/silver_raven_insignia.png";
        case "攫金鴉印":
            return "/rss/drawable/golden_raven_insignia.png";
        case "破損的面具":
            return "/rss/drawable/damaged_mask.png";
        case "污穢的面具":
            return "/rss/drawable/stained_mask.png";
        case "不祥的面具":
            return "/rss/drawable/ominous_mask.png";
        case "新兵的徽記":
            return "/rss/drawable/recruits_insignia.png";
        case "士官的徽記":
            return "/rss/drawable/sergeants_insignia.png";
        case "尉官的徽記":
            return "/rss/drawable/lieutenants_insignia.png";
        case "騙騙花蜜":
            return "/rss/drawable/whopperflower_nectar.png";
        case "微光花蜜":
            return "/rss/drawable/shimmering_nectar.png";
        case "原素花蜜":
            return "/rss/drawable/energy_nectar.png";
        case "史萊姆凝液":
            return "/rss/drawable/slime_condensate.png";
        case "史萊姆清":
            return "/rss/drawable/slime_secretions.png";
        case "史萊姆原漿":
            return "/rss/drawable/slime_concentrate.png";
        case "破舊的刀鐔":
            return "/rss/drawable/old_handguard.png";
        case "影打刀鐔":
            return "/rss/drawable/kageuchi_handguard.png";
        case "名刀鐔":
            return "/rss/drawable/famed_handguard.png";
        //add in 20210910
        case "浮游乾核":
            return "/rss/drawable/spectral_husk.png";
        case "浮游幽核":
            return "/rss/drawable/spectral_heart.png";
        case "浮游晶化核":
            return "/rss/drawable/spectral_nucleus.png";
        //add in 20220716
        case "褪色紅綢":
            return "/rss/drawable/faded_red_satin.png";
        case "鑲邊紅綢":
            return "/rss/drawable/trimmed_red_silk.png";
        case "織金紅綢":
            return "/rss/drawable/rich_red_brocade.png";
        case "蕈獸孢子":
            return "/rss/drawable/fungal_spores.png";
        case "螢光孢粉":
            return "/rss/drawable/luminescent_pollen.png";
        case "孢囊晶塵":
            return "/rss/drawable/crystalline_cyst_dust.png";
        case "晦暗刻像":
            return "/rss/drawable/gloomy_statuette.png";
        case "夤夜刻像":
            return "/rss/drawable/dark_statuette.png";
        case "幽邃刻像":
            return "/rss/drawable/deathly_statuette.png";

        // P.S. There still have Sumeru items not added yet since the name are undefinded or unable to define in there. => 20220716
        // ♪ Added Sumeru items
        //add in 20220823
        case "謐林涓露的銅符":
            return "/rss/drawable/copper_talisman_of_the_forest_dew.png";
        case "謐林涓露的鐵符":
            return "/rss/drawable/iron_talisman_of_the_forest_dew.png";
        case "謐林涓露的銀符":
            return "/rss/drawable/silver_talisman_of_the_forest_dew.png";
        case "謐林涓露的金符":
            return "/rss/drawable/golden_talisman_of_the_forest_dew.png";
        case "綠洲花園的追憶":
            return "/rss/drawable/oasis_gardens_reminiscence.png";
        case "綠洲花園的恩惠":
            return "/rss/drawable/oasis_gardens_kindness.png";
        case "綠洲花園的哀思":
            return "/rss/drawable/oasis_gardens_mourning.png";
        case "綠洲花園的真諦":
            return "/rss/drawable/oasis_gardens_truth.png";
        case "烈日威權的殘響":
            return "/rss/drawable/echo_of_scorching_might.png";
        case "烈日威權的餘光":
            return "/rss/drawable/remnant_glow_of_scorching_might.png";
        case "烈日威權的夢想":
            return "/rss/drawable/dream_of_scorching_might.png";
        case "烈日威權的舊日":
            return "/rss/drawable/olden_days_of_scorching_might.png";

        //add in 20211024 (RE)
        case "漆黑隕鐵的一粒":
            return "/rss/drawable/grain_of_aerosiderite.png";
        case "漆黑隕鐵的一片":
            return "/rss/drawable/piece_of_aerosiderite.png";
        case "漆黑隕鐵的一角":
            return "/rss/drawable/bit_of_aerosiderite.png";
        case "漆黑隕鐵的一塊":
            return "/rss/drawable/chunk_of_aerosiderite.png";
        case "鳴神御靈的明惠":
            return "/rss/drawable/narukamis_wisdom.png";
        case "鳴神御靈的歡喜":
            return "/rss/drawable/narukamis_joy.png";
        case "鳴神御靈的親愛":
            return "/rss/drawable/narukamis_affection.png";
        case "鳴神御靈的勇武":
            return "/rss/drawable/narukamis_valor.png";
        case "遠海夷地的瑚枝":
            return "/rss/drawable/coral_branch_of_a_distant_sea.png";
        case "遠海夷地的玉枝":
            return "/rss/drawable/jeweled_branch_of_a_distant_sea.png";
        case "遠海夷地的瓊枝":
            return "/rss/drawable/jade_branch_of_a_distant_sea.png";
        case "遠海夷地的金枝":
            return "/rss/drawable/golden_branch_of_a_distant_sea.png";
        case "凜風奔狼的始齔":
            return "/rss/drawable/boreal_wolfs_milk_tooth.png";
        case "凜風奔狼的裂齒":
            return "/rss/drawable/boreal_wolfs_cracked_tooth.png";
        case "凜風奔狼的斷牙":
            return "/rss/drawable/boreal_wolfs_broken_fang.png";
        case "凜風奔狼的懷鄉":
            return "/rss/drawable/boreal_wolfs_nostalgia.png";
        case "高塔孤王的破瓦":
            return "/rss/drawable/tile_of_decarabians_tower.png";
        case "高塔孤王的殘垣":
            return "/rss/drawable/debris_of_decarabians_city.png";
        case "高塔孤王的斷片":
            return "/rss/drawable/fragment_of_decarabians_epic.png";
        case "高塔孤王的碎夢":
            return "/rss/drawable/scattered_piece_of_decarabianss_dream.png";
        case "霧海雲間的鉛丹":
            return "/rss/drawable/mist_veiled_lead_elixir.png";
        case "霧海雲間的汞丹":
            return "/rss/drawable/mist_veiled_mercury_elixir.png";
        case "霧海雲間的金丹":
            return "/rss/drawable/mist_veiled_gold_elixir.png";
        case "霧海雲間的轉還":
            return "/rss/drawable/mist_veiled_primo_elixir.png";
        case "獅牙鬥士的枷鎖":
            return "/rss/drawable/fetters_of_the_dandelion_gladiator.png";
        case "獅牙鬥士的鐵鍊":
            return "/rss/drawable/chains_of_the_dandelion_gladiator.png";
        case "獅牙鬥士的鐐銬":
            return "/rss/drawable/shackles_of_the_dandelion_gladiator.png";
        case "獅牙鬥士的理想":
            return "/rss/drawable/dream_of_the_dandelion_gladiator.png";
        case "孤雲寒林的光砂":
            return "/rss/drawable/luminous_sands_from_guyun.png";
        case "孤雲寒林的輝岩":
            return "/rss/drawable/lustrous_stone_from_guyun.png";
        case "孤雲寒林的聖骸":
            return "/rss/drawable/relic_from_guyun.png";
        case "孤雲寒林的神體":
            return "/rss/drawable/divine_body_from_guyun.png";
        case "今昔劇畫的惡尉":
            return "/rss/drawable/mask_of_the_wicked_lieutenant.png";
        case "今昔劇畫的虎囓":
            return "/rss/drawable/mask_of_the_tigers_bite.png";
        case "今昔劇畫的一角":
            return "/rss/drawable/mask_of_the_one_horned.png";
        case "今昔劇畫的鬼人":
            return "/rss/drawable/mask_of_the_kijin.png";
        case "混沌機關":
            return "/rss/drawable/chaos_gear.png";
        case "混沌樞紐":
            return "/rss/drawable/chaos_axis.png";
        case "混沌真眼":
            return "/rss/drawable/chaos_oculus.png";
        case "混沌裝置":
            return "/rss/drawable/chaos_device.png";
        case "混沌迴路":
            return "/rss/drawable/chaos_circuit.png";
        case "混沌爐心":
            return "/rss/drawable/chaos_core.png";
        case "脆弱的骨片":
            return "/rss/drawable/sturdy_bone_shard.png";
        case "結實的骨片":
            return "/rss/drawable/fragile_bone_shard.png";
        case "石化的骨片":
            return "/rss/drawable/fossilized_bone_shard.png";
        case "霧虛花粉":
            return "/rss/drawable/mist_grass_pollen.png";
        case "霧虛草囊":
            return "/rss/drawable/mist_grass_wick.png";
        case "霧虛燈芯":
            return "/rss/drawable/mist_grass.png";
        case "獵兵祭刀":
            return "/rss/drawable/hunters_sacrificial_knife.png";
        case "特工祭刀":
            return "/rss/drawable/inspectors_sacrificial_knife.png";
        case "督察長祭刀":
            return "/rss/drawable/agents_sacrificial_knife.png";
        case "沉重號角":
            return "/rss/drawable/heavy_horn.png";
        case "黑銅號角":
            return "/rss/drawable/black_bronze_horn.png";
        case "黑晶號角":
            return "/rss/drawable/black_crystal_horn.png";
        case "地脈的舊枝":
            return "/rss/drawable/dead_ley_line_branch.png";
        case "地脈的枯葉":
            return "/rss/drawable/dead_ley_line_leaves.png";
        case "地脈的新芽":
            return "/rss/drawable/ley_line_sprout.png";
        case "黯淡棱鏡":
            return "/rss/drawable/dismal_prism.png";
        case "水晶棱鏡":
            return "/rss/drawable/crystal_prism.png";
        case "偏光棱鏡":
            return "/rss/drawable/polarizing_prism.png";
        case "隱獸指爪":
            return "/rss/drawable/concealed_claw.png";
        case "隱獸利爪":
            return "/rss/drawable/concealed_unguis.png";
        case "隱獸鬼爪":
            return "/rss/drawable/concealed_talon.png";
        //add in 20220823
        case "失活菌核":
            return "/rss/drawable/inactivated_fungal_nucleus.png";
        case "休眠菌核":
            return "/rss/drawable/dormant_fungal_nucleus.png";
        case "茁壯菌核":
            return "/rss/drawable/robust_fungal_nucleus.png";
        case "混沌容器":
            return "/rss/drawable/chaos_storage.png";
        case "混沌模組":
            return "/rss/drawable/chaos_module.png";
        case "混沌錨栓":
            return "/rss/drawable/chaos_bolt.png";
        //add in 20220924
        case "破缺稜晶":
            return "/rss/drawable/damaged_prism.png";
        case "混濁稜晶":
            return "/rss/drawable/turbid_prism.png";
        case "輝光稜晶":
            return "/rss/drawable/radiant_prism.png";


        /** T-Book*/
        case "「自由」的教導":
            return "/rss/drawable/teaching_of_freedom.png";
        case "「黃金」的教導":
            return "/rss/drawable/teaching_of_gold.png";
        case "「抗爭」的教導":
            return "/rss/drawable/teaching_of_resistance.png";
        case "「繁榮」的教導":
            return "/rss/drawable/teaching_of_prosperity.png";
        case "「詩文」的教導":
            return "/rss/drawable/teaching_of_ballad.png";
        case "「勤勞」的教導":
            return "/rss/drawable/teaching_of_diligence.png";
        case "「風雅」的教導":
            return "/rss/drawable/teachings_of_elegance.png";
        case "「浮世」的教導":
            return "/rss/drawable/teachings_of_transience.png";
        case "「天光」的教導":
            return "/rss/drawable/teachings_of_light.png";
        case "「自由」的指引":
            return "/rss/drawable/guide_to_freedom.png";
        case "「黃金」的指引":
            return "/rss/drawable/guide_to_gold.png";
        case "「抗爭」的指引":
            return "/rss/drawable/guide_to_resistance.png";
        case "「繁榮」的指引":
            return "/rss/drawable/guide_to_prosperity.png";
        case "「詩文」的指引":
            return "/rss/drawable/guide_to_ballad.png";
        case "「勤勞」的指引":
            return "/rss/drawable/guide_to_diligence.png";
        case "「風雅」的指引":
            return "/rss/drawable/guide_of_elegance.png";
        case "「浮世」的指引":
            return "/rss/drawable/guide_of_transience.png";
        case "「天光」的指引":
            return "/rss/drawable/guide_of_light.png";
        case "「自由」的哲學":
            return "/rss/drawable/philosophies_of_freedom.png";
        case "「黃金」的哲學":
            return "/rss/drawable/philosophies_of_gold.png";
        case "「抗爭」的哲學":
            return "/rss/drawable/philosophies_of_resistance.png";
        case "「繁榮」的哲學":
            return "/rss/drawable/philosophies_of_prosperity.png";
        case "「詩文」的哲學":
            return "/rss/drawable/philosophies_of_ballad.png";
        case "「勤勞」的哲學":
            return "/rss/drawable/philosophies_of_diligence.png";
        case "「風雅」的哲學":
            return "/rss/drawable/philosophies_of_elegance.png";
        case "「浮世」的哲學":
            return "/rss/drawable/philosophies_of_transience.png";
        case "「天光」的哲學":
            return "/rss/drawable/philosophies_of_light.png";
        //add in 20220823
        case "「篤行」的教導":
            return "/rss/drawable/teachings_of_admonition.png";
        case "「巧思」的教導":
            return "/rss/drawable/teachings_of_ingenuity.png";
        case "「諍言」的教導":
            return "/rss/drawable/teachings_of_praxis.png";
        case "「篤行」的指引":
            return "/rss/drawable/guide_to_admonition.png";
        case "「巧思」的指引":
            return "/rss/drawable/guide_to_ingenuity.png";
        case "「諍言」的指引":
            return "/rss/drawable/guide_to_praxis.png";
        case "「篤行」的哲學":
            return "/rss/drawable/philosophies_of_admonition.png";
        case "「巧思」的哲學":
            return "/rss/drawable/philosophies_of_ingenuity.png";
        case "「諍言」的哲學":
            return "/rss/drawable/philosophies_of_praxis.png";

        /** Crystal*/
        case "燃願瑪瑙碎屑":
            return "/rss/drawable/agnidus_agate_sliver.png";
        case "燃願瑪瑙斷片":
            return "/rss/drawable/agnidus_agate_fragment.png";
        case "燃願瑪瑙塊":
            return "/rss/drawable/agnidus_agate_chunk.png";
        case "燃願瑪瑙":
            return "/rss/drawable/agnidus_agate_gemstone.png";
        case "滌淨青金碎屑":
            return "/rss/drawable/varunada_lazurite_sliver.png";
        case "滌淨青金斷片":
            return "/rss/drawable/varunada_lazurite_fragment.png";
        case "滌淨青金塊":
            return "/rss/drawable/varunada_lazurite_chunk.png";
        case "滌淨青金":
            return "/rss/drawable/varunada_lazurite_gemstone.png";
        case "最勝紫晶碎屑":
            return "/rss/drawable/vajrada_amethyst_sliver.png";
        case "最勝紫晶斷片":
            return "/rss/drawable/vajrada_amethyst_fragment.png";
        case "最勝紫晶塊":
            return "/rss/drawable/vajrada_amethyst_chunk.png";
        case "最勝紫晶":
            return "/rss/drawable/vajrada_amethyst_gemstone.png";
        case "哀敘冰玉碎屑":
            return "/rss/drawable/shivada_jade_sliver.png";
        case "哀敘冰玉斷片":
            return "/rss/drawable/shivada_jade_fragment.png";
        case "哀敘冰玉塊":
            return "/rss/drawable/shivada_jade_chunk.png";
        case "哀敘冰玉":
            return "/rss/drawable/shivada_jade_gemstone.png";
        case "自在松石碎屑":
            return "/rss/drawable/vayuda_turquoise_sliver.png";
        case "自在松石斷片":
            return "/rss/drawable/vayuda_turquoise_fragment.png";
        case "自在松石塊":
            return "/rss/drawable/vayuda_turquoise_chunk.png";
        case "自在松石":
            return "/rss/drawable/vayuda_turquoise_gemstone.png";
        case "堅牢黃玉碎屑":
            return "/rss/drawable/prithiva_topaz_sliver.png";
        case "堅牢黃玉斷片":
            return "/rss/drawable/prithiva_topaz_fragment.png";
        case "堅牢黃玉塊":
            return "/rss/drawable/prithiva_topaz_chunk.png";
        case "堅牢黃玉":
            return "/rss/drawable/prithiva_topaz_gemstone.png";
        //add in 20220714
        case "生長碧翡碎屑":
            return "/rss/drawable/nagadus_emerald_sliver.png";
        case "生長碧翡斷片":
            return "/rss/drawable/nagadus_emerald_fragment.png";
        case "生長碧翡塊":
            return "/rss/drawable/nagadus_emerald_chunk.png";
        case "生長碧翡":
            return "/rss/drawable/nagadus_emerald_gemstone.png";
        case "璀璨原鑽碎屑":
            return "/rss/drawable/brilliant_diamond_sliver.png";
        case "璀璨原鑽斷片":
            return "/rss/drawable/brilliant_diamond_fragment.png";
        case "璀璨原鑽塊":
            return "/rss/drawable/brilliant_diamond_chunk.png";
        case "璀璨原鑽":
            return "/rss/drawable/brilliant_diamond_gemstone.png";

        /** Others*/
        case "智識之冕":
            return "/rss/drawable/crown_of_sagehood.png";
        case "摩拉":
            return "/rss/drawable/mora.png";
        case "流浪者的經驗":
            return "/rss/drawable/wanderers_advice.png";
        case "冒險家的經驗":
            return "/rss/drawable/adventurers_experience.png";
        case "大英雄的經驗":
            return "/rss/drawable/heros_wit.png";
        case "精鍛用雜礦":
            return "/rss/drawable/enchancement_ore.png";
        case "精鍛用良礦":
            return "/rss/drawable/fine_enchancement_ore.png";
        case "精鍛用魔礦":
            return "/rss/drawable/mystic_enchancement_ore.png";
        case "祝聖油膏":
            return "/rss/drawable/sanctifying_unction.png";
        case "祝聖精華":
            return "/rss/drawable/sanctifying_essence.png";

        /** Un-released*/
        case "「未知1」的教導":
        case "「未知1」的指引":
        case "「未知1」的哲學":
        case "「未知2」的教導":
        case "「未知2」的指引":
        case "「未知2」的哲學":
        case "「未知3」的教導":
        case "「未知3」的指引":
        case "「未知3」的哲學":
        case "未知周本BOSS跌落物1":
        case "未知周本BOSS跌落物2":
        case "未知周本BOSS跌落物3":
        case "未知常駐BOSS跌落物1":
        case "未知常駐BOSS跌落物2":
        case "未知常駐BOSS跌落物3":
            return "/rss/drawable/hu_tao_unknown.png";
        default:
            return "/rss/drawable/hu_tao_unknown.png";
    }
}

// TMP notice : Collei => 「未知1」的哲學 || Dori => 「未知2」的哲學 || Tighnari => 「未知3」的哲學
// Ok get it and added. (From Voc in 20220823)
exports.getLocaleTeaches = function (name){
    if(name === "「自由」的教導"){return lang.teaching_of_freedom;}
    else if(name === "「黃金」的教導"){return lang.teaching_of_gold;}
    else if(name === "「抗爭」的教導"){return lang.teaching_of_resistance;}
    else if(name === "「繁榮」的教導"){return lang.teaching_of_prosperity;}
    else if(name === "「詩文」的教導"){return lang.teaching_of_ballad;}
    else if(name === "「勤勞」的教導"){return lang.teaching_of_diligence;}
    else if(name === "「風雅」的教導"){return lang.teachings_of_elegance;}
    else if(name === "「浮世」的教導"){return lang.teachings_of_transience;}
    else if(name === "「天光」的教導"){return lang.teachings_of_light;}
    else if(name === "「諍言」的教導"){return lang.teachings_of_admonition;}
    else if(name === "「巧思」的教導"){return lang.teachings_of_ingenuity;}
    else if(name === "「篤行」的教導"){return lang.teachings_of_praxis;}

    else if(name === "「自由」的指引"){return lang.guide_of_freedom;}
    else if(name === "「黃金」的指引"){return lang.guide_of_gold;}
    else if(name === "「抗爭」的指引"){return lang.guide_of_resistance;}
    else if(name === "「繁榮」的指引"){return lang.guide_of_prosperity;}
    else if(name === "「詩文」的指引"){return lang.guide_of_ballad;}
    else if(name === "「勤勞」的指引"){return lang.guide_of_diligence;}
    else if(name === "「風雅」的指引"){return lang.guides_of_elegance;}
    else if(name === "「浮世」的指引"){return lang.guides_of_transience;}
    else if(name === "「天光」的指引"){return lang.guides_of_light;}
    else if(name === "「諍言」的指引"){return lang.guides_of_admonition;}
    else if(name === "「巧思」的指引"){return lang.guides_of_ingenuity;}
    else if(name === "「篤行」的指引"){return lang.guides_of_praxis;}

    else if(name === "「自由」的哲學"){return lang.philosophies_of_freedom;}
    else if(name === "「黃金」的哲學"){return lang.philosophies_of_gold;}
    else if(name === "「抗爭」的哲學"){return lang.philosophies_of_resistance;}
    else if(name === "「繁榮」的哲學"){return lang.philosophies_of_prosperity;}
    else if(name === "「詩文」的哲學"){return lang.philosophies_of_ballad;}
    else if(name === "「勤勞」的哲學"){return lang.philosophies_of_diligence;}
    else if(name === "「風雅」的哲學"){return lang.philosophiess_of_elegance;}
    else if(name === "「浮世」的哲學"){return lang.philosophiess_of_transience;}
    else if(name === "「天光」的哲學"){return lang.philosophiess_of_light;}
    else if(name === "「諍言」的哲學"){return lang.philosophies_of_admonition;}
    else if(name === "「巧思」的哲學"){return lang.philosophies_of_ingenuity;}
    else if(name === "「篤行」的哲學"){return lang.philosophies_of_praxis;}

    else {return lang.unknown;}

}

exports.getLocaleBirth = function (str) {
    if((str !== "SET_BY_PLAYER") && (str !== "N/A")){
        var date = str.split("/");
        var month = parseInt(date[0]);
        var day = parseInt(date[1]);

            var returns = "Jan 1st";
            if(month == 1){returns =lang.date_jan;}
            else if(month == 2){returns =lang.date_feb;}
            else if(month == 3){returns =lang.date_mar;}
            else if(month == 4){returns =lang.date_apr;}
            else if(month == 5){returns =lang.date_may;}
            else if(month == 6){returns =lang.date_jun;}
            else if(month == 7){returns =lang.date_jul;}
            else if(month == 8){returns =lang.date_aug;}
            else if(month == 9){returns =lang.date_sep;}
            else if(month == 10){returns =lang.date_oct;}
            else if(month == 11){returns =lang.date_nov;}
            else if(month == 12){returns =lang.date_dec;}

            if(day == 1){returns = returns +lang.date_1st;}
            else if(day == 2){returns = returns +lang.date_2nd;}
            else if(day == 3){returns = returns +lang.date_3rd;}
            else if(day == 4){returns = returns +lang.date_4th;}
            else if(day == 5){returns = returns +lang.date_5th;}
            else if(day == 6){returns = returns +lang.date_6th;}
            else if(day == 7){returns = returns +lang.date_7th;}
            else if(day == 8){returns = returns +lang.date_8th;}
            else if(day == 9){returns = returns +lang.date_9th;}
            else if(day == 10){returns = returns +lang.date_10th;}
            else if(day == 11){returns = returns +lang.date_11th;}
            else if(day == 12){returns = returns +lang.date_12th;}
            else if(day == 13){returns = returns +lang.date_13th;}
            else if(day == 14){returns = returns +lang.date_14th;}
            else if(day == 15){returns = returns +lang.date_15th;}
            else if(day == 16){returns = returns +lang.date_16th;}
            else if(day == 17){returns = returns +lang.date_17th;}
            else if(day == 18){returns = returns +lang.date_18th;}
            else if(day == 19){returns = returns +lang.date_19th;}
            else if(day == 20){returns = returns +lang.date_20th;}
            else if(day == 21){returns = returns +lang.date_21st;}
            else if(day == 22){returns = returns +lang.date_22nd;}
            else if(day == 23){returns = returns +lang.date_23rd;}
            else if(day == 24){returns = returns +lang.date_24th;}
            else if(day == 25){returns = returns +lang.date_25th;}
            else if(day == 26){returns = returns +lang.date_26th;}
            else if(day == 27){returns = returns +lang.date_27th;}
            else if(day == 28){returns = returns +lang.date_28th;}
            else if(day == 29){returns = returns +lang.date_29th;}
            else if(day == 30){returns = returns +lang.date_30th;}
            else if(day == 31){returns = returns +lang.date_31st;}
            return returns;
    }else if(str === "SET_BY_PLAYER"){
        return lang.set_by_player;
    }else if(str === "N/A"){
        return lang.obtain_no;
    }else {return lang.obtain_no;}
}

exports.char_birth = function (moy, dom){
    var char_name = "EMPTY";
    const JANUARY  = 0; const FEBRUARY  = 1; const MARCH  = 2; const APRIL  = 3;
    const MAY  = 4; const JUNE  = 5; const JULY  = 6; const AUGUST  = 7; 
    const SEPTEMBER  = 8; const OCTOBER  = 9; const NOVEMBER  = 10; const DECEMBER  = 11;

    switch (moy){
        case JANUARY: {
            switch (dom) {
                case 9 : char_name = "Thoma"; break;
                case 18 : char_name = "Diona"; break;
                case 24 : char_name = "Rosaria"; break;
            }
            break;
        }
        case FEBRUARY: {
            switch (dom) {
                case 14 : char_name = "Beidou"; break;
                case 22 : char_name = "Sangonomiya Kokomi"; break;
                case 29 : char_name = "Bennett"; break;
            }
            break;
        }
        case MARCH: {
            switch (dom) {
                case 3 : char_name = "Qiqi"; break;
                case 10 : char_name = "Shenhe"; break;
                case 14 : char_name = "Jean"; break;
                case 21 : char_name = "Noelle"; break;
                case 26 : char_name = "Kamisato Ayato"; break;
            }
            break;
        }
        case APRIL: {
            switch (dom) {
                case 4 : char_name = "Aloy"; break;
                case 17 : char_name = "Xiao"; break;
                case 20 : char_name = "Yelan"; break;
                case 30 : char_name = "Diluc"; break;
            }
            break;
        }
        case MAY: {
            switch (dom) {
                case 3 : char_name = "Candace"; break;
                case 8 : char_name = "Collei"; break;
                case 18 : char_name = "Gorou"; break;
                case 21 : char_name = "Yun Jin"; break;
                case 27 : char_name = "Fischl"; break;
            }
            break;
        }
        case JUNE: {
            switch (dom) {
                case 1 : char_name = "Arataki Itto"; break;
                case 6 : char_name = "Lisa"; break;
                case 9 : char_name = "Venti"; break;
                case 21 : char_name = "Yoimiya"; break;
                case 23 : char_name = "Cyno"; break;
                case 26 : char_name = "Raiden Shogun"; break;
                case 27 : char_name = "Yae Miko"; break;
                case 28 : char_name = "Kuki Shinobu"; break;
            }
            break;
        }
        case JULY: {
            switch (dom) {
                case 5 : char_name = "Barbara"; break;
                case 14 : char_name = "Kujou Sara"; break;
                case 15 : char_name = "Hu Tao"; break;
                case 19 : char_name = "Voc-夜芷冰"; break;
                case 20 : char_name = "Tartaglia"; break;
                case 24 : char_name = "Shikanoin Heizou"; break;
                case 27 : char_name = "Klee"; break;
                case 28 : char_name = "Yanfei"; break;
            }
            break;
        }
        case AUGUST: {
            switch (dom) {
                case 10 : char_name = "Amber"; break;
                case 26 : char_name = "Ningguang"; break;
                case 31 : char_name = "Mona"; break;
            }
            break;
        }
        case SEPTEMBER: {
            switch (dom) {
                case 7 : char_name = "Diona"; break;
                case 9 : char_name = "Razor"; break;
                case 13 : char_name = "Albedo"; break;
                case 28 : char_name = "Kamisato Ayaka"; break;
            }
            break;
        }
        case OCTOBER: {
            switch (dom) {
                case 9 : char_name = "Xingqiu"; break;
                case 16 : char_name = "Xinyan"; break;
                case 19 : char_name = "Sayu"; break;
                case 25 : char_name = "Eula"; break;
                case 29 : char_name = "Kaedehara Kazuha"; break;
            }
            break;
        }
        case NOVEMBER: {
            switch (dom) {
                case 2 : char_name = "Xiangling"; break;
                case 20 : char_name = "Keqing"; break;
                case 26 : char_name = "Sucrose"; break;
                case 30 : char_name = "Kaeya"; break;
            }
            break;
        }
        case DECEMBER: {
            switch (dom) {
                case 2 : char_name = "Ganyu"; break;
                case 3 : char_name = "Nilou"; break;
                case 21 : char_name = "Dori"; break;
                case 29 : char_name = "Tighnari"; break;
                case 31 : char_name = "Zhongli"; break;
            }
            break;
        }

        // 3.2
        // 納西妲 , 萊依拉

    }
    return char_name;
}

exports.getArtifactBuffName = function (nickname){
    switch (nickname){
        case "baseHP" : return lang.weapon_stat_HP;
        case "baseATK" : return lang.weapon_stat_atk;
        case "baseDEF" : return lang.weapon_stat_DEF;
        case "HP" : return lang.weapon_stat_HPP;
        case "ATK" : return lang.weapon_stat_atkP;
        case "DEF" : return lang.weapon_stat_DEFP;
        case "EleMas" : return lang.weapon_stat_EleMas;
        case "EnRech" : return lang.weapon_stat_EnRechP;
        case "PhyDMG" : return lang.weapon_stat_PhyDMGP;
        case "EleDMG_Electro" : return lang.weapon_stat_EleDMGP_Electro;
        case "EleDMG_Pyro" : return lang.weapon_stat_EleDMGP_Pyro;
        case "EleDMG_Hydro" : return lang.weapon_stat_EleDMGP_Hydro;
        case "EleDMG_Dendro" : return lang.weapon_stat_EleDMGP_Dendor;
        case "EleDMG_Cryo" : return lang.weapon_stat_EleDMGP_Cryo;
        case "EleDMG_Anemo" : return lang.weapon_stat_EleDMGP_Anemo;
        case "EleDMG_Geo" : return lang.weapon_stat_EleDMGP_Geo;
        case "CritRate" : return lang.weapon_stat_CritRateP;
        case "CritDMG" : return lang.weapon_stat_CritDMGP;
        case "Healing" : return lang.weapon_stat_HealingP;

        default: return lang.unknown;
    }
}

exports.getSkillNameByCustomName = function (str){
    switch (str){
        case "技能傷害" : return lang.skill_dmg;
        case "剎那之花傷害" : return lang.transient_blossom_dmg;
        case "急凍炸彈傷害" : return lang.freeze_bomb_dmg;
        case "冷凍炸彈傷害" : return lang.chillwater_bomblets;
        case "爆炸傷害" : return lang.explosion_dmg;
        case "水珠傷害" : return lang.droplet_dmg;
        case "命中治療量" : return lang.hp_regeneration_per_hit;
        case "持續治療量" : return lang.continuous_regeneration;
        case "命中治療量_BASE" : return lang.hp_regeneration_per_hit_base;
        case "持續治療量_BASE" : return lang.continuous_regeneration_base;
        case "基礎傷害" : return lang.base_dmg;
        case "受擊時傷害提升" : return lang.dmg_bonus_on_hit_taken;
        case "護盾吸收量_BASE" : return lang.base_dmg_base;
        case "點按傷害" : return lang.press_dmg;
        case "一段蓄力傷害" : return lang.charge_level_1_dmg;
        case "二段蓄力傷害" : return lang.charge_level_2_dmg;
        case "一段傷害" : return lang.dmg_1_hit;
        case "二段傷害" : return lang.dmg_2_hit;
        case "三段傷害" : return lang.dmg_3_hit;
        case "貓爪傷害(@1)" : return lang.icy_paw_dmg_per1;
        case "護盾基礎吸收量" : return lang.base_shield_dmg_absorption;
        case "護盾基礎吸收量_BASE" : return lang.base_shield_dmg_absorption_base;
        case "長按傷害" : return lang.hold_dmg;
        case "冰渦之劍傷害" : return lang.icewhirl_brand_dmg;
        case "奧茲攻擊傷害" : return lang.ozs_atk_dmg;
        case "召喚傷害" : return lang.summoning_dmg;
        case "血梅香傷害" : return lang.blood_blossom_dmg;
        case "點按技能傷害" : return lang.press_skill_dmg;
        case "長按技能傷害" : return lang.hold_skill_dmg;
        case "雷楔傷害" : return lang.lightning_stiletto_dmg;
        case "斬擊傷害" : return lang.slashing_dmg;
        case "雷爆連斬傷害" : return lang.thunderclap_slash_dmg;
        case "蹦蹦炸彈傷害" : return lang.jumpy_dumpty_dmg;
        case "詭雷傷害" : return lang.mine_dmg;
        case "天狗咒雷·伏 傷害" : return lang.tengu_juurai_ambush_dmg;
        case "無引雷長按傷害" : return lang.non_conductive_hold_dmg;
        case "一層引雷長按傷害" : return lang.stack_1_conductive_hold_dmg;
        case "二層引雷長按傷害" : return lang.stack_2_conductive_hold_dmg;
        case "三層引雷長按傷害" : return lang.stack_3_conductive_hold_dmg;
        case "持續傷害" : return lang.dot;
        case "吸收量" : return lang.dmg_absorption;
        case "治療量" : return lang.healing;
        case "吸收量_BASE" : return lang.dmg_absorption_base;
        case "治療量_BASE" : return lang.healing_base;
        case "寒病鬼差傷害" : return lang.herald_of_frost_dmg;
        case "協同攻擊傷害" : return lang.coordinated_atk_dmg;
        case "波紋傷害" : return lang.ripple_dmg;
        case "風風輪傷害" : return lang.fuufuu_windwheel_dmg;
        case "風風輪舞踢點按傷害" : return lang.pressfuufuu_whirlwind_kick_dmg;
        case "風風輪舞踢長按傷害" : return lang.fuufuu_whirlwind_kick_hold_dmg;
        case "風風輪附帶元素傷害" : return lang.fuufuu_windwheel_elemental_dmg;
        case "風風輪舞踢長按附帶元素傷害" : return lang.fuufuu_whirlwind_kick_elemental_dmg;
        case "狀態激發傷害" : return lang.stance_change_dmg;
        case "四段傷害" : return lang.dmg_4_hit;
        case "五段傷害" : return lang.dmg_5_hit;
        case "六段傷害" : return lang.dmg_6_hit;
        case "重擊傷害" : return lang.charged_attack_dmg;
        case "斷流·斬 傷害" : return lang.riptide_slash;
        case "護盾吸收量上限" : return lang.max_shield_dmg_absorption;
        case "護盾吸收量上限_BASE" : return lang.max_shield_dmg_absorption_base;
        case "初始切割傷害" : return lang.initial_cutting_dmg;
        case "最大切割傷害" : return lang.max_cutting_dmg;
        case "初始爆風傷害" : return lang.initial_storm_dmg;
        case "最大爆風傷害" : return lang.max_storm_dmg;
        case "噴火傷害" : return lang.flame_dmg;
        case "揮舞傷害" : return lang.swing_dmg;
        case "一級護盾吸收量" : return lang.shield_level_1_dmg_absorption;
        case "二級護盾吸收量" : return lang.shield_level_2_dmg_absorption;
        case "三級護盾吸收量" : return lang.shield_level_3_dmg_absorption;
        case "一級護盾吸收量_BASE" : return lang.shield_level_1_dmg_absorption_base;
        case "二級護盾吸收量_BASE" : return lang.shield_level_2_dmg_absorption_base;
        case "三級護盾吸收量_BASE" : return lang.shield_level_3_dmg_absorption_base;
        case "熾焰箭傷害" : return lang.blazing_arrow_dmg;
        case "岩脊傷害" : return lang.stone_stele_dmg;
        case "共鳴傷害" : return lang.stone_resonance_dmg;
        case "護盾附加吸收量" : return lang.additional_shield_absorption;
        case "爆發傷害" : return lang.elemental_burst_dmg;
        case "生滅之花傷害(@1)" : return lang.fatal_blossom_dmg;
        case "箭雨單次傷害" : return lang.fiery_rain_dmg_per_wave;
        case "箭雨總傷害" : return lang.total_fiery_rain_dmg;
        case "攻擊力提高" : return lang.atk_bonus;
        case "閃雷傷害" : return lang.lightning_dmg;
        case "持續治療" : return lang.continuous_regeneration_per_sec;
        case "持續治療_BASE" : return lang.continuous_regeneration_per_sec_base;
        case "領域持續傷害" : return lang.continuous_field_dmg;
        case "光降之劍基礎傷害" : return lang.lightfall_sword_base_dmg;
        case "落雷傷害" : return lang.falling_thunder_dmg;
        case "冰凌傷害" : return lang.ice_shard_dmg;
        case "岩晶崩破傷害" : return lang.crystal_collapse_dmg;
        case "低血量時技能傷害" : return lang.low_hp_skill_dmg;
        case "技能治療量" : return lang.skill_hp_regeneration;
        case "低血量時技能治療量" : return lang.low_hp_skill_regeneration;
        case "出入領域傷害" : return lang.field_entering_exiting_dmg;
        case "領域發動治療量" : return lang.field_activation_healing;
        case "領域發動治療量_BASE" : return lang.field_activation_healing_base;
        case "附加元素傷害" : return lang.additional_elemental_dmg;
        case "切割傷害" : return lang.cutting_dmg;
        case "綻放傷害" : return lang.bloom_dmg;
        case "連斬傷害" : return lang.consecutive_slash_dmg;
        case "最後一擊傷害" : return lang.last_attack_dmg;
        case "轟轟火花傷害" : return lang.sparks_n_splash_dmg;
        case "天狗咒雷·金剛壞 傷害" : return lang.tengu_juurai_titanbreaker_dmg;
        case "天狗咒雷·雷礫 傷害" : return lang.tengu_juurai_stormcluster_dmg;
        case "放電傷害" : return lang.discharge_dmg;
        case "泡影破裂傷害" : return lang.illusory_bubble_explosion_dmg;
        case "夢想一刀基礎傷害" : return lang.musou_no_hitotachi_base_dmg;
        case "下墜期間傷害" : return lang.plunge_dmg;
        case "低空墜地衝擊傷害" : return lang.low_plunge_dmg;
        case "高空墜地衝擊傷害" : return lang.high_plunge_dmg;
        case "狼魂傷害" : return lang.soul_companion_dmg;
        case "普通攻擊速度提升" : return lang.normal_atk_spd_bonus;
        case "冰槍持續傷害" : return lang.ice_lance_dot;
        case "普通攻擊傷害提升" : return lang.normal_attack_dmg_bonus;
        case "重擊傷害提升" : return lang.charged_attack_dmg_bonus;
        case "化海月傷害提升" : return lang.bake_kurage_dmg_bonus;
        case "技能發動傷害" : return lang.skill_activation_dmg;
        case "技能發動治療量" : return lang.skill_activation_healing;
        case "不倒貉貉傷害" : return lang.muji_muji_daruma_dmg;
        case "不倒貉貉治療量" : return lang.muji_muji_daruma_healing;
        case "不倒貉貉治療量_BASE" : return lang.muji_muji_daruma_healing_base;
        case "技能傷害·近戰" : return lang.skill_dmg_melee;
        case "技能傷害·遠程" : return lang.skill_dmg_ranged;
        case "斷流·爆 傷害" : return lang.riptide_blast_dmg;
        case "熾火崩破傷害" : return lang.fiery_collapse_dmg;
        case "護盾吸收量" : return lang.shield_dmg_absorption;
        case "龍捲風傷害" : return lang.tornado_dmg;
        case "地震波單次傷害" : return lang.dmg_per_shockwave;
        case "一段揮舞傷害" : return lang.dmg_1_hit_swing;
        case "二段揮舞傷害" : return lang.dmg_2_hit_swing;
        case "三段揮舞傷害" : return lang.dmg_3_hit_swing;
        case "旋火輪傷害" : return lang.pyronado_dmg;
        case "箭雨傷害" : return lang.sword_rain_dmg;
        case "琉金火光爆炸傷害" : return lang.aurous_blaze_explosion_dmg;
        // add in 20220219
        case "殺生櫻傷害·壹階" : return lang.sesshou_sakura_dmg_level_1;
        case "殺生櫻傷害·貳階" : return lang.sesshou_sakura_dmg_level_2;
        case "殺生櫻傷害·參階" : return lang.sesshou_sakura_dmg_level_3;
        case "殺生櫻傷害·肆階" : return lang.sesshou_sakura_dmg_level_4;
        case "天狐霆雷傷害" : return lang.tenko_thunderbolt_dmg;

        default: return lang.unknown;
    }
}

exports.getTCGDice = function (element){
    switch(element){
        case "Anemo" :
        case "GCG_COST_DICE_ANEMO" : {
            return "<:bg_tcg_dice_anemo:1069554806559096862>"
        }

        case "Cryo" :
        case "GCG_COST_DICE_CRYO" :  {
            return "<:bg_tcg_dice_cryo:1069554809490911243>";
            break;
        }
        case "Dendro" : 
        case "GCG_COST_DICE_DENDRO" : {
            return "<:bg_tcg_dice_dendro:1069554811160240178>";
            break;
        }
        case "Electro" :
        case "GCG_COST_DICE_ELECTRO" :  {
            return "<:bg_tcg_dice_electro:1069554814285000704>";
        }
        case "Geo" :
        case "GCG_COST_DICE_GEO" :  {
            return "<:bg_tcg_dice_geo:1069554815790743564>";
        }
        case "Hydro" : 
        case "GCG_COST_DICE_HYDRO" : {
            return "<:bg_tcg_dice_hydro:1069554819238465546>";
        }
        case "Pyro" : 
        case "GCG_COST_DICE_PYRO" : {
            return "<:bg_tcg_dice_pyro:1069554820605804555>";
        }
        case "RAND" : 
        case "GCG_COST_DICE_VOID" : {
            return "<:bg_tcg_dice_random:1069554823743148052>";
        }
        case "SPEC" : 
        case "GCG_COST_DICE_VOID" :{
            return "<:bg_tcg_dice_specific:1069554825597046804>";
        }
        case "Recharge" : 
        case "GCG_COST_ENERGY" :{
            return "<:bg_tcg_recharge:1069538781167890453>";
        }
    }
}

exports.getTCGDiceFULL = function (element, count){
    switch(element){
        case "Anemo" :
        case "GCG_COST_DICE_ANEMO" : {
            switch(count){
                case 1 : return "<:dice_anemo_1:1069458335897763962>";
                case 2 : return "<:dice_anemo_2:1069458338867331123>";
                case 3 : return "<:dice_anemo_3:1069458340855431268>";
                case 4 : return "<:dice_anemo_4:1069458343812411443>";
                case 5 : return "<:dice_anemo_5:1069458345683075072>";
            }
            break;
        }
        case "Cryo" :
        case "GCG_COST_DICE_CRYO" :  {
            switch(count){
                case 1 : return "<:dice_cryo_1:1069458348308697148>";
                case 2 : return "<:dice_cryo_2:1069458350309392474>";
                case 3 : return "<:dice_cryo_3:1069458353052467220>";
                case 4 : return "<:dice_cryo_4:1069458354776309790>";
                case 5 : return "<:dice_cryo_5:1069458357557141514>";
            }
            break;
        }
        case "Dendro" : 
        case "GCG_COST_DICE_DENDRO" : {
            switch(count){
                case 1 : return "<:dice_dendro_1:1069458359083880490>";
                case 2 : return "<:dice_dendro_2:1069458361852108831>";
                case 3 : return "<:dice_dendro_3:1069458364125429891>";
                case 4 : return "<:dice_dendro_4:1069458367208239124>";
                case 5 : return "<:dice_dendro_5:1069458369527685130>";
            }
            break;
        }
        case "Electro" :
        case "GCG_COST_DICE_ELECTRO" :  {
            switch(count){
                case 1 : return "<:dice_electro_1:1069458373118021632>";
                case 2 : return "<:dice_electro_2:1069458376356024460>";
                case 3 : return "<:dice_electro_3:1069458378054709269>";
                case 4 : return "<:dice_electro_4:1069458381930238095>";
                case 5 : return "<:dice_electro_5:1069458586671001700>";
            }
            break;
        }
        case "Geo" :
        case "GCG_COST_DICE_GEO" :  {
            switch(count){
                case 1 : return "<:dice_geo_1:1069458946986877008>";
                case 2 : return "<:dice_geo_2:1069458950350712932>";
                case 3 : return "<:dice_geo_3:1069458952611450960>";
                case 4 : return "<:dice_geo_4:1069458955400650763>";
                case 5 : return "<:dice_geo_5:1069458958512836738>";
            }
            break;
        }
        case "Hydro" : 
        case "GCG_COST_DICE_HYDRO" : {
            switch(count){
                case 1 : return "<:dice_hydro_1:1069458960505126932>";
                case 2 : return "<:dice_hydro_2:1069458963034288149>";
                case 3 : return "<:dice_hydro_3:1069458964795895901>";
                case 4 : return "<:dice_hydro_4:1069458968109391954>";
                case 5 : return "<:dice_hydro_5:1069458969720004699>";
            }
            break;
        }
        case "Pyro" : 
        case "GCG_COST_DICE_PYRO" : {
            switch(count){
                case 1 : return "<:dice_pyro_1:1069462352795271238>";
                case 2 : return "<:dice_pyro_2:1069462355848736788>";
                case 3 : return "<:dice_pyro_3:1069462357438378046>";
                case 4 : return "<:dice_pyro_4:1069462360407945277>";
                case 5 : return "<:dice_pyro_5:1069462362417025144>";
            }
            break;
        }
        case "RAND" : 
        case "GCG_COST_DICE_VOID" : {
            switch(count){
                case 1 : return "<:dice_rand_1:1069462365340434494>";
                case 2 : return "<:dice_rand_2:1069462367496306688>";
                case 3 : return "<:dice_rand_3:1069462370365227120>";
                case 4 : return "<:dice_rand_4:1069462372546257007>";
                case 5 : return "<:dice_rand_5:1069462375826206730>";
            }
            break;
        }
        case "SPEC" : 
        case "GCG_COST_DICE_VOID" :{
            switch(count){
                case 1 : return "<:dice_spec_1:1069462378850299904>";
                case 2 : return "<:dice_spec_2:1069462380377022495>";
                case 3 : return "<:dice_spec_3:1069462383346601994>";
                case 4 : return "<:dice_spec_4:1069462385292759120>";
                case 5 : return "<:dice_spec_5:1069462388606242847>";
            }
            break;
        }
    }
}