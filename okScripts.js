function giveMeForest (event) {
    event.preventDefault();
    var wrapper = document.querySelector('#okWrapper');
    var label = document.querySelector('.forestButton span');
    label.classList.toggle('blueBack');
    wrapper.classList.toggle('forestWrapper');
    if (label.classList.contains('blueBack')) {
        label.innerHTML = 'Forest';
    } else {
        label.innerHTML = 'Sky';
    }
}