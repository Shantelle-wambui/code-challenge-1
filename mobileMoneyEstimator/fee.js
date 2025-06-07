//This function estimate the transaction fee based on the amount to send
function estimateTransactionFee(amountToSend){
    const percentageFee=0.015;   //1.5% of the transaction amount
    const minFee=10;  //Minimum fee is KES 10
    const maxFee=70   //Maximum fee is KES 70

//Calculate the 1.5% fee
    let fee=amountToSend*percentageFee;

//Apply minimum and maximum limits
    if(fee<minFee){
        fee=minFee; //If fee is too small, use the minimum

    }else if(fee>maxFee) {
        fee=maxFee; //If fee is to high, use the maximum
    }
//Calculate total amount to be debited
const totalDebited=amountToSend+fee;

//Print the result to the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("\nSend Money Securely! 📱");
}
//This code runs when the page finishes loading
window.onload=function(){
    //prompt the user to enter the amount they want to send
    const input=prompt("Unatuma Ngapi? (KES):");

    //Convert the input(text)to a number
    const amountToSend=Number(input);

    //Validate the input: it must be a number greater than 0
    if(!isNaN(amountToSend) && amountToSend>0){
        estimateTransactionFee(amountToSend); //calls the function if valid
    }else{
        //Show error message is input is not valid
        console.log("Tafadhali andika kiasi sahihi cha kutuma.");
    }
};