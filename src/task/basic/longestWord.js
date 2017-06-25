export function longestWord(str) {
    let wordArrSort = str.toLowerCase().split(' ').sort(function sortByLength(a, b) {
        return b.length - a.length;
    });

    return wordArrSort[0].length;
}