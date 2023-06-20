import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!/image/g.test(mime)) throw '*الرجاء الرد على صورة*';
    m.reply('*هذا الأمر يحوّل الصورة إلى صورة أنمي*');
    let data = await q.download?.();
    let image = await uploadImage(data);
    try {
        let anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
        await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
    } catch (i) {
        try {
            let anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
            await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
        } catch (a) {
            try {
                let anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
                await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
            } catch (e) {
                throw '*حدث خطأ. تحقق مما إذا كانت وجه الشخص مرئيًا*';
            }
        }
    }
};

handler.help = ["toanime"];
handler.tags = ["tools"];
handler.command = /^(imganime|toanime)$/i;

export default handler;
