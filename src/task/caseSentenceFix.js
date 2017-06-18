export function caseSentenceFix(str) {
    let arr = str.toLowerCase().split(' ');
    let mofiyerString = '';

    arr.forEach(function (element) {
        let firstSymbol = element.charAt(0).toUpperCase();
        element = firstSymbol + element.slice(1, element.length);
        mofiyerString += element + ' ';
    });

    return mofiyerString.trimRight();
}