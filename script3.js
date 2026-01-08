// Обработчик отправки формы
document.getElementById('guest-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Собираем данные формы
    const formData = new FormData(this);
    const data = {};
    
    // Преобразуем FormData в объект
    formData.forEach((value, key) => {
        if (key === 'alcohol') {
            if (!data[key]) data[key] = [];
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });
    
    // Проверяем, что хотя бы один чекбокс алкоголя выбран
    if (!data.alcohol || data.alcohol.length === 0) {
        alert('Пожалуйста, выберите хотя бы один вариант алкоголя');
        return;
    }
    
    // Формируем URL с параметрами
    const baseURL = 'https://script.google.com/macros/s/AKfycbxF4romWkMpWJy4bcATNJoTw5cfz3VnsAdAYF9i7RFuvplJklgj_dtDwGzY-Rk100c/exec';
    const params = new URLSearchParams({
        name: data.name,
        attendance: data.attendance,
        transfer: data.transfer,
        metro_station: data.metro_station || '',
        alcohol: data.alcohol.join(', '),
        comments: data.comments || ''
    });
    
    const scriptURL = `${baseURL}?${params.toString()}`;
    
    // Используем GET запрос
    fetch(scriptURL, {
        method: 'GET',
        mode: 'no-cors'
    })
    .then(() => {
        // Скрываем блок с вопросами и показываем блок с благодарностью
        document.getElementById('question-block').style.display = 'none';
        document.getElementById('thank-you-block').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке формы');
    });
});