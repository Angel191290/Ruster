app.factory('pelea',['gallo','$filter',function(gallo,$filter){
	var gallos=gallo.getAll()
	var peleas=[]
	var obj={
		getGallos:function(){
			return gallos
		},
		generaPeleas:function(){
      		var gSorted= $filter('orderBy')(gallos, 'peso');
      		var it=((gSorted.length%2)==0)?gSorted.length:gSorted.length-1;
      		
      		peleas=new JSON.constructor();
      		var p=0;
      		for(var i=0;i<it;i=i+2){
      			peleas[p]=new JSON.constructor();
      			peleas[p].ganador=-1;
      			peleas[p][0]=new JSON.constructor();
      			peleas[p][0]=gSorted[i];
      			peleas[p][1]=new JSON.constructor();
      			peleas[p][1]=gSorted[i+1];
      			p++;
      		}

      		return peleas;

		}
	}
return obj;

}]);