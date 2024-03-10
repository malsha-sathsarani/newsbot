let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} fb_url_video*\n\nExample :\n${usedPrefix + command} `
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await fetch(`https://api-rest-jessi2devolop.koyeb.app/api/dowloader/fbdown?url=${text}`)
		let json = await anu.json()
		let txt = `${json.hasil.title}`
		await conn.sendMsg(m.chat, { video: { url: json.hasil.watermark }, caption: json.hasil.title }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`Invalid facebook url.`)
	}
}

handler.menudownload = ['fb <url>']
handler.tagsdownload = ['search']
handler.command = /^(facebook(fb)?)$/i

handler.premium = true
handler.limit = true

export default handler
