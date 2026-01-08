// ============================================
// НАСТРОЙКИ ТАЙМЕРА
// ============================================

const weddingDate = new Date("2026-06-26T16:00:00");

// ============================================
// ФУНКЦИИ ТАЙМЕРА
// ============================================

function updateTimer() {
    const now = new Date();
    const diff = weddingDate - now;

    // Если свадьба уже наступила
    if (diff <= 0) {
        document.getElementById("timer").innerText = "Сегодня свадьба!";
        return;
    }

    // Расчет времени
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Отображение времени
    document.getElementById("timer").innerText =
        `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
}

// ============================================
// ЗАПУСК ТАЙМЕРА
// ============================================

setInterval(updateTimer, 1000);
updateTimer();