export function confirmEnd(str, target) {
    //return(str.endsWith(target));

    return (str.substring(str.length - target.length, str.length) === target);
}