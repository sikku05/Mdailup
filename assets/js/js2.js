
let submitform = document.getElementById('contactsubmit');
let submitform2 = document.getElementById('contact-submit');

 


function isNumeric(str) {
	// parseFloat() converts the string to a floating point number.
	// If the conversion fails, it returns NaN.
	// isNaN() checks if a value is NaN.
	return !isNaN(parseFloat(str)) && isFinite(str);
}


/////////////////////////////////////////////////////////////////////////////////
function sumitquery(ClientName, ClientPhone, ClientEmail, ClientMsg) {

	var xhr = new XMLHttpRequest();
    var currentDate = new Date();
    // Configure the request
	var data = {
		param1: ClientName,
		param2: ClientEmail,
		param3: ClientPhone,
		param4: ClientMsg
	};
  
var xhr = new XMLHttpRequest();
xhr.open('POST', 'query.php', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
};
xhr.onerror = function () {
	console.error('Request failed');
};


xhr.send(JSON.stringify(data));

 
}
function showalert1(e) {
	let ClientName = document.getElementById('ClientName').value;
	let ClientEmail = document.getElementById('ClientEmail').value;
	let ClientPhone = document.getElementById('ClientPhone').value;
	let ClientMsg = document.getElementById('ClientMsg').value;

	 
	if((ClientName.length < 1 || ClientName == null || ClientName==undefined)||(ClientEmail.length < 1 || ClientEmail == null || ClientEmail==undefined)||(ClientPhone.length < 1 || ClientPhone == null || ClientPhone==undefined)||(ClientMsg.length < 1 || ClientMsg == null || ClientMsg==undefined)){
	    alert("all fields are required");
	    return;
	}

	sumitquery(ClientName, ClientPhone, ClientEmail, ClientMsg);
}

function showalert2(e) {
	let ClientName = document.getElementById('ClientName2').value;
	let ClientEmail = document.getElementById('ClientEmail2').value;
	let ClientPhone = document.getElementById('ClientPhone2').value;
	let ClientMsg = document.getElementById('ClientMsg2').value;

	 
	if((ClientName.length < 1 || ClientName == null || ClientName==undefined)||(ClientEmail.length < 1 || ClientEmail == null || ClientEmail==undefined)||(ClientPhone.length < 1 || ClientPhone == null || ClientPhone==undefined)||(ClientMsg.length < 1 || ClientMsg == null || ClientMsg==undefined)){
	    alert("all fields are required");
	    return;
	}

	sumitquery(ClientName, ClientPhone, ClientEmail, ClientMsg);
}

submitform.addEventListener('click', showalert1); 
submitform2.addEventListener('click', showalert2); 