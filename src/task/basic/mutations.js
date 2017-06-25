export function mutation(arr) {
  //arr[0].indexOf(arr[1]);
  charArr = arr[1].toLowerCase().split('');
  var result = true;
  for (var i = 0; i < charArr.length; i++) {
    if (arr[0].toLowerCase().indexOf(charArr[i]) == -1) {
      result = false;
      break;
    }
  }
  return result;
}