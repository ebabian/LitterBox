console.log("I work!")

const app = angular.module('LitterApp', [])

app.controller('CatController', ['$http',
function($http){
  this.username = '';
  this.entry= '';
  this.date = 0;
  this.likes = 0;
  const controller = this

// get function
this.getCat = function(){
  $http({
    method: 'GET',
    url: '/litterbox'
  }).then(
    function(response){
      controller.cat = response.data;
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
      controller.getCat()
    },
    function(error){
      console.log(error);
    })
  }


//edit 'put'
    this.editCat = function(litter){
        $http(
            {
                method:'PUT',
                url: '/litterbox/' + litter._id,
                data: {
                    entry: this.updatedEntry,
                }
            }
        ).then(
            () =>{
                this.getCat();
            },
            function(error){
                console.log(error);
            }
        )
    }

//delete
    this.deleteCat = function(litter){
        $http(
            {
                method:'DELETE',
                url: '/litterbox/' + litter._id
            }
        ).then(
            (response) =>{
                this.getCat();
            },
            function(error){
                console.log(error);
            }
        )
    }

//call get function on page load
this.getCat()
}])
