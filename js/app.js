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
    $scope.newNumber = function(){
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
    };
});

var generate = function() {
    return Math.floor(Math.random() * (10 - (-3)) + (-3));
}