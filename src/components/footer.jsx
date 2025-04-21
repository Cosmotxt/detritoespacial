import '../App.css';
import x from '../assets/images/twitter.svg'
import cuscuz from '../assets/images/logo_cuscuz.png'
const Footer = () => {
    return(
        <div className=''>
            <div className='bg-black flex flex-col gap-5 text-center pb-[10vh]'>
                <hr className="flex flex-col text-center border-2 lg:mb-[10vh]"></hr>
                <h1 className="text-redDetrito uppercase leading-none font-bold hidden text-[3vw] lg:flex lg:mx-auto">Vamo bater um papo</h1>
                <h2 className="text-textColor hidden text-[1.5vw] lg:mx-auto lg:flex">Mande um e-mail para <span className='text-redDetrito underline'>detritoe@gmail.com</span> ou chama a gente no Insta</h2>
                <div className="fotoDaBanda2 w-full h-[35vh] mx-auto lg:w-[40vw]"></div>
                <div className='flex mx-auto gap-6'>
                    <a href="https://www.instagram.com/detritoespacial" target='_blank' className='fill-[#9D9D9D] hover:fill-white duration-500 ease-in-out'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg></a>
                    <a href="https://x.com/detritohc" target='_blank' className='fill-[#9D9D9D] hover:fill-white duration-500 ease-in-out'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                </div>
            </div>
            <div className='bg-neutral-950 w-full text-gray-400'>
                <div className='w-[95%] flex my-auto justify-between mx-auto py-5'>
                    <p className='font-bold '>© 2025 Detrito Espacial. Todos os direitos reservados.</p>
                    <p className='text-right lg:text-left'>Desenvolvido por <a href="https://github.com/Cosmotxt" target='_blank' className='underline'>Cosmotxt</a> a base de muito café</p>
                </div>
            </div>
        </div>

    )
};

export default Footer;