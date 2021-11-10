function process() {
    var name = document.getElementById('fname').value;
    var age = document.getElementById('age').value;
    var sallery = document.getElementById('sallery').value;

    var salleryDegit = sallery;
    

    var yearly = salleryDegit * 12;
    var yearlySallery = yearly;
    var agedigit = age;

    if(agedigit>25 && yearlySallery>=100000 ){
        monthlyBonus = salleryDegit * .20;
        yearlyBonus =  monthlyBonus * 12;

        p1.innerText= yearlyBonus;

        // p1.innerText = yearlyBonus;
    }
    else{
        p1.innerText = "your sallry";
    }

    document.getElementById('fname').value = "";
    document.getElementById('age').value = "";
    document.getElementById('fname').value = "";
}