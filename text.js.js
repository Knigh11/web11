const username = document.getElementById('username')
const password = document.getElementById('password')
const loginBtn = document.querySelector('form .submit')

const username_pattern = /^[a-z 0-9_-]{3,16}$/
const password_pattern = /^[A-Z 0-9_\.]{6,32}$/

const username_error = document.querySelector(".username_error")
const password_error = document.querySelector(".password_error")

loginBtn.addEventListener('click', (event) => {
    let error = []
    let value_username = username.value
    let value_password = password.value
    if (value_username.length == 0) {
        error.push('username')
        username_error.style.display = 'block'
        username_error.textContent = 'Bạn chưa nhập tài khoảng'
    } else {
        if (!value_username.match(username_pattern)) {
            error.push('username')
            username_error.style.display = 'block'
            username_error.textContent = 'Tài khoảng không đúng'
        } else {
            delete error['username']
            username_error.style.display = 'none'
        }
    }

    if (value_password.length == 0) {
        error.push('password')
        password_error.getElementsByClassName.display = 'block'
        password_error.textContent = 'Bạn chưa nhập mật khẩu'
    } else {
        if (!value_password.match(password_pattern)) {
            error.push('username')
            password_error.style.display = 'block'
            password_error.textContent = 'Mật khẩu không đúng'
        } else {
            delete error['password']
            password_error.style.display = 'none'
        }
    }
    if (error.length === 0) {
        loginBtn.textContent = "Đang đăng nhập..."
        loginBtn.style.background = '#1d257d'
        event.preventDefault()
    } else {
        event.preventDefault()
    }
})