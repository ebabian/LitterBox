console.log("I work!")

const app = angular.module('LitterApp', [])


app.controller('CatController', ['$http',
function($http){
  this.username = '';
  this.entry= '';
  this.date = '';
  this.likes = 0;
  this.updatedEntry = '';
  this.header = 'Litter Box';
  const controller = this
  this.indexOfEditFormToShow = null;

// get function
this.getCat = function(){
  $http({
    method: 'GET',
    url: '/litterbox'
  }).then(
    function(response){
      for (const cat in response.data){
          response.data[cat].date = response.data[cat].date.replace(/\d\d:.*/, '')
      }
        controller.cat = response.data;
  },
    function(error){
    console.log(error);
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
      date: Date(),
    }
  }).then(
    function(response){
      controller.getCat()
    },
    function(error){
      console.log(error);
    })
    this.username = ''
    this.entry = ''
    this.date = ''
  }


//edit 'put'
    this.editCat = function(litter){
        $http(
            {
                method:'PUT',
                url: '/litterbox/' + litter._id,
                data: {
                    entry: this.updatedEntry
                }
            }
        ).then(
            function(response){

                controller.getCat()
            },
            function(error){
                console.log(error);
            }
        )
        this.indexOfEditFormToShow = null;
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
