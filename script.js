const profilePicture = document.querySelector('.profile-picture');
profilePicture.addEventListener('mouseover', () => {
    profilePicture.style.transform = 'scale(1.1)';
});
profilePicture.addEventListener('mouseout', () => {
    profilePicture.style.transform = 'scale(1)';
});