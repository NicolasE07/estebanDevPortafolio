const $form = document.querySelector('.form')
const $modal = document.querySelector('.modal')
const $button = document.querySelector('.card__button')
const $card = document.querySelector('.card')
const $cardTitle = document.querySelector('.card h2')
const $cardParrafo = document.querySelector('.card p')
const $loading = document.querySelector('.preloader')

$form.addEventListener('submit', handleSubmit)
$button.addEventListener('click', () => {
    $modal.classList.add('noShowModal')
    $card.classList.add('noShowModal')
})


const showCardSuccess = () => {
    $form.reset()
    $modal.classList.remove('noShowModal')
    $card.classList.remove('noShowModal')
    $loading.classList.add('display')
    $cardTitle.innerText = 'Thank you!'
    $cardParrafo.innerText = 'The form has been sent successfully!'

}

const showCardError = () => {
    $modal.classList.remove('noShowModal')
    $card.classList.remove('noShowModal')
    $loading.classList.add('display')
    $cardTitle.innerText = '¡Ups!'
    $cardParrafo.innerText = 'There was an error submitting the form'
}

async function handleSubmit(event) {
    $modal.classList.remove('noShowModal')
    $loading.classList.remove('display')
    try {
        event.preventDefault();
        const form = new FormData(this);
        const response = await fetch('https://formspree.io/f/xjvzbblw', {
            method: 'POST',
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            showCardSuccess()
        } else {
            showCardError()
        }
    } catch (error) {
        showCardError()
        console.error(error)
    }


}