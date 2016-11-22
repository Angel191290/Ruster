var app=angular.module('myApp',['ui.materialize','ngRoute']);
app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
    .when("/",
    {
        templateUrl: 'js/registro/registro.html',
        controller: "regCtrl"
    })
    .when("/pelea",
    {
        templateUrl: 'js/pelea/pelea.html',
        controller: "peleaCtrl"
    })
    .otherwise({
        redirectTo:"/"
    })

    //console.log(app);
}])