class Beast {
constructor(Beastname, FoodDrink)
{
    this.Beastname = Beastname;
    this.hp = 50;
    this.hunger = 50;
    this.Morale = 50;
    this.FoodDrink = FoodDrink;
}
GiveFood()
{
    this.hp += 30;
    this.hunger += 40;
    console.log(`${this.Beastname} has had a nice big lunch and is overloaded with a fully belly, Maybe ${this.Beastname} needs a good sleep.`);
    return this;
}
GiveDrink()
{
    this.hp += 5;
    this.FoodDrink += 50;
    console.log(`${this.Beastname}'s thirst is now quenched and their hp is now ${this.hp}. ${this.Beastname}'s Morale level is ${this.Morale}`);
    return this;
}
TakeaSleep()
{
    this.hp += 50;
    this.hunger -= 20;
    console.log(`${this.Beastname} loves a good sleep, but this always makes them hungry !`);
    return this;
}
Stats()
{
    return console.table({
      Beastname: this.Beastname,
      hp: this.hp,
      hunger: this.hunger,
      Morale: this.Morale,
});}}
module.exports = { Beast };