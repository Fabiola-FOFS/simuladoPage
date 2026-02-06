function calcularResultado() {
  let score = 0;

  // Checkboxes com peso
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
    score += parseInt(cb.dataset.weight || 0);
  });

  // Radios
  const uso = document.querySelector('input[name="uso"]:checked');
  const perfilRadio = document.querySelector('input[name="perfil"]:checked');

  if (uso) score += parseInt(uso.value);
  if (perfilRadio) score += parseInt(perfilRadio.value);

  // Definir perfil final
  let perfilFinal = '';

  if (score <= 4) {
    perfilFinal = 'basico';
  } else if (score <= 7) {
    perfilFinal = 'intermediario';
  } else {
    perfilFinal = 'completo';
  }

  // Captura do e-mail (se existir)
  const emailInput = document.getElementById('email');
  const emailLead = emailInput ? emailInput.value : '';

  // Enviar dados para o n8n
  fetch(
    'https://fofs.app.n8n.cloud/webhook-test/simulador-resultado' +
    '?perfil=' + perfilFinal +
    '&email=' + encodeURIComponent(emailLead)
  )
  .catch(err => console.error('Erro ao enviar para n8n:', err))
  .finally(() => {
    // Redireciona SOMENTE depois
    window.location.href = `resultado.html?perfil=${perfilFinal}`;
  });
}
