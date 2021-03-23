/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const fetch = require('node-fetch').default;
const { Client, Message } = require('discord.js');
/**
 * JSDOC
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
module.exports.run = async (client, message, args) => {
	const res = await fetch('https://api.nuggetdev.com/api/meme');
	const json = await res.json();
	const embed = new Discord.MessageEmbed()
		.setTitle(`${json.data.title}`)
		.setURL(`${json.data.url}`)
		.setImage(json.data.image)
		.setColor('RANDOM')
		.setFooter(`👍 ${json.data.upvotes} | 💬 ${json.data.comments}`);
	message.reply({
		embed,
		allowedMentions: { repliedUser: false },
	});
};

module.exports.config = {
	name: 'meme',
	aliases: ['m'],
	description: 'Sends an ebik meme',
};
