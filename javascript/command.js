const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
var lang = require('./lang/zh-TW')
var langName = "zh-TW"
const ABS_PATH = require("../private")
const item_rss = require("./itemRSS")

module.exports = {
	help : new SlashCommandBuilder()
	.setName('help')
	.setNameLocalizations({
		"zh-TW": '幫助',
		"zh-CN": '幫助'
	})
	.setDescription('Get the command list')
	.setDescriptionLocalizations({
		"zh-TW": '查詢指令列表',
		"zh-CN": '查詢指令列表'
	})
	.addIntegerOption(option =>
		option
		.setName('type')
		.setNameLocalizations({
			"zh-TW" : "類型",
			"zh-CN" : "类型"
		})
		.setDescription("Please choose which types of command you would like to know")
		.setDescriptionLocalizations({
			"zh-TW" : "請選擇您想了解的命令類型",
			"zh-CN" : "请选择您想了解的命令类型"
		})
		.addChoices(
			{name: "Information Display", value: 1,},
			{name: "Calculator", value: 2},
			{name: "Daily Highlights", value: 3},
			{name: "Other Functions", value: 4},
		)
	),

	data : new SlashCommandBuilder()
	.setName("data")
	.setNameLocalizations({
		"zh-TW": "資料庫"
	})
	.setDescription('Get data of characters, weapons, etc... from the database')
	.setDescriptionLocalizations({
		"zh-TW": "從數據庫中獲取角色、武器等數據"
	})
	.addSubcommand((subcommand) =>
				subcommand
					.setName('character')
					.setNameLocalizations({
						"zh-TW" : "角色"
					})
					.setDescription("Please choose a charater to view")
					.setDescriptionLocalizations({
						"zh-TW" : "請選擇您要查看的角色"
					})
					.addStringOption(option =>
						option
						.setRequired(true)
						.setName("name_char")
						.setNameLocalizations({
							"zh-TW" : "角色名稱"
						})
						.setDescription("Please type name of the item")
						.setAutocomplete(true)
					),
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('weapon')
					.setNameLocalizations({
						"zh-TW" : "武器"
					})
					.setDescription("Please choose a weapon to view")
					.setDescriptionLocalizations({
						"zh-TW" : "請選擇您要查看的武器"
					})
					.addStringOption(option =>
						option
						.setRequired(true)
						.setName("name_weapon")
						.setNameLocalizations({
							"zh-TW" : "武器名稱"
						})
						.setDescription("Please type name of the item")
						.setAutocomplete(true)
					),
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('artifact')
					.setNameLocalizations({
						"zh-TW" : "聖遺物"
					})
					.setDescription("Please choose the artifact set to view")
					.setDescriptionLocalizations({
						"zh-TW" : "請選擇您要查看的聖遺物套裝"
					})
					.addStringOption(option =>
						option
						.setRequired(true)
						.setName("name_artifact")
						.setNameLocalizations({
							"zh-TW" : "聖遺物套裝名稱"
						})
						.setDescription("Please type name of the item")
						.setAutocomplete(true)
					),
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('genius_invokation_tcg')
					.setNameLocalizations({
						"zh-TW" : "七聖召喚"
					})
					.setDescription("Please choose a card of Genius Invokation TCG to view")
					.setDescriptionLocalizations({
						"zh-TW" : "請選擇您要查看的七聖召喚卡牌"
					})
					.addStringOption(option =>
						option
						.setRequired(true)
						.setName("name_tcg")
						.setNameLocalizations({
							"zh-TW" : "七聖召喚卡牌名稱"
						})
						.setDescription("Please type name of the item")
						.setAutocomplete(true)
					),
			),

	search : new SlashCommandBuilder()
	.setName("search")
	.setDescription("Search item by tags !")
	.addSubcommandGroup((group) =>
		group
			.setName("item_type")
			.setNameLocalizations({
				"zh-TW" : "物件類型"
			})
			.setDescription("Please choose which types of item you want to view")
			.setDescriptionLocalizations({
				"zh-TW" : "請選擇您要查看的物件類型"
			})
			.addSubcommand((subcommand) =>
				subcommand
					.setName('character')
					.setDescription("Please type name of the item")
					.setNameLocalizations({
						"zh-TW" : "角色"
					})
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('weapon')
					.setDescription("Please type name of the item")
					.setNameLocalizations({
						"zh-TW" : "武器"
					})
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('artifact')
					.setDescription("Please type name of the item")
					.setNameLocalizations({
						"zh-TW" : "聖遺物"
					})
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('genius_invokation_tcg')
					.setDescription("Please type name of the item")
					.setNameLocalizations({
						"zh-TW" : "七聖召喚"
					})
			)
	),

	korise : new SlashCommandBuilder()
	.setName("korise")
	.setNameLocalizations({
		"zh-TW" : "冰瀬",
		"zh-CN" : "冰瀬"
	})
	.setDescription("Let's chat !")
	.addStringOption(
		option => 
		option
		.setName('want_to_say')
		.setNameLocalizations({
			"zh-TW" : "想說的話",
			"zh-CN" : "想说的话"
		})
		.setDescription("Please enter what you would like to say...")
		.setDescriptionLocalizations({
			"zh-TW" : "請輸入你想說的話",
			"zh-CN" : "请输入你想说的话"
		})
		.setMaxLength(128)
	),

	game : new SlashCommandBuilder()
	.setName("game")
	.setNameLocalizations({
		"zh-TW": "小遊戲"
	})
	.setDescription("Let's play a mini game !")
	.setDescriptionLocalizations({
		"zh-TW": "一起玩小遊戲吧！"
	})
	.addSubcommand((subcommand) =>
				subcommand
					.setName('backpack')
					.setNameLocalizations({
						"zh-TW" : "背包"
					})
					.setDescription("Let's see what's in the backpack")
					.setDescriptionLocalizations({
						"zh-TW" : "來看看背包有什麼東西"
					})
					.addStringOption(option => 
						option
						.setName('backpack_type')
						.setNameLocalizations({
							"zh-TW" : "打算查看物件類型"
						})
						.setDescription("Please select which type of item you would like to see")
						.setDescriptionLocalizations({
							"zh-TW" : "請選擇您要查看的物件類型"
						})
						.addChoices(
							{name: lang.ui_siptik_name, value: "MATERIAL"},
							{name: lang.title_char, value: "CHAR"},
							{name: lang.title_weapons, value: "WEAPON"},
							//{name: lang.title_artifacts, value: 3},
						)
						.setRequired(true)
					),
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('train')
					.setNameLocalizations({
						"zh-TW" : "養成"
					})
					.setDescription("Which item you would like to train today?")
					.setDescriptionLocalizations({
						"zh-TW" : "今天打算養成甚麼？"
					})
					.addIntegerOption(option => 
						option
						.setName('train_type')
						.setNameLocalizations({
							"zh-TW" : "養成"
						})
						.setDescription("Please select which type of item you would like to train")
						.setDescriptionLocalizations({
							"zh-TW" : "請選擇您要養成的物件類型"
						})
						.addChoices(
							//{name: lang.ui_siptik_name, value: 0},
							{name: lang.title_char, value: 1},
							{name: lang.title_weapons, value: 2},
							//{name: lang.title_artifacts, value: 3},
						)
					),
			)
			.addSubcommand((subcommand) =>
				subcommand
					.setName('account')
					.setNameLocalizations({
						"zh-TW" : "帳戶"
					})
					.setDescription("Print my account status")
					.setDescriptionLocalizations({
						"zh-TW" : "列印我的帳戶狀態"
					}),
			),

	async autocomplete(interaction, dataList, tag) {
		const focusedOption = interaction.options.getFocused(true);

		/*
		TYPE : integer between 0 and 4
			0 : ALL
			1 : Information Display
			2 : Calculator
			3 : Daily Highlights
			4 : Other Functions
		*/

		switch(interaction.commandName){
			case "data" : {
				if (focusedOption.name === 'name_char') {
					const filtered = dataList.filter(function (choice){
						if ((this.count < 25) && (choice.toLowerCase().includes(focusedOption.value.toLowerCase()) || item_rss.getCharByName(choice, false)[1].toLowerCase().includes(focusedOption.value.toLowerCase()))) {
							this.count++;
							return true;
						}
					}, {count: 0});
					await interaction.respond(
						filtered.map(choice => ({ 
							name: item_rss.getCharByName(choice)[1],  
							value: choice })),
					);
				}else if (focusedOption.name === 'name_weapon') {
					const filtered = dataList.filter(function (choice){
						if ((this.count < 25) && (choice.toLowerCase().includes(focusedOption.value.toLowerCase()) || item_rss.getWeaponByName(choice)[0].toLowerCase().includes(focusedOption.value.toLowerCase()))) {
							this.count++;
							return true;
						}
					}, {count: 0});
					await interaction.respond(
						filtered.map(choice => ({ 
							name: item_rss.getWeaponByName(choice)[0],  
							value: choice })),
					);
				}else if (focusedOption.name === 'name_artifact') {
					const filtered = dataList.filter(function (choice){
						if ((this.count < 25) && (choice.toLowerCase().includes(focusedOption.value.toLowerCase()) || item_rss.getArtifactByName(choice)[0].toLowerCase().includes(focusedOption.value.toLowerCase()))) {
							this.count++;
							return true;
						}
					}, {count: 0});
					await interaction.respond(
						filtered.map(choice => ({ 
							name: item_rss.getArtifactByName(choice)[0],  
							value: choice })),
					);
				}else if (focusedOption.name === 'name_tcg') {
					const filtered = dataList.filter(function (choice){
						if ((this.count < 25) && (choice.toLowerCase().includes(focusedOption.value.toLowerCase()) || item_rss.getTCGByName(choice)[1].toLowerCase().includes(focusedOption.value.toLowerCase()))) {
							this.count++;
							return true;
						}
					}, {count: 0});
					await interaction.respond(
						filtered.map(choice => ({ 
							name: item_rss.getTCGByName(choice)[1],  
							value: choice })),
					);
				}
				break;
			}
			case "game" :{

			}
		}
	}
}