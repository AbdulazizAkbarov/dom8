const container = document.getElementById('faq-container');
const ochish = document.getElementById('expand-all');
const yopish = document.getElementById('collapse-all');
const findLocationBtn = document.getElementById('find-location');
const sanagich = document.getElementById('visible-count');
const locations = document.getElementById('location-info');

const count = () => {
  const visibleAnswers = document.querySelectorAll('.answer.visible').length;
  sanagich.textContent = `Visible Answers: ${visibleAnswers}`;
};

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('question')) {
    const answer = e.target.nextElementSibling;
    const parent = e.target.parentElement;

    answer.classList.toggle('visible');
    parent.classList.toggle('active');
    count();
  }
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('favorite-btn')) {
    e.stopPropagation();
    alert('Marked as Favorite!');
  }
});


ochish.addEventListener('click', () => {
  document.querySelectorAll('.answer').forEach(answer => {
    answer.classList.add('visible');
    answer.parentElement.classList.add('active');
  });
  count();
});

yopish.addEventListener('click', () => {
  document.querySelectorAll('.answer').forEach(answer => {
    answer.classList.remove('visible');
    answer.parentElement.classList.remove('active');
  });
  count();
});


findLocationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locations.textContent = `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`;
      },
      () => {
        locations.textContent = 'Unable to retrieve location.';
      }
    );
  } else {
    locations.textContent = 'Geolocation is not supported by your browser.';
  }
});

count();