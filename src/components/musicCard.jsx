import React from "react";

const MusicCard = ({ title, video, letra }) => {
    return(
        <div className="flex justify-around flex-wrap pt-32">
            {/* <div className='bg-redDetrito flex font-extrabold font-julius uppercase text-[1.5rem] text-center justify-center mb-16 w-full lg:text-[3rem]'>{title}</div> */}
            <div className="lg:sticky lg:top-[33vh] lg:self-start">
                <video width={"800rem"} controls className="lg:rounded-2xl">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="flex flex-col bg-black">
                <h1 className="text-redDetrito font-almarai lg:w-[60%] font-bold uppercase text-[2rem] ml-9">{title}</h1>
                <h2 className="text-white font-almarai text-[1.2rem] w-[70%] ml-9" style={{ whiteSpace:"pre-line" }}>
                    {letra}
                </h2>
            </div>

        </div>
    )
};

export default MusicCard;