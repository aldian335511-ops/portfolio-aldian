const text = [

    "Web Developer",

    "UI Designer",

    "Frontend Developer"

];

let index = 0;

setInterval(function () {

    document.getElementById("typing").innerHTML =

        text[index];

    index++;

    if (index >= text.length) {

        index = 0;

    }

}, 2000);



document.getElementById("btn-info")

.addEventListener("click", function () {

    document.getElementById("info").innerHTML =

        "🚀 Terima kasih sudah mengunjungi portfolio saya.";

});



document.getElementById("contactForm")

.addEventListener("submit", function (e) {

    e.preventDefault();

    const nama =

        document.getElementById("nama").value;

    const pesan =

        document.getElementById("pesan").value;

    window.open(

        `https://wa.me/6285142394434?text=Halo saya ${nama}, ${pesan}`,

        "_blank"

    );

});



function showProject(judul, deskripsi){

    document.getElementById("judul").innerHTML = judul;

    document.getElementById("deskripsi").innerHTML = deskripsi;

    document.getElementById("popup").style.display = "block";

}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}