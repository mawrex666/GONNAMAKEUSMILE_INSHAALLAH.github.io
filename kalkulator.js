console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?[JPN/KOR/JAWA]");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "KOR"){
	alert("SarangHae" + "" + user.name.first + "" + user.name.last );
} else if (user.language === "JPN") {
	alert("Watashi wa, anata o aishiteimasu"+ "" + user.name.first + "" + user.name.last );
}
 else {
	alert("Aku tresno karo koe" + "" + user.name.first + "" + user.name.last );
}





