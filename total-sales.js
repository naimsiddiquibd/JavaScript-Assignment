// problem-2
function totalSales(shirtQuantity, pantsQuantity, shoesQuantity){
    // Check if the parameter is not a number
    if (typeof shirtQuantity != 'number' || typeof pantsQuantity != 'number' || typeof shoesQuantity != 'number'){
        return 'Error: Please put a number';
    }
    const perShirt = 100;
    const perPants = 200;
    const perShoes = 500;
    // sell calculation
    const shirtSellQuantity = shirtQuantity * perShirt;
    const pantsSellQuantity = pantsQuantity * perPants;
    const shoesSellQuantity = shoesQuantity * perShoes;

    const totalQuantity = shirtSellQuantity + pantsSellQuantity + shoesSellQuantity;
    return totalQuantity;
}

const buyer1 = totalSales(1,1,1);
console.log(buyer1);