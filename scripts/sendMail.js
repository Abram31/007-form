import { callingModal } from "./callingModal.js";

export const sendMail = (data) => {
    emailjs.send('service_ozq14mp', 'template_lyxtzbj', data)
        .then((result) => {
            // // console.log(result.text);
            // message.classList.add('successfully')
            // const message = document.getElementById('departureWindow').querySelector('.modal-body')
            // message.style.color = '#64cc6e'
            // message.innerText = "Ваша заявка отправлена!"
            // $('#departureWindow').modal()
            callingModal()
        }, (error) => {
            callingModal(error)
            // const message = document.getElementById('message-about-send')
            // message.classList.add('err')
            // message.style.color = 'red'
            // message.innerText = "Заявка не отправлена, попробуйте еще раз!"
            console.log(error.text);
        });
}