import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import puppeteer from "puppeteer";

export async function createPDF(data, pdfPath){
    const templateHtml = fs.readFileSync(path.join(process.cwd(), 'template.hbs'), 'utf8');
    const template = handlebars.compile(templateHtml, {
        noEscape: false
    });
    const html = template(data);

    const options = {
        format: 'A4',
        headerTemplate: "<p></p>",
        footerTemplate: "<p></p>",
        displayHeaderFooter: false,
        margin: {
            top: "10px",
            bottom: "30px"
        },
        printBackground: true,
        path: pdfPath
    }

    const browser = await puppeteer.launch({
        headless: "new",
    });

    const page = await browser.newPage();

    await page.setContent(html);

    const buffer = await page.pdf(options);
    await browser.close();
    return buffer;
}
