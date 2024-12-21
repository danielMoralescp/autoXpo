  document.addEventListener('DOMContentLoaded', function(){
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollnav()
  })


  function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    document.addEventListener('scroll',  function(){
      if(sobreFestival.getBoundingClientRect().bottom < 1){
       header.classList.add('fixed')
      }else{
        header.classList.remove('fixed')
      }
    })
  }
  
  
  function crearGaleria (){

 
  // Número de imágenes en la carpeta
  const totalImages = 20; // Cambia este número según la cantidad de imágenes
  const folderPath = "src/img/gallery/"; // Ruta de la carpeta de imágenes

  // Seleccionar el contenedor de la galería
  const gallery = document.querySelector(".galeria-imagenes");

  // Generar las imágenes dinámicamente
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `${folderPath}${i}.jpg`;
    img.alt = `Imagen Auto Numero ${i}`;

    img.onclick = function(){
      mostrarImagen(i)
     // console.log('diste click', i)
    }

    gallery.appendChild(img);
  };
}

  //creamos una funcion para mostrar la imagen

  function mostrarImagen(i){
    const folderPath = "src/img/gallery/"; // Ruta de la carpeta de imágenes



    const img = document.createElement("img");
    img.src = `${folderPath}${i}.jpg`;
    img.alt = `Imagen Auto Numero ${i}`;

    //console.log('desde la funcion imagen', i)
    //generar modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(img)
    //
    //Boton cerra modal
    const cerrarMDbtn = document.createElement('button');
    cerrarMDbtn.textContent = 'cerrar';
    cerrarMDbtn.classList.add('btn-cerrar');
    cerrarMDbtn.onclick = cerrarModal;

    modal.appendChild(cerrarMDbtn);
    modal.appendChild(img);

    // agregar al html
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);

  }

  function cerrarModal(){
    const modal = document.querySelector('.modal');

    modal.classList.add('fadeout')

    setTimeout(() => {
      modal?.remove()

      const body = document.querySelector('body');
      body.classList.remove('overflow-hidden');
      
    }, 500);
  }

function resaltarEnlace(){
    document.addEventListener('scroll',  function(){
    const sections  = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('.navegacion-principal a');


    let actual = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      console.log(sectionHeight)
       if(window.scrollY >= (sectionTop - sectionHeight / 3)){
         actual = section.id
       }
    })

    navlinks.forEach(link => {
      link.classList.remove('active')
      if(link.getAttribute('href') === '#' + actual){
        link.classList.add('active')
      }
    })


  })
}

function scrollnav(){
  const navLinks = document.querySelectorAll('.navegacion-principal a');

  navLinks.forEach( link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const sectionScroll = e.target.getAttribute('href');
      const section = document.querySelector(sectionScroll);

      section.scrollIntoView({behavior: 'smooth'})



    
    })
  })
}

