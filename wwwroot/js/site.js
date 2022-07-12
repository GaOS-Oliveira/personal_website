// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function searchShow() {
    var x = document.getElementById("nav-search");
    if (x.classList.contains('d-none')) {
        x.classList.remove("d-none");
        x.classList.add("d-block");
    } 
    else {
        x.classList.remove("d-block");
        x.classList.add("d-none");
    }
}
