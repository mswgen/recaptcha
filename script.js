var yes = false;
      var onloadCallback = function() {
        grecaptcha.render('html_element', {
          'sitekey' : '6LfdkOEUAAAAAHZQhQujPAnVqMQp177OZBO2vc3M',
          'callback': function(){
              yes = true;
          }
        });
      };
var done = function(){
    if(yes){
        location.href = 'https://discordapp.com';
    }
}
