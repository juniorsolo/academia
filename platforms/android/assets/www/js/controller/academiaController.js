angular.module("academiaApp").controller('academiaController', function($scope,$cordovaVibration,$cordovaCamera,$cordovaGeolocation){
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
					 {nome:"Avan�o",categoria:"PERNAS"},
					 {nome:"Cadeira Extensora",categoria:"PERNAS"},
					 {nome:"Cadeira Flexora",categoria:"PERNAS"},
					 {nome:"Cadeira Adutora",categoria:"PERNAS"},
					 {nome:"Cadeira Abdutora",categoria:"PERNAS"},
					 {nome:"Desenvol. Frontal",categoria:"DELTOIDE"},
					 {nome:"Arnold Press. + Desenv.",categoria:"DELTOIDE"},
					 {nome:"Eleva��o Frontal",categoria:"DELTOIDE"},
					 {nome:"Eleva��o Lateral",categoria:"DELTOIDE"},
					 {nome:"Eleva��o Posterior",categoria:"DELTOIDE"},
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
		  alert("N�o foi poss�vel inserir a imagem."); 
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