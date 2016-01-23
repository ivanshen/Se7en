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

var startTimer = function(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};