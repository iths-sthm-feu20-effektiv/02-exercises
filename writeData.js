/*
9 Skapa en fil med namnet "writeData.js". När man kör den ska skriptet fråga användaren efter ett nytt namn och ny e-postadress. Det ska sparas i "personData.json". Använd process.stdin.
*/
const fs = require('fs')

function writeData() {
	// Varje gång det kommer data från användaren (user presses Enter)
	console.log('Skriv in namn och e-postadress:');

	let state = 'get name';
	let name, email;

	process.stdin.on('data', data => {
		let string = data.toString().trim();
		// console.log('Data från användaren: ' + string);

		if( state === 'get name' ) {
			name = string;
			state = 'get email'
		}
		else if( state === 'get email' ) {
			email = string;
			// nu har vi det vi behöver - dags att spara i personData.json
			writeToFile({ name, email });

			// console.log(name, email);
			state = 'done'
			process.stdin.pause()
		}
	})

	process.stdin.resume()

}

function writeToFile(object) {
	// { name, email }
	fs.writeFile('./personData.json', JSON.stringify(object), err => {
		if( err ) console.log('Kunde inte skriva till fil: ' + err.message);
	})
}

// Alternativ lösning: använda readline

module.exports = writeData;
