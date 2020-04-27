function progresBar() {

    const progres = document.querySelector('.pogres-bar');

    window.addEventListener('scroll', progresBar);

    function progresBar() {
        
        let windowScrol = document.body.scrollTop || document.documentElement.scrollTop;
        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let persent  = windowScrol / windowHeight * 100;

        progres.style.width = persent + '%';
    }

}

module.exports = progresBar;

