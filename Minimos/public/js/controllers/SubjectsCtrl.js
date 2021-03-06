/**
 * Created by Marta_ on 25/11/2016.
 */

angular.module('myApp').controller('SubjectsCtrl',['$scope','$http','$routeParams' ,function($scope, $http, $routeParams){
    $scope.NewSubject = {};
    $scope.SubjectError = {};
    console.log('SubjectsCtrl');
    //GET all subjects
    $http.get('/subjects')
        .success(function(data) {
            $scope.subjects = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.CreateSubject = function () {
        $http.post('/subjects', $scope.NewSubject)
            .success(function(data){
                $scope.NewSubject = {}; //clear the form
                $scope.subjects = data;
                $scope.SubjectError = {};
            })
            .error(function(data){
                console.log('Error:' + data);
                $scope.SubjectError = true;
            });
    };

    $scope.DeleteSubject = function (id) {
        $http.delete('/subjects/' + id)
            .success(function(data){
                $scope.subjects = data;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };
}]);
