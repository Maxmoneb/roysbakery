function whatsapp(){
var product1 = document.getElementById("product1").value;
var product2 = document.getElementById("product2").value;
var fname = document.getElementById("fname").value;
var contact = document.getElementById("contact").value;
var loaction = document.getElementById("loaction").value;
var date = document.getElementById("date").value;

var url = "https://wa.me/9061009731?text="
+"*product1 :* "+product1+"%0a"
+"*product1 :* "+product2+"%0a"
+"*fname :* "+fname+"%0a"
+"*contact :* "+contact+"%0a"
+"*date:* "+date+"%0a"
+"*loaction :* "+loaction;

window.open(url,"_blank").focus();
}
