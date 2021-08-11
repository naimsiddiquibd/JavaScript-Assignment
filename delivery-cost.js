// problem-3
function deliveryCost(tshirtQuantity){
    // Check if the parameter is not a number
    if (typeof tshirtQuantity != 'number'){
        return 'Error: Please put a number';
    }
    const deliveryCostFirst100 = 100;
    const deliveryCostSecond100 = 80;
    const deliveryCostRest = 50;
    if (tshirtQuantity <= 100){
        const totalCost1 = tshirtQuantity * deliveryCostFirst100;
        return totalCost1;
    }
    else if (tshirtQuantity <= 200){
        const first100cost = 100 * deliveryCostFirst100;
        const restTshirt = tshirtQuantity - 100;
        const second100Cost = restTshirt * deliveryCostSecond100;
        const totalCost2 = first100cost + second100Cost;
        return totalCost2;
    }
    else{
        const first100cost = 100 * deliveryCostFirst100;
        const second100Cost = 100 * deliveryCostSecond100;
        const veryRestTshirt = tshirtQuantity - 200;
        const restCost = veryRestTshirt * deliveryCostRest;
        const totalCost3 = first100cost + second100Cost + restCost;
        return totalCost3;
    }
}

const deliveryCharge = deliveryCost(220);
console.log(deliveryCharge)
