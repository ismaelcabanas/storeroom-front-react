import puppeteer from 'puppeteer';
import axios from 'axios';

const appUrlBase = 'http://localhost:3000'

const puppeteerConfig = {
    headless: true, // launch headful mode
    slowMo: 100, // slow down puppeteer script so that it's easier to follow visually
  };

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch(puppeteerConfig)
  page = await browser.newPage()
})

describe('Products', () => {
    beforeEach(() => {
        const storerooms = [
            {"id": "dc3143d7-7731-4532-a5e6-b35e7149350f", "name": "Mi despensa"}
        ]
        const products = [
            {"id": "6ee88e09-8b8a-44c4-b8b3-9ba8e759284d", "name": "Manzana", "storeroomId": "dc3143d7-7731-4532-a5e6-b35e7149350f"},
            {"id": "56259dc5-c7b4-4489-a9dd-7cf56c1134e6", "name": "Leche", "storeroomId": "dc3143d7-7731-4532-a5e6-b35e7149350f"}
        ]

        storerooms.map(item => axios.post(
            'http://localhost:8080/storerooms', 
            item, 
            {headers: {'Content-Type': 'application/json'}})
        )
        
        return products.map(item => 
            axios.post(
                'http://localhost:8080/products',
                item,
                {headers: {'Content-Type': 'application/json'}})    
        )
    })

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
        expect(products).toContain('Manzana')
        expect(products).toContain('Leche')
    })

    test('Go to the detail product page', async () => {
        await page.goto(`${appUrlBase}/`)
        await page.waitForSelector('a.view-detail')

        const links = await page.evaluate(() => {
            return [...document.querySelectorAll('a.view-detail')].map(el => el.getAttribute('href'))
        })

        await Promise.all([
            page.waitForNavigation({waitUntil: 'networkidle2'}),
            page.goto(`${appUrlBase}${links[0]}`)
        ])

        const url = await page.evaluate('location.href')
        expect(url).toEqual(`${appUrlBase}/products/6ee88e09-8b8a-44c4-b8b3-9ba8e759284d`)

        await page.waitForSelector('.name')
        const result = await page.evaluate(() => {
            return document.querySelector('.name').innerText
        })
        expect(result).toEqual('Manzana')
    })

    test('Show products which name contains keyword', async () => {
        await page.goto(`${appUrlBase}/`)

        await page.waitForSelector('input.search')
        page.type('input.search', 'Man')

        await page.waitForSelector('.product .title')
        const products = await page.evaluate(() => {
            return [...document.querySelectorAll('.product .title')].map(el => el.innerText)    
        })

        expect(products.length).toEqual(1)
        expect(products[0]).toEqual('Manzana')
    })

    afterEach(() => {
        return axios.delete('http://localhost:8080/storerooms/dc3143d7-7731-4532-a5e6-b35e7149350f')
            .catch(err => err)
    })
})

afterAll(() => {
  browser.close()
})