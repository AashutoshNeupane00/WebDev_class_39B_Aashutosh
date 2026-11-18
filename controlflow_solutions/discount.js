
let purchaseamount = 150;

if (purchaseamount >= 100){
    cost = purchaseamount * 0.8; 
    console.log("Discount applied. Final cost: $" + cost);   
} else if (purchaseamount >= 50 && purchaseamount < 100){
    cost = purchaseamount * 0.9; 
    console.log("Discount applied. Final cost: $" + cost);
} 
else if(purchaseamount<50) {
    cost = purchaseamount; 
    console.log("No discount applied. Final cost: $" + cost);
} 
else {
    console.log('invalid')

}



