let currentPage = 1;
const newsPerPage = 10;
let totalPages = 1;
var scrolled=0;

$(document).ready(function () {
  loadRSS();

  $("#prevPage").on("click" ,function(){
    scrolled=scrolled+100;

    $("html, body").animate({
            scrollTop:  $("#news-title").offset().top
       });
  });

  $("#nextPage").on("click" ,function(){
    scrolled=scrolled+100;

    $("html, body").animate({
            scrollTop:  $("#news-title").offset().top
       });
  });
});

function loadRSS() {
  try {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          parseRSS(xhr.responseText);
          updatePageNumber(); // Обновляем номер текущей страницы и скрываем кнопку
        } else {
          console.error("Ошибка загрузки RSS: " + xhr.status);
        }
      }
    };
    xhr.open("GET", "../files/news.rss", true);
    xhr.send();
  } catch (error) {
    console.error("Ошибка загрузки RSS:", error);
  }
}

function parseRSS(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const items = xmlDoc.querySelectorAll("item");
  const newsSection = document.getElementById("news_section");
  
  // Очистим секцию новостей перед загрузкой новых
  newsSection.innerHTML = '';

  totalPages = Math.ceil(items.length / newsPerPage);

  // Вычислим индекс первой новости на текущей странице
  const startIndex = (currentPage - 1) * newsPerPage;
  // Вычислим индекс последней новости на текущей странице
  const endIndex = startIndex + newsPerPage;

  items.forEach(function (item, index) {
    if (index >= startIndex && index < endIndex) {
      // Отобразим только новости для текущей страницы
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const idlink = link.split("=")[1];
      const description = item.querySelector("description").textContent;

      const dateString = item.querySelector("pubDate").textContent;
      const date = new Date(dateString);

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDate = `${day}.${month}.${year}`;

      const newsItem = document.createElement("div");
      newsItem.classList.add("cell");
      newsItem.innerHTML = `
          <div class="new-data">
              <div class="date">${formattedDate}</div>
              <div class="preview">
                  <img src="${item
                    .querySelector("enclosure")
                    .getAttribute("url")}" alt="" class="img-preview" />
              </div>
          </div>
          <div class="new-content">
              <hr />
              <div class="new-title">
                  <h3><a class="news-link" href='https://www.pgups.ru/prioritet-2030/news_prioritet2030/?ELEMENT_ID=${idlink}'>${title}</a></h3>
              </div>
              <div class="new-description">
                <p class="new-text">${description}</p>
              </div>
          </div>
      `;
      newsSection.appendChild(newsItem);
    }
  });
}

function updatePageNumber() {
  const pageNumberElement = document.getElementById("currentPage");
  pageNumberElement.textContent = `${currentPage}`;

  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");

  // Скрываем кнопку "Предыдущая страница" на первой странице
  if (currentPage === 1) {
    prevPageButton.style.display = "none";
  } else {
    prevPageButton.style.display = "inline-block";
  }

  // Скрываем кнопку "Следующая страница" на последней странице
  if (currentPage === totalPages) {
    nextPageButton.style.display = "none";
  } else {
    nextPageButton.style.display = "inline-block";
  }
}

document.getElementById("prevPage").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    loadRSS();
    updatePaginationButtonsVisibility(); // Обновляем видимость кнопок пагинации
  }
});

document.getElementById("nextPage").addEventListener("click", function () {
  currentPage++;
  loadRSS();
  updatePaginationButtonsVisibility(); // Обновляем видимость кнопок пагинации
});