// event listener for mouse over color change
let copy = document.getElementById('copy-link');
copy.addEventListener('mouseover', function() {
	copy.style.backgroundColor = 'rgb(178, 8, 8)';
	copy.style.cursor = 'pointer';
});
copy.addEventListener('mouseout', function() {
	copy.style.backgroundColor = 'rgb(208, 53, 38)';
	copy.style.cursor = 'default';
})

// event listener for copy to clipboard
copy.addEventListener('click', function() {
	let digest = document.getElementById('text-output');

	// gotta create temporary text area to select from
	let temp_input = document.createElement('textarea');
	temp_input.value = digest.textContent;

	// select the text
	document.body.appendChild(temp_input);
	temp_input.select();
	temp_input.setSelectionRange(0, 9999);	// apparently for mobile clients

	// execute copy command
	document.execCommand("copy");

	// remove the temporary input field
	document.body.removeChild(temp_input);
});

// defining additional reset functionality
let resetButton = document.getElementById('reset').addEventListener('click', function() {
	document.getElementById('text-output').textContent = '# your survey link will appear here #';
});
