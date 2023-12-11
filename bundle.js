(()=>{"use strict";const t=document.querySelectorAll(".business-areas__item");t.forEach((e=>{e.addEventListener("click",(e=>{const i=e.currentTarget;i.classList.contains("active")?i.classList.remove("active"):(t.forEach((t=>{t.classList.contains("active")&&t.classList.remove("active")})),i.classList.add("active"))}))}));const e=[{region:"Москва",cities:[""]},{region:"Центр",cities:["Воронеж","Ярославль","Белгород"]},{region:"Северо-Запад",cities:["Санкт - Петербург","Калининградд"]},{region:"Юг",cities:["Ростов-на-Дону","Краснодар","Волгоград"]},{region:"Волга",cities:["Казань","Самара","Уфа","Оренбург","Нижний Новгород"]},{region:"Урал",cities:["Екатеринбург","Челябинск","Пермь","Сургут","Тюмень","Ижевск"]},{region:"Сибирь",cities:["Новосибирск","Омск","Томск","Красноярск","Иркутск"]},{region:"Дальний Восток",cities:["Хабаровск","Владивосток"]}],i=document.querySelector(".select__label"),s=document.querySelector(".select__arrow"),o=document.querySelector(".region-nav"),l=document.querySelector(".drop-down-wrapper"),n=document.querySelector(".map"),r=document.querySelector(".map__capture");let p=!1;function c(t,e){document.querySelectorAll(".map__marker").forEach((t=>t.remove())),t.forEach((t=>{t.cities&&t.cities.forEach(((t,i)=>{const s=document.createElement("div");document.createElement("li"),s.classList.add("map__marker"),s.innerHTML=` <div class="map__marker-circle"></div>\n                                  <p class="map__marker-title">${function(t){return t?"Нижний Новгород"===t?"Н. Новгород":t:"Москва"}(t)}</p>\n                                `,function(t,e,i){"Калининградд"===t&&e.setAttribute("style",`top:${i?93:124}px; left:${i?5:8}px;`),"Санкт - Петербург"===t&&e.setAttribute("style",`top:${i?99:136}px; left:${i?74:110}px; font-size: 16px; line-height: 16px;`),"Ярославль"===t&&e.setAttribute("style",`top: ${i?149:196}px; left: ${i?115:156}px;`),""===t&&e.setAttribute("style",`top: ${i?168:225}px; left: ${i?93:125}px; font-size: 14px; line-height: 14px;`),"Воронеж"===t&&e.setAttribute("style",`top: ${i?184:246}px; left: ${i?53:75}px;`),"Нижний Новгород"===t&&e.setAttribute("style",`top: ${i?193:260}px; left: ${i?124:166}px;`),"Белгород"===t&&e.setAttribute("style",`top: ${i?209:276}px; left: ${i?49:72}px;`),"Ростов-на-Дону"===t&&e.setAttribute("style",`top: ${i?236:319}px; left: ${i?29:42}px; font-size: 14px; line-height: 14px;`),"Волгоград"===t&&e.setAttribute("style",`top: ${i?271:360}px; left: ${i?61:88}px;`),"Краснодар"===t&&e.setAttribute("style",`top: ${i?277:373}px; left: ${i?12:19}px; font-size: 14px; line-height: 14px;`),"Самара"===t&&e.setAttribute("style",`top: ${i?223:304}px; left: ${i?122:173}px;`),"Казань"===t&&e.setAttribute("style",`top: ${i?220:298}px; left: ${i?165:238}px;`),"Уфа"===t&&e.setAttribute("style",`top: ${i?248:336}px; left: ${i?177:249}px;`),"Оренбург"===t&&e.setAttribute("style",`top: ${i?269:364}px; left: ${i?140:201}px;`),"Ижевск"===t&&e.setAttribute("style",`top: ${i?211:290}px; left: ${i?227:316}px;`),"Пермь"===t&&e.setAttribute("style",`top: ${i?216:300}px; left: ${i?267:366}px; font-size: 14px; line-height: 14px;`),"Екатеринбург"===t&&e.setAttribute("style",`top: ${i?242:328.5}px; left: ${i?203:294}px;`),"Челябинск"===t&&e.setAttribute("style",`top: ${i?266:362.5}px; left: ${i?204:292}px; font-size: 14px; line-height: 14px;`),"Сургут"===t&&e.setAttribute("style",`top: ${i?228:312}px; left: ${i?303:433}px;`),"Тюмень"===t&&e.setAttribute("style",`top: ${i?269:362}px; left: ${i?280:394}px; font-size: 14px; line-height: 14px;`),"Омск"===t&&e.setAttribute("style",`top:${i?346:474}px; left:${i?320:448}px; font-size: 14px; line-height: 14px;`),"Новосибирск"===t&&e.setAttribute("style",`top: ${i?333:455}px; left: ${i?339:484}px;`),"Томск"===t&&e.setAttribute("style",`top: ${i?338:461}px; left: ${i?402:564}px; font-size: 14px; line-height: 14px;`),"Красноярск"===t&&e.setAttribute("style",`top: ${i?336:458}px; left: ${i?435:610}px;`),"Иркутск"===t&&e.setAttribute("style",`top: ${i?360:489}px; left: ${i?485:673}px; font-size: 14px; line-height: 14px;`),"Хабаровск"===t&&e.setAttribute("style",`top: ${i?364:495}px; left: ${i?683:955}px; font-size: 16px; line-height: 16px;`),"Владивосток"===t&&e.setAttribute("style",`top: ${i?419:574}px; left: ${i?667:935}px; font-size: 16px; line-height: 16px;`)}(t,s,e),r.append(s)}))}))}window.innerWidth<524&&(p=!0,c(e,!0)),e.forEach((t=>{const e=document.createElement("ul"),i=document.createElement("li"),s=document.createElement("svg");s.innerHTML='<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>\n                  </svg>\n                  ',e.classList.add("column-region"),i.innerHTML=t.region,i.append(s),i.classList.add("column-region__main"),e.append(i),t.cities&&t.cities.forEach(((t,i)=>{const s=document.createElement("li");s.innerHTML=t,e.append(s)})),l.append(e)})),i.addEventListener("click",(()=>{l.classList.contains("show")?(l.classList.remove("show"),s.style.transform="rotateX(0deg)",o.style.opacity="1",o.style.pointerEvents="visible",r.style.opacity="1",window.innerWidth<524&&(document.body.style.overflow="visible",n.style.overflowX="auto")):(l.classList.add("show"),s.style.transform="rotateX(180deg)",o.style.opacity="0.1",o.style.pointerEvents="none",r.style.opacity="0.2",window.innerWidth<524&&(document.body.style.overflow="hidden",n.style.overflowX="hidden"))}));const a=o.querySelectorAll("li");a.forEach((t=>{t.addEventListener("click",(t=>{a.forEach((t=>{t.classList.contains("active-nav")&&t.classList.remove("active-nav")}));const i=t.target;i.classList.add("active-nav"),c(e.filter((t=>"Все"===i.innerHTML||t.region===i.innerHTML)),p)}))})),c(e,p),document.querySelectorAll(".column-region").forEach((t=>{const e=t.childNodes[0];e.addEventListener("click",(i=>{const s=e.childNodes[1];t.classList.contains("active")?(t.classList.remove("active"),s.style.transform="rotateX(0deg)"):(t.classList.add("active"),s.style.transform="rotateX(180deg)")}))}))})();