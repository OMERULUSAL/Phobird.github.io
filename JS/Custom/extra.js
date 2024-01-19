// ! Html'in DOM içeriği yüklendiğinde Event=> komutu ile işlemleri yap dedim
window.addEventListener("DOMContentLoaded", Event => {
    var navbarMobile = function () {
        const nCollapsible = document.body.querySelector("#anaNavbar");
        // ! anaNavbar idli html etiketimi const'a yani sabite attım (const'um nCollapsible)
        if (!nCollapsible) {
            return;
            // ? Eğer nCollapsible yoksa return yap(Döndür)
        }
        if (window.scrollY === 0) {
            // ? Eğer Ekran Y ekseninde hareket ettirilmemişse nCollapsible listesinden kaldır aksi halde else komutunu çalıştır
            nCollapsible.classList.remove("navbar-mobile");
        }
        else {
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    // ? Eğer sayfada scroll olayı gerçekleşirse navbarMobile adlı fonksiyonu çağır ve çalıştır.
    document.addEventListener("scroll", navbarMobile);
    const myNavbar = document.body.querySelector("#anaNavbar");
    if (myNavbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#anaNavbar",
            offset: 74,
        });
    }
});

// ! Önce index'te Anasayfa... navbarına canvas-kapat adlı bir ortak class verdim ardından onu js te aşağıdaki gibi kullandım.
// ! Asıl amacım mobilde hamburger menüye tıklanınca bağlantıya gittikten sonra menünün otomatik olarak kapanmasını istemem.
var BtnCanvas = document.querySelectorAll(".canvas-kapat");
// ! canvas-kapat classına sahip tüm elementleri çekip BtnCanvas adlı yeni değişkenime atadım. Sonra bu değişkenimi for döngüsüne aldım.
for (let i = 0; i < BtnCanvas.length; i++) {
    // ! i adlı yeni bir değişken ile döngüyü sağladım. i, BtnCanvas adetinden  küçük olduğu sürece i'yi 1'er 1'er arttır.
    BtnCanvas[i].addEventListener("click", function () {
        // ! BtnCanvas'ın i. elemanına tıklandığı zaman fonksiyon oluştur.
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
        // ! Fonksiyon: dosyayı çekip data-bs-dismiss="offcanvas" adlı olaya tıklanmayı gerçekleştir.
    });
}

// ! Form İnputları
(function () {
    'use strict'
    var MyName = document.querySelector("#name");
    var mymail = document.querySelector("#mail");
    var MyTelefon = document.querySelector("#telefon");
    var MyMesaj = document.querySelector("#mesaj");
    var MyBTN = document.querySelector("#gndrbtn");
    if (MyMesaj.value.length == 0) {
        MyBTN.disabled = true;
    }
    MyMesaj.addEventListener("keyup", function () {
        // ! keyup: Tuşa tıklayıp elimi kaldırdığım anda çalış demektir.
        // !buradaki amacım girilen karakter kaçtane ise onu sayıp ilerlesin zaten indexte maxlenght'i 300 yapmıştm.
        document.getElementById("karakter-sayim").textContent = MyMesaj.value.length;

        if (MyMesaj.value.length >= 10) {
            MyBTN.disabled = false;
            // ! Eğer girdiğim karakter sayısı 10'dan büyük veya eşit ise Butonun disabled özelliği false ile kalkar.
        }
        else {
            MyBTN.disabled = true;
            // ! Eğer kişi girdiği karakterleri silmişse ve 10'dan küçükse Butonun disabled özelliği true ile tekrar aktif edilir.
        }
    });
})();