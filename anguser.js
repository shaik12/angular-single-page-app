var app = angular.module("myApp", []);
app.controller('formCtrl', function($scope) {
$scope.userValidate=function()
{
if($scope.userFrom.$valid)
{ alert('successfull login');}
else
{alert('unsuccessfull login');}
};
    
});

