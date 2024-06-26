import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fetch from "node-fetch"

/**fkontak
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.credit = false
        m.bank = false
        m.chicken = false
        m.limit = false
      try {
        // TODO: use loop to insert data instead of this
        let user = global.db.data.users[m.sender]
          if (typeof user !== 'object')
            global.db.data.users[m.sender] = {}
          if (user) {
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.bank)) user.bank = 0
            if (!isNumber(user.chicken)) user.chicken = 0  
            if (!('premium' in user)) user.premium = false
            if (!isNumber(user.joincount)) user.joincount = 2   
            if (!isNumber(user.limit)) user.limit = 20    	       
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
            if (!('name' in user)) user.name = m.name
            if (!isNumber(user.age)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
            if (!isNumber(user.premiumDate)) user.premiumDate = -1
            }
                if (!isNumber(user.afk)) user.afk = -1
            if (!('autolevelup' in user))  user.autolevelup = false
            if (!('role' in user)) user.role = 'لتترقى لمستوى أعلى أكتب╿↶*\n> *" .on autolevelup " <='
                if (user.lastsalary === undefined || user.lastsalary === null) {
                    user.lastsalary = null;
          }
          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''
          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.warn)) user.warn = 0
          if (!isNumber(user.level)) user.level = 0
          if (!isNumber(user.money)) user.money = 0
          if (!isNumber(user.atm)) user.atm == 1
          if (!isNumber(user.atm)) user.atm = 0
          if (!isNumber(user.fullatm)) user.fullatm = 0
          if (!isNumber(user.bank)) user.bank = 0
          if (!isNumber(user.health)) user.health = 100
          if (!isNumber(user.potion)) user.potion = 0
          if (!isNumber(user.trash)) user.trash = 0
          if (!isNumber(user.wood)) user.wood = 0
          if (!isNumber(user.rock)) user.rock = 0
          if (!isNumber(user.string)) user.string = 0
          if (!isNumber(user.petFood)) user.petFood = 0
          if (!isNumber(user.emerald)) user.emerald = 0
          if (!isNumber(user.credit)) user.credit = 0
          if (!isNumber(user.diamond)) user.diamond = 0
          if (!isNumber(user.gold)) user.gold = 0
          if (!isNumber(user.iron)) user.iron = 0
          if (!isNumber(user.upgrader)) user.upgrader = 0
          if (!isNumber(user.common)) user.common = 0
          if (!isNumber(user.uncommon)) user.uncommon = 0
          if (!isNumber(user.mythic)) user.mythic = 0
          if (!isNumber(user.legendary)) user.legendary = 0
          if (!isNumber(user.superior)) user.superior = 0
          if (!isNumber(user.pet)) user.pet = 0
          if (!isNumber(user.horse)) user.horse = 0
          if (!isNumber(user.horseexp)) user.horseexp = 0
          if (!isNumber(user.cat)) user.cat = 0
          if (!isNumber(user.catexp)) user.catexp = 0
          if (!isNumber(user.fox)) user.fox = 0
          if (!isNumber(user.foxhexp)) user.foxexp = 0
          if (!isNumber(user.dog)) user.dog = 0
          if (!isNumber(user.dogexp)) user.dogexp = 0
          if (!isNumber(user.robo)) user.robo = 0
          if (!isNumber(user.roboxp)) user.roboxp = 0
          if (!isNumber(user.horselastfeed))
              user.horselastfeed = 0
          if (!isNumber(user.catlastfeed))
              user.catlastfeed = 0
          if (!isNumber(user.foxlastfeed))
              user.foxlastfeed = 0
          if (!isNumber(user.doglastfeed))
              user.doglastfeed = 0
          if (!isNumber(user.armor))
              user.armor = 0
          if (!isNumber(user.armordurability))
              user.armordurability = 0
          if (!isNumber(user.sword))              
              user.sword = 0
          if (!isNumber(user.sworddurability))
              user.sworddurability = 0
          if (!isNumber(user.pickaxe))
              user.pickaxe = 0
          if (!isNumber(user.pickaxedurability))
              user.pickaxedurability = 0
          if (!isNumber(user.fishingrod))
              user.fishingrod = 0
          if (!isNumber(user.fishingroddurability))
              user.fishingroddurability = 0
          if (!isNumber(user.lastclaim))
              user.lastclaim = 0
          if (!isNumber(user.lastadventure))
              user.lastadventure = 0
          if (!isNumber(user.lastfishing))
              user.lastfishing = 0
          if (!isNumber(user.lastdungeon))
              user.lastdungeon = 0
          if (!isNumber(user.lastduel))
              user.lastduel = 0
          if (!isNumber(user.lastbet))
            user.lastbet = 0
          if (!isNumber(user.lastmining))
              user.lastmining = 0
          if (!isNumber(user.lasthunt))
              user.lasthunt = 0
          if (!isNumber(user.lastweekly))
              user.lastweekly = 0
          if (!isNumber(user.lastmonthly))
              user.lastmonthly = 0
          if (!isNumber(user.lastbunga)) user.lastbunga = 0
          if (!isNumber(user.premium)) user.premium = false
          if (!isNumber(user.premiumTime)) user.premiumTime = 0
          if (!isNumber(user.limitjoin)) user.limitjoin = 0
          } else
        global.db.data.users[m.sender] = {
            exp: 0,
            limit: 25,
            lastclaim: 0,
            registered: false,
            name: m.name,
            pasangan: '',
            age: -1,
            regTime: -1,
            afk: -1,
            afkReason: '',
            banned: false,
            warn: 0,
            level: 0,                    
            role: 'لتترقى لمستوى أعلى أكتب╿↶*\n> *" .on autolevelup " <=',
            autolevelup: false,
            money: 0,
            bank: 0,
            atm: 0,
            fullatm: 0,
            health: 100,
            potion: 10,
            trash: 0,
            wood: 0,
            rock: 0,
            string: 0,
            emerald: 1,
            diamond: 0,
            gold: 0,
            iron: 0,
            upgrader: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            superior: 0,
            pet: 0,
            horse: 0,
            horseexp: 0,
            cat: 0,
            catngexp: 0,
            fox: 0,
            foxexp: 0,
            dog: 0,
            dogexp: 0,
            horselastfeed: 0,
            catlastfeed: 0,
            foxlastfeed: 0,
            doglastfeed: 0,
            armor: 0,
            armordurability: 0,
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastclaim: 0,
            lastadventure: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastduel: 0,
            lastbet: 0,
            lastmining: 0,
            lasthunt: 0,
            lastweekly: 0,
            lastmonthly: 0,
            lastbunga: 0,
            premium: false,
            premiumTime: 0,
            limitjoin: 0,
        }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat)) chat.isBanned = false
                if (!('welcome' in chat)) chat.welcome = true
                if (!('detect' in chat)) chat.detect = true
                if (!('sWelcome' in chat)) chat.sWelcome = ''
                if (!('sBye' in chat)) chat.sBye = ''
                if (!('sPromote' in chat)) chat.sPromote = ''
                if (!('sDemote' in chat)) chat.sDemote = ''
                if (!('delete' in chat)) chat.delete = true
                if (!('modohorny' in chat)) chat.modohorny = false    
                if (!('modoadmin' in chat)) chat.modoadmin = false
                if (!('antibadword' in chat)) chat.antibadword = true
                if (!('antiprivado' in chat)) chat.antiprivado = true
                if (!('autosticker' in chat)) chat.autosticker = false                    
                if (!('audios' in chat)) chat.audios = false                            
                if (!('antiLink' in chat)) chat.antiLink = false
                if (!('antiLink2' in chat)) chat.antiLink2 = false
                if (!('antiviewonce' in chat)) chat.antiviewonce = false
                if (!('antiToxic' in chat)) chat.antiToxic = true
                if (!('antibadword' in chat)) chat.antibadword = true
                if (!('antiTraba' in chat)) chat.antiTraba = false
                if (!('antiArab' in chat)) chat.antiArab = false
                if (!isNumber(chat.expired)) chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    modohorny: true,
                    modoadmin: false,
                    antiprivado: true,
                    antibadword: true,
                    autosticker: false,
                    audios: false,
                    antiLink: false,
                    antiLink2: false,
                    antiviewonce: false,
                    antiToxic: true,
                    antiTraba: false,
                    antiArab: false,
                    expired: 0,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = true
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = true
                if (!('antiCall' in settings)) settings.antiCall = false
                if (!('antiPrivate' in settings)) settings.antiPrivate = true
                if (!('restartDB' in settings)) settings.restartDB = 0
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                restrict: false,
                antiCall: true,
                restartDB: 0,
                antiPrivate: false
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                                    m.reply(`*[ ⚠️ االامر ده غلط يحب كلم المطور ⚠️ ]*\n\n*—◉ الخطأ:* ${m.plugin}\n*—◉ المستخدم:* ${m.sender}\n*—◉ الامر:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\`\n\n*[❗] قم بابلاغ المطور ليعطيك حلا لاستخدام الامر #reporte*`.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `*[❗] لا تملك الماس كافي استخدم الامر ${usedPrefix}شراء <كمية>*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `*[❗] الــمــســتــوى الـمـطـلـوب ${plugin.level} لاسـتـخـدام هـذا الأمـر مـســتـواك هــو ${_user.level}*\n> *إستخدم امر [ .لفل ] للإستطلاع على مستواك الحالي او الجديد!.*`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*[ ⚠️ مرحبا سيدي عمرو ساما هذا الامر خربان⚠️ ]*\n\n*—◉ الخطاء:* ${m.plugin}\n*—◉ المستخدم:* ${m.sender}\n*—◉ الامر:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\`\n\n*❗ ارجو منك اصلاحه في اسرع وقت ممكن#reporte*`.trim(), data.jid)
                              }
                          m.reply(text)
                      }
                  } finally {
                      // m.reply(util.format(_user))
                      if (typeof plugin.after === 'function') {
                          try {
                              await plugin.after.call(this, m, extra)
                          } catch (e) {
                              console.error(e)
                          }
                      }
                      if (m.limit)
                          m.reply(+m.limit + ' الماس 💎 مستخدم')
                  }
                  break
              }
          }
      } catch (e) {
          console.error(e)
      } finally {
          if (opts['queque'] && m.text) {
              const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
              if (quequeIndex !== -1)
                  this.msgqueque.splice(quequeIndex, 1)
          }
          //console.log(global.db.data.users[m.sender])
          let user, stats = global.db.data.stats
          if (m) {
              if (m.sender && (user = global.db.data.users[m.sender])) {
                  user.exp += m.exp
                  user.limit -= m.limit * 1
              }

              let stat
              if (m.plugin) {
                  let now = +new Date
                  if (m.plugin in stats) {
                      stat = stats[m.plugin]
                      if (!isNumber(stat.total))
                          stat.total = 1
                      if (!isNumber(stat.success))
                          stat.success = m.error != null ? 0 : 1
                      if (!isNumber(stat.last))
                          stat.last = now
                      if (!isNumber(stat.lastSuccess))
                          stat.lastSuccess = m.error != null ? 0 : now
                  } else
                      stat = stats[m.plugin] = {
                          total: 1,
                          success: m.error != null ? 0 : 1,
                          last: now,
                          lastSuccess: m.error != null ? 0 : now
                      }
               stat.total += 1
                  stat.last = now
                  if (m.error == null) {
                      stat.success += 1
                      stat.lastSuccess = now
                  }
              }
          }

          try {
              if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
          } catch (e) {
              console.log(m, m.quoted, e)
          }
          if (opts['autoread'])
              await this.readMessages([m.key])

        if (!m.fromMem && m.text.match(/(@غوكو|ربيع|سون غوكو|شارك|ايتشيغو|عمرو|@967774318278|967735038560)/gi)) {
        let emot = pickRandom(["✨", "❤", "😘", "♥️", "😍", "💕", "😎", "🌸", "⭐", "🌺", "🔥"])
        this.sendMessage(m.chat, { react: { text: emot, key: m.key }})}
        function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
 export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = 'https://telegra.ph/file/16b1fa32455e84bd1b7dd.jpg'
                    let ppgp = 'https://telegra.ph/file/e7c8ee81c0911d477ccec.jpg'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                        ppgp = await this.profilePictureUrl(id, 'image')
                        } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user').replace('@group', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'Desconocido') :
                            (chat.sBye || this.bye || conn.bye || 'HELLO, @user')).replace('@user', '@' + user.split('@')[0])

                            let wel = API('fgmods', '/api/welcome', {
                                username: await this.getName(user),
                                groupname: await this.getName(id),
                                groupicon: ppgp,
                                membercount: groupMetadata.participants.length,
                                profile: pp,
                                background: 'https://telegra.ph/file/abbf1c21a9e580e7ec886.jpg'
                            }, 'apikey')

                            let lea = API('fgmods', '/api/goodbye', {
                                username: await this.getName(user),
                                groupname: await this.getName(id),
                                groupicon: ppgp,
                                membercount: groupMetadata.participants.length,
                                profile: pp,
                                background: 'https://telegra.ph/file/abbf1c21a9e580e7ec886.jpg'
                            }, 'apikey')
                            this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })

                    }
                }
            }
    }
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```انــا عــايــش```').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```انــا عــايــش```').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```انــا عــايــش```').replace('', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```انــا عــايــش```').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function callUpdate(callUpdate) {
    let isAnticall = global.db.data.settings[this.user.jid].antiCall
    if (!isAnticall) return
    for (let nk of callUpdate) {
    if (nk.isGroup == false) {
    if (nk.status == "offer") {
    let callmsg = await this.reply(nk.from, `مرحبا *@${nk.from.split('@')[0]}*, ال ${nk.isVideo ? 'مكالمات فيديو' : 'المكالمات'} غير مسموح به ، سيتم حظرك.\n-\nإذا اتصلت بالخطأ ، فاتصل بمنشئ المحتوى الخاص بي لإلغاء حظرك!`, false, { mentions: [nk.from] })
    //let data = global.owner.filter(([id, isCreator]) => id && isCreator)
    //await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
     let vcard = `◤𝑮𝒐𝒌𝒖あ𝐒𝐚𝐦𝐚◢:[❗]كلم الرقم ده - المطور.\nName:𝑮𝒐𝒌𝒖あ𝐒𝐚𝐦𝐚\n`
    await this.sendMessage(nk.from, { contacts: { displayName: '𝐵𝑌:𝑮𝒐𝒌𝒖あ𝐒𝐚𝐦𝐚', contacts: [{ vcard }] }}, {quoted: callmsg})
    await this.updateBlockStatus(nk.from, 'block')
    }
    }
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply(msg.chat, `
━━━━⬣  *الحذف التلقائي*  ⬣━━━━
*❈↲ الرقم:* @${participant.split`@`[0]}
*❈↲ جاري إرسال الرسالة ...*
━━━━⬣  *الحذف التلقائي*  ⬣━━━━
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}



global.dfail = (type, m, conn) => {
    let msg = {
        rowner: '*الــمــيــزه لــلــمــطــور لاتــســوي خــوي⭐!*',
        owner: '*الــمــيــزه لــلــمــطــور لاتــســوي خــوي⭐!*',
        mods: '*الـمـيـزه لــلــمــطــور لاتــســوي خــوي⭐!*',
        premium: '*الـمـيـزه للاعــضـاء الـمـمـيـزين⭐!*',
        group: '*الـمـيـزه فـي الـقـروبـات بـس⭐!*',
        private: '*الـمـيـزه لـلـبـرايـفـت - الـخـاص بــس⭐!*',
        admin: '*الـمـيــزه لــلادمــنــز بــس ⭐!*',
        botAdmin: '*لازم ترفع البوت ادمن اول⭐!*',
        unreg: '*[ لـحـظـة ! انـت مـو مـسـجـل لـيـش؟ ]*\n*سجل الامر عشان تفعله*\n*➣ .تسجيل*',
        restrict: '*الــمــيــزه هــاذي الــمــطــور لــغــاهــا⭐!*'
    }[type];

        let imgurl = 'https://telegra.ph/file/7325caaa70ebf18de7324.jpg'; // رابط الصورة
        let filename = 'imgerror.jpg'; // اسم الملف

        if (msg) return conn.sendFile(m.chat, imgurl, filename, msg, m);
    };

    let file = global.filename(import.meta.url, true);
    watchFile(file, async () => {
        unwatchFile(file);
        console.log(chalk.redBright("Update 'handler.js'"));
        if (global.reloadHandler) console.log(await global.reloadHandler());
    });
