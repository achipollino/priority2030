function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
  
        // Получим все элементы с классом tabcontent и спрячем их
        tabcontent = document.getElementsByClassName(".tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    
        // Получим все элементы с классом tablinks и удалим активный класс
        tablinks = document.getElementsByClassName(".tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(".active", " ");
        }
    
        // Покажем текущую вкладку и добавим активный класс на кнопку, которая откроет вкладку с ID по названию
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += ".active";
}

  