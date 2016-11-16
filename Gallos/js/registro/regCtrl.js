app.controller('regCtrl',['$scope','gallo',function($scope,gallo){
	var s=$scope
	s.partidos=gallo.getAllPartido()
	s.getGallo=function(){
		s.gallo=gallo.getGallo(s.numero)
	}
	s.getGallosPartido=function(){
		s.gallos=gallo.getGallosPartido(s.partido)
	}
}])