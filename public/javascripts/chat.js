var app = angular.module('chatApp', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('green');
});
app.controller('chatController', function ($scope) {
    $scope.message = [
        {
            'sender': 'USER',
            'text': 'Hello'
},
        {
            'sender': 'BOT',
            'text': 'Hi what can i do for you?'
},
        {
            'sender': 'USER',
            'text': 'what is the time?'
},
        {
            'sender': 'BOT',
            'text': '5:30 pm'
}
    ]
});