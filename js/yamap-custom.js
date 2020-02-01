/*ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
function init() {
  // функция - собиралка карты и фигни
  myMap = new ymaps.Map("map", {
    // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
    center: [59.939199, 30.321605], // ну тут центр
    behaviors: ["default", "scrollZoom"], // скроллинг колесом
    zoom: 17, // тут масштаб
    controls: []
  });

  /* Создаем кастомные метки */
/* myPlacemark0 = new ymaps.Placemark(
    [59.938631, 30.323055],
    {
      // Создаем метку с такими координатами и суем в переменную
      balloonContent:
        '<div class="ballon"><span>Nёrds design studio</span><br/><p>Мир никогда не будет прежним после того как увидит Ваш сайт!</p></div>' // сдесь содержимое балуна в формате html, все стили в css
    },
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.png",
      iconImageSize: [231, 190],
      iconImageOffset: [-40, -220]
    }
  );
  /* Добавляем */
/*myMap.geoObjects.add(myPlacemark0);

  /* Фикс кривого выравнивания кастомных балунов */
/*myMap.geoObjects.events.add(["balloonopen"], function(e) {
    var geoObject = e.get("target");
    myMap.panTo(geoObject.geometry.getCoordinates(), {
      delay: 0
    });
  });
}*/

ymaps.ready(function() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.939199, 30.321605],
        zoom: 17,
        controls: []
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [59.938631, 30.323055],
      {
        hintContent: "Собственный значок метки с контентом",
        balloonContent: "А эта — новогодняя",
        iconContent: "12"
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "img/map-marker.png",
        // Размеры метки.
        iconImageSize: [231, 190],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -190],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
});
