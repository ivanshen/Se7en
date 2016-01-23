var app = angular.module("myGame", []);
app.controller ('TableController', function ($scope){

    
     $scope.testArr = [{
        'first': [{
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        }, 
        {
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        }]
    }, {
        'second': [{
            'value': generate(),
            'rolle': generate()
        }, {
            'value': generate(),
            'rolle': generate()
        }, {
            'value': generate(),
            'rolle': generate()
        },
                  {
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        }]
    }, {
        'third': [{
            'value': generate(),
            'rolle': generate()
        }, {
            'value': generate(),
            'rolle': generate()
        }, {
            'value': generate(),
            'rolle': generate()
        },
                  {
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        },
        {
            'value': generate(),
            'rolle': generate()
        }]
    }];

    $scope.firstValue = 0;
    $scope.secondClick = false;
    $scope.clickElement = function(t1, outerindex, innerindex){
        
        if($scope.secondClick){
            $scope.firstValue += t1;
            $scope.secondClick = false;
            console.log($scope.firstValue);
            
        }else{
            $scope.firstValue = t1;
            $scope.secondClick = true;
            console.log($scope.firstValue);
            console.log("index: " + outerindex + innerindex);
        }
        

    }


});

var generate = function() {
    return Math.floor(Math.random() * (10 - (-3)) + (-3));
}
