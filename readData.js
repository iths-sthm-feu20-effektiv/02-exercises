/*
7 Skapa en fil med namnet "personData.json". Den ska innehålla ett JavaScript-objekt i JSON-format som representerar en användare. Nu ska du använda Nodes fs-modul (fs == file system) för att hämta och ändra datan.

8a Skapa en fil med namnet "readData.js". När man kör den ska skriptet läsa innehållet i "personData.json", omvandla det från JSON till ett JavaScript-objekt och skriva ut namn+email på konsolen. Använd fs.readFile för att läsa in hela filen på en gång.

8b* Använd fs.createReadStream i stället för fs.readFile. Vad är skillnaden mellan readFile och createReadStream?
*/
const fs = require('fs')

function readData() {
	fs.readFile('./personData.json', (err, data) => {
		if( err ) {
			console.log('Det gick inte att läsa filen: ' + err.message);
			return ;
		}

		// Filen inläst - finns i data
		let objekt = JSON.parse(data);
		console.log('Namn:   ' + objekt.name);
		console.log('E-post: ' + objekt.email);
	})
}

module.exports = readData;
