
const pwd = document.getElementById('pwd');
const pwdBtn = document.getElementById('pwdBtn');



pwdBtn.addEventListener('click', generatePwd);

function generatePwd() {
    let password = '';

    let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    for(let i=0;i<7;i++){
        let singlevalue = Math.floor(Math.random() * values.length+1);

        password += values.charAt(singlevalue);
    }
    console.log(password)
    pwd.innerText = password;
}