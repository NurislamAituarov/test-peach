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

//   добавление регионов и городов
const regions = [
  { region: 'Москва', cities: [''] },
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
const select = document.querySelector('.select__label');
const arrow = document.querySelector('.select__arrow');
const nav = document.querySelector('.region-nav');
const dropdown = document.querySelector('.drop-down-wrapper');
const wrapper_map = document.querySelector('.map');
const map = document.querySelector('.map__capture');

let isMobile = false;
if (window.innerWidth < 524) {
  isMobile = true;
  addMarkersToMap(regions, true);
}

regions.forEach((item) => {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const svg = document.createElement('svg');
  svg.innerHTML = `<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>
                  </svg>
                  `;

  ul.classList.add('column-region');
  li.innerHTML = item.region;
  li.append(svg);
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

select.addEventListener('click', () => {
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    arrow.style.transform = 'rotateX(0deg)';
    nav.style.opacity = '1';
    nav.style.pointerEvents = 'visible';
    map.style.opacity = '1';

    if (window.innerWidth < 524) {
      document.body.style.overflow = 'visible';
      wrapper_map.style.overflowX = 'auto';
    }
  } else {
    dropdown.classList.add('show');
    arrow.style.transform = 'rotateX(180deg)';
    nav.style.opacity = '0.1';
    nav.style.pointerEvents = 'none';
    map.style.opacity = '0.2';

    if (window.innerWidth < 524) {
      document.body.style.overflow = 'hidden';
      wrapper_map.style.overflowX = 'hidden';
    }
  }
});

//   шаги по добавлению маркера на карту
function addMarkersToMap(regions, isMobile) {
  const map__markers = document.querySelectorAll('.map__marker');
  map__markers.forEach((marker) => marker.remove());

  regions.forEach((item) => {
    item.cities &&
      item.cities.forEach((city, ind) => {
        const map__marker = document.createElement('div');
        const li = document.createElement('li');
        map__marker.classList.add('map__marker');
        map__marker.innerHTML = ` <div class="map__marker-circle"></div>
                                  <p class="map__marker-title">${getNameCity(city)}</p>
                                `;

        indicatePlaceMap(city, map__marker, isMobile);
        map.append(map__marker);
      });
  });
}

function getNameCity(city) {
  if (!city) {
    return 'Москва';
  }

  if (city === 'Нижний Новгород') {
    return 'Н. Новгород';
  }

  return city;
}

function indicatePlaceMap(city, marker, isMobile) {
  if (city === 'Калининградд') {
    marker.setAttribute('style', `top:${isMobile ? 93 : 124}px; left:${isMobile ? 5 : 8}px;`);
  }
  if (city === 'Санкт - Петербург') {
    marker.setAttribute(
      'style',
      `top:${isMobile ? 99 : 136}px; left:${
        isMobile ? 74 : 110
      }px; font-size: 16px; line-height: 16px;`,
    );
  }

  if (city === 'Ярославль') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 149 : 196}px; left: ${isMobile ? 115 : 156}px;`,
    );
  }

  if (city === '') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 168 : 225}px; left: ${
        isMobile ? 93 : 125
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Воронеж') {
    marker.setAttribute('style', `top: ${isMobile ? 184 : 246}px; left: ${isMobile ? 53 : 75}px;`);
  }

  if (city === 'Нижний Новгород') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 193 : 260}px; left: ${isMobile ? 124 : 166}px;`,
    );
  }

  if (city === 'Белгород') {
    marker.setAttribute('style', `top: ${isMobile ? 209 : 276}px; left: ${isMobile ? 49 : 72}px;`);
  }

  if (city === 'Ростов-на-Дону') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 236 : 319}px; left: ${
        isMobile ? 29 : 42
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Волгоград') {
    marker.setAttribute('style', `top: ${isMobile ? 271 : 360}px; left: ${isMobile ? 61 : 88}px;`);
  }

  if (city === 'Краснодар') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 277 : 373}px; left: ${
        isMobile ? 12 : 19
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Самара') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 223 : 304}px; left: ${isMobile ? 122 : 173}px;`,
    );
  }

  if (city === 'Казань') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 220 : 298}px; left: ${isMobile ? 165 : 238}px;`,
    );
  }

  if (city === 'Уфа') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 248 : 336}px; left: ${isMobile ? 177 : 249}px;`,
    );
  }

  if (city === 'Оренбург') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 269 : 364}px; left: ${isMobile ? 140 : 201}px;`,
    );
  }

  if (city === 'Ижевск') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 211 : 290}px; left: ${isMobile ? 227 : 316}px;`,
    );
  }

  if (city === 'Пермь') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 216 : 300}px; left: ${
        isMobile ? 267 : 366
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Екатеринбург') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 242 : 328.5}px; left: ${isMobile ? 203 : 294}px;`,
    );
  }

  if (city === 'Челябинск') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 266 : 362.5}px; left: ${
        isMobile ? 204 : 292
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Сургут') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 228 : 312}px; left: ${isMobile ? 303 : 433}px;`,
    );
  }

  if (city === 'Тюмень') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 269 : 362}px; left: ${
        isMobile ? 280 : 394
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Омск') {
    marker.setAttribute(
      'style',
      `top:${isMobile ? 346 : 474}px; left:${
        isMobile ? 320 : 448
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Новосибирск') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 333 : 455}px; left: ${isMobile ? 339 : 484}px;`,
    );
  }

  if (city === 'Томск') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 338 : 461}px; left: ${
        isMobile ? 402 : 564
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Красноярск') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 336 : 458}px; left: ${isMobile ? 435 : 610}px;`,
    );
  }

  if (city === 'Иркутск') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 360 : 489}px; left: ${
        isMobile ? 485 : 673
      }px; font-size: 14px; line-height: 14px;`,
    );
  }

  if (city === 'Хабаровск') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 364 : 495}px; left: ${
        isMobile ? 683 : 955
      }px; font-size: 16px; line-height: 16px;`,
    );
  }

  if (city === 'Владивосток') {
    marker.setAttribute(
      'style',
      `top: ${isMobile ? 419 : 574}px; left: ${
        isMobile ? 667 : 935
      }px; font-size: 16px; line-height: 16px;`,
    );
  }
}

const nav_lists = nav.querySelectorAll('li');

nav_lists.forEach((list) => {
  list.addEventListener('click', (event) => {
    nav_lists.forEach((list) => {
      if (list.classList.contains('active-nav')) {
        list.classList.remove('active-nav');
      }
    });

    const tab = event.target;
    tab.classList.add('active-nav');
    const filteredRegions = regions.filter((region) => {
      if (tab.innerHTML === 'Все') return true;

      return region.region === tab.innerHTML;
    });

    addMarkersToMap(filteredRegions, isMobile);
  });
});

addMarkersToMap(regions, isMobile);

// добавление всплыва́ющего списка городов
const region__mains = document.querySelectorAll('.column-region');

region__mains.forEach((column) => {
  const region = column.childNodes[0];
  region.addEventListener('click', (event) => {
    const svg = region.childNodes[1];
    if (column.classList.contains('active')) {
      column.classList.remove('active');
      svg.style.transform = 'rotateX(0deg)';
    } else {
      column.classList.add('active');
      svg.style.transform = 'rotateX(180deg)';
    }
  });
});
