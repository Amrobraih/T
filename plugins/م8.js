let handler  = async (m, { conn }) => { 
const name = conn.getName(m.sender);
let a = './views/img/Diablo1.jpg'
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let more = String.fromCharCode(8206);
let done = '🕌';
      m.react(done);
 let teks = ` 
 ${pickRandom([`*╮──────────────────⟢ـ*
*⧉┆↜أنـا اسـمـــي ❮ ˹غـوكـو˼ ❯*
*⧉┆↜انــا خــادم الـسـیــد عــمــرو*
*⧉┆↜ قـبــل کــل امــر ضــع ❮ . ❯*
*⧉┆↵ اهـــلا بــك/ي╿↶*\n*⧉┆↵@${who.replace(/@.+/, '')}*
*╯──────────────────⟢ـ*
> *˼🕌˹ قـسـم اوامر الإسلاميات ╿↶*
*╮──────────────────⟢ـ*
*✦╎↜〘 ˼ســورة الكــهــف˹ 〙*
*✦╎↜〘 ˼اذكــار الصــبــاح˹ 〙*
*✦╎↜〘 ˼اذكــار المــســاء˹ 〙*
*✦╎↜〘 ˼.اذكــار˹ 〙*
*✦╎↜〘 .ايــقاف-الاذكــار˹ 〙*
*✦╎↜〘 ˼.الله˹ 〙*
╯──────────────────⟢ـ
> *↵ قـائـمـة المملكة ⬳ ⌝👥⌞╿↶*
> *╻↜〘 ˼.فــــروع˹ 〙╹*
> *˼⚠️˹ مــلاحـــظـــة╿↶*
*╮──────────────────⟢ـ*
*┆╻⓵يـمـنـع مـنـعـاً بـتـاً سـب الـبـوت╹*
*┆╻⓶اسـتـخـدام مـتـوازن لـلـبـوت╹*
*┆╻⓷ [.مـطـور] لأدخـال الـبـوت!╹*
*╯──────────────────⟢ـ*
> *˼📜˹ الــدعــم╿↶*
_~*https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g*~_
> *رابــــط مــــوثـــوق ⇧✅⇧*
> *.¸¸ ❝˼𝗚𝗼𝗸𝘂᯽𝐵𝑂𝑇˼❝ ¸¸.*
`])} 
 `.trim() 
 conn.sendFile(m.chat, a, null, teks, m, null, { mentions: [who] })}

handler.command = ['م8']

 export default handler 

 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)] 
   }
