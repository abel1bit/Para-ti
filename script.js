
const btnNo = document.getElementById('no');
const btnSi = document.getElementById('si');
const respuesta = document.getElementById('respuesta');

btnNo.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * 300);
    const j = Math.floor(Math.random() * 300);
    btnNo.style.position = "absolute";
    btnNo.style.left = i + 'px';
    btnNo.style.top = j + 'px';
});

btnSi.addEventListener('click', () => {
    document.querySelector('.card').style.display = 'none';
    respuesta.style.display = 'block';
});
