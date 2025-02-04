exports.InventoryPage = class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryItems = '.inventory_item';
        this.itemPrice = '.inventory_item_price';
        this.addToCartButton = '.btn_inventory';
    }

    async getHighestPriceItem() {
        const items = await this.page.$$(this.inventoryItems);
        let highestPrice = 0;
        let highestItemButton = null;

        for (const item of items) {
            const priceElement = await item.$(this.itemPrice);
            const priceText = await priceElement.innerText();
            const price = parseFloat(priceText.replace('$', ''));

            if (price > highestPrice) {
                highestPrice = price;
                highestItemButton = await item.$(this.addToCartButton);
            }
        }

        const highestItemTitle = await highestItemButton.evaluate(node => node.closest('.inventory_item').querySelector('.inventory_item_name').innerText);
        console.log(`Highest Price Item: ${highestItemTitle}, Price: $${highestPrice}`);
        return highestItemButton;

    }

    async addHighestPriceItemToCart() {
        const highestItemButton = await this.getHighestPriceItem();
        if (highestItemButton) {
            await highestItemButton.click();
        }
    }

}
