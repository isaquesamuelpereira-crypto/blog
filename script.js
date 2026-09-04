document.addEventListener('DOMContentLoaded', () => {
    let likes = 0;
    let dislikes = 0;
    let userState = null; // Guarda: 'like', 'dislike' ou null

    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCount = document.getElementById('likeCount');
    const dislikeCount = document.getElementById('dislikeCount');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Lógica do Botão Curtir
    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            if (userState === 'like') {
                // Desfaz a curtida ao clicar novamente
                likes--;
                userState = null;
                likeBtn.classList.remove('active');
            } else {
                // Se estava descurtido, remove o descurtir
                if (userState === 'dislike') {
                    dislikes--;
                    dislikeBtn.classList.remove('active');
                }
                // Adiciona a curtida
                likes++;
                userState = 'like';
                likeBtn.classList.add('active');
            }

            likeCount.textContent = likes;
            dislikeCount.textContent = dislikes;
        });
    }

    // Lógica do Botão Descurtir
    if (dislikeBtn) {
        dislikeBtn.addEventListener('click', () => {
            if (userState === 'dislike') {
                // Desfaz o descurtir ao clicar novamente
                dislikes--;
                userState = null;
                dislikeBtn.classList.remove('active');
            } else {
                // Se estava curtido, remove a curtida
                if (userState === 'like') {
                    likes--;
                    likeBtn.classList.remove('active');
                }
                // Adiciona o descurtir
                dislikes++;
                userState = 'dislike';
                dislikeBtn.classList.add('active');
            }

            likeCount.textContent = likes;
            dislikeCount.textContent = dislikes;
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