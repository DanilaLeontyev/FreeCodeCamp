export function repeatStringNumTimes(str, num) {
    let count = num;
    let string = '';
    for(count; count > 0; count--){
        string += str;
    }
    return string;
}
