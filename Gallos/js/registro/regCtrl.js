app.controller('regCtrl',['$scope','gallo',function($scope,gallo){
	var s=$scope
	s.partidos=gallo.getAllPartido()
	s.getGallo=function(){
		s.gallo=gallo.getGallo(s.numero)
	}
	s.getGallosPartido=function(){
		s.gallos=gallo.getGallosPartido(s.partido)
	}
	s.addGallo=function(){
		s.validaRegistro=gallo.addGallo(s.partido,s.numero,s.peso)
		if(s.validaRegistro==0){
			s.gallos=gallo.getGallosPartido(s.partido);
			s.partidos=gallo.getAllPartido();
		}
	}
}])