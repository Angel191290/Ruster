app.factory('gallo',function(){
	var gallos=[{numero:'1',partido:'Juanito'},{numero:'2',partido:'Pablito'},{numero:3,partido:'Juanito'},{numero:4,partido:'Juanito'},{numero:5,partido:'Juanito'},{numero:6,partido:'Cesarini'}]
	var obj={
		getGallo:function(numero){
			if(numero!=''){
				return alasql('SELECT * FROM ? WHERE numero="'+numero+'"', [gallos]);
			}
		},
		getGallosPartido:function(partido){
			if(partido!=''){
				return alasql('SELECT * FROM ? WHERE partido="'+partido+'"', [gallos]);
			}
		},
		getAllPartido:function(){
				return alasql('SELECT Distinct partido FROM ? ', [gallos]);
		},
		sort:function(){

		}
	}
return obj;

});