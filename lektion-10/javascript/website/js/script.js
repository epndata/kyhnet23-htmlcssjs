const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target['confirmPassword'].value === e.target['password'].value) {

        const user = {
            firstName : e.target['firstName'].value,
            lastName : e.target['lastName'].value,
            streetName : e.target['streetName'].value,
            postalCode : e.target['postalCode'].value,
            city : e.target['city'].value,
            email : e.target['email'].value,
            password : e.target['password'].value,
            phoneNumber : e.target['phoneNumber'].value,
        }

    }
}