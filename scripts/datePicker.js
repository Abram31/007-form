export const datePicker = () => $(function () {
    $('#datepicker').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        });
});

export const datePickerListener = (button) => function ($) {
    $('#datepicker').datepicker()
    .on("change", function (e) {
        button.disabled = false;
        button.innerText = 'Отправить заявку на перевозку'
    });
}