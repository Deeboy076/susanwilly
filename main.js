// Consolidated JavaScript from all HTML files

// --- index.html: Tawk.to Chat Widget ---
window.Tawk_API = window.Tawk_API || {};
window.Tawk_LoadStart = new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6a00007fdb08b91c337bd3ce/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();


// --- index.html: Booking form to mailto ---
if (document.getElementById('bookingForm')) {
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            phone: form.phone.value,
            dob: form.dob.value,
            email: form.email.value,
            serviceRate: form.serviceRate.value,
            availDate: form.availDate.value,
            availTime: form.availTime.value,
            paymentMethod: form.paymentMethod.value
        };
        const subject = encodeURIComponent('New Booking Request');
        const body = encodeURIComponent(
            `First Name: ${data.firstName}\n` +
            `Last Name: ${data.lastName}\n` +
            `Phone: ${data.phone}\n` +
            `Date of Birth: ${data.dob}\n` +
            `Email: ${data.email}\n` +
            `Service Rate: ${data.serviceRate}\n` +
            `Date of Availability: ${data.availDate}\n` +
            `Time for Meet: ${data.availTime}\n` +
            `Means of Payment: ${data.paymentMethod}`
        );
        const mailto = `mailto:Susanwilly9473@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailto;
    });
}

// --- index.html: Visitor notification on page load ---
(function() {
    const visitorData = {
        message: 'New visitor on your website!',
        timestamp: new Date().toLocaleString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct visit',
        url: window.location.href
    };
    fetch('https://formspree.io/f/meevvpbz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorData)
    }).catch(err => console.log('Visitor notification sent'));
})();

// --- Hamburger menu toggle (all pages) ---
if (document.getElementById('navHamburger') && document.getElementById('navLinks')) {
    const navHamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    navHamburger.addEventListener('click', function() {
        navHamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    navHamburger.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            navHamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        }
    });
}

// --- Dropdown menu toggle (all pages) ---

// Dropdown menu smooth open/close (all pages)
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        // Only one dropdown open at a time
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item !== this.closest('.nav-item')) {
                item.classList.remove('active');
            }
        });
        const navItem = this.closest('.nav-item');
        navItem.classList.toggle('active');
    });
});
// Close dropdown when clicking outside (all pages)
document.addEventListener('click', function(e) {
    // Only close if click is outside any nav-item
    if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// --- treatments.html: Treatments dropdown jump navigation ---
document.addEventListener('DOMContentLoaded', function() {
    const jump = document.getElementById('treatment-jump');
    if (jump) {
        jump.addEventListener('change', function() {
            const val = jump.value;
            if (val) {
                const target = document.querySelector(val);
                if (target) {
                    target.scrollIntoView({behavior: 'smooth'});
                }
            }
        });
    }
});

// --- treatments.html & card.html: Dropdown menu for nav-dropdown (legacy) ---
const dropdownToggle = document.querySelector('.dropdown-toggle');
const navDropdown = document.querySelector('.nav-dropdown');
if (dropdownToggle && navDropdown) {
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        navDropdown.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
        if (!navDropdown.contains(e.target)) {
            navDropdown.classList.remove('open');
        }
    });
}

// --- contact.html: Contact form mailto ---
if (document.querySelector('.booking-form2 form')) {
    document.querySelector('.booking-form2 form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value || 'Contact Form Submission';
        const message = document.getElementById('message').value;
        const mailto = `mailto:Susanwilly9473@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message
        )}`;
        window.location.href = mailto;
    });
}
