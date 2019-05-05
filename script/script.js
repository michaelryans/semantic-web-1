var total=0,tax=0,service=0,taxPercentage=0;

function clear() {
	$('#textarea-hasil').val('')
}

function calculate(total, tax, service) {
	var total = Number(document.getElementById("total").value)
	var tax = Number(document.getElementById("tax").value)
	var service = Number(document.getElementById("service").value)
	var people= Number(document.getElementById("people").value)
	var exclude = Number(document.getElementById('exclude').value)
	var output = ''


	if (total == 0 || isNaN(total)) {
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Please fill out Total, before Tax and Service!',
		})
	} else if (isNaN(tax)) {
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Please fill out Tax with number!',
		})
	} else if (isNaN(service)) {
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Please fill out Service with number!',
		})
	} else if (people == '') {
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Please fill out the number of People!',
		})
	} else if (isNaN(exclude)) {
		wal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Please fill out the amount with number!',
		})
	} else {
		taxPercentage = (tax/total)
		servicePercentage = service/total
		var perPeople = Math.ceil((total+tax+service-exclude)/people/100)*100
		

		perPeople = perPeople.toFixed(0);

		perPeopleString = perPeople.toString();

		for(var i = perPeopleString.length-1; i >= 0; i--) {
			if(i%3 === perPeopleString.length%3) {
			  output = '.' + perPeopleString[i] + output;
			} else {
			  output = perPeopleString[i] + output;
			}
		}

		if (output[0] === '.') {
		output = output.slice(1)
		}

		// document.getElementById('answerUp').innerHTML = '<h2>RESULT HERE</h2>'	
		// document.getElementById('percentage').innerHTML = 'Tax Percentage: ' + (taxPercentage*100).toFixed(1) + '%<br>' + 'Service Percentage: ' + (servicePercentage*100).toFixed(1) + '%<br/>'
		// document.getElementById('pay').innerHTML = 'Each people pays :<u>Rp  ' +  output  + ',-</u><p>-------------</p>';
		// document.getElementById("answer").style.padding = "4px";
		// document.getElementById("main2").style.paddingTop = "1px";
		//document.getElementById("answer").style.padding = "4px";

		let hasil = $('#textarea-hasil').val()

		$('#textarea-hasil').val(hasil + `

		==== Calculation Result ====

		Total before tax   : ${total}
		-----------------------------------------------
		Tax                : ${tax}
		Service            : ${service}
		-----------------------------------------------
		Tax Percentage     : ${(taxPercentage*100).toFixed(1)} %
		Service percentage : ${(servicePercentage*100).toFixed(1)} %
		Each people pays   : Rp. ${output},-

		`)
		// location.reload()
	}
}

$(document).ready(function(){
	$('#total').focus()
})