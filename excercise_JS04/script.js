const age = 25;
if (age >= 18) {
    console.log("Welkom, je mag naar binnen.");
} else {
    console.log("Sorry, maar je bent nog te jong.");
}

let myAge = 24;
if (myAge >= 18 && myAge <= 25) {
    console.log("Je krijgt 50% korting!");
}

const isFemale = true;
if (isFemale) {
    console.log("Veel plezier bij Ladies Night!");
} else {
    console.log("Maar... de mannen mogen aan de bar blijven wachten!");
}


const driverStatus = "bob";
if (driverStatus === "bob") {
    console.log("Het is veilig om te rijden. Wel thuis!");
} else {
    console.log("ik bel graag een taxi voor je.");
}

const firstName = "Bram";
if (firstName == "Bram" || firstName == "Sarah") {
    console.log("Gefeliciteerd, je krijgt een  gratis biertje");
} else {
    console.log("Helaas, geen gratis drankje");
}

const totalAmount = 51
if (totalAmount >= 25 && totalAmount <=49) {
    console.log("Gefeliciteerd, je krijgt een gratis portie vegan snacks!");
}
if (totalAmount >= 50 && totalAmount <=99) {
    console.log("Gefeliciteerd, je krijgt een gratis portie nachos!");
}
if (totalAmount >= 100) {
    console.log("Gefeliciteerd, je krijgt een gratis fles champagne!");
} else {
    console.log("je hebt nog niet genoeg besteld voor een gratis kadootje.");
}