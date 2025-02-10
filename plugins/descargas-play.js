case 'play2':
case 'play': {
    const yts = require('yt-search'),
        ytdl = require('ytdl-core'),
        fetch = require('node-fetch');

    if (!text || text.trim() === '') return m.reply('Por favor, proporciona el nombre o término de búsqueda del video.');
m.react(rwait)
    const query = args.join(' ') || text;
    let video = {};

    try {
        const yt_play = await yts(query);
        if (!yt_play || yt_play.all.length === 0) return m.reply('No se encontraron resultados para tu búsqueda.');
        const firstResult = yt_play.all[0];
        video = {
            url: firstResult.url,
            title: firstResult.title,
            thumbnail: firstResult.thumbnail || 'default-thumbnail.jpg',
            timestamp: firstResult.duration.seconds,
            views: firstResult.views,
            author: firstResult.author.name,
        };
    } catch {
        return m.reply('Ocurrió un error al buscar el video.');
    }

    function secondString(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return [h, m, s]
            .map(v => v < 10 ? `0${v}` : v)
            .filter((v, i) => v !== '00' || i > 0)
            .join(':');
    }

    await conn.sendMessage(m.chat, {
        image: { url: video.thumbnail },
        caption: `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║◈ ${lenguaje.descargar.title} ${video.title}
│║◈ ${lenguaje.descargar.duracion} ${secondString(video.timestamp || 0)}
│║◈ ${lenguaje.descargar.views} ${video.views || 0}
│║◈ ${lenguaje.descargar.autor} ${video.author || 'Desconocido'}
│║◈ Link: ${video.url}
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`,
        footer: "𝙲𝙾𝚁𝚃𝙰𝙽𝙰 𝟸.𝟶",
        buttons: [
            {
                buttonId: `.musica ${video.url}`,
                buttonText: { displayText: "🎼AUDIO🎼" },
                type: 1,
            },
            {
                buttonId: `.video ${video.url}`,
                buttonText: { displayText: "🎬VIDEO🎬" },
                type: 1,
            },
            {
                buttonId: `.menu`,
                buttonText: { displayText: "📘MENU📘" },
                type: 1,
            },
        ],
        viewOnce: true,
        headerType: 4,
        mentions: [m.sender],
    }, { quoted: m });
    break;
}