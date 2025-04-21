import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import fotoEnsaio1 from "../assets/images/sobre/ensaio_1.png"
import fotoEnsaio2 from "../assets/images/sobre/ensaio_2.png"
import fotoCovil from "../assets/images/sobre/covil1.JPG"
import fotoOphera from "../assets/images/sobre/ophera1.jpg"

const Sobre = () => {
    return(
        <div>
            <Header />
            <div id='' className="w-[90vw] mx-auto">
                <div id="parte1" className="flex flex-col h-auto pb-[20rem]">
                    <div className="flex flex-wrap lg:absolute">
                        <img src={fotoEnsaio1} alt="" className="w-[300px] lg:w-[600px] mx-auto lg:mx-0 z-30 lg:mr-5 lg:pt-4" />
                        <div className="flex flex-col gap-4 lg:w-[60rem] bg-black">
                            <h1 className='text-textColor uppercase leading-none font-extrabold text-[2rem] lg:text-[4.5rem] text-center lg:text-left'>Quem nós somos e por que estamos aqui?</h1>
                            <h2 className='text-textColor text-[1.5rem] lg:text-[2rem] lg:w-[45rem] text-center lg:text-justify'>Honestamente, somos um grupo de bons amigos querendo fazer música honesta e aproveitar a juventude enquanto ainda nos resta tempo</h2>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:mt-20 lg:relative top-[19rem] left-[25rem]">
                        <img src={fotoEnsaio2} alt="" className="w-[400px] z-20  lg:mr-5 pt-6 scale-x-[-1]" />
                        <div className="flex flex-col flex-1 text-wrap gap-4 bg-black">
                            <h1 className='text-textColor leading-none font-extrabold text-center text-[2rem] lg:text-[4.5rem] lg:text-left lg:lowercase'>SE APROFUNDANDO MAIS...</h1>
                            <h2 className='text-textColor text-[1.5rem] text-center lg:text-[2rem] lg:w-[35rem] lg:text-justify'>A Detrito Espacial é uma banda brasileira de post-hardcore formada em Fortaleza, Ceará, conhecida por transmitir uma energia visceral em suas composições e performances ao vivo.<br />Suas letras mergulham profundamente em temas como conflitos internos, questões existencialistas e sentimentos amargurados, se conectando de com o público de uma meneira única.</h2>
                        </div>
                    </div>
                </div>
                <div id="parte2">
                    <div className="flex flex-col-reverse justify-end lg:mt-[4rem] w-[90vw]">
                        <h2 className='text-textColor text-center text-[1.5rem]  lg:text-[2rem] lg:w-[50rem] lg:text-justify bg-black'>A banda é composta por Ind (vocais), Reni (guitarra), Gabs (guitarra), Tilas (baixo) e Vince (bateria). Cada integrante traz influências únicas, que vão do emo ao shoegaze, passando pelo rock alternativo e hardcore, o que resulta em uma releitura mais intima do post-hardcore.</h2>
                        <img src={fotoCovil} alt="" className="w-[300px] mx-auto z-10 lg:w-[600px] lg:ml-5 lg:pt-3 flex" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sobre;