//This function calculates and displays the boda boda fare
function calculateBodaFare(distanceInKm){
    //Set base fare(flat fee for any ride)
    const baseFare=50;  //KES

    //Set per kilometer charge
    const perKmCharge=15;  //KES per km

    //Calculate fare based on distance
    const distanceFare= distanceInKm*perKmCharge;

    //Add base fare and distance fare to get total
    const totalFare=baseFare+distanceFare;

    //print formatted fare details to the browser console
    console.log(`\nUko Kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki! 🛵" );

}
//Run this code only after the ppage loads
window.onload=function(){
//Ask the user for input
const input=prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

//Convert the user's answer (text into a number)
const distanceInKm=Number(input);

//Check if the user gave a valid number
if(!isNaN(distanceInKm) && distanceInKm >0){
    //If valid, call the function to calculate the fare
    calculateBodaFare(distanceInKm)
}else{
    //If not valid show an error message
    console.log("Tafadhali andika nambari sahihi ya kilomita.");
}
};
