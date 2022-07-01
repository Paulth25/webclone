const { Beast } = require("./beast.js");

class Griffin extends Beast {
constructor(Beastname, FoodDrink, Morale)
{
    super(Beastname, FoodDrink, Morale, Hygiene);
    this.Hygiene = Hygiene;
}
feedGriffin()
{
    console.log(`You fed some raw meat to ${this.Beastname}, He devours it in record speed. ${this.Beastname} is extremely satisfied with his food now at ${this.FoodDrink} ! Also boosting his Morale to ${this.Morale}`);
    this.FoodDrink += 50;
    this.Morale += 50;
    return this;
}
DiveBomb()
{
    this.FoodDrink == 0;
    this.Morale += 30;
    console.log(`${this.Beastname} drops from the sky straight down at immense speeds, Any flying pet loves the winf in its face. ${this.Beastname} now has ${this.Morale}`);
    return this;
}
WashFeathers()
{
    this.Hygiene += 100;
    this.Morale += 20;
    console.log(`${this.Beastname}'s feathers, Tail and Mane have been cleaned. Hygiene is now ${this.Hygiene} !`);
    return this;
}}

module.exports = { Griffin };
