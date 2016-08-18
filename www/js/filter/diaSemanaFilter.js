angular.module("academiaApp").filter('diaSemanaFilter',function(){
	return function(dia){
		var semanaFormatada = "";
		switch(dia){
			
		    case 0:
           	   semanaFormatada = "Domingo";
               break;
            case 1:
                semanaFormatada = "Segunda";
                break;
            case 2:
                semanaFormatada = "Terça";
                break;
            case 3:
                semanaFormatada = "Quarta";
                break;
            case 4:
                semanaFormatada = "Quinta";
                break;
            case 5:
                semanaFormatada = "Sexta";
                break;
            case 6:
                semanaFormatada = "Sabado";
                break; 		
		}
		
		return semanaFormatada;
	};
});