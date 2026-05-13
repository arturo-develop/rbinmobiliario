const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
pdfExtract.extract('Promt Landing Page.pdf', {} /* options */, (err, data) => {
  if (err) return console.error(err);
  const text = data.pages.map(page => page.content.map(item => item.str).join(' ')).join('\n');
  console.log(text);
});
