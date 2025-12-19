let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

let form = document.contact-form;
// console.log(form);
let fname = form.name;

let email = form.email;

let address = form.address;

form.addEventListener("Submit", function (){
    if (fname.value =='') {
        alert ("Full name is required");
        e.preventDefault();
    }

    if(email.value == ''){
        alert("invalid email");
        e.preventDefault();
    }

    if(address.value == ''){
        alert("address is required");
        e.preventDefault();
    }
});