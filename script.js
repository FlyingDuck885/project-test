let scrl = window.pageYOffset;
const navbar = document.getElementById("NavBar");

window.onscroll = function(){
    let current = window.pageYOffset;

    if(scrl > current){
        navbar.style.top = "0";
        navbar.style.backgroundColor = "rgb(236, 100, 36, 0.9)";
    }else{
        navbar.style.top = "-60px";
    }
    scrl = current;
};

function setactive(){
    const navbarlink = document.querySelectorAll("navlink");
    const path = window.location.pathname.split("/").pop();

    navbarlink.forEach(link =>{
        link.classList.remove("active");
        if(link.getAttribute("href") === path){
            link.classList.add("active");
        }
    });
}

setactive();

function updateBanner(imageUrl){
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = 'url(${imageUrl})';
}

const apiUrl = 'https://suitmedia-backend.suitdev.com/api/ideas';

let thispage = parseInt(localStorage.getItem('current_page'));
let itempage = parseInt(localStorage.getItem('itemperpage'));

let sortbyorder = localStorage.getItem('sortorder') || 'Newest';

document.getElementById('sort').value = sortbyorder;
document.getElementById('itemperpage').value = itempage;