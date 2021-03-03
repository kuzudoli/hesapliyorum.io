var fiyatInput = document.querySelector(".fiyatInput");
var indirimInput = document.querySelector(".indirimInput");

var indirimSection = document.querySelector(".indirimSection");

var indirimliFiyat = document.querySelector(".indirimliFiyat");
var indirimMiktari = document.querySelector(".indirimMiktari");

function indirimHesapla(){
    var indirimMiktariSayi = (fiyatInput.value * indirimInput.value)/100;
    var sonFiyat = fiyatInput.value - indirimMiktariSayi;

    indirimliFiyat.textContent=sonFiyat;
    indirimMiktari.textContent=indirimMiktariSayi;

    if(indirimInput.value!="" && fiyatInput.value!="")
        indirimSection.style.opacity=1;
    else
        indirimSection.style.opacity=0;
};

fiyatInput.oninput=indirimHesapla;
indirimInput.oninput=indirimHesapla;
