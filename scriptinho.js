function atualizaHora() {
    var dataInfo = new Date();
  
    var hr,
      _min = (dataInfo.getMinutes() < 10) ? "0" + dataInfo.getMinutes() : dataInfo.getMinutes(),
      ampm = (dataInfo.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dataInfo.getHours() == 0) {
      hr = 12;
    } else if (dataInfo.getHours() > 12) {
      hr = dataInfo.getHours() - 12;
    } else {
      hr = dataInfo.getHours();
    }

    var horaAgora = hr + ":" + _min;
    
    document.getElementsByClassName("hms")[0].innerHTML = horaAgora;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  
    var seman = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb"
      ],
      mes = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ],
      dia = dataInfo.getDate();
  
    var dataAgora = dia + " " + mes[dataInfo.getMonth()] + ", " + seman[dataInfo.getDay()];
  
    document.getElementsByClassName("data")[0].innerHTML = dataAgora;
};
  
  atualizaHora();
  setInterval(function() {
    atualizaHora()
  }, 1000);



menu = document.querySelector('.menu-apps').querySelectorAll('a')

menu.forEach(e =>{
    e.addEventListener('click', function(){
        menu.forEach(icone => icone.classList.remove('ativo'))
        this.classList.add('ativo')

        console.log(e.childNodes[3].innerText);
        var home = document.getElementById('home')
        iconeRef = e.childNodes[3].innerText

        if(iconeRef === 'sobre'){
          let sobre = document.getElementById('sobre')
          sobre.style.display = "flex"
          home.style.display = 'none'
        } else {
          sobre.style.display = "none"
        }
        if(iconeRef === 'música'){
          let musica = document.getElementById('musica')
          musica.style.display = "flex"
          home.style.display = 'none'
        } else {
          musica.style.display = "none"
        }
        if(iconeRef === 'alarme'){
          let alarme = document.getElementById('alarme')
          alarme.style.display = "flex"
          home.style.display = 'none'
        } else {
          alarme.style.display = "none"
        }
        if(iconeRef === 'todo'){
          let todo = document.getElementById('todo')
          todo.style.display = "flex"
          home.style.display = 'none'
        } else {
          let todo = document.getElementById('todo')
          todo.style.display = "none"
        }
        if(iconeRef === 'calendário'){
          let calendario = document.getElementById('calendario')
          calendario.style.display = "grid"
          home.style.display = 'none'
        } else {
          let calendario = document.getElementById('calendario')
          calendario.style.display = "none"
        }
        if(iconeRef === 'calculadora'){
          let calculadora = document.getElementById('calculadora')
          calculadora.style.display = "block"
          home.style.display = 'none'
        } else {
          let calculadora = document.getElementById('calculadora')
          calculadora.style.display = "none"
        }
        if(iconeRef === 'galeria'){
          let galeria = document.getElementById('galeria')
          galeria.style.display = "block"
          home.style.display = 'none'
        } else {
          let galeria = document.getElementById('galeria')
          galeria.style.display = "none"
        }
        if(iconeRef === 'jogos'){
          let jogos = document.getElementById('jogos')
          jogos.style.display = "flex"
          home.style.display = 'none'
        } else {
          let jogos = document.getElementById('jogos')
          jogos.style.display = "none"
        }
       
    })
})




imgBalao = document.querySelector('.campo-relogio .balaoimg')
minicoelho = document.querySelector('.campo-relogio .minicoelho')
iconeCasa = document.querySelector('.casa')
coelhoMd = document.querySelector('.coelho-md img')

claroEscuro = document.querySelector('.claro-escuro')
claroEscuroIcone = document.querySelector('.claro-escuro i')
claroEscuro.addEventListener('click', ()=>{
    if(claroEscuroIcone.innerHTML === 'dark_mode'){
      claroEscuroIcone.innerHTML = 'light_mode'
      body.classList.remove('claro')
      body.classList.add('escuro')
      imgBalao.src = 'imgs/balao2.png'
      coelhoMd.src = 'imgs/coelhodark.png'
      minicoelho.src = 'imgs/minicoelho2.png'
      
    } else{
      claroEscuroIcone.innerHTML = 'dark_mode'
      body.classList.remove('escuro')
      body.classList.add('claro')
      imgBalao.src = 'imgs/balao1.png'
      coelhoMd.src = 'imgs/coelholight.png'
      minicoelho.src = 'imgs/minicoelho1.png'
     
    }
})

iconeCasa.addEventListener('click', ()=>{
  menu.forEach(icone => icone.classList.remove('ativo'))
  home.style.display = 'flex'
  //iconeCasa.classList.add('ativo')
  sobre.style.display = "none"
  musica.style.display = "none"
  alarme.style.display = "none"
  todo.style.display = "none"
  calendario.style.display = "none"
  calculadora.style.display = "none"
  galeria.style.display = "none"
  jogos.style.display = "none"
})

