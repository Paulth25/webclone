class Beast {
constructor(beastname, FoodDrink, Morale);
{
    this.beastname = beastname
    this.hp = 100
    this.FoodDrink = 100
    this.Morale = 100
}
Feed()
{
        this.hp += 10
        this.FoodDrink += 20
        this.Morale += 10 
        console.log(`${this.beastname} enjoyed the meat fed to them, ${this.beastname} Food is now ${this.FoodDrink}. Hp incresed to ${this.hp} and Morale to ${this.Morale}`)
        return this
}
Drink()
{
        this.hp += 10
        this.FoodDrink += 50
        console.log(`${this.beastname} drank gallon after gallon, ${this.beastname} Water is now at ${this.FoodDrink} and Health has increased to ${this.hp}`)
        return this
}
TakeSleep()
{
        this.hp += 50
        this.FoodDrink -= 50
        this.Morale += 20
        console.log(`${this.beastname} has been sleeping and hybernating for months, During this period his Hp has dropped too ${this.hp}. Also sleeping creates hunger, Hunger is now at ${this.FoodDrink}, Although a sleep always raises morale which is now ${this.Morale}`)
        return this
}
Stats()
{
        return console.table({
            beastname: this.beastname,
            hp: this.hp,
            FoodDrink: this.FoodDrink,
            Morale: this.Morale,
});}}
    
class Dragon extends Beast {
    constructor(beastname, happy)
{
    super(beastname, happy)
    this.happy = happy
}
Roar()
{
    this.FoodDrink -= 3
    this.Morale += 10
    console.log(`${this.beastname} WHAT A ROAR THAT WAS !!! WOW !!!`)
    return this
}
HuntPrey()
{
    this.FoodDrink += 50
    this.Morale += 50
    console.log(`${this.beastname} flew up high and dived down at super speed, Collecting small prey in the process. A full belly means a happy ${this.beastname} with a nice full belly of ${this.FoodDrink}, Food always makes you happy, and its the same for ${this.beastname} who now has ${this.Morale}`)
    return this
}}
        
    const Drogon = new Dragon("Drogon", "Roaring")
    Drogon.HuntPrey().Roar().Stats()
    
    class Griffin extends Beast {
    constructor(beastname, happy)
{
    super(beastname, happy)
    this.happy = happy
}
DiveBomb()
{
    this.FoodDrink == 0
    this.Morale += 20
    console.log(`${this.beastname} drop from the sky straight down at immense speeds, Any flying pet loves the winf in its face. ${this.beastname} now has ${this.Morale}`)
    return this
}
HuntsSheep()
{
    this.FoodDrink += 50
    this.Morale += 50
    console.log(`${this.beastname} Hunts and collects Sheep one by one creating a very happy ${this.beastname} ! Food is now ${this.FoodDrink} ! Morale is now ${this.morale}`)
    return this
}}
        
    const Wings = new Griffin("Wings", "Soaring")
    Wings.HuntsSheep().DiveBomb().Stats()
    