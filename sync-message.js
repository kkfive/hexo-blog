const Slimbot=require("slimbot"),fs=require("fs"),{BOT_TOKEN:BOT_TOKEN}=process.env,slimbot=new Slimbot(BOT_TOKEN),chatID=-0xe923f2c0a9,config={parse_mode:"Markdown",disable_web_page_preview:!1,disable_notification:!1},imageRegex=/(?:!\[(.*?)\]\((.*?)\))/g,contentFile=fs.readFileSync("./changePosts.json"),contentJson=JSON.parse(contentFile);let content="小康又更新了新内容：";contentJson.forEach((e=>{content+=`\n  \n  [${e.title}](${e.link})`})),content+="\n\n小康博客正在重新部署，建议30分钟后查看",contentJson.length>0&&slimbot.sendMessage(chatID,content,config);