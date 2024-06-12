const sideMenu = document.querySelector('.side-bar');

document.querySelector('#check').addEventListener('change', () => {
    if (document.querySelector('#check').checked) {
        sideMenu.style.left = "0";
    } else {
        sideMenu.style.left = "-300px";
    }
});