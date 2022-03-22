const email = document.querySelector(".email")
const id = document.querySelector(".id")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirmPassword")
const crtBtn = document.querySelector(".crtBtn")
const aldBtn = document.querySelector(".aldBtn")
const container = document.querySelector(".container")

let num = 0;

const changeModal = () => {
    num++
        if(num % 2 ==0) {
            email.classList.add("hidden")
            confirmPassword.classList.add("hidden")
         crtBtn.innerText ="Log In"
            aldBtn.innerText = "Don't you have Account?"
        }
        else{
            email.classList.remove("hidden")
            confirmPassword.classList.remove("hidden")
            id.value=""
            password.value=""
            email.value=""
            confirmPassword.value=""
         crtBtn.innerText ="Create Account"
            aldBtn.innerText = "Already have Account?"
        }
}

const getValue = () => {

    if(num % 2 == 0){
        const account = {
            email: email.value,
            id: id.value,
            password: password.value,
            confirmPassword: false
        }
            if(password.value === confirmPassword.value) {
                num++
                    account.confirmPassword = true
                    let createPermission = confirm("Create Account?")
                        if(createPermission){
                            console.log(createPermission)
                            console.log(account)
                            email.classList.add("hidden")
                            confirmPassword.classList.add("hidden")
                         crtBtn.innerText ="Log In"
                            aldBtn.innerText = "Don't you have Account?"
                            alert("succesfully created!")
                        }
                        else{
                            num--
                            alert("Cancled Creating Account.")
                        }
                }
                else{
                    alert("check your Password!")
                }
    }
    else{
        const id = id.value
        console.log(`${id}님이 로그인 하셨습니다.`)
    }
}

 crtBtn.addEventListener("click", getValue)
 aldBtn.addEventListener("click", changeModal)

 