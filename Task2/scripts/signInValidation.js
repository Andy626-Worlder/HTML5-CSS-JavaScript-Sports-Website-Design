//Student Name: Chen Xinyuan 202191314
	// File Name: signValidation.js
	// Date: 2022/4/26
function Validater(){
// Teacher your code simply is the most effective way of showing date and correcting them, 
// But for not fully imitate you, I changed it into a more complicated and low effective way
// And the structure and logic is a shame to me to be called an engineer, Please do forgive me.

	// var name = document.getElementById("fullname").value;
	var name = document.myform.fullname.value;
	var email = document.myform.email.value;
	var tel = document.myform.tel.value;
	var country = document.myform.country.value;
	var gender = document.myform.gender.value;
	var date = document.myform.date.value;

	var regexpName = /^[A-Za-z]+$/;
	var regexpEmail = /^\S+@\S+\.\S+$/;
	var regexpTel = /^[1-9]\d{9}$/;
	

	if(name == "" ){
		alert("Please enter your name");
		document.myform.fullname.focus();
		return false;
	}else if(regexpName.test(name) === true){
		// alert("Please enter other information")
		// return false;

		//================================E-mail

		if(email == ""){
			alert("Please enter your E-mail");
			document.myform.email.focus();
			return false;
		}else if(regexpEmail.test(email) === true){
			//=============================Tel
			if(tel == ""){
				alert("Please enter your tel");
				document.myform.tel.focus();
				return false;
			}else if(regexpTel.test(tel) === true){
				// ========================country

				if(country == "none"){
					alert("Please select your country");
					document.myform.country.focus();
					return false;
				}else{
					//================= gender 

					if(gender == ""){
						alert("Please select your gender");
						document.myform.gender.focus();
						return false;
					}else{
						//===================== date 

						if(date == ""){
							alert("Please enter your Birthday");
							document.myform.date.focus();
							return false;
						}else{
							// alert("Please submit");
							// return false;
						}

					}
				}

			}else{
				alert("Please enter a valid mobile number");
				return false;
			}

		}else{
			alert("Please enter a valid E-mail");
			return false;
		}

	}else{
		alert("Please enter a valid name")
		return false;
	}

	var dataPreview = "You've entered the following information:\n" + 
	"Name: " + name + "\n" + 
	"E-mail: " + email + "\n" + 
	"Tel: " +tel + "\n" + 
	"Country: " +country + "\n" + 
	"Gender: " +gender + "\n" + 
	"Birthday: " +date
	alert(dataPreview);
}

