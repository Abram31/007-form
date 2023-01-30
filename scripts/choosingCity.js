export const choosingCity =() => {
    new ymaps.SuggestView('depart-place');
    new ymaps.SuggestView('arrival-place');
    document.addEventListener('error', (err) => console.log(err))
}