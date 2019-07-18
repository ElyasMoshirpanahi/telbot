'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
  
    handle($) {
         $.sendMessage('دستور شما نا معتبر بود لطفا "برای شروع مجدد\n\n\n روی  \n\n /start  کلیک کنید"');
    }
 }
module.exports = OtherwiseController;
