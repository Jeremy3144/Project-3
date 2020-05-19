

const btnNewUser = document.querySelector('.btnNewUser')

btnNewUser.addEventListener('click', e => {
    e.preventDefault()

    var params = {
        username: document.querySelector('.username').value,
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value
    }

    const url = 'http://localhost:8080/api/users/new'
    
    axios.post(url, params).then(res => {
        console.log('bug')
    })

})




const btnNewPet = document.querySelector('.btnNewPet')

btnNewPet.addEventListener('click', e => {
    e.preventDefault()

    var params = {
        userId: document.querySelector('.userId').value,
        species: document.querySelector('.species').value,
        dob: document.querySelector('.dob').value,
        name: document.querySelector('.name').value,
        image_url: document.querySelector('.image_url').value
    }

    const url = 'http://localhost:8080/api/pets/new'
    
    axios.post(url, params).then(res => {
        console.log('bug')
    })

})