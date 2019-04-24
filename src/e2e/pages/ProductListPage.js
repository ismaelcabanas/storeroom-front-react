import ProductDetailPage from './ProductDetailPage';

class ProductListPage {
    constructor(page) {
        this.page = page;
    }

    async head() {
        await this.page.waitForSelector('h1')
        const result = await this.page.evaluate(() => {
            return document.querySelector('h1').innerText
        })
        return result;
    }

    async products() {
        await this.page.waitForSelector('.products')
        const products = await this.page.evaluate(() => {
            return [...document.querySelectorAll('.product .title')].map(el => el.innerText)    
        })
        return products
    }

    async detail() {        
        await this.page.waitForSelector('.products')
        await this.page.click('a.view-detail')    
    }

    async searchFor(word) {
        await this.page.waitForSelector('input.search')
        this.page.type('input.search', word)

        await this.page.waitForSelector('.product .title')
        const products = await this.page.evaluate(() => {
            return [...document.querySelectorAll('.product .title')].map(el => el.innerText)    
        })

        return products
    }
}

export default ProductListPage;