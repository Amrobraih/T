let handler  = async (m, { conn }) => { 
const name = conn.getName(m.sender);
let a = './views/img/Diablo1.jpg'
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let more = String.fromCharCode(8206);
let done = '🕹️';
      m.react(done);
 let teks = ` 
 ${pickRandom([`*╮──────────────────⟢ـ*
*⧉┆↜أنـا اسـمـــي ❮ ˹غـوكـو˼ ❯*
*⧉┆↜انــا خــادم الـسـیــد عــمــرو*
*⧉┆↜ قـبــل کــل امــر ضــع ❮ . ❯*
*⧉┆↵ اهـــلا بــك/ي╿↶*\n*⧉┆↵@${who.replace(/@.+/, '')}*
*╯──────────────────⟢ـ*
> *˼🕹️˹ قـــســـم اوامــر لــلألــعــاب╿↶*
*╮──────────────────⟢ـ*
*┌─⊷「❏ الأوامــر المــتــاحــة 🕹️」⊶*
*• .هــيــل — ❤️‍🩹 للــعــلاج*
*• .فــــتــــح — 📦 لـلــمــوارد*
*• .مــغــامــرة — 🎣 لـلــمــوارد*
*• .تــعــديــن — ⛏️ لـلــمــوارد*
*• .دنــجــن — 🏰 لـلــمــوارد*
*• .حــظ — ☘️ لـلــخــبــرة*
*• .ســرق — 🥷 لـلــخــبــرة*
*• .مــصــارعــة — 🥊 لـلــذهــب*
*• .عــجــلــة — 🎡 لـلــذهــب*
*• .لــعــبــة — 🎮 لـلــذهــب*
*• .اكــس — ❌ لـلــذهــب*
*• .ربــح — 🎰 لـلــذهــب*
*• .ايـمـوجـي — 🙂 لـلــذهــب*
*• .ســؤال — 🤔 لـلــذهــب*
*• .رتــب — 🔀 لـلــذهــب*
*• .حــزر — ↕️ لـلــذهــب*
*• .عــمــل — 👨🏼‍💼 لـلــنــقــود*
*• .اســتــثــمــار — 💹 لـلــنــقــود*
*└──────────────⊷*
*┌───⊷*
*• .نــقــود — 💲 لـلــنــقــود↶*
*•* *⏎ تـحـويـل الـذهـب🪙الـى💲نـقـود*
*└──────────────⊷*
*┌───⊷*
*• .صــفــقــة — 🧬 لـلــخــبــرة↶*
*•* *⏎ تـحـويـل الـذهـب🪙الـى🧬خــبــرة*
*└──────────────⊷*
*┌───⊷*
*• .حــقــيــبــة — 💼 اغــراضــك*
*• .بــــنــــك — 🏦 نــقــودك*
*• .مــحــفــظــة — 👛 نــقــودك*
*• .ايــــــداع — 👛 لـلأيــداع*
*• .ســــحــــب — 👛 لـلــســحــب*
*• .شــــراء — 🛍️ لـلــشــراء*
*• .بــــيــــع — 🎟 لـلــبــيــع*
*• .تــحويــل — 💱 لـلــتــحويــل*
*└──────────────⊷*
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

handler.command = ['م3']

 export default handler 

 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)] 
   }
