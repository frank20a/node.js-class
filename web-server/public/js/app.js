fetch("/weather?address=Athens,Greece").then((res) => {
    res.json().then((data) => {
        if(data.error) {
            return console.log(data.error)
        }
        
        console.log(data.location)
        console.log(data.forecast)
    })
})

const searchForm = document.querySelector('form')
const searchVal = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

searchForm.addEventListener('submit', (e) => {
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    e.preventDefault()
    const location = searchVal.value

    fetch("/weather?address=" + location).then((res) => {

        res.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
                return console.log(data.error)
            }
            
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        })
    })
})