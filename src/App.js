import React, { useState } from "react";
import './App.css';
import './index.css';
import Header from './components/header.jsx'
import ListenCard from './components/listenCard.jsx';
import logo from './assets/images/logo_transparente.png'
import devaneios from './assets/images/capa_devaneios.png'
// import SectionDetails from "./components/sectionDetails.jsx";
// import MemberImg from "./components/memberImg.jsx";
import Footer from "./components/footer.jsx";

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Captura a posição do mouse em relação à janela
    const { clientX, clientY } = e;
    setMousePosition({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <div className="App">
      <section className="" onMouseMove={handleMouseMove}>
        <Header isFrontPage={true} />

        {/* logotipo */}
        <img src={logo} alt='logo da detrito espacial' className='w-[85vw] h-auto mx-auto lg:flex lg:w-[45vw] lg:pt-0' style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}/>

        <div className='flex gap-[1.5vw] items-center justify-center lg:hidden'>
            <a href="https://open.spotify.com/intl-pt/artist/3mxopIe9nts1L5O5SzFgBu?si=YbxzF3vlRg-inBR8QmT3YA" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out p-6'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"></path></svg></a>
            <a href="https://deezer.page.link/tk59S4W4T6VsvkMp7" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out p-6'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M17.68 5.47H22V8h-4.32zM17.68 8.98H22v2.53h-4.32zM17.68 12.49H22v2.53h-4.32zM2 16h4.32v2.53H2zM7.22 16h4.32v2.53H7.22zM12.45 16h4.32v2.53h-4.32zM17.68 16H22v2.53h-4.32zM12.45 12.49h4.32v2.53h-4.32zM7.22 12.49h4.32v2.53H7.22zM7.22 8.98h4.32v2.53H7.22z"></path></svg></a>
            <a href="https://www.instagram.com/detritoespacial" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out p-6'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg></a>
            <a href="https://www.tiktok.com/@detrito.espacial" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out p-6'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg></a>
        </div>
        
        {/* Texto sobre a Detrito */}
        <p className='text-textColor w-[30%] text-center font-almarai bg-black p-3 tracking-wide text-[0.9vw] mx-auto mt-[5vh] hidden lg:flex' >A Detrito Espacial é uma banda brasileira de Post-hardcore. Esse gênero carregou diferentes significados ao longo das gerações, mas sempre foi uma voz para os sentimentos que não podem ser contidos. A Detrito nasceu para trazer sua própria interpretação desse gênero visceral, transformando emoções reprimidas em gritos.</p>
        
        {/* Chamado pra rolar a página */}
        <div className=''>
          <p className='text-textColor text-center text-2xl justify-center mt-[3vh] shadow-lg font-almarai hidden lg:flex'>Role e descubra um mundo</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-[#D9D9D9] animate-bounce mx-auto w-12 h-auto mt-60 lg:flex lg:mt-0'><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>
        </div>
      </section>

      {/* Secção de lançamento */}
      <section className='mt-20 mb-40 p-10 flex flex-col items-center lg:flex-row lg:justify-around lg:p-0 parallax'>
        <img src={devaneios} alt='capa do single devaneios de uma colisão' className='w-72 h-auto pb-6 parallax-2 lg:w-[35vw] lg:rounded-3xl lg:pb-0' />
        <div className='flex flex-col flex-wrap w-[70%] text-left gap-3  lg:w-[45%]'>
          <h1 className='text-textColor uppercase leading-none font-bold text-3xl text-center lg:text-[2.5vw] lg:text-left'><span className='text-redDetrito text-4xl lg:text-[3vw]'>devaneios de uma colisão</span> já está disponível!</h1>
          <h2 className='text-textColor font-medium text-xl text-center lg:text-left lg:text-[1.5vw]'>Ouça na sua plataforma favorita</h2>
          <div className='flex flex-col gap-3 h-auto lg:h-[45vh] lg:flex-wrap lg:gap-10'>
            <ListenCard serviceLogo={'/images/servicesLogos/spotify-logo.svg'} serviceName={'spotify'} link={'https://open.spotify.com/intl-pt/artist/3mxopIe9nts1L5O5SzFgBu?si=YbxzF3vlRg-inBR8QmT3YA'} />
            <ListenCard serviceLogo={'/images/servicesLogos/deezer.svg'} serviceName={'deezer'} link={'https://deezer.page.link/tk59S4W4T6VsvkMp7'} />
            <ListenCard serviceLogo={'/images/servicesLogos/youtube-music.svg'} serviceName={'youtube music'} link={'https://music.youtube.com/playlist?list=OLAK5uy_lD1ddwNPHY-OPmWnsFJUE5vhxtqtDUwfA&si=tqyhglwgTfOaY_l-'} />
            <ListenCard serviceLogo={'/images/servicesLogos/apple-music.svg'} serviceName={'apple music'} link={'https://music.apple.com/br/album/devaneios-de-uma-colis%C3%A3o-single/1784592522'} />
            {/* <ListenCard serviceLogo={'/images/servicesLogos/soundcloud.svg'} serviceName={'soundcloud'} isHidden={true}/>
            <ListenCard isLast isHidden={true}/> */}
          </div>
        </div>
      </section>

      <div className="w-full h-64 fotoDaBanda bg-fixed bg-cover bg-no-repeat bg-centerlg:h-[30vw]"></div>
      
      {/* Secção de sobre
      <section className='mt-[10vh] flex flex-col justify-around gap-10'>
        <SectionDetails section={'conheça a banda!'} sectionDescription={'história de cada membro'} sectionName={'Sobre a Banda'} />
      
        <div className="flex gap-2 mx-auto w-[80%] flex-wrap justify-between parallax-2">
          <MemberImg src={'/images/members_images/ind.png'} />
          <MemberImg src={'/images/members_images/reni.png'} />
          <MemberImg src={'/images/members_images/gabs.png'} />
          <MemberImg src={'/images/members_images/vince.png'} />
          <MemberImg src={'/images/members_images/vince.png'} />
        </div>
      </section> */}
      
      {/* Secção de músicas
      <section className='mt-[10vh] flex flex-col justify-around gap-10'>
        <SectionDetails section={'conheça as músicas'} sectionDescription={'descubra o significado de todas as músicas'} sectionName={'Músicas'} />
        <div className="flex justify-around parallax-2">
          <div className="flex flex-col gap-2">
            <iframe className='w-[45vw] h-[30vw]' src="https://www.youtube.com/embed/SV0c3asr--s" title="Devaneios de uma Colisão - Detrito Espacial (Prévia Oficial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <a href="/" className="text-textColor text-center text-[1.5vw] underline">Devaneios de uma Colisão</a>
          </div>
          <div className="flex flex-col gap-2">
            <iframe className='w-[45vw] h-[30vw]' width="1280" height="720" src="https://www.youtube.com/embed/N8wiwaiIZAA" title="Detrito Espacial - Devaneios de uma Colisão (Ao Vivo no Covil Rock Bar)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <a href="/" className="text-textColor text-center text-[1.5vw] underline">Momento errado pra se estar no escuro</a>

          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default App;