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

//
const select = document.querySelector('.select__label');
const arrow = document.querySelector('.select__arrow');
const nav = document.querySelector('.region-nav');
const dropdown = document.querySelector('.drop-down-wrapper');

select.addEventListener('click', () => {
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    arrow.style.transform = 'rotateX(0deg)';
    nav.style.opacity = '1';
  } else {
    dropdown.classList.add('show');
    arrow.style.transform = 'rotateX(180deg)';
    nav.style.opacity = '0.1';
  }
});

const regions = [
  { region: 'Москва' },
  {
    region: 'Центр',
    cities: ['Воронеж', 'Ярославль', 'Белгород'],
  },
  {
    region: 'Северо-Запад',
    cities: ['Санкт - Петербург', 'Калининградд'],
  },
  {
    region: 'Юг',
    cities: ['Ростов-на-Дону', 'Краснодар', 'Волгоград'],
  },
  { region: 'Волга', cities: ['Казань', 'Самара', 'Уфа', 'Оренбург', 'Нижний Новгород'] },
  {
    region: 'Урал',
    cities: ['Екатеринбург', 'Челябинск', 'Пермь', 'Сургут', 'Тюмень', 'Ижевск'],
  },
  {
    region: 'Сибирь',
    cities: ['Новосибирск', 'Омск', 'Томск', 'Красноярск', 'Иркутск'],
  },
  {
    region: 'Дальний Восток',
    cities: ['Хабаровск', 'Владивосток'],
  },
];

regions.forEach((item) => {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  ul.classList.add('column-region');
  li.innerHTML = item.region;
  li.classList.add('column-region__main');
  ul.append(li);

  item.cities &&
    item.cities.forEach((city, ind) => {
      const li = document.createElement('li');
      li.innerHTML = city;
      ul.append(li);
    });

  dropdown.append(ul);
});
