const { Beast } = require("./Beast.js");
class Dragon extends Beast {
constructor(Beastname, FoodDrink, Morale, Scales) {
super(Beastname, FoodDrink, Morale, Scales);
this.Scales = Scales;}

feedDragon()
{
    console.log(`${this.Beastname} takes to the skies, In one fell swoop ${this.Beastname} grips, tosses and incinerates sheep one by one to feed ! His food now stands at ${this.FoodDrink} !`);
    this.FoodDrink += 50;
    this.Morale += 50;
    this.Scales -= 25;
    return this;
}
PlayAround()
{
    this.FoodDrink -= 20;
    this.Morale += 20;
    this.Scales -= 30;
    console.log(`${this.Beastname} splashes about in a dirty swamp, He exerted a lot of energy and got very dirty in the process. ${this.Beastname} Food is currently ${this.FoodDrink}, whilst his scales have become very dirty and now sit at ${this.Scales}, Time for a clean ${this.Beastname}`);
    return this;
}
CleanScales()
{
    this.Morale += 10;
    this.Scales += 50;
    console.log(`${this.Beastname} drops his wing as you start to clean it. His scales are now ${this.Scales} shiny !`);
    return this;
}}

module.exports = { Dragon };