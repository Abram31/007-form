export const callingModal = (err) => {
    const message = document.getElementById('departureWindow').querySelector('.modal-body')
    if (err) {
        message.innerText = "Заявка не отправлена, попробуйте еще раз!"
        message.style.color = 'red'
        $('#departureWindow').modal()
    } else {
        message.innerText = "Ваша заявка отправлена!"
        $('#departureWindow').modal()
    }
}