// jsではメールアドレスの一致とパスワードの確認の一致
// あとはページ遷移（clickしたときの）


let btn = document.querySelector('.btn');
btn.addEventListener('ckick',function(){
	// メールアドレスの取得
	var email = document.querySelector("#email").value;
	var emailConf = document.querySelector('#emailCheck').value;
	// パスワードの取得
	var password = document.querySelector("#password").value;
	var passwordConf = document.querySelector('#passwordCheck').value;

	if(email != emailConf){
		alert('メールアドレスが一致していません');
	}else if(password != passwordConf){
		alret("パスワードが一致しません");
	}else{
		location.href = "page3.index.html";
	}

})

// var email = document.querySelector("#email");
// console.log(email.value);

// 後でまたやる、機能していないからもう一回確認する
