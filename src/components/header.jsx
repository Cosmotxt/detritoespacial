import icon from '../assets/icons/icon_transparente.png'
import logo from '../assets/images/logo_transparente.png'
import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css'

const Header = ({ isDesktop }) => {
    const[menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        isDesktop ? (
            <div className='w-full h-[10rem] mx-auto mb-28 top-0'>
                <div className='flex justify-around w-[80vw] h-[100vh] mx-auto my-auto items-center flex-col lg:flex-row lg:h-[20vh] lg:justify-between lg:gap-4'>
                    <div className='text-white font-julius font-bold gap-[1vw] text-lg flex-wrap hidden lg:flex'>
                        <Link to='/galeria' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Galeria</Link> 
                        <Link to='/sobre' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Sobre a Banda</Link> 
                        <Link to='/musicas' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Músicas</Link> 
                        <Link to='/shows' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Shows</Link> 
                    </div>

                    <div className="flex items-center justify-center">
                        <Link to='/'>
                            <img
                                src={icon}
                                alt="logotipo Detrito Espacial"
                                className="w-36 h-auto hidden lg:flex"
                            />
                        </Link>
                       
                    </div>


                    <div className='gap-[1.5vw] items-center hidden lg:flex'>
                        <a href="https://open.spotify.com/intl-pt/artist/3mxopIe9nts1L5O5SzFgBu?si=YbxzF3vlRg-inBR8QmT3YA" target='_blank' className='fill-[#9D9D9D]  hover:fill-white duration-500 ease-in-out'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"></path></svg></a>
                        <a href="https://deezer.page.link/tk59S4W4T6VsvkMp7" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M17.68 5.47H22V8h-4.32zM17.68 8.98H22v2.53h-4.32zM17.68 12.49H22v2.53h-4.32zM2 16h4.32v2.53H2zM7.22 16h4.32v2.53H7.22zM12.45 16h4.32v2.53h-4.32zM17.68 16H22v2.53h-4.32zM12.45 12.49h4.32v2.53h-4.32zM7.22 12.49h4.32v2.53H7.22zM7.22 8.98h4.32v2.53H7.22z"></path></svg></a>
                        <a href="" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M2.971 12.188c-.041 0-.078.038-.083.082l-.194 1.797.194 1.756c.005.049.042.082.083.082s.075-.033.084-.082l.211-1.756-.225-1.797c0-.046-.037-.082-.074-.082m-.75.691c-.051 0-.076.03-.088.079l-.138 1.109.138 1.092c0 .046.037.078.075.078.039 0 .073-.038.087-.087l.176-1.1-.176-1.112c0-.051-.037-.076-.075-.076m1.526-1.025c-.052 0-.1.039-.1.087l-.176 2.139.188 2.051c0 .049.037.1.099.1.052 0 .089-.051.102-.1l.211-2.064-.211-2.126c-.013-.049-.052-.1-.102-.1m.79-.075c-.063 0-.114.051-.126.113l-.161 2.201.177 2.123c.012.063.061.114.122.114.064 0 .113-.051.125-.124l.201-2.113-.201-2.187a.11.11 0 0 0-.111-.112l-.026-.015zm.962.301a.128.128 0 0 0-.133-.125.134.134 0 0 0-.137.125l-.182 2.026.169 2.138a.13.13 0 0 0 .132.131c.062 0 .123-.055.123-.132l.189-2.139-.189-2.036.028.012zm.674-1.426a.154.154 0 0 0-.148.15l-.176 3.3.156 2.139c0 .077.066.137.15.137.078 0 .145-.074.15-.15l.174-2.137-.173-3.313c-.007-.088-.074-.152-.15-.152m.8-.762a.178.178 0 0 0-.17.163l-.15 4.063.138 2.125c0 .1.075.174.163.174.086 0 .161-.074.174-.174l.162-2.125-.161-4.052c-.013-.1-.088-.175-.175-.175m.826-.372c-.102 0-.176.073-.188.173l-.139 4.4.139 2.102c.012.1.086.188.188.188a.193.193 0 0 0 .187-.188l.163-2.102-.164-4.4c0-.1-.087-.188-.188-.188m1.038.038a.196.196 0 0 0-.199-.199.205.205 0 0 0-.201.199l-.125 4.538.124 2.089c.015.111.101.199.214.199s.201-.088.201-.199l.136-2.089-.136-4.55-.014.012zm.625-.111c-.113 0-.213.1-.213.211l-.125 4.439.125 2.063c0 .125.1.213.213.213a.221.221 0 0 0 .214-.224l.125-2.064-.14-4.428c0-.122-.1-.225-.225-.225m.838.139a.236.236 0 0 0-.237.237l-.086 4.29.113 2.063c0 .124.1.231.236.231.125 0 .227-.1.237-.237l.101-2.038-.112-4.265c-.01-.137-.113-.238-.237-.238m.988-.786a.27.27 0 0 0-.139-.037c-.05 0-.1.013-.137.037a.25.25 0 0 0-.125.214v.05l-.086 5.044.096 2.043v.007c.006.05.024.112.06.15.05.051.12.086.196.086a.28.28 0 0 0 .175-.074.262.262 0 0 0 .076-.188l.013-.201.097-1.838-.113-5.075a.24.24 0 0 0-.111-.199l-.002-.019zm.837-.457a.155.155 0 0 0-.124-.052.283.283 0 0 0-.174.052.265.265 0 0 0-.1.201v.023l-.114 5.513.063 1.014.052.988a.274.274 0 0 0 .548-.012l.125-2.013-.125-5.536a.273.273 0 0 0-.138-.231m7.452 3.15c-.336 0-.663.072-.949.193a4.34 4.34 0 0 0-5.902-3.651c-.188.075-.227.151-.238.301v7.812a.31.31 0 0 0 .275.29h6.827a2.428 2.428 0 0 0 2.45-2.438 2.457 2.457 0 0 0-2.45-2.463"></path></svg></a>
                        <a href="https://www.instagram.com/detritoespacial" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg></a>
                        <a href="https://www.tiktok.com/@detrito.espacial" target='_blank' className='fill-[#9D9D9D] w-9 hover:fill-white duration-500 ease-in-out'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg></a>
                        <a href=""></a>
                    </div>
                </div>
             </div>
        ):(
            <div className='w-full absoluteh-[10rem] mx-auto mb-28 parallax-header top-0 z-[1000] lg:sticky'>
                <div className='flex justify-between w-[80vw] py-[3vh] mx-auto my-auto place-items-end items-center flex-col lg:flex-row lg: gap-4'>
                    <div className='text-white font-julius font-bold gap-[1vw] text-lg flex-wrap hidden lg:flex'>
                        <Link to='/galeria' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Galeria</Link> 
                        <Link to='/sobre' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Sobre a Banda</Link> 
                        <Link to='/musicas' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Músicas</Link> 
                        <Link to='/shows' className='text-[#9D9D9D] hover:text-white duration-500 ease-in-out'>Shows</Link> 
                    </div>

                    <div className="flex items-center justify-center">
                    
                        <Link to='/'>
                            <img
                                src={icon}
                                alt="logotipo Detrito Espacial"
                                className="w-36 h-auto flex"
                            />
                        </Link>

                    </div>

                    <button
                    className="lg:hidden text-white"
                    onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7m-7 0H4"
                            />
                        </svg>
                    </button>

                    {menuOpen ? (
                        <div>
                            <div className="absolute top-50 left-0 w-full h-auto bg-redDetrito lg:hidden">
                                <div className='text-white py-5 text-center font-julius font-bold gap-5 text-lg flex-wrap flex flex-col'>
                                    <Link to='/' className='text-white duration-500 ease-in-out uppercase'>Inicio</Link> 
                                    <Link to='/galeria' className='text-white duration-500 ease-in-out uppercase'>Galeria</Link> 
                                    <Link to='/sobre' className='text-white duration-500 ease-in-out uppercase'>Sobre a Banda</Link> 
                                    <Link to='/musicas' className='text-white duration-500 ease-in-out uppercase'>Músicas</Link> 
                                    <Link to='/shows' className='text-white duration-500 ease-in-out uppercase'>Shows</Link> 
                                </div>
                            </div>
                        </div>
                    ): (
                        <div>

                        </div>
                    )}

                    <div className='flex gap-[1.5vw] items-center'>
                        
                    </div>
                </div>
             </div>
        )
    )
}
export default Header;