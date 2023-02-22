// owl carosal
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// ajax API Calls



const loginVerification = () => {
    const mail = $('#form3Example3').val();
    const password = $('#form3Example4').val()
    alert(password)
    $.ajax({
        url: '/login',
        method: 'post',
        data: {
            mail, password
        },
        success: (result) => {
            if (result == true) {
                window.location.replace('/home')
            } else {
                window.location.replace('/')
            }
        },
    })
}