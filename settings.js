const chalk = require("chalk")
const fs = require("fs")

//owmner v card
//domain && apikey && capikey && egg sesuai panel klian ya
// subrek channel AlwaysDann
global.owner = ['6287811259488'] //ur owner number
global.ownernomer = "6287811259488" //ur owner number2
global.ownername = "AlwaysDann" //ur owner name
global.ytname = "falsw" //ur yt chanel name
global.socialm = "false" //ur github or insta name
global.location = "Arab Saudi" //ur location
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = 'https://cricket.rexxa.fun' // isi dengan domain panel lu
global.apikey = 'ptla_H87uPxpLsKdry2oSRONXG1eBOqY0Pak9VY9QoNpr6OS' // Isi Apikey Plta Lu
global.capikey = 'ptlc_w2v3nNDtr77n09tOF32GWesod7L7f9qCM7Ie3LCcwRp' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//new
global.ownergc = "AlwaysDann"
global.botname = "Bot Crate Panel"
global.ownerNumber = ["6287811259488@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@alwaysdann"
global.themeemoji = '🪀'
global.wm = "YT: alwaysdann"
global.packname = "YT: alwaysdann"
global.author = "AlwaysDann\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'
global.Dana = '087811259488'


global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://files.catbox.moe/hg67a3.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus AlwaysDann',
    private: 'Khusus AlwaysDann',
    group: 'Khusus Group Tolol',
    wait: 'Sabar Tolol',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
