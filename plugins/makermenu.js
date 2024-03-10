import moment from 'moment-timezone';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
   let res = await fetch('https://api.github.com/repos/whiteshadowofficial/Jessi-md')
   let json = await res.json()
   let txt = `	   *LOGO MAKER MENU*\n\n\n`
      txt += `> .flaming  <text>\n`
      txt += `> .shadowsky  <text>\n`
      txt += `> .metallic  <text>\n`
      txt += `> .naruto  <text>\n`
      txt += `> .pubg  <text + text>\n`
      txt += `> .undergrass  <text>\n`
      txt += `> .harrypotter  <text>\n`
      txt += `> .flowertypography  <text>\n`
      txt += `> .pictureoflove  <text>\n`
      txt += `> .coffeecup  <text>\n`
      txt += `> .butterfly  <text>\n`
      txt += `> .nightsky  <text>\n`
      txt += `> .carvedwood  <text>\n`
      txt += `> .ilumimetallic  <text>\n`
      txt += `> .sweetcandy  <text>\n`
      txt += `> .pencil  <text>\n`
      txt += `> .glitch  <text>\n`
      txt += `> .berry  <text>\n`
      txt += `> .blackpink  <text>\n`
      txt += `> .neon  <text>\n`
      txt += `> .logobear  <text>\n`
      txt += `> .christmas  <text>\n`
      txt += `> .thunder  <text>\n`
      txt += `> .3dbox  <text>\n`
      txt += `> .glitch2  <text + text>\n`
      txt += `> .glitchtiktok  <text + text>\n`
      txt += `> .vgclassic  <text + text>\n`
      txt += `> .marvelstudios  <text + text>\n\n\n`
      txt += `*Develop By JessiDev Team  💌*\n`
   await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: '50',
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: txt,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

handler.help = ['makermenu']
handler.tags = ['general']
handler.command = /^(makermenu|makermenu|maker|m|k)$/i

export default handler
