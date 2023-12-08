import 'normalize.css';
import './styles/main.scss';

const business_areas_items = document.querySelectorAll('.business-areas__item');

business_areas_items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const currentTarget = e.currentTarget;
    if (currentTarget.classList.contains('active')) {
      currentTarget.classList.remove('active');
    } else {
      closeBusinessAreaInfo();
      currentTarget.classList.add('active');
    }
  });
});

function closeBusinessAreaInfo() {
  business_areas_items.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
}
