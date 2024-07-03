const input = document.querySelector('input')
const h1 = document.querySelector('h1')

// input.addEventListener('change', () => {
//     console.log("sdkfljsdf")
// })

input.addEventListener('input', () => {
    if (!input.value) {
        h1.innerText = "Type below:"
    } else {
        h1.innerText = input.value
    }
})