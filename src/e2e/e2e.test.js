import puppeteer from 'puppeteer';
import axios from 'axios';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

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
        const productListPage = new ProductListPage(page)
        expect(await productListPage.head()).toEqual('Storeroom Products')
    })

    test('Product List', async () => {
        await page.goto(`${appUrlBase}/`)
        const productListPage = new ProductListPage(page)

        const products = await productListPage.products()

        expect(products.length).toEqual(2)
        expect(products).toContain('Manzana')
        expect(products).toContain('Leche')
    })

    test('Go to the detail product page', async () => {
        await page.goto(`${appUrlBase}/`)
        const productListPage = new ProductListPage(page)
        await productListPage.detail()

        const productDetailPage = new ProductDetailPage(page)

        expect(await productDetailPage.name()).not.toBeNull()        
    })

    test('Show products which name contains keyword', async () => {
        await page.goto(`${appUrlBase}/`)
        const productListPage = new ProductListPage(page)
        const products = await productListPage.searchFor('Manz')                

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