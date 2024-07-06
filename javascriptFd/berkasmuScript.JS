
const nomor1Element2 = document.getElementById("navWrapper2");

window.addEventListener('scroll', function() {
    // Mendapatkan posisi scroll vertikal dari atas
    let scrollPosition = window.scrollY;

    // Memeriksa apakah scrollPosition mencapai atau melebihi 500px
    if (scrollPosition >= 500) {
       
        nomor1Element2.removeAttribute('class', 'animate__animated animate__fadeOut animate__faster');
        nomor1Element2.style.opacity = 1;
        nomor1Element2.style.position = 'fixed'
        nomor1Element2.setAttribute('class', 'animate__animated animate__fadeInDown');
    } else if (scrollPosition == 0){
       
        nomor1Element2.style.opacity = 0;
        nomor1Element2.removeAttribute('class', 'animate__animated animate__fadeInDown');
        nomor1Element2.setAttribute('class', 'animate__animated animate__fadeOut animate__faster');
    }
});




const cariTbl = document.querySelector('.adabtn');

cariTbl.addEventListener("click", function () {
    fetch('http://www.omdbapi.com/?apikey=dca61bcc$s=')
    .then(Response => console.log(Response));
  });









