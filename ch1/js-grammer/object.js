//var startTime = null;
//var displayArea = document.getElementById('display-area');
var game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: function start() {
        game.startTime = Date.now();
        document.body.onkeypress = game.stop;
    },
    stop: function stop() {
        var currentTime = Date.now();
        var seconds = (currentTime - game.startTime)/ 1000;
        if(seconds >= 9.5 && seconds <= 10.5){
            game.displayArea.innerText = seconds + '秒！！すごい！';
        }else{
            game.displayArea.innerText = seconds + '秒でした。残念。。。。'
        }
    }
};
if(confirm('OKを押して10秒だと思ったら何かのキーを押してください')){
    game.start();
}