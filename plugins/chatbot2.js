let handler = m => m 
handler.all = async function (m) { 
let chat = global.db.data.chats[m.chat] 

if (/^مين عمك|مين عمك؟|من عمك/i.test(m.text) ) {
     conn.reply(m.chat, `*عـمـرو ســـامـــا💜✨*\n*𝑮𝒐𝒌𝒖᯽𝚂𝚊𝚖𝚊あ*\n*wa.me/967774318278*`, m)
}

if (/^مين سيدك|مين سيدك؟|مين العم؟|مين العم|سيدك من/i.test(m.text) ) {
     conn.reply(m.chat, `*عــمــرو ســـامـــا💜✨*\n\n`, m)
}
return !0 } 

export default handler
