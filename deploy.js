const { REST, Routes } = require('discord.js');
const { TOKEN, CLIENT_ID } = require('./private')
const COMMAND = require('./javascript/command')

//https://hackmd.io/@winsonOTP/discord-js-v14-ep5-1

/**
 * 要製作一個新的指令之前，第一步便是構想指令的大致架構，在此分為以下五項：
  ．指令名稱
  ．指令說明
  ．指令用途
  ．回應內容
  ．其他功能
  前兩項是在輸入斜線 (/) 時使用者會看到的資訊，通常會讓使用者對於指令的用途和用法一目了然。
  而第三～五項是協助您設計指令的程式，讓您有明確的方向製作並供使用者使用。
 */

//指令註冊
const commands = [
  
  
  /*
  {
    name: 'help',
    description: '查看機器人的相關資料及資訊',
  },COMMAND.echo
  */
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();