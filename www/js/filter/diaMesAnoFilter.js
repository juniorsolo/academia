angular.module("academiaApp").filter('diaMesAno', function(){
	return function(data){
		dataFormatada="";
		if(data){
			dataFormatada = data.getDate() < 10 ? ("0" + data.getDate() ) : data.getDate();
			dataFormatada = dataFormatada + "/" + (data.getMonth() < 10 ? ("0" + data.getMonth() ) : data.getMonth());
			dataFormatada = dataFormatada + "/" + data.getFullYear();
		}
		return dataFormatada;
	};
});