import {React, useEffect, useState} from "react";
import Header from "../components/header";
import MusicCard from "../components/musicCard";
import momentoErrado from "../assets/videos/momento_errado.mp4";
import letargia from "../assets/videos/letargia.mp4";
import entrelacamento from "../assets/videos/entrelacamento.mp4";
import pc from "../assets/videos/ponto_cego.mp4";
import Footer from "../components/footer"
import SectionDetails from "../components/sectionDetails";

const Musicas = () => {
    const [lletargia, setLletargia] = useState('');
    const [lme, setLme] = useState('');
    const [lentrelacamento, setLentrelacamento] = useState('');
    const [lpc, setLpc] = useState('');

    useEffect(() => {
        fetch('/letras/letra_momento_errado.txt')
            .then((response) => response.text())
            .then((data) => {
                console.log(data)
                setLme(data)
            })
            .catch((error) => console.error('erro ao carregar o arquivo: ', error));    
    }, []);

    useEffect(() => {
        fetch('/letras/letra_letargia.txt')
            .then((response) => response.text())
            .then((data) => {
                console.log(data)
                setLletargia(data)
            })
            .catch((error) => console.error('erro ao carregar o arquivo: ', error));    
    }, []);

    useEffect(() => {
        fetch('/letras/letra_entrelacamento.txt')
            .then((response) => response.text())
            .then((data) => {
                console.log(data)
                setLentrelacamento(data)
            })
            .catch((error) => console.error('erro ao carregar o arquivo: ', error));    
    }, []);

    useEffect(() => {
        fetch('/letras/letra_ponto_cego.txt')
            .then((response) => response.text())
            .then((data) => {
                console.log(data)
                setLpc(data)
            })
            .catch((error) => console.error('erro ao carregar o arquivo: ', error));    
    }, []);

    return(
        <div>
            <Header />
            <div className='flex flex-col gap-4 text-center bg-black'>
                <h1 className='text-textColor uppercase leading-none font-bold text-[2rem] lg:text-[4rem]'>Músicas não lançadas <span className="text-redDetrito">(ainda)</span></h1>
                <h2 className='text-textColor w-[85%] mx-auto text-[1.5rem] lg:text-[2rem]'>Aprende as letra pra se esguelar nos shows!</h2>
            </div>

            <div className="lg:flex lg:flex-col">
                <MusicCard title={'momento errado pra se estar no escuro'} video={momentoErrado} letra={lme} />

                <MusicCard title={'letargia'} video={letargia} letra={lletargia}/>

                <MusicCard title={'entralaçamento quântico'} video={entrelacamento} letra={lentrelacamento}/>

                <MusicCard title={'ponto cego'} video={pc} letra={lpc}/>

            </div>

            <Footer />

        </div>
    )
};

export default Musicas;