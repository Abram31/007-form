// import { callingModal } from "./callingModal.js";
import { disableClickAfterSend } from "./disableClickAfterSend.js";

export const sendMail = (data) => {
    emailjs.send('service_ozq14mp', 'template_lyxtzbj', data)
        .then((result) => {
            disableClickAfterSend()
            callingModal()
        }, (error) => {
            callingModal(error)
            console.log(error.text);
        });
}