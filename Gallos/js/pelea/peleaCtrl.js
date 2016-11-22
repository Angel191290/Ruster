
app.controller('peleaCtrl',['$scope','pelea',function($scope,pelea){
	var s=$scope
	s.gallos=pelea.getGallos()

    s.peleas=pelea.generaPeleas();
    console.log(s.peleas)
}])