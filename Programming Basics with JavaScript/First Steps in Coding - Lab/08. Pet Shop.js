function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let dogFoodPrice = dogFood * 2.50;
    let catFoodPrice = catFood * 4;

    let totalPrice = dogFoodPrice + catFoodPrice;

    console.log(`${totalPrice} lv.`);
}