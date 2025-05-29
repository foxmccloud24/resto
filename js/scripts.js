console.log("Delicioso site loaded! 😋");

function openModal(image) {
    const modal = document.getElementById("menuModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = image.src;
}

function closeModal() {
    const modal = document.getElementById("menuModal");
    modal.style.display = "none";
}

function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('show');
}
