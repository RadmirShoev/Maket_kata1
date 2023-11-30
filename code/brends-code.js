let readMoreButton = document.querySelector('.read-more-button');
let brendsList = document.querySelector('.brends-list');


readMoreButton.addEventListener('click', function() {
    let classes = brendsList.className.split(/\s+/);

    for (let i = 0; i < classes.length; i++) {
        if (classes[i] === 'brends-list--show-part') {

            brendsList.classList.add('brends-list--show-all');
            brendsList.classList.remove('brends-list--show-part');

            readMoreButton.firstChild.data = 'Скрыть';
            
        } else {

            brendsList.classList.remove('brends-list--show-all');
            brendsList.classList.add('brends-list--show-part');

            readMoreButton.firstChild.data = 'Показать всё';
        }
    }
})
