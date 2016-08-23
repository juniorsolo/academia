$(document).ready(function(){ 
    
    var fechaMenu = function(){
	   $("#navbar").removeClass('in');
	   $("#submenuExibirExercicio").addClass('ocultar');   
	};
	
	//Fecha e abre o submenu de exercicios 
   $("#menuExibirExercicio").click(function(){
	   $("#submenuExibirExercicio").toggleClass('ocultar');   
   });
   
   // link o menu meu treino.
   $("#menuMeuTreino").click(function(){
	   fechaDivExceto(null);
	   $("#conteudoSequenciaTreino").toggleClass('ocultar');
	   fechaMenu();
   });
   
    // link do menu gravar treino 
    $("#menuGravarTreino").click(function(){
	   fechaDivExceto(null);
	   $("#conteudoGravarTreino").toggleClass('ocultar');
	   fechaMenu();
	   
   });
   
   //link do menu historico
   $("#menuHistorico").click(function(){
	   fechaDivExceto(null);
	   $("#conteudoHistorico").toggleClass('ocultar');
	   fechaMenu();
   });
   
   $(".efectShake").click(function(){
	   $(this).effect("shake",800);
   });
   
   /*Fecha as divs com exceção da enviada por parametro*/
   var fechaDivExceto = function(naoFechar){   
	  $("#BICEPS").fadeOut('fast'); 
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
	  $("#conteudoGravarTreino").addClass('ocultar');
	  $("#conteudoSequenciaTreino").addClass('ocultar');
	  $("#conteudoHistorico").addClass('ocultar');
	  $(naoFechar).fadeIn('slow');
   };
 
   $("#Biceps").click( function(){
      //Exibindo...
	  fechaMenu();
	  fechaDivExceto("#BICEPS");
   });
   
   $("#Triceps").click(function(){
	  // Exibindo...
	  fechaMenu();
	  fechaDivExceto("#TRICEPS");	  
   });
   
   $("#Costas").click(function(){
	   // Exibindo...
	  fechaMenu();
      fechaDivExceto("#COSTAS");
   });
   
   $("#Peitoral").click(function(){
	   // Exibindo...
	  fechaMenu();
	  fechaDivExceto("#PEITORAL");
   });
   
   $("#Pernas").click(function(){
	   // Exibindo...
	  fechaMenu();
	  fechaDivExceto("#PERNAS");
   });
   
   $("#Trapezio").click(function(){
	   // Exibindo...
	  fechaMenu();
	  fechaDivExceto("#TRAPEZIO");
   });
   
   $("#Deltoide").click(function(){
	   // Exibindo...
	  fechaMenu();
      fechaDivExceto("#DELTOIDE");
   });
   
   $("#Gluteo").click(function(){
	   // Exibindo...
	  fechaMenu();
      fechaDivExceto("#GLUTEO");
   });
   
}); 
 