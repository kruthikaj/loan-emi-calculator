function vaidamount(){
    var amount=document.getElementById("amount").ariaValueMax;
    if(isNaN(amount)){
        alert("Loan amount should be a number");
        document.getElementById("amount").focus();
        document.getElementById("amount").select();
        return false;
    }
    else if(amount=" "){
        alert("Loan amount should be a number");
    }
    else if(amount>150000){
        alert("Loan should not be more than 150000");
        document.getElementById("amount").focus();
        document.getElementById("amount").select();
        return false;
    }
}

