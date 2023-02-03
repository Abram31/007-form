import { callingModal } from "./callingModal.js"
// import { costs } from "./price.js"
import { yandexMap } from "./yandexMap.js"

export const formCalculate = () => {
    sessionStorage.removeItem('form-data')
    const form = document.getElementById('form-for-calculation')
    form.addEventListener("submit", (e) => {
        if (form.checkValidity()) {
            const depart = form.querySelector('#depart-place').value
            const arrival = form.querySelector('#arrival-place').value

            const carSelectElement = form.querySelector('#select-rate')
            const indexOptionElement = carSelectElement.options.selectedIndex
            const element = carSelectElement[indexOptionElement]
            const carClass = element.getAttribute('type')

            yandexMap(depart, arrival)

            const formData = {
                depart: depart,
                arrive: arrival,
                carClass: costs.find(classAuto => classAuto.type === carClass).name

            }
            console.log(formData);
            sessionStorage.setItem('form-data', JSON.stringify(formData))
        }




    })

}
