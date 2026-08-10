// Time update for mockup
function updateTime() {
    const timeElement = document.getElementById('app-time');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const strTime = hours + ':' + minutes + ' ' + ampm;
    timeElement.textContent = strTime;
}

// Initial call and interval setup
updateTime();
setInterval(updateTime, 1000);

// App mockup interaction
const tapBtn = document.querySelector('.tap-btn');
const appStatus = document.querySelector('.app-status');
let isCheckedIn = false;

tapBtn.addEventListener('click', () => {
    if (!isCheckedIn) {
        tapBtn.classList.add('checked-in');
        tapBtn.innerHTML = '<span class="fingerprint-icon"></span>CHECKED IN';
        appStatus.textContent = 'Successfully checked in for today!';
        appStatus.style.color = '#10b981';
        isCheckedIn = true;
    } else {
        tapBtn.classList.remove('checked-in');
        tapBtn.innerHTML = '<span class="fingerprint-icon"></span>TAP TO CHECK IN';
        appStatus.textContent = 'Ready for today';
        appStatus.style.color = 'var(--text-secondary)';
        isCheckedIn = false;
    }
});

// Animate numbers
const counters = document.querySelectorAll('.counter');
const speed = 200; 

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(animateCounters, 20);
        } else {
            counter.innerText = target;
        }
    });
}

// Intersection Observer to trigger counter animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    observer.observe(statsSection);
}
