let handler = async (m, { conn, text }) => {
    let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
    if (room == undefined) return conn.reply(m.chat, '*✳️ أنت لست في لعبة أكس أو 🎮*', m)
    delete conn.game[room.id]
    await conn.reply(m.chat, '*✅ تم إعادة بدء جلسة لعبة أكس أو 🎮*', m)
}

handler.help = ['delttt']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'delxo','حذف-اكس','حذفإكس','حذفاكس']

export default handler
