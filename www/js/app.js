// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','uiGmapgoogle-maps']);

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //key: 'AIzaSyAJfrHouGMDIyuvi8KZkkPV_jycvuZd0JA',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization',
    });
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.controller('PhoneListCtrl', ['$scope','uiGmapGoogleMapApi',
  function($scope,uiGmapGoogleMapApi) {
	uiGmapGoogleMapApi.then(function(maps) {
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	});
 }]);
// app.config(function(uiGmapGoogleMapApiProvider) {
    // uiGmapGoogleMapApiProvider.configure({
        // //key: 'AIzaSyAJfrHouGMDIyuvi8KZkkPV_jycvuZd0JA',
        // v: '3.20', //defaults to latest 3.X anyhow
        // libraries: 'weather,geometry,visualization',
    // });
// });


