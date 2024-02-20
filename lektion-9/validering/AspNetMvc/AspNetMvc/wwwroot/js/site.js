let forms = document.querySelectorAll('form')
let inputs = forms[0].querySelectorAll('input')

inputs.forEach(input => {
    if (input.dataset.val === 'true') {
        input.addEventListener('keyup', (e) => {
            switch (e.target.type) {
                case 'text':
                    textValidator(e)
                    break;
                case 'email':
                    emailValidator(e)
                    break;
                case 'password':
                    passwordValidator(e)
                    break;
            }
        })
    }
})

const textValidator = (e, minLength = 2) => {
    try {
        var sibling = document.getElementById(e.target.id).nextElementSibling
    }
    catch { }

    if (e.target.value.length >= minLength) {
        try { sibling.innerHTML = "" }
        catch { }

        return true
    }

    try { sibling.innerHTML = e.target.dataset.valRequired }
    catch { console.warn('span element not found') }

    return false
}

const emailValidator = (e) => {
    let sibling = document.getElementById(e.target.id).nextElementSibling
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (regEx.test(e.target.value)) {
        sibling.innerHTML = ""
        return true
    }

    sibling.innerHTML = e.target.dataset.valRequired
    return false
}

const passwordValidator = (e) => {
    let sibling = document.getElementById(e.target.id).nextElementSibling
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    if (regEx.test(e.target.value)) {
        sibling.innerHTML = ""
        return true
    }

    sibling.innerHTML = e.target.dataset.valRequired
    return false
}