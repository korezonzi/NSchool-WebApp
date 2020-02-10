//「60 歳以上で、なおかつポイント会員に対して『シニア会員割引』がある映画館」
//判定の対象は65 歳のポイント会員としてみます。
var age= 65;
var hasMember = true;
if(age > 60 && hasMember === true) {
    document.write('シニア会員割引');
}else document.write('割引対象外');

