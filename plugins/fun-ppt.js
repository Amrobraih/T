let handler = async (m, { conn, command, text }) => {

    if (!text) return conn.reply(m.chat, '*أدخــل اســمًــا؟, او ضــع مــنــشــن لأي شــخــص!*', m)

  let personalidad = `
┓━━━°❀❬ *شخصية* ❭❀°━━━┏
*┃*
*┃• أســم* : ${text}
*┃• مــعــنويــات جــيــدة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• الأخــلاق الــســيــئــة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• نــوعيــة الــشــخــص* : ${pickRandom(['ذو قــلــب طــيــب','مــتــعــجــرف','بــخــيــل','ســخــيــف','مــتــواضــع','خــجــول','جــبــان','فــضــولــي','احــمــق','غــبــي'])}
*┃• دائــمًــا* : ${pickRandom(['ثــقــيــل','ذو حــظ ســيء','مــشــتــت الانــتــبــاه','مــزعــج','نــمــام','يــضــيــع الــوقــت','يــتــســوق','يــشــاهد أنــمــي','يــتــحــدث عــلــى واتــســاب لأنــه أعــزب','يــســتــلقــي دون فــعــل أي شــيء مــفــيــد','مــمــيــل لــلــتــعــامــل بــشــكــل غــيــر جــدي مــع الــنــســاء','على الهاتف المحمول'])}
*┃• ذكــــاء* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• الأنــحــراف* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• شــجــاعــة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• يــخــاف* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• شــهــرة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• جــنــس* : ${pickRandom(['رجــل', 'امــرأة', 'بــنــدورة','بــطــاطــا', 'يــحــب الــبــاتــنــجــان', 'امرأة قوية', 'مــرتــدة', 'تــوجــه الــرومــنــســيــة نــحــو الــفــول', 'تــوجــه نــحــو بــلاي ســتــيــشــن', 'الــســيدة مــانــويــلا', 'تــوجــه عــاطــفــي نــحــو الــدجــاج'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['شخصية']
handler.tags = ['fun']
handler.command = /^personalidad|شخصيه|شخصية|الشخصيه|الشخصية/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}