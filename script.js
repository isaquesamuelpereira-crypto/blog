document.addEventListener('DOMContentLoaded', () => {
    let likes = 0;
    let dislikes = 0;

    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCount = document.getElementById('likeCount');
    const dislikeCount = document.getElementById('dislikeCount');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    if (likeBtn && likeCount) {
        likeBtn.addEventListener('click', () => {
            likes++;
            likeCount.textContent = likes;
        });
    }

    if (dislikeBtn && dislikeCount) {
        dislikeBtn.addEventListener('click', () => {
            dislikes++;
            dislikeCount.textContent = dislikes;
        });
    }

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