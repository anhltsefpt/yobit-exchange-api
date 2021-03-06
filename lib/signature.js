const crypto      = require('crypto');
const klass       = require('klass');
const _           = require('underscore');
const querystring = require('querystring');
module.exports = klass(function(options){
  _.extend(this, options);
}).methods({
  sign: function(options) {
   var data = querystring.stringify(options);
    var hash = crypto.createHmac('sha512', this.secret);
    hash.update(data);
    var signature = hash.digest('hex');
    const nonce = Math.floor((Math.random() * 2147483646 + 1))
    return {
      key: this.key,
      sign: signature,
      nonce
    };
  }
})
