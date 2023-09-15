function toggleMode(){
    const body = document.body

    // Caso a classe 'light' estivesse em <html> e não em <body>
    // const html = document.documentElement

    // Caso fosse apenas para adicionar ou remover a classe 'light'
    //html.classList.toggle('light');
    //body.classList.toggle('light');

    const img = document.querySelector('#profile img')

    if (body.classList.contains('light')){
        body.classList.remove('light');
        img.setAttribute('src', './assets/avatar.png');
    } else{
        body.classList.add('light');
        img.setAttribute('src', './assets/avatar-light.png');
    }

}