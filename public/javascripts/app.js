$(function(document){
  //soundManager.url = '/swf/';
  //soundManager.flashVersion = 9; // optional: shiny features (default = 8)
  //soundManager.useFlashBlock = false; // optionally, enable when you're ready to dive in
  // enable HTML5 audio support, if you're feeling adventurous. iPad/iPhone will always get this.
  // soundManager.useHTML5Audio = true;

  //soundManager.onready(function(){
  /*
    var bell = soundManager.createSound({
      id: 'buzzer_sound',
      url: '/sounds/bell.mp3',
      autoLoad: true,
      autoPlay: false
    });

    var win = soundManager.createSound({
      id: 'winner_sound',
      url: '/sounds/win.mp3',
      autoLoad: true,
      autoPlay: false
    });
    */  
    function flash_large_number(){
      var tens = $('#tens').html(),
      units = $('#units').html(),
      hundreds = $('#hundreds').html();
      if(units == '?' || tens == '?' || hundreds =='?'){
        //bell.play();
        $('#large_number').html(hundreds+tens+units).fadeIn('fast').delay(2000).fadeOut('fast');
      } else {
        var winner = $('tr:first > .student_name').html();
        var registration_group = $('tr:first > .registration_group').html();
        $('#winner').html(winner + "<br/>" + registration_group).fadeIn();
        //win.play();
      }  
    }

    $('#hundreds').click(function(){
      $(this).html(Lottery.hundreds);
      $('tr').not('.hundreds_'+Lottery.hundreds).remove()
      flash_large_number();
    });
  
    $('#tens').click(function(){
      $(this).html(Lottery.tens);
      $('tr').not('.tens_'+Lottery.tens).remove();
      flash_large_number();
    });

    $('#units').click(function(){
      $(this).html(Lottery.units);
      $('tr').not('.units_'+Lottery.units).remove();
      flash_large_number();
    });

    $('#winner').click(function(){
      $(this).fadeOut();
    });
    //});
});
    
var Lottery = {
  hundreds:null,
  tens:null,
  units:null,
  number:null,
  generate_number:function(number){
    var max = number+1;
    //console.log('max = '+max);
    var random_number = this.pad_number( Math.floor(Math.random()*max) ); // generate random number
    //console.log('number = '+random_number);
    var number_string = random_number.toString();
    this.hundreds = number_string[0];
    this.tens = number_string[1];
    this.units = number_string[2];
    this.number = number_string;
    if(random_number == 0){
      this.generate_number(number); // 0 doesnt exist!
    }
  },
  pad_number:function(number){
    number = number.toString()
    while(number.length < 3) {
      number = "0" + number;
    }
    return number;
  }
}