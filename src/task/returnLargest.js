export function returnLargest (arr) {
    let arrOfLargest = [];
    arr.forEach(function(element) {
        element.sort((a,b) => b - a);
        arrOfLargest.push(element[0]);
    });
    return arrOfLargest;
}