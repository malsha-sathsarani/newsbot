let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `*💌 Enter a short text*\n\n📌 Example  : *${usedPrefix + command}* Jessidev`
	let too = `💌 Separate the text with a *+* \n\n📌 Example : \n*${usedPrefix + command}* jessi *+* dev`
	
	m.react(rwait);
	
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'flaming':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/flaming?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'shadowsky':
		if (!text) throw tee;
		let qhut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/shadow-sky?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, qhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'metallic':
		if (!text) throw tee;
		let ehut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/metallic?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, ehut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'naruto':
		if (!text) throw tee;
		let rhut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/naruto?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, rhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'pubg':
		if (!text) throw too
		if (!text.includes('+')) throw too  
		let [j, k] = text.split`+`
		let thut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/pubg?text=${encodeURIComponent(j)}&text2=${encodeURIComponent(k)}`;
		conn.sendFile(m.chat, thut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'undergrass':
		if (!text) throw tee;
		let yhut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/under-grass?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, yhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
	  case 'harrypotter':
		if (!text) throw tee;
		let uhut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/harry-potter?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, uhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
	  case 'flowertypography':
		if (!text) throw tee;
		let ihut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/flower-typography?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, ihut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'pictureoflove':
		if (!text) throw tee;
		let ohut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/picture-of-love?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, ohut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'coffeecup':
		if (!text) throw tee;
		let phut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/coffee-cup?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, phut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'butterfly':
		if (!text) throw tee;
		let ahut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/butterfly?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, ahut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'nightsky':
		if (!text) throw tee;
		let shut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/night-sky?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, shut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'carvedwood':
		if (!text) throw tee;
		let dhut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/carved-wood?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, dhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'ilumimetallic':
		if (!text) throw tee;
		let fhut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/illuminated-metallic?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, fhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
	  case 'sweetcandy':
		if (!text) throw tee;
		let ghut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/sweet-candy?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, ghut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'pencil':
		if (!text) throw tee;
		let hhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/pencil?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, hhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'glitch':
		if (!text) throw tee;
		let jhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/glitch?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, jhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'berry':
		if (!text) throw tee;
		let khut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/berry?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, khut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'blackpink':
		if (!text) throw tee;
		let lhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/blackpink?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, lhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'neon':
		if (!text) throw tee;
		let zhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/neon?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, zhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'logobear':
		if (!text) throw tee;
		let xhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/logobear?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, xhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
	  case 'christmas':
		if (!text) throw tee;
		let vhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/3dchristmas?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, vhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
	  case 'thunder':
		if (!text) throw tee;
		let bhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/thunder?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, bhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case '3dbox':
		if (!text) throw tee;
		let nhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/3dboxtext?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, ohut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'glitch2':
		if (!text) throw too
		if (!text.includes('+')) throw too  
		let [l, z] = text.split`+`
		let mhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/glitch2?text=${encodeURIComponent(l)}&text2=${encodeURIComponent(z)}`;
		conn.sendFile(m.chat, mhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'glitchtiktok':
		if (!text) throw too
		if (!text.includes('+')) throw too
		let [x, c] = text.split`+`
		let qqhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/glitchtiktok?text=${encodeURIComponent(x)}&text2=${encodeURIComponent(c)}`;
		conn.sendFile(m.chat, qqhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'vgclassic':
		if (!text) throw too
		if (!text.includes('+')) throw too
		let [v, b] = text.split`+`
		let wwhut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/video-game-classic?text=${encodeURIComponent(v)}&text2=${encodeURIComponent(b)}`;
		conn.sendFile(m.chat, wwhut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'marvelstudios':
		if (!text) throw too
		if (!text.includes('+')) throw too
		let [n, m] = text.split`+`
		let eehut = `https://api-rest-jessi2devolop.koyeb.app/api/textpro/marvel-studios?text=${encodeURIComponent(n)}&text2=${encodeURIComponent(m)}}`;
		conn.sendFile(m.chat, eehut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;

	  default:
	} 
  };
  
  handler.help = ['flaming', 'shadowsky', 'metallic', 'naruto', 'pubg', 'undergrass', 'harrypotter', 'flowertypography', 'pictureoflove', 'coffeecup', 'butterfly', 'nightsky', 'carvedwood', 'ilumimetallic', 'sweetcandy', 'pencil', 'glitch', 'berry', 'blackpink', 'neon', 'logobear', 'christmas', 'thunder', '3dbox', 'glitch2', 'glitchtiktok', 'vgclassic', 'marvelstudios'];
  handler.tags = ['LogoMaker'];
  handler.command = /^(flaming|shadowsky|metallic|naruto|pubg|undergrass|harrypotter|flowertypography|pictureoflove|coffeecup|butterfly|nightsky|carvedwood|ilumimetallic|sweetcandy|pencil|glitch|berry|blackpink|neon|logobear|christmas|thunder|3dbox|glitch2|glitchtiktok|vgclassic|marvelstudios)$/i;
  
  export default handler
