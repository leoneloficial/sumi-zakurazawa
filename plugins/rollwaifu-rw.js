/*
• @David-Chian
- https://github.com/David-Chian
*/

const _0x3a8c65=_0x1802;(function(_0x24b329,_0x137cdc){const _0x49f14f=_0x1802,_0x196947=_0x24b329();while(!![]){try{const _0x5d9f7e=-parseInt(_0x49f14f(0x12e))/0x1+parseInt(_0x49f14f(0x13e))/0x2+parseInt(_0x49f14f(0x129))/0x3*(parseInt(_0x49f14f(0x140))/0x4)+-parseInt(_0x49f14f(0x138))/0x5*(parseInt(_0x49f14f(0x141))/0x6)+parseInt(_0x49f14f(0x134))/0x7+-parseInt(_0x49f14f(0x14e))/0x8*(-parseInt(_0x49f14f(0x130))/0x9)+-parseInt(_0x49f14f(0x150))/0xa*(parseInt(_0x49f14f(0x118))/0xb);if(_0x5d9f7e===_0x137cdc)break;else _0x196947['push'](_0x196947['shift']());}catch(_0x3a34eb){_0x196947['push'](_0x196947['shift']());}}}(_0x2d04,0x3480d));import _0x2123b7 from'fs';import{v4 as _0x4f9b2b}from'uuid';const completadoImage='https://qu.ax/Qyawv.jpg',obtenerDatos=()=>{const _0x4fccb2=_0x1802;try{return _0x2123b7[_0x4fccb2(0x151)]('data.json')?JSON['parse'](_0x2123b7[_0x4fccb2(0x149)]('data.json',_0x4fccb2(0x137))):{'chats':{}};}catch(_0x5e85fc){return console[_0x4fccb2(0x144)]('Error\x20al\x20leer\x20data.json:',_0x5e85fc),{'chats':{}};}},guardarDatos=_0x244923=>{const _0x324bbb=_0x1802;try{_0x2123b7['writeFileSync'](_0x324bbb(0x117),JSON[_0x324bbb(0x121)](_0x244923,null,0x2));}catch(_0x408e38){console['error'](_0x324bbb(0x12d),_0x408e38);}},obtenerPersonajes=()=>{const _0x3506ac=_0x1802;try{return JSON[_0x3506ac(0x12a)](_0x2123b7[_0x3506ac(0x149)](_0x3506ac(0x115),_0x3506ac(0x137)));}catch(_0x8dfc9d){return console[_0x3506ac(0x144)]('Error\x20al\x20leer\x20characters.json:',_0x8dfc9d),[];}};let cooldowns={},handler=async(_0x501db0,{conn:_0x2eabe3})=>{const _0x2e5abf=_0x1802;try{let _0x2a842e=obtenerDatos(),_0x508a51=_0x501db0[_0x2e5abf(0x12c)],_0x52fb54=_0x501db0[_0x2e5abf(0x152)],_0xe891d3=new Date()[_0x2e5abf(0x146)](),_0x25653d=0xa*0x3c*0x3e8,_0x33f5ec=cooldowns[_0x52fb54]||0x0,_0x58ffce=_0xe891d3-_0x33f5ec;if(_0x58ffce<_0x25653d){let _0x5c31af=_0x25653d-_0x58ffce,_0x33a2d2=Math[_0x2e5abf(0x12b)](_0x5c31af/(0x3e8*0x3c)),_0x1f731b=Math[_0x2e5abf(0x12b)](_0x5c31af%(0x3e8*0x3c)/0x3e8),_0x45cd02=_0x2e5abf(0x14c)+_0x33a2d2+_0x2e5abf(0x128)+_0x1f731b+_0x2e5abf(0x11f);await _0x2eabe3[_0x2e5abf(0x14d)](_0x501db0[_0x2e5abf(0x12c)],{'text':_0x45cd02});return;}const _0xc64bfe=(_0x28c9e0,_0x420db6,_0x1acfcc)=>{const _0x4348e8=_0x2e5abf;let _0x80ff80=obtenerDatos();!_0x80ff80[_0x4348e8(0x135)][_0x28c9e0]&&(_0x80ff80['chats'][_0x28c9e0]={'usuarios':{},'personajesReservados':[]}),_0x80ff80[_0x4348e8(0x135)][_0x28c9e0][_0x4348e8(0x13a)]['push']({'userId':_0x420db6,..._0x1acfcc}),guardarDatos(_0x80ff80);},_0x364db9=_0x34fa2f=>{let _0x1fb9b6=obtenerPersonajes(),_0x2f275c=_0x1fb9b6['filter'](_0x5e94d3=>{const _0x2d1370=_0x1802;let _0x3e9726=_0x2a842e['chats'][_0x34fa2f]?.[_0x2d1370(0x13a)][_0x2d1370(0x13c)](_0x329da5=>_0x329da5['url']===_0x5e94d3[_0x2d1370(0x136)]),_0xe8b8bc=Object[_0x2d1370(0x148)](_0x2a842e[_0x2d1370(0x135)][_0x34fa2f]?.[_0x2d1370(0x139)]||{})[_0x2d1370(0x13c)](_0x4caaf3=>_0x4caaf3[_0x2d1370(0x14b)]['some'](_0x1f40af=>_0x1f40af['url']===_0x5e94d3[_0x2d1370(0x136)]));return!_0x3e9726&&!_0xe8b8bc;});return _0x2f275c;},_0xcc722f=()=>{const _0x1b38d4=_0x2e5abf;try{const _0x93e09a=JSON[_0x1b38d4(0x12a)](_0x2123b7['readFileSync'](_0x1b38d4(0x120),_0x1b38d4(0x137)));if(_0x93e09a[_0x1b38d4(0x153)]!==_0x1b38d4(0x116))return![];if(_0x93e09a[_0x1b38d4(0x12f)][_0x1b38d4(0x136)]!==_0x1b38d4(0x127))return![];return!![];}catch(_0x53ba32){return console[_0x1b38d4(0x144)](_0x1b38d4(0x13b),_0x53ba32),![];}};if(!_0xcc722f()){await _0x2eabe3[_0x2e5abf(0x126)](_0x501db0[_0x2e5abf(0x12c)],_0x2e5abf(0x14a),_0x501db0,rcanal);return;}let _0x380878=_0x364db9(_0x508a51);if(_0x380878[_0x2e5abf(0x11a)]===0x0){await _0x2eabe3[_0x2e5abf(0x14d)](_0x501db0[_0x2e5abf(0x12c)],{'image':{'url':completadoImage},'caption':_0x2e5abf(0x133)});return;}const _0x5c622c=_0x380878[Math[_0x2e5abf(0x12b)](Math[_0x2e5abf(0x125)]()*_0x380878['length'])],_0x45d103=_0x4f9b2b();let _0xcb56ae=_0x2a842e[_0x2e5abf(0x135)][_0x508a51]?.[_0x2e5abf(0x13a)][_0x2e5abf(0x14f)](_0x3d5923=>_0x3d5923[_0x2e5abf(0x136)]===_0x5c622c['url']),_0x25a34d=Object[_0x2e5abf(0x132)](_0x2a842e[_0x2e5abf(0x135)][_0x508a51]?.['usuarios']||{})[_0x2e5abf(0x14f)](([_0x5d00e6,_0x6af6e3])=>_0x6af6e3['characters'][_0x2e5abf(0x13c)](_0x419e1b=>_0x419e1b[_0x2e5abf(0x136)]===_0x5c622c[_0x2e5abf(0x136)])),_0x4e50f6;if(_0x25a34d)_0x4e50f6=_0x2e5abf(0x142)+_0x25a34d[0x1][_0x2e5abf(0x153)];else _0xcb56ae?_0x4e50f6=_0x2e5abf(0x11c)+_0xcb56ae[_0x2e5abf(0x143)]:_0x4e50f6=_0x2e5abf(0x13d);const _0x1148f8=_0x2e5abf(0x11d)+_0x5c622c[_0x2e5abf(0x153)]+_0x2e5abf(0x123)+_0x5c622c[_0x2e5abf(0x131)]+_0x2e5abf(0x11b)+_0x4e50f6+_0x2e5abf(0x11e)+_0x45d103+'>';await _0x2eabe3[_0x2e5abf(0x14d)](_0x501db0['chat'],{'image':{'url':_0x5c622c[_0x2e5abf(0x136)]},'caption':_0x1148f8,'mimetype':_0x2e5abf(0x119),'contextInfo':{'mentionedJid':_0x25a34d?[_0x25a34d[0x1]]:[],'externalAdReply':{'showAdAttribution':!![],'title':_0x2e5abf(0x145),'body':_0x2e5abf(0x13f),'thumbnailUrl':_0x5c622c[_0x2e5abf(0x136)],'sourceUrl':redes,'previewType':'PHOTO','mediaType':0x1,'renderLargerThumbnail':![]}}}),!_0x25a34d&&_0xc64bfe(_0x508a51,_0x52fb54,{..._0x5c622c,'id':_0x45d103}),cooldowns[_0x52fb54]=_0xe891d3;}catch(_0x584dff){console[_0x2e5abf(0x144)]('Error\x20en\x20el\x20handler:',_0x584dff),await _0x2eabe3[_0x2e5abf(0x14d)](_0x501db0['chat'],{'text':'𝑶𝒄𝒖𝒓𝒓𝒊𝒐\x20𝒖𝒏\x20𝒆𝒓𝒓𝒐𝒓\x20𝒂𝒍\x20𝒑𝒓𝒐𝒄𝒆𝒔𝒂𝒓\x20𝒕𝒖\x20𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅.\x20𝑰𝒏𝒕𝒆𝒏𝒕𝒂\x20𝒅𝒆\x20𝒏𝒖𝒆𝒗𝒐\x20𝒎𝒂𝒔\x20𝒕𝒂𝒓𝒅𝒆.\x20'+_0x584dff});}};function _0x2d04(){const _0x3ef152=['existsSync','sender','name','./lib/characters.json','Megumin-Bot-MD','data.json','11yubUaj','image/jpeg','length','*\x20_*ᗯᖴcoins*_!\x0a★\x20_*ESTᗩᗪO*_\x0a⋗\x20*Estado:\x20','Reservado\x20por\x20','\x0a●\x20_*ᑎOᗰᗷᖇE:*_\x0a⋗\x20*','*\x0a\x0a>\x20✷\x20\x20\x20\x20𝙄𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙘𝙖𝙙𝙤𝙧\x0a<id:','\x20𝑺𝒆𝒈𝒖𝒏𝒅𝒐𝒔.*','./package.json','stringify','help','!*\x0a✦\x20_*ᐯᗩᒪOᖇ:*_\x0a⋗\x20*','command','random','reply','git+https://github.com/David-Chian/Megumin-Bot-MD.git','\x20𝑴𝒊𝒏𝒖𝒕𝒐𝒔\x20𝒚\x20','45ZRwWTi','parse','floor','chat','Error\x20al\x20escribir\x20en\x20data.json:','364791tXYCqI','repository','2359359yFfazO','value','entries','𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔,\x20𝒕𝒐𝒅𝒐𝒔\x20𝒍𝒐𝒔\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔\x20𝒉𝒂𝒏\x20𝒔𝒊𝒅𝒐\x20𝒐𝒃𝒕𝒆𝒏𝒊𝒅𝒐𝒔.\x20¡𝑷𝒓𝒐𝒏𝒕𝒐\x20𝒉𝒂𝒃𝒓𝒂\x20𝒎𝒂𝒔\x20𝒘𝒂𝒊𝒇𝒖𝒔\x20𝒑𝒂𝒓𝒂\x20𝒓𝒆𝒄𝒐𝒍𝒆𝒄𝒕𝒂𝒓!','2371887pPMIwQ','chats','url','utf-8','5YqqlqU','usuarios','personajesReservados','Error\x20al\x20leer\x20package.json:','some','Libre','598512zjwjdC','💥\x20ꜟᴱˡ\x20ᵇᵒᵗ\x20ᵐᵃˢ\x20ᵉˣᵖˡᵒˢⁱᵛᵒꜝ','16684sBQvvT','105540RHEodz','Ocupado\x20por\x20','userId','error','¡𝑵𝒖𝒆𝒗𝒐\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆!','getTime','roll','values','readFileSync','𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝑴𝒆𝒈𝒖𝒎𝒊𝒏-𝑩𝒐𝒕-𝑴𝑫.\x0a\x20🔥\x20https://github.com/David-Chian/Megumin-Bot-MD','characters','¡𝐸𝑠𝑝𝑒𝑟𝑎\x20𝑢𝑛\x20𝑝𝑜𝑐𝑜\x20𝑚𝑎𝑠\x20𝑝𝑎𝑟𝑎\x20𝑝𝑜𝑑𝑒𝑟\x20𝑢𝑠𝑎𝑟\x20𝑒𝑠𝑡𝑒\x20𝑐𝑜𝑚𝑎𝑛𝑑𝑜!\x0a\x0a*𝑻𝒊𝒆𝒎𝒑𝒐\x20𝒓𝒆𝒔𝒕𝒂𝒏𝒕𝒆\x20','sendMessage','8mPgWZb','find','3653790JILvog'];_0x2d04=function(){return _0x3ef152;};return _0x2d04();}function _0x1802(_0x57d336,_0x24ba03){const _0x2d04ba=_0x2d04();return _0x1802=function(_0x1802de,_0x3ddb88){_0x1802de=_0x1802de-0x115;let _0x5bfa10=_0x2d04ba[_0x1802de];return _0x5bfa10;},_0x1802(_0x57d336,_0x24ba03);}handler[_0x3a8c65(0x122)]=['roll'],handler['tags']=['rollwaifu'],handler[_0x3a8c65(0x124)]=[_0x3a8c65(0x147),'rw'],handler['register']=!![];export default handler;