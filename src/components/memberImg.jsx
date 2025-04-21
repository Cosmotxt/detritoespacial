const MemberImg = ( { src } ) => {
    return(
        <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="w-[15vw] h-[50vh] bg-center bg-cover hover:scale-110 duration-500 ease-in-out origin-center transition-all" style={{backgroundImage: `url(${src})`}}></div>
        </a>
    )
};

export default MemberImg;