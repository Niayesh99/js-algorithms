const numbers = [5,8,1,9,10,2,7];
function maxProductOfTwoNumbers(array){
    let a =0;
    let b =0;
    array.forEach(element => {
        if (element>=a) {
            b=a
            a=element;
        }
    });
    return [a,b,a*b];
}
console.log(maxProductOfTwoNumbers(numbers));
