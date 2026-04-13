// Тілдердің толық аудармалары (барлық беттерге ортақ)
const translations = {
    kk: {
        logo: "ДАЛА ҚЫРАНДАРЫ",
        back: "Артқа",
        theme: "Түнгі режим",
        nav: {
            home: "Басты",
            about: "Біз туралы",
            projects: "Жобалар",
            directions: "Бағыттар",
            achievements: "Жетістіктер",
            team: "Команда",
            news: "Жаңалықтар",
            donate: "Көмек көрсету",
            volunteer: "Волонтер",
            contact: "Байланыс"
        },
        footer: "«Дала Қырандары» – Қазақстан жастар қоғамдық бірлестігі."
    },
    ru: {
        logo: "СТЕПНЫЕ ОРЛЫ",
        back: "Назад",
        theme: "Ночной режим",
        nav: {
            home: "Главная",
            about: "О нас",
            projects: "Проекты",
            directions: "Направления",
            achievements: "Достижения",
            team: "Команда",
            news: "Новости",
            donate: "Помочь",
            volunteer: "Волонтёр",
            contact: "Контакты"
        },
        footer: "«Степные Орлы» – молодёжное общественное объединение Казахстана."
    },
    en: {
        logo: "STEPPE EAGLES",
        back: "Back",
        theme: "Dark mode",
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            directions: "Directions",
            achievements: "Achievements",
            team: "Team",
            news: "News",
            donate: "Donate",
            volunteer: "Volunteer",
            contact: "Contact"
        },
        footer: "Steppe Eagles – youth public association of Kazakhstan."
    }
};

let currentLang = localStorage.getItem('lang') || 'kk';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];
    
    // Логотип
    const logoEl = document.getElementById('logoText');
    if (logoEl) logoEl.innerText = t.logo;
    
    // Артқа кнопка мәтіні
    const backEl = document.getElementById('backText');
    if (backEl) backEl.innerText = t.back;
    
    // Түнгі режим кнопка мәтіні
    const themeEl = document.getElementById('themeText');
    if (themeEl) themeEl.innerText = t.theme;
    
    // Навигация сілтемелері
    document.querySelectorAll('[data-nav]').forEach(el => {
        const key = el.getAttribute('data-nav');
        if (t.nav[key]) el.innerText = t.nav[key];
    });
    
    // Footer
    const footerEl = document.getElementById('footerText');
    if (footerEl) footerEl.innerText = t.footer;
    
    // Бетке тән элементтерді жаңарту үшін оқиға шығарамыз
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
}

// Түнгі режим
function initTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') document.body.classList.add('light-mode');
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }
}

// Бастапқы іске қосу
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setLanguage(currentLang);
    
    // Тіл кнопкалары
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = btn.getAttribute('data-lang');
            if (lang) setLanguage(lang);
        });
    });
});

// Артқа кнопка функциясы
function goBack() {
    window.history.back();
}