const dkeys = document.querySelectorAll('.dkey');
const pkeys = document.querySelectorAll('.pkey');
const tkeys = document.querySelectorAll('.tkey');

window.addEventListener('keydown', function(event) {
    const key = event.key;
    if (keyIsDkey(key)) {
        playSound(key);
    } else if (keyIsPkey(key)) {
        playpSound(key);
    } else if (keyIsTkey(key)) {
      playtSound(key);
    }
});

function playSound(dkey) {
    const audio = document.querySelector(`audio[data-key="${dkey.toUpperCase()}"]`);
    const dkeyElement = document.querySelector(`.dkey[data-key="${dkey.toUpperCase()}"]`);
    if (!audio) return;

    dkeyElement.classList.add('active');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        dkeyElement.classList.remove('active');
    }, 100);
}

function playpSound(pkey) {
    const audio = document.querySelector(`audio[data-key="${pkey.toUpperCase()}"]`);
    const pkeyElement = document.querySelector(`.pkey[data-key="${pkey.toUpperCase()}"]`);
    if (!audio) return;

    pkeyElement.classList.add('active');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        pkeyElement.classList.remove('active');
    }, 100);
}

function playtSound(tkey) {
  const audio = document.querySelector(`audio[data-key="${tkey.toUpperCase()}"]`);
  const tkeyElement = document.querySelector(`.tkey[data-key="${tkey.toUpperCase()}"]`)
  if (!audio) return;

  tkeyElement.classList.add('active');
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    tkeyElement.classList.remove('active');
  }, 100);
}

function keyIsDkey(key) {
    return !!document.querySelector(`.dkey[data-key="${key.toUpperCase()}"]`);
}

function keyIsPkey(key) {
    return !!document.querySelector(`.pkey[data-key="${key.toUpperCase()}"]`);
}

function keyIsTkey(key) {
  return !!document.querySelector(`.tkey[data-key="${key.toUpperCase()}"]`);
}

dkeys.forEach(dkey => {
    dkey.addEventListener('click', function() {
        const dkeyAttribute = this.getAttribute('data-key');
        playSound(dkeyAttribute);
    });
});

pkeys.forEach(pkey => {
    pkey.addEventListener('click', function() {
        const pkeyAttribute = this.getAttribute('data-key');
        playpSound(pkeyAttribute);
    });
});

tkeys.forEach(tkey => {
  tkey.addEventListener('click', function() {
    const tkeyAttribute = this.getAttribute('data-key');
    playtSound(tkeyAttribute);
  })
})



































  




