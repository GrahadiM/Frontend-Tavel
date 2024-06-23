/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== WHATSAPP ===============*/
function whatsApp() {
    // console.log("WhatsApp");
    number = "6285234827305";
    message = "Saya%20tertarik%20untuk%20memesan%20layanan%20travel%20dari%20Let's%20Go%20Bandung!";
    window.open(`https://wa.me/${number}?text=${message}`);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameForm').value;
    const email = document.getElementById('emailForm').value;
    const message = document.getElementById('descForm').value;
    
    const number = "6285234827305";
    const textMessage = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
    
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(textMessage)}`, '_blank');
});