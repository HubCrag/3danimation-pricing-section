function myFunction(chk) {
    let pricing = document.getElementById('pricing');


    if (chk.checked) {
        pricing.classList.add("on_check")
    }
    else {
        pricing.classList.remove("on_check")
    }
}