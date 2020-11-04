let msg = 'YouWalkedOff';
document.querySelector('.header').addEventListener('mouseover', e =>{
    console.log(e);
    document.querySelector('.header').innerHTML = msg + ' <i class="fas fa-toggle-off"></i>'
})
document.querySelector('.header').addEventListener('mouseout', e =>{
    document.querySelector('.header').innerHTML = msg + ' <i class="fas fa-toggle-on"></i>'
})