document.addEventListener('DOMContentLoaded', () => {
    let likes = 0;
    let isLiked = false; // Controla se o utilizador deu curtida ou não

    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Lógica do Botão de Curtida (Ativar e Desfazer)
    if (likeBtn && likeCount) {
        likeBtn.addEventListener('click', () => {
            if (isLiked) {
                // Se já estiver curtido, desfaz a curtida
                likes--;
                isLiked = false;
                likeBtn.classList.remove('active');
            } else {
                // Se não estiver curtido, adiciona a curtida
                likes++;
                isLiked = true;
                likeBtn.classList.add('active');
            }

            likeCount.textContent = likes;
        });
    }

    // Lógica do Modo Escuro
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = '☀️ Modo Claro';
            } else {
                themeToggleBtn.textContent = '🌙 Modo Escuro';
            }
        });
    }
});