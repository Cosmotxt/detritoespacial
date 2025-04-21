

const SectionDetails = ({ section, sectionDescription, sectionName }) => {
    return(
        <div className="flex flex-col gap-4 text-center parallax">
            <h1 className='text-textColor uppercase leading-none font-bold text-[3vw]'>{section}</h1>
            <h2 className='text-textColor text-[1.5vw]'>{sectionDescription}</h2>
            <a href="" className="text-textColor text-[1.5vw] underline">Ir para {sectionName}</a>
        </div>
    )                   
};

export default SectionDetails;