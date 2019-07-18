
const Telegram=require("telegram-node-bot");
const express = require("express");
const app = express();
 PersistentMemoryStorage = require('./adapters/PersistentMemoryStorage'),
    storage = new PersistentMemoryStorage(
        `${__dirname}/data/userStorage.json`,
        `${__dirname}/data/chatStorage.json`
    ),

 tg = new Telegram.Telegram("560125385:AAF2s1PufO-AN7NiXjzmp4_kv6fBCm1-pXY",{
  workers:1,
  webAdmin: {
        port: process.env.PORT,
        host: '0.0.0.0'
    }
  });
// const tg = new Telegram.Telegram('560125385:AAF2s1PufO-AN7NiXjzmp4_kv6fBCm1-pXY', {
//     });

//controllers
const ListController=require("./controllers/todo"),
 OtherwiseController=require('./controllers/otherwise');
const listCtrl=new ListController();

tg.router
.when(new Telegram.TextCommand('/start','MainCommand'),listCtrl)
.when(new Telegram.TextCommand('/send','sendCommand'),listCtrl)
.when(new Telegram.TextCommand('/menu','menuCommand'),listCtrl)
.when(new Telegram.TextCommand('/help','helpCommand'),listCtrl)
.otherwise(new OtherwiseController());
function exitHandler(exitCode) {
    storage.flush();
    process.exit(exitCode);
}
process.on('SIGINT', exitHandler.bind(null, 0));
process.on('uncaughtException', exitHandler.bind(null, 1));

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;//myport
// }


// app.listen(port, function() {
//   console.log("Server started Successfully ");
// });
