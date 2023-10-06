import {createPDF} from "./json-template.js";
import express from 'express'
import path from 'path';

const app = express()
const port = 3000

app.use(express.static('pdf'))

const data = {
    title: "This is a Ecsell test report",
    date: "03/10/2023",
    info1: "Ecsell-test-report",
    info2: 28,
    info3: "12/07/1990",
    info4: "Computer Science",
    obs: "Some additional info",
    chartData:  JSON.stringify({
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'amount of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: false,
        }
    })
}

app.get('/generate-pdf', async (req, res) => {
    const pdfName = `${data.info1}.pdf`
    const pdfPath = path.join('pdf', pdfName);
    await createPDF(data, pdfPath)

    res.redirect(pdfName);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


