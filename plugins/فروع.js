import { createHash } from 'crypto';
let handler = async (m, { conn }) => {
 let a = './views/img/Diablo1.jpg';
 let more = String.fromCharCode(8206);
  let done = '👥';
      m.react(done);
 let teks = `
 ${pickRandom([`
> *┆〘﹝𝐓𝐞𝐦𝐩𝐞𝐬𝐭⊰🌀⊱؏فُـࢪو﹞〙*
*╮──────────────────⟢ـ*
> *┆╻↵ ﹝قــروب الــدعــم﹞╹*
> ~*https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g*~
> *┆╻رابــط  مــوثــوق ⇧✅⇧╹*
──────────────────
> *┆╻↵ ﹝قــروب الأســتــقــبــال﹞╹*
> ~*https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g*~
> *┆╻رابــط  مــوثــوق ⇧✅⇧╹*
──────────────────
> *┆╻↵ ﹝قــروب الــطــلــبــات﹞╹*
> ~*https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g*~
> *┆╻رابــط  مــوثــوق ⇧✅⇧╹*
──────────────────
> *┆╻↵ ﹝قــروب الاخــبــار﹞╹*
> ~*قـــريـــبـــاً*~
*╯──────────────────⟢ـ*
> *.¸¸ ❝˼𝗚𝗼𝗸𝘂᯽𝐵𝑂𝑇˼❝ ¸¸.*`])}
`.trim()
  conn.sendFile(m.chat, a, null, teks, m)}
  
  handler.command = ['فروع', 'فرع', 'groups', 'groupguru', 'gugp', 'ggp', 'gpguru'];

export default handler
  
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
