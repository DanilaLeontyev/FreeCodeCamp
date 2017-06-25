
function rot13(str) { // LBH QVQ VG!
  var barChar = [32, 33, 63, 46];
  
  // 65-90 номера заглавных букв
  // мы вычитаем для преобразования обратно
  // нельзя опускаться ниже 65
  
  // 69 -> 82
  // 69 - 65 = 4
  //90 - (13-4)
  var char = str.split('');
  
  char = char.map(function(value) {
   return value.charCodeAt(0);
  });
  
  char = char.map(function(value) {
    for (var i = 0; i < barChar.length; i++) {
      if (value === barChar[i]) {
        return value;
        
      } else if (value < 78 && value >= 65) {
        var co = value - 65;
        return 91 - (13 - co);
        
      } else if (value <= 90 && value >= 78) { 
        return value - 13;
      }
    }
  });
  
  char = char.map(function(value) {
    var convertChar = String.fromCharCode(value);
    return convertChar;
  });
  
  var decrStr = ''
  for(var i = 0 ; i < char.length; i++) {
    decrStr += char[i];
  }

  console.log(decrStr);
  return decrStr;
}
