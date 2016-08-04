$(document).ready(function(){ 
    var fechaMenu = function(){
	   $("#navbar").removeClass('in');
	   $("#menuExibirTreino").addClass('ocultar');   
	};
	
   $("#exibirTreino").click(function(){
	   $("#menuExibirTreino").toggleClass('ocultar');   
   });
   $("#TreinoDia").click(function(){
	   $("#gravarTreino").toggleClass('ocultar');
	   fechaMenu();
   });
   $("#Biceps").click( function(){
      //Exibindo...
	  $("#BICEPS").fadeIn('slow');
	  fechaMenu();
	  
	  //Ocultando outros
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
	  $("#gravarTreino").fadeOut('fast');
   });
   
   $("#Triceps").click(function(){
	   // Exibindo...
	  $("#TRICEPS").fadeIn('slow');
	  fechaMenu();
	  
	   //Ocultando outros
	  $("#BICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
      $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
      $("#gravarTreino").fadeOut('fast');	  
   });
   
   $("#Costas").click(function(){
	   // Exibindo...
	  $("#COSTAS").fadeIn('slow');
	  fechaMenu();
	  
	   //Ocultando outros
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
	  $("#gravarTreino").fadeOut('fast');
   });
   
   $("#Peitoral").click(function(){
	   // Exibindo...
	  $("#PEITORAL").fadeIn('slow');
	  fechaMenu();
	  
	   //Ocultando outros
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
	  $("#gravarTreino").fadeOut('fast');
   });
   
   $("#Pernas").click(function(){
	   // Exibindo...
	  $("#PERNAS").fadeIn('slow');
	  fechaMenu();
	  
	   //Ocultando outros
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
      $("#gravarTreino").fadeOut('fast');	  
   });
   
   $("#Trapezio").click(function(){
	   // Exibindo...
	  $("#TRAPEZIO").fadeIn('slow');
	  fechaMenu();
	  
	   //Ocultando outros
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast'); 
	  $("#gravarTreino").fadeOut('fast');
   });
   
   $("#Deltoide").click(function(){
	   // Exibindo...
	  $("#DELTOIDE").fadeIn('slow');
	  fechaMenu();
	  
	   //Ocultando outros
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
      $("#gravarTreino").fadeOut('fast');	  
   });
   
   $("#Gluteo").click(function(){
	   // Exibindo...
	  $("#GLUTEO").fadeIn('slow');
	  fechaMenu();
	  
	   //Ocultando outros
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
      $("#gravarTreino").fadeOut('fast');	  
   });
   
}); 
 