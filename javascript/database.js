const { Client,Collection, GatewayIntentBits, ActivityType , Partials, SlashCommandBuilder } = require('discord.js');
const { TOKEN, CLIENT_ID, ABS_PATH } = require('../private')
const { REST, Routes } = require('discord.js');
const COMMAND = require('./command')
const item_rss = require("./itemRSS")
const fs = require('fs');
var lang = require('./lang/zh-TW');
const sqlite = require("sqlite3")

var game_user_status = null;
var game_backpacks = null;
var game_events = null;

exports.db_user_status = game_user_status;
exports.db_backpacks = game_backpacks;
exports.db_events = game_events;

exports.init = function(){
    game_user_status = new sqlite.Database(ABS_PATH+"/db/game_user_status.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    game_backpacks = new sqlite.Database(ABS_PATH+"/db/game_backpacks.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    game_events = new sqlite.Database(ABS_PATH+"/db/game_events.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);

	game_user_status.run('CREATE TABLE if not exists status(user_id TEXT, user_name TEXT, user_lvl INTEGER, user_exp INTEGER, remain_korise_ball INTEGER, remain_korise_coin INTEGER, init_unix TEXT)');
}
