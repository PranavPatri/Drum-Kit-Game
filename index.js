var i = 0, btn;

while(i < document.querySelectorAll('.drum').length) {
    btn = document.querySelectorAll('.drum')[i];
    btn.addEventListener( 'click', function() {
        makeSound(this.innerHTML);
        makeAnimation(this.innerHTML);
    } );
    i++;
}

document.addEventListener( 'keypress', function(event){
    makeSound(event.key);
    makeAnimation(event.key);
} );

function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); 
        break;

        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        default:
            break;
    }
}

function makeAnimation (currentkey) {
    document.querySelector('.' + currentkey).classList.add('pressed');
    document.querySelector('.' + currentkey).id = 'press';
    setTimeout(function() {
        document.querySelector('.' + currentkey).classList.remove('pressed');
        document.querySelector('.' + currentkey).id = '';
    }, 100);
}