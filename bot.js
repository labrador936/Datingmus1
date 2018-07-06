const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

console.log('Logged in ')

















  const lol =
[
'**__Welc__ome To Dating**  ',
'**W__elco__me To Dating**  ',
'**We__l__come To Dating**  ',
'**Wel__c__ome To Dating**  ',
'**Welc__o__me To Dating**  ',
'**Welco__m__e To Dating**  ',
'**Welcom__e__ To Dating**  ',
'**Welcome T__o__ Dating**  ',
'**Welcome To __Dating__**  ',
'**Welcome To Da__t__ing**  ',
'**Welcome To Dat__i__ng**  ',
'**Welcome To Dati__n__g**  ',
'**Welcome To Datin__g__**  '
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("403697654443540492");//???? ?????
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});

  

client.login(process.env.BOT_TOKEN);
