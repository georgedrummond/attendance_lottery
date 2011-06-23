$(function(document){       
  $('#hundreds').click(function(){
    $(this).html(Lottery.hundreds)
    $('tr').not('.hundreds_'+Lottery.hundreds).fadeOut()
  });
  
  $('#tens').click(function(){
    $(this).html(Lottery.tens);
    $('tr').not('.tens_'+Lottery.tens).fadeOut();
  });
  
  $('#units').click(function(){
    $(this).html(Lottery.units);
    $('tr').not('.units_'+Lottery.units).fadeOut();
  });      
  
  $('.student').live('click', function(){
    $(this).fadeOut('fast', function(){
      $(this).remove();
    })
  });
  
});
    
var Lottery = {
  hundreds:null,
  tens:null,
  units:null,
  generate_number:function(number){
    var max = number+1;
    console.log('max = '+max);
    var number = this.pad_number( Math.floor(Math.random()*max) ); // generate random number
    console.log('number = '+number);
    var number_string = number.toString();
    this.hundreds = number_string[0];
    this.tens = number_string[1];
    this.units = number_string[2];
  },
  pad_number:function(number){
    number = number.toString()
    while(number.length < 3) {
      number = "0" + number;
    }
    return number;
  }
}