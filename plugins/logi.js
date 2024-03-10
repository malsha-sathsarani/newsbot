let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `*💌 Enter a short text*\n\n📌 Example  : *${usedPrefix + command}* Jessidev`
	let too = `✳️ Separate the text with a *+* \n\n📌 Example : \n*${usedPrefix + command}* jessi *+* dev`
	
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
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/shadow-sky?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'metallic':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/metallic?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
	  case 'naruto':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/naruto?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'pubg':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/pubg?text=Pubg&text2=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'undergrass':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/under-grass?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
		case 'harrypotter':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/harry-potter?text${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
		case 'flowertypography':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/flower-typography?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'pictureoflove':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/picture-of-love?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'coffeecup':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/coffee-cup?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'butterfly':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/butterfly?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'nightsky':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/night-sky?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'carvedwood':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/carved-wood?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;
		
		case 'ilumimetallic':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/illuminated-metallic?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break; 
		
		case 'sweetcandy':
		if (!text) throw tee;
		let chut = `https://api-rest-jessi2devolop.koyeb.app/api/photooxy/sweet-candy?text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'jessidev.png', `*Made By JessiDev Team  💌*`, m);
		m.react(pwait);
		break;

	  default:
	} 
  };
  
  handler.help = ['flaming', 'shadowsky', 'metallic', 'naruto', 'pubg', 'undergrass', 'harrypotter', 'flowertypography', 'pictureoflove', 'coffeecup', 'butterfly', 'nightsky', 'carvedwood', 'ilumimetallic', 'sweetcandy'];
  handler.tags = ['LogoMaker'];
  handler.command = /^(flaming|shadowsky|metallic|naruto|pubg|undergrass|harrypotter|flowertypography|pictureoflove|coffeecup|butterfly|nightsky|carvedwood|ilumimetallic|sweetcandy)$/i;
  
  export default handler
