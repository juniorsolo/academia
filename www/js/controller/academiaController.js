angular.module("academiaApp").controller('academiaController', function($scope,$cordovaVibration,$cordovaCamera,$cordovaGeolocation){
   var carregarCategorias = function(){ return ["BICEPS","COSTAS","TRICEPS","PEITORAL","PERNAS","DELTOIDE","TRAPEZIO","GLUTEO"]};
   $scope.categorias = carregarCategorias();
   //$scope.categorias.sort();
   $scope.exercicios=[{nome:"Rosca Direta",categoria:"BICEPS", treino: [{repeticao:"12", peso:"12kg"},{repeticao:"10", peso:"10kg"}, {repeticao:"6", peso:"8kg"} ]},
	                 {nome:"Rosca Concentrada",categoria:"BICEPS", treino: [{repeticao:"12", peso:"12kg"},{repeticao:"10", peso:"10kg"}, {repeticao:"6", peso:"8kg"} ]},
					 {nome:"Rosca Alternada",categoria:"BICEPS", treino: [{repeticao:"Max", peso:"12kg"},{repeticao:"Max", peso:"10kg"}, {repeticao:"Max", peso:"8kg"} ]},  
					 {nome:"Pulley",categoria:"TRICEPS" , treino: [{repeticao:"12", peso:"12kg"},{repeticao:"12", peso:"10kg"}, {repeticao:"12", peso:"8kg"} ]},
					 {nome:"Pulley Supinado",categoria:"TRICEPS", treino: [{repeticao:"12", peso:"12kg"},{repeticao:"10", peso:"10kg"}, {repeticao:"6", peso:"8kg"} ]},
					 {nome:"Pulley Corda",categoria:"TRICEPS", treino: [{repeticao:"10", peso:"20kg"},{repeticao:"10", peso:"15kg"}, {repeticao:"10", peso:"15kg"} ]},
					 {nome:"Pulley Frontal",categoria:"COSTAS", treino: [{repeticao:"10", peso:"25kg"},{repeticao:"10", peso:"30kg"}, {repeticao:"10", peso:"35kg"} ]},
					 {nome:"Remada Fechada",categoria:"COSTAS", treino: [{repeticao:"15", peso:"15kg"},{repeticao:"15", peso:"20kg"}, {repeticao:"15", peso:"25kg"} ]},
					 {nome:"Cavalo",categoria:"COSTAS", treino: [{repeticao:"10", peso:"15kg"},{repeticao:"10", peso:"20kg"}, {repeticao:"10", peso:"25kg"} ]},
					 {nome:"Pundow",categoria:"COSTAS", treino: [{repeticao:"10", peso:"15kg"},{repeticao:"10", peso:"20kg"}, {repeticao:"10", peso:"20kg"} ]},
					 {nome:"Supino Reto",categoria:"PEITORAL", treino: [{repeticao:"12", peso:"20kg"},{repeticao:"10", peso:"25kg"}, {repeticao:"8", peso:"30kg"} ]},
					 {nome:"Supino Inclinado",categoria:"PEITORAL", treino: [{repeticao:"12", peso:"12kg"},{repeticao:"10", peso:"10kg"}, {repeticao:"6", peso:"8kg"} ]},
					 {nome:"Crucifixo Inclinado",categoria:"PEITORAL",treino: [{repeticao:"10", peso:"8kg"},{repeticao:"10", peso:"10kg"}, {repeticao:"10", peso:"12kg"} ]},
					 {nome:"Supino Declinado",categoria:"PEITORAL", treino: [{repeticao:"8", peso:"15kg"},{repeticao:"8", peso:"20kg"}, {repeticao:"8", peso:"25kg"} ]},
					 {nome:"Legg Press",categoria:"PERNAS", treino: [{repeticao:"24", peso:"80kg"},{repeticao:"24", peso:"100kg"}, {repeticao:"24", peso:"100kg"} ]},
					 {nome:"Avanço",categoria:"PERNAS", treino: [{repeticao:"10", peso:"20kg"},{repeticao:"10", peso:"20kg"}, {repeticao:"10", peso:"20kg"} ]},
					 {nome:"Cadeira Extensora",categoria:"PERNAS", treino: [{repeticao:"Max", peso:"15kg"},{repeticao:"Max", peso:"20kg"}, {repeticao:"Max", peso:"20kg"} ]},
					 {nome:"Cadeira Flexora",categoria:"PERNAS", treino: [{repeticao:"12", peso:"15kg"},{repeticao:"12", peso:"20kg"}, {repeticao:"12", peso:"20kg"} ]},
					 {nome:"Cadeira Adutora",categoria:"PERNAS", treino: [{repeticao:"Max", peso:"30kg"},{repeticao:"Max", peso:"40kg"}, {repeticao:"Max", peso:"40kg"} ]},
					 {nome:"Cadeira Abdutora",categoria:"PERNAS", treino: [{repeticao:"Max", peso:"30kg"},{repeticao:"Max", peso:"40kg"}, {repeticao:"Max", peso:"40kg"} ]},
					 {nome:"Desenvol. Frontal",categoria:"DELTOIDE", treino: [{repeticao:"10", peso:"8kg"},{repeticao:"10", peso:"10kg"}, {repeticao:"10", peso:"10kg"} ]},
					 {nome:"Arnold Press. + Desenv.",categoria:"DELTOIDE", treino: [{repeticao:"10", peso:"8kg"},{repeticao:"10", peso:"10kg"}, {repeticao:"10", peso:"10kg"} ]},
					 {nome:"Elevação Frontal",categoria:"DELTOIDE", treino: [{repeticao:"10", peso:"8kg"},{repeticao:"10", peso:"8kg"}, {repeticao:"10", peso:"10kg"} ]},
					 {nome:"Elevação Lateral",categoria:"DELTOIDE", treino: [{repeticao:"10", peso:"8kg"},{repeticao:"10", peso:"8kg"}, {repeticao:"10", peso:"10kg"} ]},
					 {nome:"Elevação Posterior",categoria:"DELTOIDE", treino: [{repeticao:"10", peso:"8kg"},{repeticao:"10", peso:"8kg"}, {repeticao:"10", peso:"10kg"} ]},
					 {nome:"Remada Alta",categoria:"TRAPEZIO", treino: [{repeticao:"10", peso:"20kg"},{repeticao:"10", peso:"20kg"}, {repeticao:"10", peso:"25kg"} ]}	 
					 ];
	$scope.historico = [{data: new Date(2016,07,07), treino:"PEITORAL,BICEPS"},
	                    {data: new Date(2016,07,10), treino:"PERNAS"},
						{data: new Date(2016,07,12), treino:"COSTAS, TRICEPS"},
						{data: new Date(2016,07,13), treino:"DELTOIDE"},
						{data: new Date(2016,07,14), treino:"PEITORAL,BICEPS"},
						{data: new Date(2016,07,15), treino:"PERNAS"},
						{data: new Date(2016,07,17), treino:"COSTAS, TRICEPS"}];
    $scope.medidas = [{data: new Date(2016,07,1), peso: 79, altura: 1.65, escapular:108, torax: 100.5, cintura: 89, quadril:102.5, bracoD: 33, 
	bracoDContr: 36, antiBracoD: 27, punhoD:16, bracoE:32, bracoEContr:36, antiBracoE: 27, punhoE: 16.5, coxaD: 56, coxaE: 56, gemeosD: 38.5, gemeosE: 39 }];						
	$scope.treinosDoDia=[];
    $scope.dataGravarTreino = new Date();
	$scope.categoriaSelecionada = "";
	
	// camera ****
    
	function getFoto(){
		document.addEventListener("deviceready", function () {

		var options = {
		  quality: 90,
		  destinationType: Camera.DestinationType.DATA_URL,
		  sourceType: Camera.PictureSourceType.CAMERA,
		  allowEdit: true,
		  encodingType: Camera.EncodingType.JPEG,
		  targetWidth: 100,
		  targetHeight: 100,
		  popoverOptions: CameraPopoverOptions,
		  saveToPhotoAlbum: true,
		  correctOrientation:true
		};

		$cordovaCamera.getPicture(options).then(function(imageData) {
		  var image = document.getElementById('minhaFoto');
		  image.style.display = "block";
		  image.src = "data:image/jpeg;base64," + imageData;
		}, function(err) {
		  // error
		  alert("Não foi possível inserir a imagem."); 
		});

        }, false);
	}
	
	function getLocalizacao(){
		
		document.addEventListener("deviceready", function () {
			
		var posOptions = {timeout: 10000, enableHighAccuracy: false};	
	    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (posicao) {
		  var myCenter=new google.maps.LatLng(posicao.coords.latitude,posicao.coords.longitude);
		  function initialize(){
			var mapProp = {
			  center:myCenter,
			  zoom:16,
			  zoomControl:true,
			  streetViewControl:true,
			  mapTypeId:google.maps.MapTypeId.ROADMAP
			  };

			var map=new google.maps.Map(document.getElementById("imgLocalizacao"),mapProp);

			var marker=new google.maps.Marker({
			  position:myCenter,
			  animation:google.maps.Animation.BOUNCE
			  });

			marker.setMap(map);
			}
			initialize();
			//google.maps.event.addDomListener(window, 'load', initialize);
			
		}, function(err) {
		  // error
		});
	  },false);
	}
	 
	function vibrate() {
        navigator.vibrate(300);
		
    } 
	$scope.foto = function(){
		getFoto();
       		
	};
	
	$scope.localizar = function(){
		getLocalizacao();
       		
	};
	 
	$scope.addTreino = function(){
		if($scope.categoriaSelecionada != ""){
		  $scope.treinosDoDia.push($scope.categoriaSelecionada);
		  $scope.categorias = removeItemOfArray($scope.categorias, $scope.categoriaSelecionada);
		  $scope.categoriaSelecionada = "";
		  vibrate();
        } 		
	};
	$scope.removerTreino = function(treino){
		$scope.treinosDoDia = removeItemOfArray($scope.treinosDoDia, treino)
		$scope.categorias.push(treino);
		$scope.categorias.sort();
        vibrate();   		
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