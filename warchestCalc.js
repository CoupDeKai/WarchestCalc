// Warchest calculations



function CalcWarchest(infra) {

	if (infra == "") {

		return true;

	}

	var standard = 20;

	var infra = infra.replace(/\$|\,/g,'');

	var infra = parseFloat(infra);

	var cost = 0.04;

	if(infra >= 8000) { cost = 0.1750; }

	else if(infra >= 5000) { cost = 0.1725; }

	else if(infra >= 4000) { cost = 0.17; }

	else if(infra >= 3000) { cost = 0.15; }

	else if(infra >= 2000) { cost = 0.13; }

	else if(infra >= 1000) { cost = 0.11; }

	else if(infra >= 700) { cost = 0.09; }

	else if(infra >= 500) { cost = 0.08; }

	else if(infra >= 300) { cost = 0.07; }

	else if(infra >= 200) { cost = 0.06; }

	else if(infra >= 100) { cost = 0.05; }

	var days = standard * 3;

	if (infra >= 2000) { days = standard * 4; }

	if (infra >= 4000) { days = standard * 5; }

	if (infra >= 8000) { days = standard * 6; }

	var adjInfra = infra + 20;

	num = parseFloat(infra) * parseFloat(cost) * parseFloat(adjInfra) * parseInt(days);

	if(document.getElementById('nukes').checked == true) {

		num += 600000 * days;

	}

	if(document.getElementById('navy').checked == true) {

		//num += 700000 * days;

		num += (infra * 200) * days;

	}

	if(document.getElementById('wrc').checked == true) {

		num = num * 1.3;

	}

	//document.getElementById("debug").innerHTML = num + "<br />debug: " + cost + " / " + days + " / " + infra + " / " + adjInfra;

	if(isNaN(num)) {

		ns = "0";

	}

	sign = (num == (num = Math.abs(num)));

	num = Math.floor(num*100+0.50000000001);

	cents = num%100;

	num = Math.floor(num/100).toString();

	if(cents<10) {

		cents = "0" + cents;

	}

	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {

		num = num.substring(0,num.length-(4*i+3))+','+

		num.substring(num.length-(4*i+3));

	}

	document.getElementById("warchest").innerHTML = "<br />Your Warchest Should Be: <h3>" + (((sign)?'':'-') + '$' + num + '.' + cents) + "</h3>";

}