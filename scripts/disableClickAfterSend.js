export const disableClickAfterSend = () => {
    const button = document.getElementById('sent-order')
    button.disabled = true;
    const section = document.querySelector('.container-form')

    const inputs = section.querySelectorAll('input')
    inputs.forEach((input)=>{
        input.addEventListener('change',()=>{
            button.disabled = false;
            button.innerText = 'Отправить заявку на перевозку'
        })
    })
    const selects = section.querySelectorAll('select')

    selects.forEach((select) => {
        select.addEventListener('change',() => {
            button.disabled = false;
            button.innerText = 'Отправить заявку на перевозку'
        })
    })
    const textAreas = section.querySelectorAll('textarea')

    textAreas.forEach((textArea) => {
        textArea.addEventListener('change', () => {
            button.disabled = false;
            button.innerText = 'Отправить заявку на перевозку'
        })
    })

    $('#datepicker').datepicker()
        .on("change", function (e) {
            button.disabled = false;
            button.innerText = 'Отправить заявку на перевозку'
        });
}
