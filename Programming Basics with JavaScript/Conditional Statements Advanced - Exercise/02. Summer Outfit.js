function summerOutfits(input) {
    let celsius = Number(input.shift());
    let timeOfTheDay = input.shift();

    let outfit;
    let shoes;

    if (celsius>=10 && celsius<=18) {
        if (timeOfTheDay=="Morning") {
            outfit="Sweatshirt";
            shoes="Sneakers";
        }else if (timeOfTheDay=="Afternoon" || timeOfTheDay=="Evening") {
            outfit="Shirt";
            shoes="Moccasins";
        }
    }else if (celsius>18&&celsius<=24) {
        if (timeOfTheDay=="Morning"||timeOfTheDay=="Evening") {
            outfit="Shirt";
            shoes="Moccasins";
        }else if (timeOfTheDay=="Afternoon") {
            outfit="T-Shirt";
            shoes="Sandals";
        }
    }else if (celsius>24) {
        if (timeOfTheDay=="Morning") {
            outfit="T-Shirt";
            shoes="Sandals";
        }else if (timeOfTheDay=="Afternoon") {
            outfit="Swim Suit";
            shoes="Barefoot"
        }else if (timeOfTheDay=="Evening") {
            outfit="Shirt";
            shoes="Moccasins";
        }
    }

    console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
}