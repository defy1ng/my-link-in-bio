particlesJS("particles-js", {
    particles: {
        number: { value: 50 }, // Количество частиц
        size: { value: 3 },    // Размер частиц
        move: { speed: 2 },    // Скорость движения
        color: { value: "#1E90FF" }, // Цвет частиц
        line_linked: {
            enable: true,
            distance: 150,  // Расстояние для соединения
            color: "#1E90FF", // Цвет линий
            width: 1.5  // ✨ Толщина линий (увеличь, если хочешь ещё больше)
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 }
        }
    }
});
