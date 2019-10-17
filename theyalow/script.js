mobileButton.addEventListener("click", function () {
    iframe.classList.toggle('mobile');
    iframe.classList.toggle('desktop');

    if (mobileButton.innerHTML == 'Mobile') {
        mobileButton.innerHTML = 'Desktopt';
    } else {
        mobileButton.innerHTML = 'Mobile';
    }
});
