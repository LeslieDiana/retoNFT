var a = 1;
let a1 = 0;
const addCard=document.querySelector("#addCard");
addCard.addEventListener('click', function() {

  const profileCardContenedor = document.createElement('div')
  profileCardContenedor.className = "profile-card-contenedor"
  
  const profileCardPrimerBorde = document.createElement('div')
  profileCardPrimerBorde.className = "profile-card-primer_borde"
  
  profileCardContenedor.appendChild(profileCardPrimerBorde)
  
  const app = document.querySelector('#app')
  app.appendChild(profileCardContenedor)
  
  const profileCardImageContenedor = document.createElement('div')
  profileCardPrimerBorde.append(profileCardImageContenedor)
  
  var imagenContenedor = crearImagenuno("./assets/image-equilibrium.jpg")
  const cardImageHover = document.createElement('div')
  cardImageHover.className = "card-image-hover"
  
  const imagendos = document.createElement('img')
  imagendos.src='./assets/icon-view.svg'
  imagendos.alt='foto de perfil'
  
  cardImageHover.appendChild(imagendos)
  profileCardImageContenedor.append(imagenContenedor, cardImageHover)
  
  const h2 = document.createElement('h2')
  h2.className = "titulo"
  h2.textContent = 'Equilibrium #3429'
  profileCardPrimerBorde.appendChild(h2)
  
  const p = document.createElement('p')
  p.className = "p"
  p.className = "descripcion"
  p.textContent = 'Our Equilibrium collection promotes balance and calm.'
  profileCardPrimerBorde.appendChild(p)
  
  const profileCardTimeLeftAndPrice = document.createElement('div')
  profileCardTimeLeftAndPrice.className = "profile-card-time-left-and-price"
  //profileCardTimeLeftAndPrice.className = "profile-card-time-left-and-price span"
  profileCardPrimerBorde.appendChild(profileCardTimeLeftAndPrice)
  
  const tiempo = document.createElement('div')
  profileCardTimeLeftAndPrice.appendChild(tiempo)
  
  const imagentres = document.createElement('img')
  imagentres.src='./assets/icon-ethereum.svg'
  imagentres.alt='foto de perfil'
  tiempo.appendChild(imagentres)
  
  const spanuno = document.createElement('span')
  spanuno.className = "tiempo span"
  spanuno.textContent = '0.041 ETH'
  tiempo.appendChild(spanuno)
  
  const profileCardTimeLeft = document.createElement('div')
  profileCardTimeLeftAndPrice.appendChild(profileCardTimeLeft)
  
  const imagencuatro = document.createElement('img')
  imagencuatro.src='./assets/icon-clock.svg'
  imagencuatro.alt='foto de perfil'
  profileCardTimeLeft.appendChild(imagencuatro)
  
  const spandos = document.createElement('span')
  spandos.textContent = '3 days left'
  profileCardTimeLeft.appendChild(spandos)
  
  const avatar = document.createElement('div')
  avatar.className = "avatar"
  profileCardPrimerBorde.appendChild(avatar)
  
  const imagencinco = document.createElement('img')
  imagencinco.src='./assets/image-avatar.png'
  imagencinco.alt='foto de cinco'
  avatar.appendChild(imagencinco)
  
  const spantres = document.createElement('span')
  spantres.textContent = 'Creation of'
  avatar.appendChild(spantres)
  
  const spancuatro = document.createElement('span')
  spancuatro.className = "avatar"
  spancuatro.className = "nombre-avatar a"
  spancuatro.className = "nombre-avatar a:hover"
  spantres.appendChild(spancuatro)
  
  const auno = document.createElement('a')
  auno.textContent = ' Jules Wyvern'
  
  spancuatro.appendChild(auno)
  
  function crearImagenuno( direccionImg ) {
    const image=document.createElement("img")
      image.src= direccionImg
      image.className = "image_contenedor"
      return image;
  }
  
});

const esconderCard=document.querySelector("#esconderCard");
esconderCard.addEventListener('click', function() {

   console.log("presionado .....");
   if(a == 1) {
    document.getElementById("tarjeta").style.display = 'none'; 
    esconderCard.innerHTML = 'Mostrar';
    a = 0;
   }else{
    document.getElementById("tarjeta").style.display = 'clock'; 
    esconderCard.innerHTML = 'Esconder';
    a = 1 
  } 
});