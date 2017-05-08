var app = angular.module("myApp", []);
app.controller('valCtrl', function($scope) {
$scope.LoginCheck=function()
    {
 var lname=$scope.id.lname;
var pwd=$scope.id.pwd;
if(lname=="admin"  && pwd=="Admin" )
$scope.msg="Successful Login";
else
$scope.msg="Unsuccessful Login";
}
});
