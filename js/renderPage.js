
const registrationPage = document.querySelector('.registration-page')
const firstLoginPage = document.querySelector('.first-login-page')
const secondLoginPage = document.querySelector('.second-login-page')
const welcomePage = document.querySelector('.welcome-page')

const checkOnload = () => {

    if (sessionStorage.getItem('page') == 'registration') {
        loadRegistrationPage('')
    }
<<<<<<< HEAD

    // document.querySelector('.content-wrapper').innerHTML = returnPage;
    // console.log(document.querySelector('.content-wrapper'))
}

const checkOnload = (page) => {
    // console.log(location.href.split(location.origin)[1])
    if (location.href.split(location.origin)[1] == '/index.html?signin=email')
        renderPage('login_with_mail')

    else if (sessionStorage.getItem('page') == 'registration') {
        renderPage('registration')
    }

=======
>>>>>>> 3743b646bb3035634587a4d9bed8323f388fe123
    else if (sessionStorage.getItem('page') == 'login_with_mail') {
        loadLoginPage('')
    }

    else if (sessionStorage.getItem('page') == 'login_with_password') {
        loadSecondLoginPage()
    }
    else {
        sessionStorage.setItem('page', 'registration')
    }

}
