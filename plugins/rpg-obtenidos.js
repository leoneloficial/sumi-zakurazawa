/*
• @David-Chian
- https://github.com/David-Chian
*/

const _0x53e5c9=_0xd4f8;(function(_0x1a0b81,_0x24379f){const _0x2814de=_0xd4f8,_0x2b1706=_0x1a0b81();while(!![]){try{const _0x1f6cc8=parseInt(_0x2814de(0x16b))/0x1+parseInt(_0x2814de(0x19a))/0x2*(parseInt(_0x2814de(0x19c))/0x3)+-parseInt(_0x2814de(0x178))/0x4+-parseInt(_0x2814de(0x192))/0x5*(parseInt(_0x2814de(0x180))/0x6)+-parseInt(_0x2814de(0x191))/0x7*(parseInt(_0x2814de(0x187))/0x8)+parseInt(_0x2814de(0x16a))/0x9*(parseInt(_0x2814de(0x18a))/0xa)+parseInt(_0x2814de(0x190))/0xb;if(_0x1f6cc8===_0x24379f)break;else _0x2b1706['push'](_0x2b1706['shift']());}catch(_0x35d692){_0x2b1706['push'](_0x2b1706['shift']());}}}(_0x236b,0xba7dd));import _0x46bfd9 from'fs';import{prepareWAMessageMedia,generateWAMessageFromContent,getDevice}from'@whiskeysockets/baileys';import _0x2a819e from'dotenv';_0x2a819e['config']();function _0xd4f8(_0x2404ae,_0x4643ea){const _0x236bc5=_0x236b();return _0xd4f8=function(_0xd4f89,_0xcb5e3d){_0xd4f89=_0xd4f89-0x163;let _0x30d99e=_0x236bc5[_0xd4f89];return _0x30d99e;},_0xd4f8(_0x2404ae,_0x4643ea);}const SECRET_KEY=process['env']['SECRET_KEY'],obtenerDatos=()=>{const _0x561882=_0xd4f8;return _0x46bfd9[_0x561882(0x193)](_0x561882(0x197))?JSON['parse'](_0x46bfd9['readFileSync'](_0x561882(0x197),_0x561882(0x172))):{'usuarios':{},'personajesReservados':[]};},obtenerPersonajes=()=>{const _0x1dcb4a=_0xd4f8;return _0x46bfd9[_0x1dcb4a(0x193)](_0x1dcb4a(0x189))?JSON[_0x1dcb4a(0x17d)](_0x46bfd9[_0x1dcb4a(0x164)](_0x1dcb4a(0x189),_0x1dcb4a(0x172))):[];},contarTotalPersonajes=()=>{const _0x149fb3=_0xd4f8;if(_0x46bfd9['existsSync'](_0x149fb3(0x189))){const _0x8cc487=_0x46bfd9[_0x149fb3(0x164)](_0x149fb3(0x189),_0x149fb3(0x172))['split']('\x0a');return _0x8cc487[_0x149fb3(0x17a)]-0x2;}else return 0x0;};let handler=async(_0x3483e7,{conn:_0xf85cb5,usedPrefix:_0x1d5f25})=>{const _0x2e7d8c=_0xd4f8,_0x4f1628=_0x3483e7[_0x2e7d8c(0x175)];let _0x8c9a59=obtenerDatos(),_0x1e9c5b=obtenerPersonajes(),_0x4125d7=contarTotalPersonajes();if(!_0x8c9a59[_0x2e7d8c(0x17f)]||!(_0x4f1628 in _0x8c9a59[_0x2e7d8c(0x17f)])||_0x8c9a59[_0x2e7d8c(0x17f)][_0x4f1628][_0x2e7d8c(0x198)][_0x2e7d8c(0x17a)]===0x0){_0xf85cb5[_0x2e7d8c(0x17c)](_0x3483e7['chat'],_0x2e7d8c(0x182),_0x3483e7);return;}const _0x5ce330=()=>{const _0xc0e1be=_0x2e7d8c;try{const _0x183446=JSON[_0xc0e1be(0x17d)](_0x46bfd9[_0xc0e1be(0x164)](_0xc0e1be(0x16c),_0xc0e1be(0x172)));if(_0x183446[_0xc0e1be(0x167)]!==_0xc0e1be(0x18d))return![];if(_0x183446[_0xc0e1be(0x173)][_0xc0e1be(0x199)]!==_0xc0e1be(0x181))return![];if(SECRET_KEY!==_0xc0e1be(0x165))return![];return!![];}catch(_0x54b462){return console[_0xc0e1be(0x195)]('Error\x20al\x20leer\x20package.json:',_0x54b462),![];}};if(!_0x5ce330()){await _0xf85cb5[_0x2e7d8c(0x17c)](_0x3483e7[_0x2e7d8c(0x177)],_0x2e7d8c(0x184),_0x3483e7,rcanal);return;}const {characters:_0x491f09,totalRwcoins:_0x1c870f}=_0x8c9a59['usuarios'][_0x4f1628],_0x1ca193=_0x491f09['length'];let _0x2cf277=new Set();Object[_0x2e7d8c(0x171)](_0x8c9a59['usuarios'])[_0x2e7d8c(0x19d)](_0x193856=>{const _0x219066=_0x2e7d8c;_0x193856[_0x219066(0x198)][_0x219066(0x19d)](_0x92a994=>_0x2cf277[_0x219066(0x17e)](_0x92a994[_0x219066(0x167)]));});let _0x385228=_0x1e9c5b[_0x2e7d8c(0x169)](_0x1dd593=>!_0x2cf277['has'](_0x1dd593[_0x2e7d8c(0x167)])),_0xcafb45=_0x385228[_0x2e7d8c(0x17a)];const _0x132f2e=_0x2e7d8c(0x188)+_0x1ca193+_0x2e7d8c(0x168)+_0x1c870f+_0x2e7d8c(0x16e)+(_0x1ca193/_0x4125d7*0x64)[_0x2e7d8c(0x18b)](0x2)+_0x2e7d8c(0x16f)+_0xcafb45+_0x2e7d8c(0x176)+_0x4125d7+'\x20en\x20total_\x0a╰╍╌╌╌╌╌╌╌╌╌╌╌╌╌╌╾';let _0x32a5cf=_0x491f09[_0x2e7d8c(0x185)]((_0x2238ee,_0x609b37)=>({'header':_0x2238ee['name'],'title':_0x2e7d8c(0x18c)+(_0x609b37+0x1),'description':_0x2e7d8c(0x186)+_0x2238ee['name'],'id':_0x1d5f25+'character\x20'+_0x2238ee['name']}));const _0x4c052e=await getDevice(_0x3483e7[_0x2e7d8c(0x19b)]['id']);if(_0x4c052e!=='desktop'&&_0x4c052e!=='web'){const _0x46d87={'body':{'text':_0x132f2e},'footer':{'text':_0x2e7d8c(0x17b)},'nativeFlowMessage':{'buttons':[{'name':'single_select','buttonParamsJson':JSON['stringify']({'title':_0x2e7d8c(0x18e),'sections':[{'title':_0x2e7d8c(0x18f),'rows':_0x32a5cf}]})}],'messageParamsJson':''}};let _0x3903cd=generateWAMessageFromContent(_0x3483e7[_0x2e7d8c(0x177)],{'viewOnceMessage':{'message':{'interactiveMessage':_0x46d87}}},{'userJid':_0xf85cb5['user'][_0x2e7d8c(0x183)],'quoted':_0x3483e7});_0xf85cb5[_0x2e7d8c(0x179)](_0x3483e7[_0x2e7d8c(0x177)],_0x3903cd[_0x2e7d8c(0x196)],{'messageId':_0x3903cd[_0x2e7d8c(0x19b)]['id']});}else _0xf85cb5['reply'](_0x3483e7[_0x2e7d8c(0x177)],_0x132f2e,_0x3483e7);};handler['help']=[_0x53e5c9(0x166)],handler['tags']=[_0x53e5c9(0x174)],handler[_0x53e5c9(0x163)]=[_0x53e5c9(0x166),_0x53e5c9(0x16d),_0x53e5c9(0x194),'ob'],handler[_0x53e5c9(0x170)]=!![];function _0x236b(){const _0x54d7a8=['group','values','utf-8','repository','rollwaifu','sender','\x20de\x20','chat','4299720jfXysJ','relayMessage','length','Personajes\x20Obtenidos','reply','parse','add','usuarios','180618JnNbuE','git+https://github.com/CheirZ/HuTao-Proyect.git','*No\x20tienes\x20ningún\x20objeto\x20en\x20tu\x20inventario\x20😹🫵!*','jid','𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝑯𝒖𝑻𝒂𝒐-𝑷𝒓𝒐𝒚𝒆𝒄𝒕.\x0a👻\x20https://github.com/CheirZ/HuTao-Proyect','map','Selecciona\x20para\x20ver\x20la\x20imagen\x20de\x20','8kxYfdT','\x0a╭ᚚᚚᚚⷩᚚͧᚚⷮᚚᷧᚚⷴᚚᚚᚚᷮᚚᷢᚚⷪᚚⷱᚚⷥᚚⷭᚚⷮᚚᚚ\x0a├\x20_*𝑇𝑈\x20𝐼𝑁𝑉𝐸𝑁𝑇𝐴𝑅𝐼𝑂*_\x0a├▹\x20*𝑃𝑒𝑟𝑠𝑜𝑛𝑎𝑗𝑒𝑠\x20𝑟𝑒𝑙𝑎𝑚𝑎𝑠𝑜𝑠:*\x0a├╾\x20\x20*','./src/JSON/characters.json','150070PZDUrO','tofixed','Personaje\x20','HuTao-Proyect','Tus\x20Personajes','Lista\x20de\x20Personajes','17485765aREghm','9631552KFxSdb','35gVQQSn','existsSync','obtenido','error','message','data.json','characters','url','10GAcPdQ','key','100446QkVkYu','forEach','command','readFileSync','f93odlwmei39rlrk3','obtenidos','name','\x20𝑊𝐹*\x0a├▹\x20_*𝑇𝑜𝑡𝑎𝑙\x20𝐷𝑒\x20𝑾𝑭𝐶𝑜𝑖𝑛𝑠*_\x0a├╾\x20*','filter','774PKnvlM','377829mRztWk','./package.json','ginfo','*\x0a├▹\x20_*𝑃𝑜𝑟𝑐𝑒𝑛𝑡𝑎𝑗𝑒:*_\x0a├╾\x20\x20','%\x0a├▹\x20*𝑃𝑒𝑟𝑠𝑜𝑛𝑎𝑗𝑒𝑠\x20𝐷𝑖𝑠𝑝𝑜𝑛𝑖𝑏𝑙𝑒𝑠:*\x0a├╾\x20_'];_0x236b=function(){return _0x54d7a8;};return _0x236b();}export default handler;
