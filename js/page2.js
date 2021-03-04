
var form = document.forms[0];
console.log(form.passwordConfirm);
console.log(form);

let submit = document.querySelector('.btn');
submit.addEventListener('click',function(){
	// パスワードの一致確認
	form.passwordConfirm.setCustomValidity("");
	if(form.password.value != form.passwordConfirm.value){
		form.passwordConfirm.setCustomValidity("パスワードが一致してません");
	}
	// メールアドレスの一致確認
	var email = document.getElementById('email').value;
	var emailConfirm = document.getElementById('emailConfirm').value;
	form.emailConfirm.setCustomValidity("");
	if(email != emailConfirm){
		form.emailConfirm.setCustomValidity("メールアドレスが違います");
	}

});

var email = document.getElementById('email').value;
console.log(email);


