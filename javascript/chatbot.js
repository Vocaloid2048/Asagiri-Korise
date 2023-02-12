const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs")
const configuration = new Configuration({
    apiKey: require("../private").OPENAI_TOKEN,
    organization : require("../private").OPENAI_ORG
});
const openai = new OpenAIApi(configuration);

exports.ask = async function(interaction, str) {
    await interaction.deferReply({ ephemeral: false });
    var prompt = "The following is a conversation between "+interaction.user.username+", and Genshin Spirit. "+"\n"+
            interaction.user.username+": "+str
            
    console.log(prompt)
    const response = await openai.createCompletion({
        prompt,
        model: "text-davinci-003",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    if(response.data.choices[0].text !== undefined && response.data.choices[0].text !== ''){
        console.log("response.data.choices[0].text")
        console.log(response.data.choices[0].text)
        await interaction.editReply(response.data.choices[0].text.replace("Genshin Spirit:", ""));
    }else{
        await interaction.editReply("Hmm...");
    }


    //console.log("response", response.data.choices[0].text)
//await interaction.reply(response.data.choices[0].text) ;
}


exports.ask2 = async function(message, client){
    if (message.author.bot) return
    if (message.channel.id !== "1067334103118123038") return

    message.channel.sendTyping()

    let messages = Array.from(await message.channel.messages.fetch({
        limit: 10,
        before: message.id
    }))
    messages = messages.map(m=>m[1])
    messages.unshift(message)

    let users = [...new Set([...messages.map(m=> m.member.displayName), client.user.username])]

    let lastUser = users.pop()

    let prompt = `The following is a conversation between ${users.join(", ")}, and ${lastUser}. \n\n`

    for (let i = messages.length - 1; i >= 0; i--) {
        const m = messages[i]
        prompt += `${m.member.displayName}: ${m.content}\n`
    }
    prompt += `${client.user.username}:`
    console.log("prompt:", prompt)

    const response = await openai.createCompletion({
        prompt,
        model: "text-davinci-003",
        max_tokens: 500,
        stop: ["\n"]
    })

    console.log("response", response.data.choices[0].text)
    await message.channel.send(response.data.choices[0].text)
}