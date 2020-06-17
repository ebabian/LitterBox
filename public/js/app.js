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
}])
