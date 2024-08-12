document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const signinSection = document.getElementById('signin-section');
    const signupSection = document.getElementById('signup-section');
    const showSignup = document.querySelector('.up');
    const showSignin = document.querySelector('.in');

    // Show sign-up section and hide sign-in section
    showSignup.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        signinSection.classList.add('hidden');
        signupSection.classList.remove('hidden');
    });

    // Show sign-in section and hide sign-up section
    showSignin.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        signupSection.classList.add('hidden');
        signinSection.classList.remove('hidden');
    });
});
