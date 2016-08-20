angular.module("academiaApp").controller('academiaController', function($scope,$cordovaVibration){
   var carregarCategorias = function(){ return ["BICEPS","COSTAS","TRICEPS","PEITORAL","PERNAS","DELTOIDE","TRAPEZIO","GLUTEO"]};
   $scope.categorias = carregarCategorias();
   $scope.categorias.sort();
   $scope.exercicios=[{nome:"Rosca Direta",categoria:"BICEPS"},
	                 {nome:"Rosca Concentrada",categoria:"BICEPS"},
					 {nome:"Rosca Alternada",categoria:"BICEPS"},  
					 {nome:"Pulley",categoria:"TRICEPS"},
					 {nome:"Pulley Supinado",categoria:"TRICEPS"},
					 {nome:"Pulley Corda",categoria:"TRICEPS"},
					 {nome:"Pulley Frontal",categoria:"COSTAS"},
					 {nome:"Remada Fechada",categoria:"COSTAS"},
					 {nome:"Cavalo",categoria:"COSTAS"},
					 {nome:"Pundow",categoria:"COSTAS"},
					 {nome:"Supino Reto",categoria:"PEITORAL"},
					 {nome:"Supino Inclinado",categoria:"PEITORAL"},
					 {nome:"Crucifixo Inclinado",categoria:"PEITORAL"},
					 {nome:"Supino Declinado",categoria:"PEITORAL"},
					 {nome:"Legg Press",categoria:"PERNAS"},
					 {nome:"Avanço",categoria:"PERNAS"},
					 {nome:"Cadeira Extensora",categoria:"PERNAS"},
					 {nome:"Cadeira Flexora",categoria:"PERNAS"},
					 {nome:"Cadeira Adutora",categoria:"PERNAS"},
					 {nome:"Cadeira Abdutora",categoria:"PERNAS"},
					 {nome:"Desenvol. Frontal",categoria:"DELTOIDE"},
					 {nome:"Arnold Press. + Desenv.",categoria:"DELTOIDE"},
					 {nome:"Elevação Frontal",categoria:"DELTOIDE"},
					 {nome:"Elevação Lateral",categoria:"DELTOIDE"},
					 {nome:"Elevação Posterior",categoria:"DELTOIDE"},
					 {nome:"Remada Alta",categoria:"TRAPEZIO"}	 
					 ];
	$scope.historico = [{data: new Date(2016,07,07), treino:"PEITORAL,BICEPS"},
	                    {data: new Date(2016,07,10), treino:"PERNAS"},
						{data: new Date(2016,07,12), treino:"COSTAS, TRICEPS"},
						{data: new Date(2016,07,13), treino:"DELTOIDE"},
						{data: new Date(2016,07,14), treino:"PEITORAL,BICEPS"},
						{data: new Date(2016,07,15), treino:"PERNAS"},
						{data: new Date(2016,07,17), treino:"COSTAS, TRICEPS"}];				 
	$scope.treinosDoDia=[];
    $scope.dataGravarTreino = new Date();
	$scope.categoriaSelecionada = "";
	var service = {};
	service = function(successCallback, errorCallback) {
				document.addEventListener("deviceready", function () {
				  $cordovaVibration.vibrate(1000);
				});
			  }
	$scope.addTreino = function(){
		if($scope.categoriaSelecionada != ""){
		  $scope.treinosDoDia.push($scope.categoriaSelecionada);
		  $scope.categorias = removeItemOfArray($scope.categorias, $scope.categoriaSelecionada);
		  $scope.categoriaSelecionada = "";
        } 		
	};
	$scope.removerTreino = function(treino){
		$scope.treinosDoDia = removeItemOfArray($scope.treinosDoDia, treino)
		$scope.categorias.push(treino);
		$scope.categorias.sort();  
        service();
		
	};

	$scope.salvarTreino = function(){
		$scope.categoriaSelecionada = "";
		$scope.treinosDoDia=[];
		$scope.categorias = carregarCategorias();
		
	};
    var removeItemOfArray= function(array , itemRemover){	    
			var index = array.indexOf(itemRemover);
			if(index != -1){
				array.splice(index,1);
				return array;
			}	
    };
}); 