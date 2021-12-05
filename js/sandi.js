function Myfunction(){
	var a = document.getElementsByTag("password1")
	var b = document.getElementsByTag("hide1")
	var c = document.getElementsByTag("hide2")

	if (a.type === 'password1') {
		a.type = "text";
		b.style.display = "block";
		c.style.display = "none";

	}else{
		a.type = "password1";
		b.style.display = "none";
		c.style.display = "block";
	}
}