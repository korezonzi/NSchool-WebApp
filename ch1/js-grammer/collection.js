document.write('-----------------------------------');
var classes= ['A組', 'B組', 'C組', 'D組'];
for(var grade = 1; grade < 4; grade++){
    for(var i = 0; i < classes.length; i++) {
        //hoge年hogeくみを作る
        document.write('<p> ' + grade + '年' + classes[i] + '</p>');
    }
}

var chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for(var i = 0; i < chars.length; i++){
    for(var j=1; j < chars.length -1; j++){
        document.write('<p>' + chars[i]  + chars[j] + '</p>' );
    }
}
//
// for (var i = 0; i < chars.length ; i++) {
//   for (var j = 0; j < chars.length ; j++) {
//     document.write('<p>' + chars[i] + chars[j] + '</p>');
//   }
// }
document.write('------------------');
document.write(name[0]);
document.write(name[1]);
document.write(name[2]);