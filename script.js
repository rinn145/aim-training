let speed = 1000; // начальная скорость перемещения
let score = 0;

document.getElementById('ball').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = score;
});

function moveBall() {
    let ball = document.getElementById('ball');
    let container = document.getElementById('container');
    let containerWidth = container.offsetWidth - ball.offsetWidth;
    let containerHeight = container.offsetHeight - ball.offsetHeight;

    let x = Math.floor(Math.random() * containerWidth);
    let y = Math.floor(Math.random() * containerHeight);

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

setInterval(moveBall, speed);

document.getElementById('speedButton').addEventListener('click', function() {
    speed /= 2; // уменьшаем интервал времени для увеличения скорости
    clearInterval(moveBall); // очищаем предыдущий интервал
    setInterval(moveBall, speed); // устанавливаем новый интервал с увеличенной скоростью
});
