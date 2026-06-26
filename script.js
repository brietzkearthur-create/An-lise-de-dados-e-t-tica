document.addEventListener("DOMContentLoaded", () => {
    const jogadores = document.querySelectorAll(".jogador");
    const painelConteudo = document.getElementById("atleta-conteudo");
    const btnAnalise = document.getElementById("btn-analise");

    // Lógica 1: Clique nos Jogadores para exibir Telemetria Individual
    jogadores.forEach(jogador => {
        jogador.addEventListener("click", () => {
            const nome = jogador.getAttribute("data-nome");
            const status = Math.random() > 0.5 ? jogador.getAttribute("data-status") : "Recalculando rota tática...";
            const extra = jogador.getAttribute("data-extra");
            
            painelConteudo.innerHTML = `
                <div class="atleta-info">
                    <h4>${nome}</h4>
                    <p><strong>Métrica Principal:</strong> ${status}</p>
                    <p style="color: #9ca3af; font-size: 0.9rem; margin-top: 0.3rem;">${extra}</p>
                </div>
            `;
        });
    });

    // Lógica 2: Botão "Iniciar Análise Viva" que simula atualização de Big Data em tempo real
    btnAnalise.addEventListener("click", () => {
        btnAnalise.textContent = "💻 Analisando Fluxo...";
        btnAnalise.style.backgroundColor = "#059669";

        setInterval(() => {
            // Gerar valores aleatórios simulando o decorrer da partida
            const novoXG = (Math.random() * 3).toFixed(2);
            const novaPressao = Math.floor(Math.random() * (95 - 50) + 50);
            const novaFadiga = Math.floor(Math.random() * (85 - 20) + 20);

            // Atualizar valores no ecrã (Texto)
            document.getElementById("val-xg").textContent = novoXG;
            document.getElementById("val-pressao").textContent = novaPressao + "%";
            document.getElementById("val-fadiga").textContent = novaFadiga + "%";

            // Atualizar larguras das barras gráficas (CSS Dinâmico)
            document.getElementById("bar-xg").style.width = Math.min((novoXG / 3) * 100, 100) + "%";
            document.getElementById("bar-pressao").style.width = novaPressao + "%";
            document.getElementById("bar-fadiga").style.width = novaFadiga + "%";
        }, 2500);
    });
});
