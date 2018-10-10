menu.onclick = function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

function zoom(element) {
    var newTab = window.open();
    var data = document.getElementById("choicedPhoto").getAttribute("src");
    setTimeout(function() {
        newTab.document.body.innerHTML = "<img src='" + data + "'>";
    }, 500);
    return false;
}

$(function() {

    $('.signup').on('click', '.fa', function(e) {
        e.preventDefault();
        $(this).toggleClass('fa-square-o').toggleClass('fa-check-square-o');
        if ($(this).hasClass('fa-square-o')) {
            $('.subscribed').animate({
                height: '0'
            })
        }
        else if ($(this).hasClass('fa-check-square-o')) {
            $('.subscribed').animate({
                height: '75px'
            })
        }

    })

});
