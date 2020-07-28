const bar = document.getElementById('bar');
const cross = document.getElementById('cross');

let openMenu = function(element)   {
    bar.style.display = "none";
    cross.style.display = "block";
}

let closeMenu = function(elemet)  {
    bar.style.display = "block";
    cross.style.display = "none";
}