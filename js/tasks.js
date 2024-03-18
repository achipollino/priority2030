'strict'

function openTab(evt, tabName) {
  // Получим все элементы с классом tabcontent и спрячем их
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"; 
  }

  // Получим все элементы с классом tablinks и удалим активный класс
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Покажем текущую вкладку и добавим активный класс на кнопку, которая откроет вкладку с ID по названию
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Вызываем функцию openTab сразу после загрузки страницы для активации вкладки "Management"
window.onload = function() {
  openTab(document.getElementById("defaultOpen"), 'Management');
};

function getCurrentEvent(objectEvent) {
  var targ;
  if (!objectEvent) var objectEvent = window.event;
  if (objectEvent.target) targ = objectEvent.target;
  else if (objectEvent.srcElement) targ = objectEvent.srcElement;
  if ('nodeType' in objectEvent)
    if (objectEvent.nodeType == 3) targ = targ.parentNode; // defeat Safari bug
}