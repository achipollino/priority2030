$(document).ready(function () {
  new WOW({
    animateClass: "animate__animated",
  }).init();

  $(".moreNews").click(function () {
    $(".news-items li").removeClass("hidden");
    $(".all-news").removeClass("hidden");
    $(this).hide();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //displayFirstSixNews(); // Подгрузка XML
});

function displayFirstSixNews() {
  try {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          parseFirstSixNews(xhr.responseText);
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

function parseFirstSixNews(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const items = xmlDoc.querySelectorAll("item");
  const newsSection = document.getElementById("news");

  const newsItems = newsSection.querySelector(".news-items");
  newsItems.innerHTML = ''; // Очистим блок новостей перед загрузкой новых

  for (let i = 0; i < Math.min(items.length, 6); i++) {
    const item = items[i];
    const title = item.querySelector("title").textContent;
    const link = item.querySelector("link").textContent;
    const idlink = link.split('=')[1];
    // const description = item.querySelector("description").textContent;

    const dateString = item.querySelector("pubDate").textContent;
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    const imgSrc = item.querySelector("enclosure").getAttribute("url");

    const newsItem = document.createElement("li");
    newsItem.classList.add("wow", "animate__fadeInLeft");

    if (i < 3) {
      newsItem.classList.add("animate__fadeInLeft");
    } else {
      newsItem.classList.add("hidden");
    }

    newsItem.innerHTML = `
      <a href="https://www.pgups.ru/prioritet-2030/news_prioritet2030/?ELEMENT_ID=${idlink}" class="news__link">
        <img src="${imgSrc}" alt="" />
        <h3 class="news-title">${title}</h3>
        <span class="news__date">${formattedDate}</span>
      </a>
    `;
    newsItems.appendChild(newsItem);
  }
}