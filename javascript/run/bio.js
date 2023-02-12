const { Client, EmbedBuilder } = require('discord.js');
const style = require("../style")

const bio_embed = new EmbedBuilder()
	.setColor(style.embedColor)
	.setTitle("**朝霧冰瀬**")
	.setThumbnail('attachment://app_ico_round.png')
	.setDescription(
        "My name is 朝霧冰瀬"
    );
    
exports.bio_img_url = "./rss/bot/app_ico_round.png"     
exports.bio_embed = bio_embed;