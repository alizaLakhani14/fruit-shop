function addApple(){
    let applePlus = document.querySelector(" #appleQuantity").value++;
   
}

function addOrange(){
    let orangePlus = document.querySelector(" #orangeQuantity").value++;
   
}

function addBanana(){
    let bananaPlus = document.querySelector(" #bananaQuantity").value++;
   
}


function subtractApple(){
    let appleMinus = document.querySelector(" #appleQuantity").value;
    if (appleMinus > 0){
        let appleMinus = document.querySelector(" #appleQuantity").value--;
    }

  
}

function subtractOrange(){
    let orangeMinus = document.querySelector(" #orangeQuantity").value;
    if (orangeMinus > 0){
        let orangeMinus = document.querySelector(" #orangeQuantity").value--;
    }
}

function subtractBanana(){
    let bananaMinus = document.querySelector(" #bananaQuantity").value;
    if (bananaMinus > 0){
        let bananaMinus = document.querySelector(" #bananaQuantity").value--;
    }
}