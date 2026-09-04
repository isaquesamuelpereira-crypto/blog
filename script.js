document.addEventListener('DOMContentLoaded', () => {
    let likes = 0;
    let dislikes = 0;
    let userVote = null; // Guarda o estado atual: 'like', 'dislike' ou null

    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCount = document.getElementById('likeCount');
    const dislikeCount = document.getElementById('dislikeCount');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Botão de Curtir
    likeBtn.addEventListener('click', () => {
        if (userVote === 'like') {
            // Se já tinha curtido, remove o curtida
            likes--;
            userVote = null;
            likeBtn.classList.remove('active');
        } else {
            // Se tinha descurtido antes, remove o descurtir
            if (userVote === 'dislike') {
                dislikes--;
                dislikeBtn.classList.remove('active');
            }
            // Adiciona a curtida
            likes++;
            userVote = 'like';
            likeBtn.classList.add('active');
        }

        likeCount.textContent = likes;
        dislikeCount.textContent = dislikes;
    });

    // Botão de Descurtir
    dislikeBtn.addEventListener('click', () => {
        if (userVote === 'dislike') {
            // Se já tinha descurtido, remove o descurtir
            dislikes--;
            userVote = null;
            dislikeBtn.classList.remove('active');
        } else {
            // Se tinha curtido antes, remove a curtida
            if (userVote === 'like') {
                likes--;
                likeBtn.classList.remove('active');
            }
            // Adiciona o descurtir
            dislikes++;
            userVote = 'dislike';
            dislikeBtn.classList.add('active');
        }

        likeCount.textContent = likes;
        dislikeCount.textContent = dislikes;
    });

    // Modo Escuro
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