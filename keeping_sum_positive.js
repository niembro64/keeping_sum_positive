function solution(A) {
    var num_swaps = 0;
    console.log("BEFORE");
    console.log(A);

    var sum = 0;
    var temp = 0;
    // run through array if sum neg push highest neg to end

    for (var i = 0; i < A.length; i++) {
        if (sum + A[i] < 0) {
            console.log(i);
            console.log(A);
            temp = A.splice(getSmallestIndex(A.slice(0, i+1 )), 1)[0];
            A.push(temp);
            i--;
            num_swaps++;
        } else {
            sum += A[i];
        }
    }
    console.log("AFTER");
    console.log(A);
    return num_swaps;
}

function getSmallestIndex(a) {
    var smallest_val = 0;
    var smallest_ind = 0;
    for (var i = 0; i < a.length; i++) {
        if (smallest_val > a[i]) {
            smallest_val = a[i];
            smallest_ind = i;
        }
    }

    return smallest_ind;
}

var a = [
    [-1, -2, 3, 4],
    [10, 22, -30, 33],
    [30, -40, 40],
    [-1, -1, -1, 1, 1, 1, 1],
];

for (var i = 0; i < a.length; i++) {
    console.log("_______________________________");
    // solution(a[i]);
    console.log(`numSwaps : ${solution(a[i])}`);
}
