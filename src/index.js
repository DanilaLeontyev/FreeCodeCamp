/**
 * Created by Donsh on 6/14/2017.
 */

export function palindrome(str) {
    const reg = [
        /[,]/g,
        /[ ]/g,
        /[.]/g,
        /[_]/g,
        /[/]/g,
        /-/g,
        /[(]/g,
        /[)]/g,
    ];

    let s = str;
    for(let i = 0; i <= reg.length - 1; i++ ){
        s = s.toLowerCase().replace( reg[i], '');
    }

    let arr = s.split(''); //разбиваем строк на массив по отсутсвию символа
    let reverseString = arr.reverse().join('');


    console.log(s);
    console.log(reverseString);
    return s === reverseString;
}
