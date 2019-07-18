'use strict';
const chatId="-1001352775023";

const Telegram = require('telegram-node-bot');
var name;
var day;
var hour;
var bloodType;
var number;
var All;
class ListController extends Telegram.TelegramBaseController {
    MainHandler($){
    $.runMenu({
    message:"به ربات نوبت دهی خوش آمدید \n ساخته شده توسط الیاس ",
    layout: 1,
    '📎⬇️➕افزودن مراجعه کننده➕⬇️📎': () => {
          const form = {
                name: {
                  q: '👤نام مراجعه کننده:',
                  error: 'sorry, wrong input',
                  validator: (message, callback) => {
                    if(message.text) {
                      name=message.text;  
                      result.push(message.text)
                      callback(true,result) //you must pass the result also
                      return
                    }

                    callback(false)
                  }
                },
                day: {
                  q: '🗓تاریخ یا روز ویزیت:',
                  error: 'sorry, wrong input',
                  validator: (message, callback) => {
                    if(message.text) {
                      day=message.text;
                      result.push(message.text)
                      callback(true,result)
                      return
                    }

                    callback(false)
                  }
                },
                hour: {
                  q: '⏱ساعت مراجعه:',
                  error: 'sorry, wrong input',
                  validator: (message, callback) => {
                    if(message.text) {
                      hour=message.text;
                      result.push(message.text)
                      callback(true,result)
                      return
                    }

                    callback(false)
                  }
                },
                bloodType: {
                  q: '💉گروه خونی مراجعه کننده:',
                  error: 'sorry, wrong input',
                  validator: (message, callback) => {
                    if(message.text) {
                      bloodType=message.text;
                      result.push(message.text)
                      callback(true,result)
                      return
                    }

                    callback(false)
                  }
                },
                number: {
                  q: '📱 شماره تلفن مراجعه کننده:',
                  error: 'sorry, wrong input',
                  validator: (message, callback) => {
                    if(message.text) {
                      number=message.text;
                      result.push(message.text)
                      callback(true,result)
                      return
                    }

                    callback(false)
                  }
                }
            }

            $.runForm(form, (result) => {
              All=(name+"\n"+day+"\n"+hour+"\n"+bloodType+"\n"+number+"\n\n\n\n\n"+"/start");
              $.sendMessage(All);
           
            })
          var result=[];

    }, //add new people

     
    '✅ارسال به کانال✅': () => {
      $.runMenu({
                  message:'آیا از ارسال به کانال مطمن هستید؟',
                    options: {
                        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                    },
                    '✅بله': () => {
                          tg.api.sendMessage(chatId,All,{parse_mode:'Markdown'});
                          $.sendMessage("✅پیغام به کانال ارسال شد✅");
						  $.sendMessage("برای شروع مجدد\n\n\n روی  \n\n /start  کلیک کنید");
                      },
                      '🚫خیر': () => {
                        $.sendMessage("🚫شما از ارسال اطلاعات به کانل منصرف شدید🚫");
                        $.sendMessage("برای شروع مجدد\n\n\n روی  \n\n /start  کلیک کنید");
                      },
                })
    },
	'📃راهنما📃': () => {$.sendMessage(" برای نمایش این پیغام گزینه ی راهنما را بزنید \nبرای افزودن مراجعه کننده گزینه ی 'افزودن مراجعه کننده'ستفاده کنید\n برای ارسال به کانال:\n ▪️ اول /start را بزنید \n ▪️سپس گزینه ی ارسال به  کانال  را بزنید \n\n برای شروع مجدد نیز از \n /start استفاده کنید ")
    }	
      })
    }
    // helpHandler($){
    //    }
   // sendHandler($){
   //          }
   
 get routes(){
  return{
      'startCommand':'startHandler',
      'sendCommand':'sendHandler',
      'menuCommand':'menuHandler',
      'helpCommand':'helpHandler',
      'MainCommand':'MainHandler'

  };
 }

}
module.exports = ListController;



 //     $.runMenu({
          //     message: 'Select:',
          //      layout:1,
          //     options: {
          //         parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
          //     },
          //     //add
          //     '📎⬇️➕اﻓﺰﻭﺩﻥ ﻣﺮاﺟﻌﻪ کﻧﻨﺪﻩ➕⬇️📎': {

          //       message: 'ﻟﻄﻔﺎ ﻣﺸﺨﺼﺎﺕ ﻣﺮاﺟﻌﻪ کﻧﻨﺪﻩ ﺭا ﻭاﺭﺩ ﻓﺮﻣﺎییﺩ',
          //       resizeKeyboard: true,
          //       'اﺳﻢ':{
          //       }
          //     },

          //     //get
          //     '🔍ﻣﺸﺎﻫﺪﻩ ی ﻣﺸﺨﺼﺎﺕ🔍': {},

          //     //check
          //     '❌ﺣﺬﻑ یک ﻣﻮﺭﺩ ﺩﺭ ﻝیﺳﺖ❌': {},

          //     //send
          //     '✅اﺭﺳﺎﻝ ﻣﺸﺨﺼﺎﺕ ﺑﻪ کاﻧﺎﻝ ✅': {},

          //     'Exit': {
          //       message: 'Do you realy want to exit?',
          //       resizeKeyboard: true,
          //       'yes': () => {
          //         tg.api.sendMessage(chatId,"hi",{parse_mode:'Markdown'});
          //       },
          //       'no': () => {

          //       }
          //     },
          //     'anyMatch': () => { //will be executed at any other message

          //     }
          // }) 
          //   $.runMenu({

          //     message:"ﺑﻪ ﺭﺑﺎﺕ ﻧﻮﺑﺖ ﺩﻩی ﺧﻮﺵ ﺁﻣﺪیﺩ \n ﺳﺎﺧﺘﻪ ﺷﺪﻩ ﺗﻮﺳﻂ اﻝیاﺱ \n ﺑﺮای ﺩیﺩﻥ ﺩﺳﺘﻮﺭاﺕ گﺯیﻧﻪ ی /help ﺭﻭ ﺑﺰﻥیﺩ",
          //     layout:1,
          //     '📎⬇️➕اﻓﺰﻭﺩﻥ ﻣﺮاﺟﻌﻪ کﻧﻨﺪﻩ➕⬇️📎': (addHandler) => {}, //will be on first line
          //     '🔍ﻣﺸﺎﻫﺪﻩ ی ﻣﺸﺨﺼﺎﺕ🔍': () => {}, //will be on first line
          //     '❌ﺣﺬﻑ یک ﻣﻮﺭﺩ ﺩﺭ ﻝیﺳﺖ❌': () => {}, //will be on second line
          //     '✅اﺭﺳﺎﻝ ﻣﺸﺨﺼﺎﺕ ﺑﻪ کاﻧﺎﻝ ✅': () => {}, //will be on second line
             
          //       })