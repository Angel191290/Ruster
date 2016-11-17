app.factory('gallo',function(){
	//var gallos=[{numero:'1',partido:'Juanito',peso:'110'},{numero:'2',partido:'Pablito',peso:'120'},{numero:3,partido:'Juanito',peso:'90'},{numero:4,partido:'Juanito',peso:'160'},{numero:5,partido:'Juanito',peso:'150'},{numero:6,partido:'Cesarini',peso:'200'}]
	var gallos=[]
	var obj={
		addGallo:function(partido,numero,peso){
			if (partido!=''&&numero!=''&&peso!=''&& partido && numero && peso) {
				var valida=alasql('SELECT * FROM ? WHERE numero="'+numero+'"', [gallos])
				if(valida.length==0){
					gallos.push({'numero':numero,'partido':partido,'peso':peso})
					return 0;
				}else{
					return 2;
				}
			} else{
				return 1;
			};
		},
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