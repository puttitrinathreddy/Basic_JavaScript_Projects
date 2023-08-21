function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password , cpassword)
}

function checkusername(username)
{
    if(username.length > 7)
    {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('invalid_username').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('invalid_username').innerText='username must contain 8 letters'
    }
}

function checkemail(email)
{
    if(email.length>8 && email.includes('@gmail'))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('invalid_email').innerHTML=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('invalid_email').innerText='enter a valid email'
    }
}

function checkpassword(password)
{
    if(password.length>8 && password.includes('.'))
    {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('invalid_password').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('invalid_password').innerText='Enter a valid password with a . in it'
    }
}

function checkpasswordmatch(password , cpassword)
{
    if(password==cpassword && password!='')
    {
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('password_do_not_match').innerHTML='' 
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('password_do_not_match').innerText='password do not match'
    }
}
    
