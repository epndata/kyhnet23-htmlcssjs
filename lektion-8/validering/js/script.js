function handleSubmit(e) {
    e.preventDefault()
    console.clear()

    for(let element of e.target) {

        if (element.required) {

            switch(element.type) {
                case "text":
                    validateName(element)
                    break
                case "password":
                    validatePassword(element)
                    break
                case "email":
                    validateEmail(element)
                    break
            }

        }
    }
}

function validateName(element) {
    if (element.value.length === 0)
        console.log('du måste ange ett namn')
    else if (element.value.length < 2)
        console.log('du måste ange ett giltigt namn')
}

function validateEmail(element) {
    if (element.value.length === 0)
        console.log('du måste ange en e-postadress')
    else if (element.value.length < 3)
        console.log('du måste ange en giltigt e-postadress')
}

function validatePassword(element) {
    if (element.value.length === 0)
        console.log('du måste ange ett lösenord')
    else if (element.value.length < 8)
        console.log('du måste ange ett giltigt lösenord')
}