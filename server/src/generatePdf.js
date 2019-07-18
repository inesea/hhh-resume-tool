const puppeteer = require('puppeteer')

async function generatePdf() {
  try {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

    await page.goto('http://localhost:1234/printable', {
      waitUntil: 'networkidle2'
    })

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      pageRanges: '1, 2'
    })

    await browser.close()

    return pdf
  } catch (error) {
    console.log({ error })
  }
  return null
}

module.exports = generatePdf
