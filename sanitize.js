const sanitizeHtml = require("sanitize-html")

console.log('Sanitize some dirty HTML');

const dirty = '<h1 class="top"> Heading </h1> Today is a <em id="sun">sunny</em> day.';

const clean = sanitizeHtml(dirty, { allowedTags: [], allowedAttributes: {} })

console.log(dirty);
console.log(clean);
