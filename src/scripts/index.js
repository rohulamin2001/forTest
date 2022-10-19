//**App Name: Advanced Note */
//**Author Name: Rohul Amin */
//**Version : 1.1 */

const form = document.forms[0]
const inpValue = form.elements[0]
const displayResult = document.querySelector(".display-container")
let count = 0;
let inpElement = null

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let value = inpValue.value.trim()
    if (value) {

        const liElement = createLiElement(inpValue.value)

        const span = SpanElement()
        liElement.appendChild(span)


        displayResult.appendChild(liElement).nextElementSibling
        inpValue.value = ""

        const [edit, favorite, remove] = liElement.children[1].children
        // Edit Your Item 

        edit.addEventListener("click", function (e) {
            let text = e.target.parentElement.parentElement.children[0].innerHTML
            console.log(text);
            inpValue.value = ""

            if (inpElement != null) {
                inpElement.remove()
            }
            inpElement = createInputElement(text)
            e.target.parentElement.previousElementSibling.parentElement.appendChild(inpElement)

            // displayResult.appendChild(inpElement)
            // this.parentElement.parentElement.insertAdjacentElement("beforeend",inpElement)




            // Modify the Input Box 
            inpElement.addEventListener("keypress", function (e) {
                const inputText = e.target.value;
                if (e.key === 'Enter') {
                    e.target.previousElementSibling.previousElementSibling.innerHTML = inputText
                    // e.target.previousElementSibling.children[0].innerHTML = inputText
                    e.target.remove()
                }
            })
        })

        // Set your item in favorite section 
        favorite.addEventListener("click", function () {


        })

        // Remove your item from this list 
        remove.addEventListener("click", function (e) {

            e.target.parentElement.parentElement.remove()

        })
    }
})

// Create Li Tag Function
function createLiElement(value) {
    count++;
    const li = document.createElement("li")
    li.className = "text-white bg-secondary py-2 px-1 h6 "
    const div = document.createElement('div')
    div.innerHTML = `${count}. ${value}`
    div.className = "main-text overflow-hidden"
    li.appendChild(div)
    return li

}

// Create span Element 
function SpanElement() {
    const spanElement = document.createElement("span")
    spanElement.className = "btn-group d-flex justify-content-end align-items-center"

    for (let i = 0; i <= 2; i++) {
        const btnName = ['Edit', 'Fevorite', 'Remove']
        const span = document.createElement("span")
        span.innerHTML = btnName[i]
        span.className = "badge bg-dark";
        if (i === 1) span.className += " mx-1"
        spanElement.appendChild(span)
    }
    return spanElement
}

// Create Input Tag Function
function createInputElement(value) {
    const input = document.createElement("input")
    input.className = "form-control my-1"
    input.value = value
    return input

}

// ==========================================================================

