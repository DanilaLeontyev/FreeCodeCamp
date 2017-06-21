export function truncateString(str, num) {
    let truncateString = '';

    if (str.length > num && num > 3) {
        truncateString = str.slice(0, num - 3) + '...';
    } else {
        if (str.length > num && num < 3) {
            truncateString = str.slice(0, num) + '...';
        }
        else truncateString = str;
    }
    return truncateString;
}
