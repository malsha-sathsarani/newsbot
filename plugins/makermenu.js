import moment from 'moment-timezone';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
   let res = await fetch('https://api.github.com/repos/whiteshadowofficial/Jessi-md')
   let json = await res.json()
   let txt = `	   *LOGO MAKER MENU*\n\n\n`
      txt += `> .flaming\n`
      txt += `> .shadowsky\n`
      txt += `> .metallic\n`
      txt += `> .naruto\n`
      txt += `> .pubg\n`
      txt += `> .undergrass\n`
      txt += `> .harrypotter\n`
      txt += `> .flowertypography\n`
      txt += `> .pictureoflove\n`
      txt += `> .coffeecup\n`
      txt += `> .butterfly\n`
      txt += `> .nightsky\n`
      txt += `> .carvedwood\n`
      txt += `> .ilumimetallic\n`
      txt += `> .sweetcandy\n\n\n\n`
      txt += `*Develop By JessiDev Team  💌*\n\n\n`
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
