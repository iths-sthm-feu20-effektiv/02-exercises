// Importera npm-paketet vi ska använda
const sanitizeHtml = require("sanitize-html")

console.log('Sanitize some dirty HTML');

// Text som innehåller HTML
const dirty = '<h1 class="top"> Heading </h1> Today is a <em id="sun">sunny</em> day.';

// Använd npm-paketet för att rensa bort HTML från strängen
const clean = sanitizeHtml(dirty, { allowedTags: [], allowedAttributes: {} })

// Skriv ut resultatet: före och efter
console.log(dirty);
console.log(clean);
