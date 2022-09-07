var options = {
    strings: ['Paradis', 'a BackEnd Developer', 'a Web Developer', 'a Data Scienctist'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
};

setTimeout(() => {
    new Typed('.whoAmIAutoType', options);
}, 200);