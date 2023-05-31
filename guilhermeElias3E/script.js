const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('cancel');
const likeButton = document.getElementById('like1');
const deslikeButton = document.getElementById('dislike1');
const likeButton2 = document.getElementById('like2');
const deslikeButton2 = document.getElementById('deslike2');
const likeButton3 = document.getElementById('like3');
const deslikeButton3 = document.getElementById('deslike3');
const likeButton4 = document.getElementById('like4');
const deslikeButton4 = document.getElementById('dislike4');

openModal.addEventListener('click', () => {
    modal.style.display = "flex"
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none"
});

likeButton.addEventListener('click', () => {
    likeButton.style.display ="none"
    deslikeButton.style.display = "block"
});

deslikeButton.addEventListener('click', () => {
    likeButton.style.display ="block"
    deslikeButton.style.display = "none"
});

likeButton2.addEventListener('click', () => {
    likeButton2.style.display ="none"
    deslikeButton2.style.display = "block"
});

deslikeButton2.addEventListener('click', () => {
    likeButton2.style.display ="block"
    deslikeButton2.style.display = "none"
});

likeButton3.addEventListener('click', () => {
    likeButton3.style.display ="none"
    deslikeButton3.style.display = "block"
});

deslikeButton3.addEventListener('click', () => {
    likeButton3.style.display ="block"
    deslikeButton3.style.display = "none"
});

likeButton4.addEventListener('click', () => {
    likeButton4.style.display ="none"
    deslikeButton4.style.display = "block"
});

deslikeButton4.addEventListener('click', () => {
    likeButton4.style.display ="block"
    deslikeButton4.style.display = "none"
});