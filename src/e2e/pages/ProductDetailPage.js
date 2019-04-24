class ProductDetailPage {
    constructor(page) {
        this.page = page
    }

    async name() {
        await this.page.waitForSelector('.detail')
        const name = await this.page.evaluate(() => {
            return document.querySelector('div[class=name]').textContent;
        })
        return name
    }
}
export default ProductDetailPage;