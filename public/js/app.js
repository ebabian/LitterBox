console.log("I work!")

const app = angular.module('LitterApp', [])

app.controller('CatController', ['$http',
function($http){
  this.username = '';
  this.entry= '';
  this.date = 0;
  this.likes = 0;


// get function


// create 'post'


//edit 'put'


//delete


//call get function on page load
}])
