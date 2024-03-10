import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `You need to give the URL of Any Facebook video, post, reel, image`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`https://api-rest-jessi2devolop.koyeb.app/api/dowloader/fbdown?url=${text}`);
  } catch (error) {
    throw `An error occurred: ${error.message}`;
  }

  let api_response = await res.json();

  if (!api_response || !api_response.data) {
    throw `No video or image found or Invalid response from API.`;
  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type;
    const mediaURL = mediaData.url_download;

    let cap = `HERE IS THE ${mediaType.toUpperCase()} >,<`;

    if (mediaType === 'video') {
      
      conn.sendFile(m.chat, mediaURL, 'facebook.mp4', cap, m);
    } else if (mediaType === 'image') {
      
      conn.sendFile(m.chat, mediaURL, 'facebook.jpg', cap, m);
    }
  }
};

handler.help = ['facebook'];
handler.tags = ['downloader'];
handler.command = /^(facebook|fbdll|fb|fbdwn)$/i;

export default handler;
