function calcularResultado() {
let score = 0;


document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
score += parseInt(cb.dataset.weight);
});


const uso = document.querySelector('input[name="uso"]:checked');
const perfil = document.querySelector('input[name="perfil"]:checked');


if (uso) score += parseInt(uso.value);
if (perfil) score += parseInt(perfil.value);


if (score <= 4) {
window.location.href = 'resultado.html?perfil=basico';
} else if (score <= 7) {
window.location.href = 'resultado.html?perfil=intermediario';
} else {
window.location.href = 'resultado.html?perfil=completo';
}
}