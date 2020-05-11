var arr= ([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largest(arr) {
    
    var firstArr =[];
    var max = 0;

    for(var i=0; i<arr.length; i++){
       
        max = arr[i][0]

        for(var j = 0; j<arr[i].length; j++){
            
            if (arr[i][j] > max){

                max =arr[i][j];
            }
        }
           firstArr.push(max);
        }
        return firstArr;
    }
    console.log(largest(arr));