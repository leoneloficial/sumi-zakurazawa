// *[ ❀ YTMP4 ]*
import fetch from 'node-fetch';

let HS = async (m, { conn, text }) => {
  if (!text || !/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)/i.test(text)) {
    return conn.reply(m.chat, `❀ Ingresa un enlace válido de YouTube`, m);
  }

  try {
    // Llamada a la API para obtener los datos del video
    let api = await fetch(`https://restapi.apibotwa.biz.id/api/ytmp4?url=${text}`);
    if (!api.ok) {
      throw new Error(`Error en la API: ${api.statusText} (HTTP ${api.status})`);
    }

    let json = await api.json();

    // Depuración: verificar la estructura de la respuesta
    if (!json.result || !json.result.download || !json.result.download.url) {
      console.error('Respuesta de la API inválida:', json);
      throw new Error('No se pudo obtener los datos del video. Verifica el enlace.');
    }

    let dl_url = json.result.download.url; // URL de descarga del video

    // Enviar el video al usuario
    await conn.sendMessage(
      m.chat,
      {
        video: { url: dl_url }, // URL del video
        fileName: `Dijiste.mp4`, // Nombre del archivo
        caption: `❀ Aquí tienes el video descargado: Dijiste.mp4`, // Texto acompañante
      },
      { quoted: m } // Mensaje citado
    );

    // Confirmar envío exitoso
    conn.reply(m.chat, `❀ Video enviado correctamente: Dijiste.mp4`, m);

  } catch (error) {
    console.error('Error al buscar el video:', error.message);

    conn.reply(
      m.chat,
      `❀ Error al buscar el video. Por favor, verifica el enlace o intenta más tarde.`,
      m
    );
  }
};

// Comando asociado
HS.command = ['ytmp4'];

export default HS;