function newt(){
    document.getElementById('freee').style.background = 'none'
    document.getElementById('newt').style.background = 'blue'
    document.getElementById('jspin').style.display = 'none'
    document.getElementById('jspin1').style.display = 'block'
    document.getElementById('learnhow').style.display = 'none'
    document.getElementById('learnhow1').style.display = 'block'
    document.getElementById('learnhow2').style.display = 'block'
    document.getElementById('learnhow3').style.display = 'block'
    document.getElementById('learnhow4').style.display = 'block'
    document.getElementById('jspin2').style.display = 'block'
    document.getElementById('jspin3').style.display = 'block'
    document.getElementById('jspin4').style.display = 'block'
    document.getElementById('jspina').style.display = 'none'
    document.getElementById('jspinc').style.display = 'none'
    document.getElementById('jspine').style.display = 'none'
    document.getElementById('learnhowb').style.display = 'none'
    document.getElementById('learnhowd').style.display = 'none'
    document.getElementById('learnhowf').style.display = 'none'
    
}

function free(){
    document.getElementById('freee').style.background = 'blue'
    document.getElementById('newt').style.background = 'none'
    document.getElementById('jspin').style.display = 'block'
    document.getElementById('jspin1').style.display = 'none'
    document.getElementById('learnhow').style.display = 'block'
    document.getElementById('learnhow1').style.display = 'none'
    document.getElementById('learnhow1').style.display = 'none'
    document.getElementById('learnhow2').style.display = 'none'
    document.getElementById('learnhow3').style.display = 'none'
    document.getElementById('learnhow4').style.display = 'none'
    document.getElementById('jspin2').style.display = 'none'
    document.getElementById('jspin3').style.display = 'none'
    document.getElementById('jspin4').style.display = 'none'
    document.getElementById('jspina').style.display = 'block'
    document.getElementById('jspinc').style.display = 'block'
    document.getElementById('jspine').style.display = 'block'
    document.getElementById('learnhowb').style.display = 'block'
    document.getElementById('learnhowd').style.display = 'block'
    document.getElementById('learnhowf').style.display = 'block'


}

function most(){
    
}




function signup(){
    let usser = document.getElementById('usser').value
    var pass = document.getElementById('pass').value

    if(usser == 'Raditya@gmail.com' && pass == 'Raditya'){

    Swal.fire({
            icon: 'success',
            title: 'Correct',
            showConfirmButton: false,
            timer: 1500
        })

        document.getElementById('wrong1').style.display = 'none'
        document.getElementById('usser').style.border = '1px solid black'

        document.getElementById('wrong').style.display = 'none'
        document.getElementById('pass').style.border = '1px solid black'

        
        setTimeout(()=>{
            location.href = 'www.ovagames.com'
        },1500)

    }else if(usser != 'Raditya@gmail.com' ){

        document.getElementById('wrong1').style.display = 'block'
        document.getElementById('usser').style.border = '1px solid red'

    }else if( pass != 'Raditya'){

        document.getElementById('wrong').style.display = 'block'
        document.getElementById('pass').style.border = '1px solid red'

    }
}
