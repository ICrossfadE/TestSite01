function hoverRotate() {

        const cards = document.querySelectorAll('.card');

    for (let item of cards) {
        const card = item;
        card.addEventListener('mousemove', startRotate);
        card.addEventListener('mouseout', stopRotate);
    }

    // for (let i = 0; i < cards.length; i++) {
    //     const card = cards[i];
    //     card.addEventListener('mousemove', startRotate);
    //     card.addEventListener('mouseout', stopRotate);
    // }


    function startRotate(e) {

        const cardItem = this.querySelector('.card-item'); 
        let cardHeigth = cardItem.offsetHeight / 2; //ділимо висоту на 2

        cardItem.style.transform = 'rotateX('+ -(e.offsetY - cardHeigth) / 10 + 'deg) rotateY(' + (e.offsetX - cardHeigth) / 10 + 'deg)';  
    }

    function stopRotate() {

        const cardItem = this.querySelector('.card-item');
        cardItem.style.transform = 'rotate(0)';
    }

}

export {hoverRotate};

