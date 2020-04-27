function addingBlocks() {

    const container = document.querySelector('.container');    

    let maxScroll = document.documentElement.scrollHeight;

    window.addEventListener('scroll', addBlock);

    function addBlock() {

        let cord = document.documentElement.scrollTop;

        if(cord >= 160) {
            
            container.classList.remove('none');
            container.style.display = 'flex';
            
        } else if(cord <= 160) {

            container.classList.add('none');
            container.style.display = '';
        }
    }
    console.log(maxScroll);
}

module.exports = addingBlocks;
 
