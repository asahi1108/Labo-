let btn = document.querySelector('.btn');

let form = document.forms[0];

btn.addEventListener('click',function(){
	form.passwordConfirm.setCustomValidity("");
	if(form.password.value != form.passwordConfirm.value){
		form.passwordConfirm.setCustomValidity("パスワードが一致していません");
	}
});