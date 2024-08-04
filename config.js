const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165847459";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_58_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg2LFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpzYXFtbmFZQjd2ZVNBNTIzM0FqQ0hYUTVjVWZWQTZmb3ZDalVFTnRYTFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NTg0NzQ1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUQ4NjhEN0Y1Q0IyODIxRjYwNERGMTg0QTdDMENDQzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODA4NzI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NTg0NzQ1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjhCMDU1MERCMDQ0RDhDMEFEOUUwMTc1OTU0MzY2MTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODA4NzI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NTg0NzQ1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTk3QzIxOTBBQzk2QTFDNEE4M0EyNjQ2RjU0QkZGMzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODA4NzI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NTg0NzQ1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkVDMUQ0QUVCRDAzMUY2ODIwMDU5MTY5Rjk5Njg4OEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODA4NzI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInQ1VHJmWGFTUlQ2bnc2X1dDQVRVdVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODg5MWViMmEtNzc5Zi00NWRkLWI4MWMtZGQyN2IxYWIyMjA1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDAsXG4gICAgICAzOCxcbiAgICAgIDE1MSxcbiAgICAgIDI0OSxcbiAgICAgIDIwMixcbiAgICAgIDEwMCxcbiAgICAgIDE3LFxuICAgICAgMzMsXG4gICAgICAxOTMsXG4gICAgICAxNzEsXG4gICAgICA3NyxcbiAgICAgIDE4NCxcbiAgICAgIDIyMSxcbiAgICAgIDEwMCxcbiAgICAgIDEzOSxcbiAgICAgIDk3LFxuICAgICAgMTc3LFxuICAgICAgNzEsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDg4LFxuICAgICAgMzksXG4gICAgICAxMjcsXG4gICAgICAxOTIsXG4gICAgICAyMzUsXG4gICAgICA4MyxcbiAgICAgIDkwLFxuICAgICAgMjI0LFxuICAgICAgMjQ0LFxuICAgICAgMzEsXG4gICAgICAxMjAsXG4gICAgICA0MCxcbiAgICAgIDQ3LFxuICAgICAgMTUzLFxuICAgICAgMTEzLFxuICAgICAgNzksXG4gICAgICAxMzYsXG4gICAgICAxMDEsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFlSR1A2R1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjU4NDc0NTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ1MDI0MzUyMjg4OTQ1OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2hvbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDJZbWM0RkVKRHp2N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrVlhDOEdBOENDUTVzeTFKYkFCSnl6bTlxQTZpdUdtY204QkU3NlVvZlhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhvSkVEUDRZNkU3WjY3KzJGRnNRRkZEUUIwNVd1cDlsazkxRXdHQUJ5dnhMcUZQdWNiUXlCcDJXRWxUTUJqYlBROFhNSWFVdDVmaGJoazZja3V4ckN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJaalRGODhHSmlrZkNLd1NzRlZZMExiWnZJWEdQR1duVUg0TW5JTHhYRS8vQUtSWlZIc2ZvMmZHWjBnc0xlaG1WeVVsSERmZ2R0SXQvOFFqNnk4bUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjU4NDc0NTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODA4NzIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzZFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDNkUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzVENzU2xnWWxMRTFHZ2h2VVdaN204RjhybjZIQUwvVCs4U3pUenE4ZmFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDYxNjc4NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjgwODcyNDYyNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
