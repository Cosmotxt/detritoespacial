

const ListenCard = ({ serviceLogo, serviceName, link }) => {
    return(
            <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <div className="bg-[#050505] py-7 rounded-2xl border-2 border-textColor hover:border-redDetrito duration-300 ease-in-out lg:w-[20vw] lg:rounded-3xl">
                    <img src={serviceLogo} alt={serviceName} className='w-40 h-full justify-self-center my-auto lg:w-[16rem]'/>
                </div>
            </a>
        
    )
};  

export default ListenCard