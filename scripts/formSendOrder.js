import { callingModal } from "./callingModal.js"
import { disableClickAfterSend } from "./disableClickAfterSend.js"
import { sendMail } from "./sendMail.js"

export const formSendOrder = () => {
    const form = document.getElementById('form-for-sent')
    const formCalculate = document.getElementById('form-for-calculation')
    sessionStorage.getItem('form-data')
    form.addEventListener("submit", (e) => {
        if (form.checkValidity() && formCalculate.checkValidity() && sessionStorage.getItem('form-data')) {
            const data = JSON.parse(sessionStorage.getItem('form-data'))
            const date = form.querySelector('#date-form').value
            const time = form.querySelector('#time-form').value
            const phone = form.querySelector('#phone-form').value
            const comments = form.querySelector('#comments').value

            const fullData = { ...data, date: date, time: time, phone: phone, comments: comments }
            console.log(fullData);

            sendMail(fullData)
        }
    })
}