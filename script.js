document.addEventListener('DOMContentLoaded', () => {
    // Reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });

    // Simple Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'SENDING...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you! This is a demo. In a real scenario, this would send an email.');
                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // AI Chatbot Widget Logic
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatbot = document.getElementById('close-chatbot');
    const sendChat = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chatbot-messages');

    let welcomeSent = false;

    const addMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message`;
        msgDiv.innerText = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('hidden');
        if (!welcomeSent && !chatbotWindow.classList.contains('hidden')) {
            setTimeout(() => {
                addMessage("Hello! I am the AI assistant. How can I help you with cinematic AI videos, explainer scripts, or automation tools today?", 'bot');
                welcomeSent = true;
            }, 500);
        }
    });

    closeChatbot.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
    });

    sendChat.addEventListener('click', () => {
        const text = chatInput.value.trim();
        if (text) {
            addMessage(text, 'user');
            chatInput.value = '';
            setTimeout(() => {
                addMessage("Thank you for your message! This is a simulated demo. Please contact us via email for a real response.", 'bot');
            }, 1000);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChat.click();
    });

    // Dynamic Portfolio Hover Glow (Optional premium touch)
    const cards = document.querySelectorAll('.service-card, .video-container');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { x, y } = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - x}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - y}px`);
        });
    });
});
