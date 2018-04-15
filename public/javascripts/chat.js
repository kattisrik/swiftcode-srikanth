var app = angular.module('chatApp', ['ngMaterial']);


app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('green');
});


app.controller('chatController', function ($scope, $sce) {

    $scope.message = [];
    $scope.trust = $sce.trustAsHtml;
    var exampleSocket = new WebSocket("wss://swiftcode-newsbot-srikanth.herokuapp.com/chatSocket");

    exampleSocket.onmessage = function (event) {
        var jsonData = JSON.parse(event.data);
        jsonData.time = new Date()
            .toLocaleTimeString();
        $scope.message.push(jsonData);
        $scope.$apply();
        console.log($scope.message);
    };


    $scope.sendMessage = function () {
        exampleSocket.send($scope.userMessage);
        $scope.userMessage = '';
    };


});