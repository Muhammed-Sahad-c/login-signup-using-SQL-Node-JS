// owl carosal
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


// ajax API Calls




const loginVerification = (e) => {
    const mail = $('#form3Example3').val();
    const password = $('#form3Example4').val();
    if (mail == '' || password == '') {
        document.getElementById('information').innerHTML = 'Fill the boxes....';
        document.getElementById('form3Example3').style.border = '1px solid red';
        document.getElementById('form3Example4').style.border = '1px solid red';
        $('#information').show();
    } else {
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
                    document.getElementById('information').innerHTML = 'Email or Password is incorrect';
                    $('#information').show();
                }
            },
        })
    }
}
