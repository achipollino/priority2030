// $.get("https://www.pgups.ru/upload/iblock_rss_81.xml", function (data) {
//   // https://www.pgups.ru/bitrix/rss.php?ID=81&LANG=s1&TYPE=news&LIMIT=100
//   $(data)
//     .find("item")
//     .each(function () {
//       var element = $(this);

//       console.log("------------------------");
//       console.log("title      : " + element.find("title").text());
//       console.log("link       : " + element.find("link").text());
//       console.log("description: " + element.find("description").text());
//       console.log("enclosure  : " + element.find("enclosure").attr("url")); // Assuming enclosure has a url attribute
//       console.log("pubDate    : " + element.find("pubDate").text());
//     });
// });
