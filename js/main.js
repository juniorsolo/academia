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
	   
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
	   
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
	  $("#gravarTreino").addClass('ocultar');
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
      $("#gravarTreino").addClass('ocultar');	  
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
	  $("#gravarTreino").addClass('ocultar');
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
	  $("#gravarTreino").addClass('ocultar');
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
      $("#gravarTreino").addClass('ocultar');	  
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
	  $("#gravarTreino").addClass('ocultar');
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
      $("#gravarTreino").addClass('ocultar');	  
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
      $("#gravarTreino").addClass('ocultar');	  
   });
   
}); 
 