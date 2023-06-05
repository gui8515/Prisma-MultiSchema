

import {colorLogs} from './utility/colorLogs'

export const generatedComment=
`////////////////////////////////////////////////////////////////////////////////////////
///// 𝐀𝐮𝐭𝐨-𝐜𝐨𝐦𝐦𝐞𝐧𝐭𝐞𝐝 𝐨𝐮𝐭 𝐛𝐲 🅿🆁🅸🆂🅼🅰-🅼🆄🅻🆃🅸🆂🅲🅷🅴🅼🅰			                  /////
///// 𝐃𝐞𝐭𝐞𝐜𝐭𝐞𝐝:𝐝𝐚𝐭𝐚𝐬𝐨𝐮𝐫𝐜𝐞 𝐚𝐧𝐝 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐨𝐫 𝐜𝐥𝐢𝐞𝐧𝐭.				                               /////
///// 𝐘𝐨𝐮 𝐜𝐚𝐧 𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐢𝐬 𝐟𝐢𝐥𝐞𝐬 𝐜𝐨𝐧𝐭𝐞𝐧𝐭 𝐢𝐧 𝐜𝐨𝐦𝐦𝐞𝐧𝐭𝐞𝐝/𝐮𝐧𝐜𝐨𝐦𝐦𝐞𝐧𝐭𝐞𝐝 𝐬𝐭𝐚𝐠𝐞,𝐁𝐨𝐭𝐡 𝐰𝐚𝐲   /////
///// 𝐈𝐭 𝐰𝐢𝐥𝐥 𝐭𝐚𝐤𝐞 𝐞𝐟𝐟𝐞𝐜𝐭 𝐢𝐟 𝐲𝐨𝐮 𝐫𝐮𝐧 𝐧𝐩𝐱 𝐩𝐫𝐢𝐬𝐦𝐚-𝐦𝐮𝐥𝐭𝐢𝐬𝐜𝐡𝐞𝐦𝐚			                     /////
///// 𝐅𝐞𝐞𝐥 𝐟𝐫𝐞𝐞 𝐭𝐨 𝐜𝐡𝐚𝐧𝐠𝐞 𝐝𝐚𝐭𝐚𝐬𝐨𝐮𝐫𝐜𝐞/𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐔𝐑𝐋/𝐩𝐫𝐨𝐯𝐢𝐝𝐞𝐫			                     /////
///// ≡≡≡≡≡≡≡≡≡≡≡≡≡ 𝐃𝐎𝐍𝐓 𝐂𝐇𝐀𝐍𝐆𝐄 𝐀𝐍𝐘𝐓𝐇𝐈𝐍𝐆 𝐈𝐍 𝐓𝐇𝐈𝐒 𝐂𝐎𝐌𝐌𝐄𝐍𝐓 𝐁𝐎𝐗 ≡≡≡≡≡≡≡≡≡≡≡≡≡≡/////
///// ≡≡≡≡≡≡≡≡≡     ▼△▼△ 𝙲𝙷𝙰𝙽𝙶𝙴 𝐎𝐍𝐋𝐘 𝙱𝙴𝙻𝙾𝚆 𝚃𝙷𝙸𝚂 𝙻𝙸𝙽𝙴 ▼△▼△	    ≡≡≡≡≡≡≡≡≡≡≡≡≡≡/////
//////////////////////////////////////////////////////////////////////////////////////
\n`



export function errorLogs(subpath: string){

    console.log('❌',colorLogs.BgRed,'No Subschemas found !',colorLogs.Reset);
    console.log('👉',"Place all your subschemas here :\n ",colorLogs.Bright,subpath, "\\",colorLogs.Reset);
    console.log('❤',"Follow Documentation: ",colorLogs.FgYellow,
                              "https://github.com/joydip007x/Prisma-MultiSchema.git#readme"
                              ,colorLogs.Reset);
}
  
