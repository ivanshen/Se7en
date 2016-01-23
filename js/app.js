var app = angular.module("myGame", []);
app.controller ('TableController', function ($scope){ 
    

    $scope.firstValue = null;
    $scope.secondClick = false;
    $scope.x1 = 0;
    $scope.y1 = 0;
    $scope.points = 0;
    $scope.timeleft = true;
    var startTimer = function(duration, display) {
        var timer = duration, minutes, seconds;
        var myTimer = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;
            if (timer-- <= 0) {
                clearInterval(myTimer);
                $scope.timeleft = false;
            }
    }, 1000);
}
$scope.start = function () {
    $scope.testArr = [
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()]
     ];
    $scope.newNumber = function(){
        $scope.testArr = [
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()],
         [generate(), generate(),generate(),generate(),generate(),generate()]
     ];
    };
    var oneMinute = 60,
    display = document.querySelector('#time');
    startTimer(oneMinute, display);
}
        
    $scope.clickElement = function(t1, $event, x, y){
        if ($scope.timeleft && $scope.firstValue == null){
            $scope.firstValue = t1;
            $scope.x1 = x;
            $scope.y1 = y;
            t1.isSelected = true;
        }
        else if($scope.timeleft && $scope.firstValue != null){
                $scope.secondValue = t1;
                $scope.firstValue.isSelected = false;
                $scope.secondValue.isSelected =  false;
                if($scope.firstValue.value + $scope.secondValue.value == 7){
                    $scope.testArr[$scope.x1][$scope.y1] = generate();
                    $scope.testArr[x][y] = generate();
                    $scope.points++;
                    $scope.firstValue = null;
                    t1.isSelected = true;
                }
                $scope.firstValue = null;
            
        }else{
            console.log("Something went wrong....")
        };
    }
    $scope.getClass = function(isSelected){
        if (isSelected){
            return "selected";
        }
        return "notSelected";
    }
});

var generate = function() {
    return {value: Math.floor(Math.random() * (10 - (-3)) + (-3)), isSelected: false}
}
