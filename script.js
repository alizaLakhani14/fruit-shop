appleQuantity = document.querySelector(" #appleQuantity").value;
orangeQuantity = document.querySelector(" #orangeQuantity").value;
bananaQuantity = document.querySelector(" #bananaQuantity").value;

function addApple(){
// appleQuantity = document.querySelector(" #appleQuantity").value;
// orangeQuantity = document.querySelector(" #orangeQuantity").value;
// bananaQuantity = document.querySelector(" #bananaQuantity").value;

    let applePlus = appleQuantity++;
   
}

function addOrange(){
    let orangePlus = orangeQuantity++;
   
}

function addBanana(){
    let bananaPlus = bananaQuantity++;
   
}


function subtractApple(){
   
    if (appleQuantity > 0){
        let appleMinus = appleQuantity--;
    }

  
}

function subtractOrange(){
    
    if (orangeQuantity > 0){
        let orangeMinus = orangeQuantity--;
    }
}

function subtractBanana(){
  
    if (bananaQuantity > 0){
        let bananaMinus = bananaQuantity--;
    }
}