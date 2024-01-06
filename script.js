function readmore2(){
    let cont = document.getElementById("cont")
    let btn = document.getElementById("btn")
    cont.innerHTML = `
    <p>lorem ipsum I Love Taco</p>
    ` 
    btn.style.display = 'none'
}
function readmore(){
    let cont2 = document.getElementById("cont2")
    let readmore = document.getElementById("readmore")
    cont2.innerHTML = `
    <p>lorem ipsum I Love Broccoli</p>
    ` 
    readmore.style.display = 'none'
}

function validation(){
    let name = document.getElementById("ss")
    let email = document.getElementById("qq")
    let pnum = document.getElementById("ww")
    let fom = document.getElementById("fom")
    let send = document.getElementById("send")
    
    if (email.value != "" && pnum.value != ""){
        fom.innerHTML =`
        <div class="container">
            <h4 class="d-flex justify-content-center">Your Name: ${name.value}</h4>
            <h4 class="d-flex justify-content-center">Your Email: ${email.value}</h4>
            <h4 class="d-flex justify-content-center">Your Message: ${send.value}</h4>
            <h4 class="d-flex justify-content-center">Your Phone Number: ${pnum.value}</h4>
            <h4 class="d-flex justify-content-center">Your Address: Egypt</h4>
        </div>
        `
        
        name.value = ""
        email.value = ""
        pnum.value = ""
        send.value = ""
    }else{
        alert("Please Complete The Form To Send")
        fom.innerHTML = ''
    }
}
