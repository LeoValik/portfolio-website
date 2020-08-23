$(".main").onepage_scroll({
    sectionContainer: "section", // контейнер, к которому будет применяться скролл
    easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
    animationTime: 1000, // время анимации
    pagination: true, // скрыть или отобразить пагинатор
    updateURL: false // обновлять URL или нет
});

/*
$('.download').on('click', function(){
	var link = document.createElement('a');
	link.setAttribute('href', '/cv/Valentyn_Troian_CV.pdf');
	link.setAttribute('download', 'Valentyn_Troian_CV.pdf');
	link.click();
	return false;
});*/