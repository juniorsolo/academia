function doCreateAnexosModel(lse, $cordovaCamera, microCreditoStorage) {
  var model = {}
//ripple emulate******
  model.model = new Array();

  model.loadTiposAnexo = function () {
    microCreditoStorage.getTiposAnexo().then(function (tiposAnexo) {
      model.tiposAnexo = tiposAnexo;
    })
  }

  if (lse.anexos) {
    for (var i = 0; i < lse.anexos.length; i++) {
      model.model.push(lse.anexos[i]);
    }
  }
  ;

  model.addPicture = function (mimeType, data, tipoAnexo) {
    var img = new Image();
    img.onload = function () {
      var thumbBase64 = model.genThumbnail(img, 100, 100);
      model.model.push({
        data: {
          mimeType: mimeType,
          data: data,
          thumb: thumbBase64
        },
        tipoAnexo: tipoAnexo
      });
    };

    img.src = "data:image/jpeg;base64," + data;
  };

  model.genThumbnail = function (img, newWidth, newHeight) {
    var factor = 1;
    if (img.width > newWidth) {
      factor = newWidth / img.width;
    }
    if (img.height > newHeight) {
      var hFactor = newHeight / img.height;
      var factor = Math.min(factor, hFactor);
    }
    if (factor >= 1) {
      return img.src.split(',')[1];
    } else {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.beginPath();
      ctx.rect(0, 0, newWidth, newHeight);
      ctx.fillStyle = "black";
      ctx.fill();

      ctx.scale(factor, factor);
      var posX = (100 - img.width * factor) / 2;
      var posY = (100 - img.height * factor) / 2;
      ctx.drawImage(img, posX / factor, posY / factor);

      return canvas.toDataURL("image/jpeg", 0.5).split(',')[1];
    }
  };

  model.doTakePicture = function (sourceType, tipoAnexo) {
    model.doDoTakePicture(sourceType, tipoAnexo);
  };

  model.doDoTakePicture = function (sourceType, tipoAnexo) {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 640,
      targetHeight: 480,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };
    $cordovaCamera.getPicture(options).then(function (imageData) {
      model.addPicture("image/jpeg", imageData, tipoAnexo);
    }, function (error) {
      return null;
    });
  };


  model.takePicture = function (tipoAnexo) {
    document.addEventListener("deviceready", function () {
      model.doTakePicture(Camera.PictureSourceType.CAMERA, tipoAnexo);
    }, false);
  };

  model.chooseFromPhotoLibrary = function (tipoAnexo) {
    document.addEventListener("deviceready", function () {
      model.doTakePicture(Camera.PictureSourceType.PHOTOLIBRARY, tipoAnexo);
    }, false);
  }

  model.chooseFromPhotoAlbum = function (tipoAnexo) {
    document.addEventListener("deviceready", function () {
      model.doTakePicture(Camera.PictureSourceType.SAVEDPHOTOALBUM, tipoAnexo);
    }, false);
  }
  
  model.obrigatoriedadeDescription = function(tipoAnexo) {
    if (tipoAnexo.obrigatorio) {
      for (var i = 0 ; i < model.model.length; i ++) {
        if (model.model[i].tipoAnexo == tipoAnexo.codigo) {
          return "";
        }
      }
      return " - Obrigatório";
    }
    return "";     
  }
  
  model.valido = function() {
    if (model.tiposAnexo) {
      for (var i1 = 0; i1 < model.tiposAnexo.length; i1++) {
        var retorno = true;
        var tipoAnexo = model.tiposAnexo[i1];
        if (tipoAnexo.obrigatorio) {
          for (var i = 0 ; i < model.model.length; i ++) {
            if (model.model[i].tipoAnexo == tipoAnexo.codigo) {
              retorno =  false;
            }
          }
          if (retorno) {
            return true;
          }
        }
      }
    }
    return false;     
  }

  return model;
}