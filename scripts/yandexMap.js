import { calculateCost } from "./calculateCosts.js";
import { createCostElement } from "./createCostElement.js";

export function yandexMap(start, finish) {
    const costBtnAmount = document.getElementById('btn-cost-amount')
    const btnSpinner = document.querySelector('#btn-spinner')

    const departInput = document.querySelector('#departure-city');
    const arrivalInput = document.querySelector('#arrival-city');
    if (start && finish) {
        costBtnAmount.disabled = true;

        btnSpinner.classList.add('active-spinner')
    }



    const element = document.getElementById('map').firstChild
    element && element.remove()
    const myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: ['routePanelControl']
    });

    // Получение ссылки на панель маршрутизации.
    let control = myMap.controls.get('routePanelControl');
    control.options.set({
        visible: false,
    });
    // Определение местоположения пользователя.
    const location = ymaps.geolocation.get();
    // Метод geolocation.get() возвращает Promise, который
    // будет разрешен коллекцией GeoObjectCollection.
    // Ссылка на эту коллекцию будет доступна в поле res.geoObjects.

    location.then(function (res) {
        // Получение адреса местоположения пользователя.
        const userTextLocation = typeof start == "string" ? start : res.geoObjects.get(0).properties.get('text');
        control.routePanel.state.set({
            // Флаг, запрещающий пользователям изменять
            // адрес начальной точки в поле ввода.
            fromEnabled: false,
            // Флаг, запрещающий пользователям изменять
            // адрес конечной точки в поле ввода.
            toEnabled: false,
            // В качестве начальной точки маршрута будет установлено
            // местоположение пользователя.
            from: userTextLocation,
            // Адрес конечной точки.
            to: finish || ''
        });
    });
    // Получение ссылки на панель.
    control = myMap.controls.get('routePanelControl');
    // Получение мультимаршрута.
    const multiRoutePromise = control.routePanel.getRouteAsync();

    multiRoutePromise.then(function (multiRoute) {
        // Подписка на событие обновления мультимаршрута.
        multiRoute.model.events.add('requestsuccess', function (event) {
            // Получение ссылки на активный маршрут.
            const activeRoute = multiRoute.getActiveRoute();
            // Когда панель добавляется на карту, она
            // создает маршрут с изначально пустой геометрией. 
            // Только когда пользователь выберет начальную и конечную точки,
            // маршрут будет перестроен с непустой геометрией.
            // Поэтому для избежания ошибки нужно добавить проверку,
            // что маршрут не пустой.
            if (activeRoute) {
                // Вывод информации об активном маршруте.
                // console.log("Длина: " + activeRoute.properties.get("distance").text);
                // console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
                const carSelectElement = document.getElementById('select-rate')
                const indexOptionElement = carSelectElement.options.selectedIndex
                const element = carSelectElement[indexOptionElement]
                const distance = activeRoute.properties.get("distance").text
                const carClass = element.getAttribute('type')
                const cost = calculateCost(distance, carClass)
                // console.log("Стоимость: " + cost);
                createCostElement(cost, activeRoute.properties.get("distance").text)

                costBtnAmount.disabled = false;
                btnSpinner.classList.remove('active-spinner')
            }

        }).add("requestfail", function (event) {
            createCostElement()
            departInput.setCustomValidity(false)
            arrivalInput.setCustomValidity(false)

            costBtnAmount.disabled = false;
            btnSpinner.classList.remove('active-spinner')

        });
    }, function (err) {
        console.log(err);
    });

}