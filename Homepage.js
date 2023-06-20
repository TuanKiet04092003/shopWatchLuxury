var login = localStorage.getItem('login');
if (login == 'true') {
    document.getElementsByClassName('nav-icons')[0].children[2].innerHTML = `<img onclick='signout()' src="Image/Image-customer.jpg" alt="">`;
    document.getElementsByClassName('nav-icons')[0].children[2].href = '#';

}
function signout(){
    var subMenu=document.getElementsByClassName('sub-menu-signout')[0];
    if (subMenu.style.display === 'none') {
        subMenu.style.display = 'flex';
    } else {
        subMenu.style.display = 'none';
    }
}
function signoutLogin(){
    localStorage.setItem('login',false);
}



