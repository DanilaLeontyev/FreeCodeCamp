export function chunkArrayInGroups(arr, size) {
    let modifyerArr = [];
    let lengthGroup = 0;

    for (let i = 0; i < arr.length / size; i++) {
        modifyerArr.push(arr.slice(lengthGroup, lengthGroup += size));
    }
    return modifyerArr;
}