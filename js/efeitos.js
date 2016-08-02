$(document).ready(function(){
  $("#total").focusout(function(){
	  var valor = $(this).val();
      var text = (valor < 1 ? 0 : valor);
      text = "R$ " + text;	  
      alert(text);
  });

	
  $('#menu').hover(
    function(){
     $(this).addClass('active');
    },
    function(){
     $(this).removeClass('active');    
    }
  );
});