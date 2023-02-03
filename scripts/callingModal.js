export const callingModal = (err) => {
    const message = document.getElementById('departureWindow').querySelector('.modal-body')
    if (err) {
        message.innerText = "Заявка не отправлена, попробуйте еще раз!"
        message.style.color = 'red'
        jQuery.noConflict();
        $('#departureWindow').appendTo("body").modal("show")

    } else {
        const button = document.getElementById('sent-order')
        button.innerText = 'Спасибо, заявка отправлена'
        message.innerText = "Спасибо! Ваш заказ принят в обработку. \n В ближайшее время мы с вами свяжемся!"
        console.log(document.getElementById('departureWindow'));
        jQuery.noConflict();
        $('#departureWindow').appendTo("body").modal("show")
    }
}