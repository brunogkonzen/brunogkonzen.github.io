// Bruno Konzen — site pessoal
// O quadro de serviços: a infraestrutura alimenta dados e automação,
// e o disjuntor geral alimenta tudo.

(function () {
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // ---------- menu do celular
  var botao = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu");
  if (botao && menu) {
    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      botao.textContent = aberto ? "Fechar" : "Menu";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && menu.classList.contains("aberto")) botao.click();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("aberto")) {
        botao.click();
        botao.focus();
      }
    });
  }

  // ---------- quadro
  var ligado = { geral: true, infra: true, dados: true, auto: true };
  var areas = ["infra", "dados", "auto"];
  var botoes = document.querySelectorAll(".disjuntor");
  var leitura = document.getElementById("leitura");
  var mensagem = document.getElementById("mensagem");
  var ledTotal = document.querySelector('[data-led="total"]');

  function temEnergia(c) {
    if (c === "geral") return ligado.geral;
    if (!ligado.geral || !ligado[c]) return false;
    return c === "infra" || ligado.infra;
  }

  function frase() {
    if (!ligado.geral) return "Desligou o geral e tudo parou. Por isso a base vem antes de tudo.";
    if (!ligado.infra) return "Sem infraestrutura, dados e automação caem junto. É a base de tudo.";
    if (!ligado.dados && !ligado.auto) return "Sem dados e sem automação, a empresa volta para a planilha e para o retrabalho.";
    if (!ligado.dados) return "Sem dados, as decisões voltam a ser no chute.";
    if (!ligado.auto) return "Sem automação, a equipe volta a repetir tarefa à mão.";
    return "Tudo ligado. É assim que eu gosto de deixar.";
  }

  function desenhar(comFrase) {
    botoes.forEach(function (b) {
      var c = b.dataset.circuito;
      b.setAttribute("aria-checked", ligado[c] ? "true" : "false");
      b.classList.toggle("energizado", temEnergia(c));
      b.classList.toggle("espera", ligado[c] && !temEnergia(c));
    });
    var n = areas.filter(temEnergia).length;
    if (leitura) leitura.textContent = n + " de 3 circuitos com energia";
    if (ledTotal) {
      ledTotal.classList.toggle("ligado", n === 3);
      ledTotal.classList.toggle("espera", n > 0 && n < 3);
    }
    // as áreas lá embaixo acompanham o quadro
    areas.forEach(function (c) {
      var led = document.querySelector('[data-led="' + c + '"]');
      var txt = document.querySelector('[data-estado="' + c + '"]');
      var on = temEnergia(c);
      if (led) led.classList.toggle("ligado", on);
      if (txt) txt.textContent = on ? "com energia" : "sem energia";
    });
    if (comFrase && mensagem) mensagem.textContent = frase();
  }

  var timers = [];
  botoes.forEach(function (b) {
    b.addEventListener("click", function () {
      // se a pessoa mexer antes da abertura terminar, a abertura para e tudo fica ligado
      if (timers.length) {
        timers.forEach(clearTimeout);
        timers = [];
        ligado = { geral: true, infra: true, dados: true, auto: true };
      }
      var c = b.dataset.circuito;
      ligado[c] = !ligado[c];
      desenhar(true);
    });
  });

  // abertura: o quadro liga um disjuntor por vez (só uma vez, e só se a pessoa aceita movimento)
  var semMovimento = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (semMovimento) {
    desenhar(false);
    return;
  }
  var ordem = ["geral", "infra", "dados", "auto"];
  ordem.forEach(function (c) { ligado[c] = false; });
  desenhar(false);
  ordem.forEach(function (c, i) {
    timers.push(setTimeout(function () {
      ligado[c] = true;
      desenhar(false);
      if (i === ordem.length - 1) timers = [];
    }, 450 + i * 260));
  });
})();
