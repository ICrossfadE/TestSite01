function slider() {

        const sliderItem = document.querySelectorAll('.item'),
        left = document.querySelector('.slide__arrow-left'),
        right = document.querySelector('.slide__arrow-right'),
        dotsActive = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    let sliderIndex = 1;

    function showSlides() {
        
        if (sliderIndex > sliderItem.length) {
            sliderIndex = 1;
        }
        if (sliderIndex < 1) {
            sliderIndex = sliderItem.length;
        }

        for (let item of sliderItem) {
            item.style.display = 'none';
        }

        for (let item of dots) {
            item.classList.remove('dot-active');
        }

        sliderItem[sliderIndex - 1 ].style.display = 'block';
        dots[sliderIndex -1 ].classList.add('dot-active');

    }

    function plusSliderIndex(n) {

        showSlides(sliderIndex += n);
    }

    function currentSliderIndex(n) {

        showSlides(sliderIndex = n);
    }

    right.addEventListener('click', function() {

        plusSliderIndex(1);
        console.log(sliderIndex);
        
    });

    left.addEventListener('click', function() {

        plusSliderIndex(-1);
        console.log(sliderIndex);
    });

    dotsActive.addEventListener('click', function(e) {

        for(let i = 0; i < dots.length + 1; i++) {

            if (e.target.classList.contains('dot') && e.target == dots[i-1]) {
                currentSliderIndex(i);
            }
        }
    });

    setInterval(() => {
        plusSliderIndex(1);
    }, 5000);

    showSlides();
}

export {slider};