export function bouncer(arr) {
  arr = arr.filter(function(item) {
    return item !== undefined && item !== false && item == item && item !== 0 && item !== '' && item !== null;
  });
  return arr;
}