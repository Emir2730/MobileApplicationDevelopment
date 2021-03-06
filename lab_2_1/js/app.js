var signs = [
	'C','(',')','%',
	'+','1','2','3',
	'-','4','5','6',
	'/','7','8','9',
	'*','.','0','='
];

var calc = document.getElementsByClassName('calc-wrap')[0];
var content = document.createElement('div');
content.className = 'context';
calc.appendChild(content);


signs.forEach(function (sign) {
	var signElement = document.createElement('div');
	signElement.className = 'functionality';
	signElement.innerHTML = sign;
	calc.appendChild(signElement);
});

document.querySelectorAll('.functionality').forEach(function (button) {
	button.addEventListener('click', onButtonClick);
});

function onButtonClick(e) {
	if (e.target.innerHTML === 'C') {
		content.innerHTML = '';
	}else if (e.target.innerHTML === '='){
		try{
		content.innerHTML = eval(content.innerHTML);
		}
		catch{content.innerHTML = 'invalid input';
		}
	}else if (e.innerHTML === '0'){
		content.innerHTML = e.target.innerHTML;
	}else {
		content.innerHTML += e.target.innerHTML;
	}
};

