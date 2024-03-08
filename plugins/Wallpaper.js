import { wallpaper } from "../lib/scrape.js";

let handler = async (m, { conn, command, text, usedPrefix }) => {
    let query = text
    if (!query) throw `Example \n\n*.wallpaper girl*`;
    m.reply(wait);
    try {
        let wallpapers = await wallpaper(query);
        let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        let cap = "*📥 Download By Jessi-md*";
        conn.sendMessage(m.chat, { image: { url: randomWallpaper }, caption: cap }, m);
    } catch (e) {
        console.log(e);
        m.reply(`حذث خطأ`);
    }
};
handler.help = ['wallpaper']
handler.tags = ['downloader']
handler.command = /^wallpaper$/i

export default handler
