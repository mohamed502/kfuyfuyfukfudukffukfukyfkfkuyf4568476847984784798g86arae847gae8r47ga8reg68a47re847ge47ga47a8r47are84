const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
ti={}  
spee={};

client.on('message', async message => {//By Codes , - ST I EdiTeD , .#4968
  if(message.content.startsWith(`-تقديم`)) {//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
    await message.channel.send("**:writing_hand: ارسل اللغة البرمجة الآن **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';//By Codes , - ST I EdiTeD , .#4968
    let br = '';//By Codes , - ST I EdiTeD , .#4968
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.edit(`**:ارسل مدة خبرتك الان**`)
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {//By Codes , - ST I EdiTeD , .#4968
  md = co.first().content
        co.first().delete()//By Codes , - ST I EdiTeD , .#4968
        e.edit(`**ارسل م تعرف بهذه اللغة الان**`)
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.then(col => {
  br = col.first().content
        col.first().delete()
e.edit("**جاري التقديم علي طلبك...**").then(b => {//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
if(gg) {
gg.send({embed : new Discord.RichEmbed()//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.setDescription(`**اللغة البرمجية : \n ${lan}\n مدة ممارسة هذه اللغة :\n ${md} \nالخبرة  :\n ${br}  **`)  
          .setFooter(`Codes.`)//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.setTimestamp()//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
});
}        
})
})

  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('484508926134583296');
  if(message.content.startsWith(`-قبول`)) {
    if(message.guild.id !== '460068204740345856') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});
  
client.on('message', message => {//By Codes , ' ّEpicEdiTeDّ#4968
              if(!message.channel.guild) return;//By Codes , ' ّEpicEdiTeDّ#4968
    var prefix = "$";//By Codes , ' ّEpicEdiTeDّ#4968
    if(message.content.startsWith('-bc')) {//By Codes , ' ّEpicEdiTeDّ#4968
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للإدارة**').then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية لاستعمال هاذا الأمر** //By Codes , ' ّEpicEdiTeDّ#4968`ADMINISTRATOR`' );//By Codes , ' ّEpicEdiTeDّ#4968
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);//By Codes , ' ّEpicEdiTeDّ#4968
    let copy = "S Bot";//By Codes , ' ّEpicEdiTeDّ#4968
    let request = `Requested By ${message.author.username}`;//By Codes , ' ّEpicEdiTeDّ#4968
    if (!args) return message.reply('**يجب عليك كتابة شيئ لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من الإرسال؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {//By Codes , ' ّEpicEdiTeDّ#4968
    msg.react('✅')//By Codes , ' ّEpicEdiTeDّ#4968
    .then(() => msg.react('❌'))//By Codes , ' ّEpicEdiTeDّ#4968
    .then(() =>msg.react('✅'))//By Codes , ' ّEpicEdiTeDّ#4968
 
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968
    reaction1.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968
    message.channel.send(`**☑ |   لقد تم ارسال الرسالة لـ ${message.guild.members.size} عضوآ**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968
    message.guild.members.forEach(m => {//By Codes , ' ّEpicEdiTeDّ#4968
    var bc = new//By Codes , ' ّEpicEdiTeDّ#4968
       Discord.RichEmbed()//By Codes , ' ّEpicEdiTeDّ#4968
       .setColor('RANDOM')//By Codes , ' ّEpicEdiTeDّ#4968
       .setDescription(`البرودكاست :mega:
**:shield: السيرفر : ** ${message.guild.name}
** :thinking:  المرسل : ** ${message.author.username}
**  الرسالة : ** ${args}
 
 
 
 
        `)//By Codes , ' ّEpicEdiTeDّ#4968
         .setTimestamp()//By Codes , ' ّEpicEdiTeDّ#4968
         .setFooter('S Bot' , 'https://cdn.discordapp.com/avatars/465885551329804288/55614337cfb9813916a60383469736d9.jpg?size=128')
    m.send({ embed: bc })
    msg.delete();//By Codes , ' ّEpicEdiTeDّ#4968
    })//By Codes , ' ّEpicEdiTeDّ#4968
    })//By Codes , ' ّEpicEdiTeDّ#4968
    reaction2.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968
    message.channel.send(`**تم الغاء البرودكاست :x:.**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , msg.delete();//By Codes , ' ّEpicEdiTeDّ#496
    })
    })//By Codes , ' ّEpicEdiTeDّ#4968
    }
    });//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , ' ّEpicEdiTeDّ#4968
 
//By Codes , ' ّEpicEdiTeDّ#4968



client.on("message", (message) => {

if (isCommand(message, "new")) {
const reason = message.content.split(" ").slice(1).join(" ");
if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون لدينا قريباً لمساعدتك`);
if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
let role = message.guild.roles.find("name", "Support Team");
let role2 = message.guild.roles.find("name", "@everyone");
c.overwritePermissions(role, {
SEND_MESSAGES: true,
READ_MESSAGES: true
});
c.overwritePermissions(role2, {
SEND_MESSAGES: false,
READ_MESSAGES: false
});
c.overwritePermissions(message.author, {
SEND_MESSAGES: true,
READ_MESSAGES: true
});
message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
const embed = new Discord.RichEmbed()
.setColor(0xCF40FA)
.addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
.setTimestamp();
c.send({
embed: embed
});
}).catch(console.error); 
}


if (isCommand(message, "close")) {
if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!nTo confirm, type `/confirm`. This will time out in 10 seconds and be cancelled.`)
.then((m) => {
message.channel.awaitMessages(response => response.content === '/confirm', {
max: 1,
time: 10000,
errors: ['time'],
})
.then((collected) => {
message.channel.delete();
})
.catch(() => {
m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
m2.delete();
}, 3000);
});
});
}

});
	
	  client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


    }
});
	
  var BOxox = "-"
  const BOow = ["252813587188416512"];
if (message.content.startsWith(BOxox + 'الصاحب')) {
      if(!message.channel.guild) return message.reply(' ');
    if(!message.channel.guild) return;
if( BOow.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**👑 انت صاحب البوت **")
} else {
   message.reply("**🚫 انت لسا صاحب البوت**");   
}
}
});	
	
	  client.on('message', message => { //-MaX PicAssO#8266 codes©
  if (message.content === "-id") {
  let embed = new Discord.RichEmbed()//-MaX PicAssO#8266 codes©
.setThumbnail(message.author.avatarURL)  
.setAuthor(message.author.username)//-MaX PicAssO#8266 codes©
.setDescription("**معلومات عن الحــساب**")
            .setFooter(`-MaX PicAssO#8266.©`, 'codes.©')//-MaX PicAssO#8266 codes©
.setColor("#9B59B6")
.addField("**اســـم الحســاب**", `${message.author.username}`)//-MaX PicAssO#8266 codes©
.addField('**تاق الحساب الخاص**', message.author.discriminator)
.addField("**الرقـــم الشـــخصي**", message.author.id)//-MaX PicAssO#8266 codes©
.addField('**بــــوت**', message.author.bot)
.addField("**تاريخ التسجيل**", message.author.createdAt)//-MaX PicAssO#8266 codes©
  //-MaX PicAssO#8266 codes©

message.channel.sendEmbed(embed);
 }
});
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
























client.login('NDg0NTE4MjA1NDk1NDQzNDc2.DmjKog.oHhJGHdA9UvZh8w94eZ0yHeIQLo');
