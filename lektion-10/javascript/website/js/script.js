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

        fetch('https://localhost:7261/api/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)   
        })
        .then(res => {
            if (res.status === 201)
                console.log('user was created successfully.')

            if (res.status === 409)
                console.log('user with the same email address already exists.')

            if (res.status === 400)
                console.log('Incorrect form data was submitted.')
        })
    }
}