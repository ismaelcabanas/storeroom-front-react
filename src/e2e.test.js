import puppeteer from 'puppeteer'

const appUrlBase = 'http://localhost:3000'

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({})
  page = await browser.newPage()
})

describe('Products', () => {
  test('Heading', async () => {
    await page.goto(`${appUrlBase}/`)
    await page.waitForSelector('h1')
    const result = await page.evaluate(() => {
      return document.querySelector('h1').innerText
    })
    
    expect(result).toEqual('Storeroom Products')
  })

  test('Product List', async () => {
    await page.goto(`${appUrlBase}/`)
    await page.waitForSelector('.products')
    const products = await page.evaluate(() => {
        return [...document.querySelectorAll('.product .title')].map(el => el.innerText)    
    })

    expect(products.length).toEqual(2)
    expect(products[0]).toEqual('Manzana')
    expect(products[1]).toEqual('Leche')
  })
})

afterAll(() => {
  browser.close()
})