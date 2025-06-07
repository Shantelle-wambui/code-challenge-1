//This function calculates and display the chai ingridients based on the number of cups.
function calculateChaiIngredients(numberOfCups){
    //Standard recipe for 1 cup

    const waterPerCup=200; //in ml
    const milkPerCup=50;   //in ml
    const teaLeavesPerCup=1;  //in tablespoons
    const sugarPerCup=2;      //in teaspoons

    //Multiply by number of cups
    const totalWater=numberOfCups*waterPerCup;
    const totalMilk=numberOfCups*milkPerCup;
    const totalTeaLeaves=numberOfCups*teaLeavesPerCup;
    const totalSugar=numberOfCups*sugarPerCup;

    //Print the result to the console
    console.log(`To make ${numberOfCups} cups of Kenyan chai, you will need: `);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leave (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log(`\nEnjoy your Chai Bora! ☕`);
}

//Ask the user how many cups of chai they want to make
window.onload=function(){
const input=prompt("Karibu! How many cups of Chai Bora would you like to make?");

//convert the user's input (string) into a number
const numberOfCups=Number(input);

//Check if the input is a valid number and greater than 0
if(!isNaN(numberOfCups) && numberOfCups >0){
    //If valid, call the function to calculate ingredients
    calculateChaiIngredients(numberOfCups);
}else{
    //If not valid, display an error message
    console.log("Please enter a valid number of cups.")
}
};