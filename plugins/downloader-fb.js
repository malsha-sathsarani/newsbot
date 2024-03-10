import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!/https?:\/\/(www\.)?facebook\.com\/(fb|.watch|tv)/i.test(args[0])) {
        await m.react('🫡');
        return m.reply(`Use example ${usedPrefix}${command} link`);
    }
    
    await m.react('🕥');
    
    try {
        let response = await fetch(`https://api-rest-jessi2devolop.koyeb.app/api/dowloader/fbdown?url=${args[0]}`);
        let data = await response.json();
    await m.react('🕚');
        
        if (data.status && data.result) {
          
            await conn.sendMessage(m.chat, { video: { url: data.result[0].Normal_video } }, { quoted: m }); 
            return m.react('✅');
        } else {
            throw new Error('Error in response data');
        }
    } catch (error) {
        console.error('Error:', error.message);
        m.reply('Failed to fetch fb data. Please try again later.');
        await m.react('😑');
    }
}

handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler;
