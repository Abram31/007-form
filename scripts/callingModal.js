export const callingModal = (err) => {
    const message = document.getElementById('departureWindow').querySelector('.modal-body')
    if (err) {
        message.innerText = "Заявка не отправлена, попробуйте еще раз!"
        message.style.color = 'red'
        $('#departureWindow').modal()
    } else {
        const button = document.getElementById('sent-order')
        button.innerText = 'Спасибо, заявка отправлена'
        message.innerText = "Спасибо! Ваш заказ принят в обработку. \n В ближайшее время мы с вами свяжемся!"
        $('#departureWindow').modal()
    }
}