$(document).ready(function(){ 
     //$("#addTreino").click(function(){
	//	$("#infoRemoveTreino").fadeOut(3000);
	// });
    var fechaMenu = function(){
	   $("#navbar").removeClass('in');
	   $("#menuExibirExercicio").addClass('ocultar');   
	};
	
	//Fecha e abre o submenu de exercicios 
   $("#exibirExercicio").click(function(){
	   $("#menuExibirExercicio").toggleClass('ocultar');   
   });
   
   // link o menu meu treino.
   $("#meuTreino").click(function(){
	   fechaDivExceto("#xxx");
	   $("#sequenciaTreino").toggleClass('ocultar');
	   fechaMenu();
   });
   
     $("#TreinoDia").click(function(){
	   fechaDivExceto("#divNaoExistente");
	   $("#gravarTreino").toggleClass('ocultar');
	   fechaMenu();
	   
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
	  $("#gravarTreino").addClass('ocultar');
	  $("#sequenciaTreino").addClass('ocultar');
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
 