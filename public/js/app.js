console.log("I work!")

const app = angular.module('LitterApp', [])

app.controller('CatController', ['$http',
function($http){
  this.username = '';
  this.entry= '';
  this.date = 0;
  this.likes = 0;


// get function
this.getCat = function(){
  $http({
    method: 'GET',
    url: '/litterbox'
  }).then(function(response){
    this.cat = response.data;
  })
}

// create 'post'
this.createCat = function(){
  $http({
    method:'POST',
    url: '/litterbox',
    data: {
      username: this.username,
      entry: this.entry,
      date: this.date,
      likes: this.likes
    }
  }).then(
    function(response){
      this.getCat()
    },
    function(error){
      console.log(error);
    }
  })
}

//edit 'put'


//delete


//call get function on page load
this.getCat()
}])
