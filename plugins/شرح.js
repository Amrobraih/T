let handler  = async (m, { conn }) => { 
const name = conn.getName(m.sender);
let a='./Guru.jpg'
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let more = String.fromCharCode(8206);
let done = '📜';
      m.react(done);
 let teks = ` 
 ${pickRandom([`
*┓❃━═━═✦•〘•🩸•〙•✦═━═━❃┏*
*⧉┆↵ اهـــلا بــك/ي ${name}*
*⧉┆📱: @${who.replace(/@.+/, '')}*
*⧉┆↜أنـا اسـمـــي ❮ ˹غـوكـو˼ ❯*
*⧉┆↜انــا خــادم الـسـیــد عــمــرو*
*⧉┆↜ قـبــل کــل امــر ضــع ❮ . ❯*
*⧉┆↜هــا لــك الـأوامـــر الـخــاص بــي ☟*
*━──── • ⟐ • ────━*
*❮ ˼تــوضــیــح اوامــر بــوت غـوكـو˹ ❯↶*
*❮ ˼لــــشــــرح الأوامـــر اكــــتــــب ˼.شـــرح˹ ❯*
*❮ ˼قــائــمــة 📜 الأوامـــر˹ ❯↶*
*━──── • ⟐ • ────━*
*┌────⊷*
*˼‏👑˹ قـسـم اوامر الـمـجـمـوعـات ╿↶*
*└──────────────⊷*
*✥═━═━•✧اوامر المشرفين✧•━═━═✥*
*✦╎⛩↜〘 .قــــروبــي 〙*
*⏎* " .قــــروبــي " هو عبارة عن أمر يطلعلك معلومات القروب كاملة
*✦╎💨↜〘 .طـــــــرد 〙*
*⏎* " .طـــــــرد " طرد العضو من القروب الا مؤسس القروب ... اذا کان البوت مشرفاً اولا   ...
*✦╎⚜️↜〘 .تــــرقـــيــــة 〙*
*⏎* " .تــــرقـــيــــة " مع منشن العضو ، هو ان المشرف یمنشن العضو و البوت یخلیه مشرف ... الا اذا کان البوت مشرفاً اولا  ...
*✦╎🔖↜〘 .تـخــفــيــض 〙*
*⏎* " .تـخــفــيــض " مع منشن العضو ، هو ان المشرف یمنشن المشرف التاني و البوت یشیل الاشراف منه ... الا اذا کان البوت مشرفاً اولا  ...
*✦╎📛↜〘 .احـــــــــذف 〙*
*⏎* " .احـــــــــذف " مع الرد علی رساله ، البوت یحذف الرسالة من قبل المشرف في الجروب عن الاعضاء و لازم ترد علی رسالة نصية - فيديو - صورة و... ... الا اذا کان البوت مشرفاً اولا  ..
*✦╎🔗↜〘 .الــلــيـــنـــك 〙*
*⏎* " .الــلــيـــنـــك " هو عبارة عن امر يغير لك رابط القروب
*✦╎📢↜〘 .تغيرالترحيب 〙*
*⏎* " .تغيرالترحيب " هو عبارة عن امر يغير لك رسالة الترحيب
*✦╎♦️↜╎〘 .تغيرالمغادرة 〙*
*⏎* " .تغيرالمغادرة " هو عبارة عن امر يغير لك رسالة المغادرة
*✦╎🌀↜〘 .مـــنـــــشـــن 〙*
*⏎* " .مـــنـــــشـــن " مع کتابة رساله ، هو ان المشرف یکتب الامر و البوت یمنشن جمیع الأعضاء في الجروب مع قائمة المنشن
*✦╎🌀↜〘 .لمـــنـــــشـــن 〙*
*⏎* " .لمـــنـــــشـــن " هو ان المشرف یرد علی رسالة نصية ... و البوت یعید ارسال الرساله و یجعله منشن جماعي للاعضاء
*✦╎📧↜〘 .مـــخـــفــــي 〙*
*⏎* " .مـــخـــفــــي " مع کتابة رساله ، هو ان المشرف یکتب الامر مع رساله او بدون رساله و البوت یمنشن منشن جماعي للاعضاء  بدون قائمة المنشن
*✦╎🔓↜〘 .قـروب فـتـح 〙*
*⏎* " .قـروب فـتـح " هو ان المشرف يكتب الامر و البوت يفتح شات القروب
*✦╎🔒↜〘 .قـروب غـلـق 〙*
*⏎* " .قـروب غـلـق " هو ان المشرف يكتب الامر و البوت يغلق شات القروب
*✦╎👑↜〘 .الــمـشـرفين 〙*
*⏎* " .الــمـشـرفين " يطلعلك قائمة المشرفين في الجروب
*✦╎⚠️↜〘 .انـــــــــذار 〙*
*⏎* " .انـــــــــذار " مع کتابة السبب ، هو ان المشرف یکتب الامر مع کتابة السبب للعضو و بعد تلقي العضو اربع أنذارات, الرابع یطرد العضو من القروب ، الرد بالامر علی رساله او منشن العضو
*✦╎🚧↜〘 .رفـــــــــع 〙*
*⏎* " .رفـــــــــع " مع منشن العضو ، هو ان المشرف بعد ما تعطي العضو انذار ... يمكنك کتابة هذا الامر لحذف الانذار
*✦╎☢️↜〘 .الانـذارات 〙*
*⏎* " .الانـذارات " هو ان العضو او المشرف یشوف عدد تلقي انذاراته من قبل المشرف بکتابته هذا الامر
*✦╎⏯️↜〘 .بـــانـــــد 〙*
*⏎* " .بـــانـــــد " لتعطيل استعمال البوت في شات القروب من قبل المشرف اكتب هذا الامر
*✦╎ ▶︎↜〘 .تــنــشــيــط 〙*
*⏎* " .تــنــشــيــط " لتشغيل استعمال البوت في شات القروب من قبل المشرف اكتب هذا الامر
*┓❃━═✦•〘•﹝🎠﹞•〙•✦═━❃┏*
*˼🎠˹ قـــســـم اوامــر الــتـــرفـــیـــه╿↶*
*✦╎📯↜〘 ˼.ســوالــف˹ 〙*
*⏎* امــر '.ســوالــف' عبارة عن ردود تكتبها عشان يرد عليك البوت
*✦╎🗣️↜〘 ˼.انــطــق˹ 〙*
*⏎* امــر '.انــطــق' عبارة عن امر يخلي البوت يسجل صوتية الكلام اللي انت تكتبه له
*✦╎⭕↜〘 ˼.اكـــس_او˹ 〙*
*⏎* امر '.إكس-او' هو ان العضو یکتب الامر مع کتابة رقم او اسم للغرفة و العضو التالي یکتب نفس الامر و اسم او رقم الغرفة لبدأ لعبة (❎⭕)
*مثال : العضو الاول ( .إكس-او 1 )╎العضو التاني ( .إكس-او 1 )
*✦╎❌↜〘 ˼.حــذف-اكــس˹ 〙*
*⏎* امــر '.حــذفاكــس' عبارة عن امر يخليك تحذف القيم في اكس او
*✦╎♟️↜〘 ˼.شــطــرنــج˹ 〙*
*⏎* امــر '.شــطــرنــج' عبارة عن امر يخليك تلعب ضد صديقك شطرنج
*✦╎🔟↜〘 ˼.الــمــتــصــدريــن˹ 〙*
*⏎* امــر '.الــمــتــصــدريــن' عبارة عن امر يطلع لك توب 10 اعلى ناس معهم موارد في البوت
*✦╎☁↜〘 ˼.مـنـشـنـلـي˹ 〙*
*⏎* امــر '.مـنـشـنـلـي' عبارة عن امر يخلي البوت يمنشنك
*✦╎👾↜〘 ˼.اخــتــفــاء˹ 〙*
*⏎* امــر '.اخــتــفــاء' عبارة عن امر يخليك تختفي عشان لو جا احد من اصدقائك و بدء يمنشنك رح يطلع له انك مشغول مع السبب
*✦╎💗↜〘 ˼.طــــقــــم˹ 〙*
*⏎* امــر '.طــــقــــم' عبارة عن امر يجيب لك طقم
*✦╎🐾↜〘 ˼.كـــيـــوت˹ 〙*
*⏎* امــر '.كـــيـــوت' عبارة عن امر يجيب لك شخصيات كيوت
*✦╎🥺↜〘 ˼.لـــولـــي˹ 〙*
*⏎* امــر '.لـــولـــي' عبارة عن امر يجيب لك شخصيات كيوتين صغار
*✦╎🤔↜〘 ˼.ســــــؤال˹ 〙*
*⏎* امــر '.ســــــؤال' عبارة عن امر يخلي البوت يسألك اسأله تجاوب عليها و تكسب مكافئات
*✦╎💭↜〘 ˼كــــــت˹ 〙*
*⏎* امــر '.كــــــت' عبارة عن امر يجيب لك اسامي شخصيات انمي
*✦╎🚀↜〘 ˼.بـــنـــق˹ 〙*
*⏎* امــر '.بـــنـــق' عبارة عن امر يوريك سرعة استجابة البوت
*✦╎📌↜〘 ˼.اقــتــبــاس˹ 〙*
*⏎* امــر '.اقــتــبــاس' عبارة عن امر اقتباسات جميلة و رائعة
*✦╎💍↜〘 ˼.زواج˹ 〙* حرام شلناها
*✦╎💔↜〘 ˼.طلاق˹ 〙* حرام شلناها
*✦╎👭🏻↜〘 ˼.تــوأم روحــي˹ 〙*
*⏎* امر '.تــوأم روحــي' هو عبارة عن امر يطلع لك من هو توأمك الروحي ونسبة التشابه مابينكم
*✦╎👬🏻↜〘 ˼.صــديــق˹ 〙*
*⏎* امــر '.صــديــق' عبارة عن امر يمنشن لك شخص يكون صديقك
*✦╎💖↜〘 ˼.لــلأبـد˹ 〙*
*⏎* امــر '.لــلأبـد' عبارة عن امر يمنشن شخص يكون صديقك للأبد
*✦╎🎗↜〘 ˼.نــســبــة˹ 〙*
*⏎* امــر '.نــســبــة' عبارة عن امر يطلع لك نسبة شيء تكتبه انت للشخص اللي تمنشنه
*✦╎👾↜〘 ˼.شــخــصــيــة˹ 〙*
*⏎* امــر '.شــخــصــيــة' عبارة عن امر يطلع لك نسبة معلومات شخصيتة صديقك
*✦╎💓↜〘 ˼.عــشــوائــي˹ 〙*
*⏎* امــر '.عــشــوائــي' عبارة عن امر تكتب شيئ في القروب ورح يمنشن شخص عشوائي
*✦╎🔥↜〘 ˼.نــوعــيــة˹ 〙*
*⏎* امــر '.نــوعــيــة' عبارة عن امر يطلع لك نوعية الشخص اللي تمنشنه
*✦╎🍢↜〘 ˼.تــــــوب˹ 〙*
*⏎* امــر '.تــــــوب' عبارة عن امر تكتب توب احسن ناس في القروب او اي شيئ ثاني ورح يمنشن 10 اشخاص بشكل عشوائي
*✦╎👻↜〘 ˼.اشــبــاح˹ 〙*
*⏎* امــر '.اشــبــاح' عبارة عن امر يطلع لك الناس الي ماتفاعلت من اول مادخل البوت على القروب
*┓❃━═✦•〘•﹝🎖🕹️﹞•〙•✦═━❃┏*
*˼‏🎖🕹️˹ قـــســـم اوامــر الـمـكـافــئـات╿↶*
*✦╎🥉↜〘 ˼.يومــي˹ 〙*
*⏎* امر '.يومــي' هو عبارة عن أمر عشان تاخذ مكافأة يومــيــة*
*✦╎🥈↜〘 ˼.اســبوعــي˹ 〙*
*⏎* امر '.اســبوعــي' هو عبارة عن أمر عشان تاخذ مكافأة اســبوعــيــة*
*✦╎🥇↜〘 ˼.شــهري˹ 〙*
*⏎* امر '.شــهري' هو عبارة عن أمر عشان تاخذ مكافأة شــهريــة*
*✦╎⚔︎↜〘 ˼.مــغــامــرة˹ 〙*
*✦╎⛏↜〘 ˼.تــعــديــن˹ 〙*
*✦╎🍀↜〘 ˼.حــــظ˹ 〙*
*⏎* امر '.حــــظ' هي عبارة عن لعبة تراهن فيها بالخبرة الي عندك ممكن تفوز و ممكن تخسر "🕊️", "🦀", "🦎"*
*✦╎🎰↜〘 ˼.ربـــح˹ 〙*
*⏎* امر '.ربـــح' هو عبارة عن ذهب تستثمر فيها ضد البوت و يمكن تخسر و ممكن تفوز*
*✦╎💹↜〘 ˼.اســتــثــمــار˹ 〙*
*⏎* امر '.اســتــثــمــار' هو عبارة عن نقود تستثمر فيها ضد البوت و يمكن تخسر و ممكن تفوز*
*✦╎💱↜〘 ˼.عـــمـــل˹ 〙*
*✦╎👩‍⚖↜〘 ˼.ســــــرق˹ 〙*
*✦╎🕹️↜〘 ˼.لــعــبــة˹ 〙*
*✦╎🤔↜〘 ˼.ســــــؤال˹ 〙*
*✦╎↕️↜〘 ˼.حــــزر˹ 〙*
*✦╎🔀↜〘 ˼.رتـــــــب˹ 〙*
*✦╎🏰↜〘 ˼.دنـــجــــن˹ 〙*
*✦╎🐥↜〘 ˼.مــصــارعــة˹ 〙*
*✦╎🎡↜〘 ˼.عــجــلــة˹ 〙*
*✦╎🎮↜〘 ˼.لـــعبـــة˹ 〙*
*⌠✦↜╎.لعبة⌡⁦*
*✦┇ امر '.لعبة' عبارة عن لعبة حجرة ورقة مقص مع البوت*
*•*
*⌠✦↜╎.حزر⌡⁦*
*✦┇ امر '.حزر' هو عبارة عن شخصيات انمي لازم تحزرها البوت رح يرسل ايموجيات لشخصية في الأنمي لازم ترد عليه*
*•*
*⌠✦↜╎.رتب⌡⁦*
*✦┇ امر '.رتب' هو عبارة عن كتابة غير مرتبه لشخصيات انمي لازم ترد على البوت و ترتبها*
*•*
*⌠✦↜╎.عمل⌡⁦*
*✦┇ امر '.عمل' هو عبارة عن أمر تكتبة يخليك تشتغل و تجمع خبرة بشكل عشوائي تفرق الخبرة من عمل ل عمل*
*•*
*⌠✦↜╎.سرق⌡⁦*
*✦┇ امر '.سرق' هو عبارة عن أمر يخليك تسرق خبرة من شخص انت تبيه طبعا لو كان مختفي او شاري درع حماية ماتقدر تسرقة*
*@مثال : .سرق شخص*
*•*

*⌠✦↜╎.تعدين⌡⁦*
*✦┇امر '.تعدين' هو عبارة عن امر يخليك تستخرج المعادن*
*✥━═━═━•《•🎖•》•━═━═━✥*
*˼‏🎖˹ قـسـم اوامر المكافئات╿↶*
*⌠✦↜╎.يومي⌡⁦*
*✦┇ امر '.يومي' هو عبارة عن أمر تكتبة كل يوم عشان تاخذ مكافأة يومية*
*•*
*⌠✦↜╎.اسبوعي⌡⁦*
*✦┇ امر '.اسبوعي' هو عبارة عن أمر تكتبة كل اسبوع عشان تاخذ مكافأة اسبوعية*
*•*
*⌠✦↜╎.شهري⌡⁦*
*✦┇ امر '.شهري' هو عبارة عن أمر تكتبة كل شهر عشان تاخذ مكافأة شهرية*
*•*
*✥━═━═━•《•🕵🏻‍♂️•》•━═━═━✥*
*˼‏🕵🏻‍♂️˹ قـسـم اوامر الاعضاء ╿↶*
*⌠✦↜╎.بروفايل⌡⁦*
*✦┇امر '.بروفايل' ، يعطيك معلومات عن رقمك و سجلك مثل عدد الخبرة و كم باقي عشان يعلى مستواك وعدد الأنذارات وكذا*
*مثال : .بروفايل*
*•*
*⌠✦↜╎.رصيدي⌡⁦*
*✦┇امر '.رصيد' ، هو عبارة عن حقيبة يوجد فيها اغراض المغامرات مثل الماس و زمرد وغيره حتا الصناديق ونسبة الصحة الخ,الخ*
*•*
*⌠✦↜╎.بوت/𝗚𝗼𝗸𝘂⁦*
*✦┇امر '.بوت' ,هو ذكاء اصطناعي بـ ChatGPT*
*مثال : .بوت من انت ؟*
*•*
*⌠✦↜╎.اختفاء⌡⁦*
*✦┇امر '.اختفاء' هو ان العضو یکتب الامر مع کتابة السبب لإختفائه انه راح یختفي لدقائق او ساعات من الجروب ومن یمنشنه او یرد احد علی رسالته راح یرسل البوت للشخص الي منشنه انه في وضع الاختفاء و مع سبب عدم وجوده والوقت الي غاب من وجوده في الجروب*
*مثال: .اختفاء مشغول*
*•*
*⌠✦↜╎.تسجيل⌡⁦*
*✦┇امر '.تسجيل' ، تسجیل اسم و العمر في البوت*
مثال : .تسجيل شاركي كن.*18*
*•*
*⌠✦↜╎.المطور⌡⁦*
*✦┇امر '.المطور' یرسل رقم مطور البوت*
*•*
*✥━═━═━•《•🎴•》•━═━═━✥*
*˼‏🎴˹ قـسـم اوامر الـتحـويـل╿↶*
*⌠✦↜╎.ملصق⌡⁦*
*✦┇امر '.ملصق' مع الرد علی صوره و ... ، هو ان العضو یستخدم هذا الامر بالرد علی صوره - فيديو و البوت یحوله لملصق*
*•*
*⌠✦↜╎.لملصق⌡⁦*
*✦┇امر '.لملصق' مع الرد علی ملصق ، هو ان العضو یستخدم هذا الامر لتغییر حقوق الملصقات*
*مثال : '.لملصق شاركي' | شاركي كن*
*•*
*⌠✦↜╎.لفيديو⌡⁦*
*✦┇امر '.لفيديو' هو ان العضو یستخدم هذا الامر بالرد علی ملصق متحرك و البوت یرسل الملصق علی شکل فيديو*
*•*
*✦┇امر '.لصوت' هو ان العضو یرد علی فيديو باستخدام هذا الامر و البوت یسحب الصوت من الفيديو ویرسل للعضو صوت الفيديو او mp3*
*•*
*⌠✦↜╎.لصورة⌡⁦*
*✦┇امر '.لصورة' هو ان العضو یرد علی ملصق ثابت باستخدام هذا الامر و البوت یحول الملصق لصوره*
*•*
*⌠✦↜╎.دائرة⌡⁦*
*✦┇امر '.دائرة' مع الرد علی صوره ، هو ان العضو یستخدم هذا الامر بالرد علی صوره و البوت یحوله لملصق دائري الشكل*
*•*
*⌠✦↜╎.زخرفة⌡⁦*
*✦┇امر '.زخرفة' مع جملة بالانجليزية يرسل لك زخرفة بكل الاشكال التي لديه و تصاميم جميلة*
*'Sharky kun مثال :  '.زخرفة*
*•*
*⌠✦↜╎.مكس⌡⁦*
*✦┇امر '.مكس' هو عبارة عن دمج ايموجين في بعض*
*📌 *مثال* : .مكس *😎+🤑**
*•*
*⌠✦↜╎.لرابط⌡⁦*
*✦┇امر '.لرابط' يحولك الصورة او الفيديو لرابط*
*•*
*⌠✦↜╎.افراغ⌡⁦*
*✦┇امر '.افراغ' عبارة عن أن ترسل صورة لإزالة الخلفية.*
*•*
*⌠✦↜╎.فضح⌡⁦*
*✦┇امر '.فصح' عبارة عن اذا كانت صورة عرض لمشاهدة واحدة تكتب الأمر و رح يفضحه و تصير دائمة*
*•*
*⌠✦↜╎.بحث⌡⁦*
*✦┇امر '.بحث' عبارة عن يبحث لك عن صورة فجوجل*
*مثال : '.بحث' ريمورو*
*•*
*✥━═━═━•《•🔍•》•━═━═━✥*
*˼‏🔍˹ قـسـم اوامر البـحـث╿↶*
*⌠✦↜╎.بينترست⌡⁦*
*⌠✦↜╎امر '.بينترست' بحث صور من بينترست*
*مثال : .بينترست زورو*
*•*
*⌠✦↜╎.جوجل⌡⁦*
*⌠✦↜╎امر '.جوجل' بحث في جوجل*
*مثال : .جوجل ما هي قصة انمي ري زيرو*
*•*
*⌠✦↜╎.ويكيبيديا⌡⁦*
*مثال : .جوجل هل غوكو اقوى من سايتاما؟*
*•*
*┓❃━═✦•〘•﹝🕌﹞•〙•✦═━❃┏*
*˼‏🕌˹ قـسـم اوامر الإسلاميات ╿↶*
*✦╎↜〘 ˼ســورة الكــهــف˹ 〙*
*✦╎↜〘 ˼اذكــار الصــبــاح˹ 〙*
*✦╎↜〘 ˼اذكــار المــســاء˹ 〙*
*✦╎↜〘 ˼.اذكــار˹ 〙*
*✦╎↜〘 .ايــقاف-الاذكــار˹ 〙*
*✦╎↜〘 ˼.الله˹ 〙*
*┓❃━═✦•〘•﹝👥﹞•〙•✦═━❃┏*
*↵ ❲  قـائـمـة المملكة ❳ ⬳ ⌝👥⌞*
*✦╎↜〘 ˼.فرع الملصقات˹ 〙*
*✦╎↜〘 ˼.فرع الاخبار˹ 〙*
*✦╎↜〘 ˼.فرع الصور˹ 〙*
*✦╎↜〘 ˼.فرع النشر˹ 〙*
*✦╎↜〘 ˼.فرع الاستقبال˹ 〙*
*✦╎↜〘 ˼.فرع المقاطع˹ 〙*
*✦╎↜〘 ˼.فرع الفعاليات˹ 〙*
*✦╎↜〘 ˼.فرع الدعم˹ 〙*
*✦╎↜〘 ˼.كامل فروعنا˹ 〙*
*✦╎↜〘 ˼.المطور˹ 〙*
*┓❃━═✦•〘•﹝📜﹞•〙•✦═━❃┏*
*⧉┆مـلاحــظــة :*
*⓵يمنع منعا بتا سب البوت*
*⓶استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء*
*.¸¸ ❝˼𝗚𝗼𝗸𝘂᯽𝐵𝑂𝑇˼❝ ¸¸.*`])} 
 `.trim() 
   conn.sendFile(m.chat, a, null, teks, m, null, { mentions: [who] })}

 handler.command = ['شرح','الشرح',]
 
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
   }
