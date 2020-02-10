var myBirthTime = new Date(1995, 7, 24, 12, 30);
function updateParagraph() {
    var now = new Date();
    var secondes = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText = '生まれてから' + secondes + '秒経過';
}
setInterval(updateParagraph, 50);

function calculateSize(n) {
    return n*n*3.14
}
document.write(calculateSize(20));
document.write('<p> 半径5cmの円の面積は'+ calculateSize(5)+'です</p>');