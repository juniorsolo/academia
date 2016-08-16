$(document).ready(function(){ 
     //$("#addTreino").click(function(){
	//	$("#infoRemoveTreino").fadeOut(3000);
	// });
    var fechaMenu = function(){
	   $("#navbar").removeClass('in');
	   $("#menuExibirTreino").addClass('ocultar');   
	};
	
   $("#exibirTreino").click(function(){
	   $("#menuExibirTreino").toggleClass('ocultar');   
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
   $("#TreinoDia").click(function(){
	   $("#gravarTreino").toggleClass('ocultar');
	   fechaMenu();
	   
	  $("#BICEPS").fadeOut('fast');
	  $("#TRICEPS").fadeOut('fast');
	  $("#COSTAS").fadeOut('fast');
	  $("#PEITORAL").fadeOut('fast');
	  $("#PERNAS").fadeOut('fast');
	  $("#TRAPEZIO").fadeOut('fast');
	  $("#DELTOIDE").fadeOut('fast');
	  $("#GLUTEO").fadeOut('fast');
	  $("sequenciaTreino").fadeOut('fast'); 
	   
   });
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
 