var app=angular.module('myApp',['ui.materialize','ngRoute']);
app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
    .when("/",
    {
        templateUrl: 'views/registro.html',
        controller: "regCtrl"
    })
    .otherwise({
        redirectTo:"/"
    })

    //console.log(app);
}])