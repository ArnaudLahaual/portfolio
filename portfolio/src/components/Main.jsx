import React from "react";
import {TypeAnimation} from 'react-type-animation';
import {BsLinkedin,BsGithub} from 'react-icons/bs';


const Main = ()=> {
    return(
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="data:image/jpeg;base64,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" alt="/" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Arnaud Lahaual</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                <TypeAnimation
                    sequence={[
                        'Developpeur',
                        1000, 
                        'FullStack', 
                        2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px'}}
                    />
                </h2>
                <div className="flex justify-center pt-6 max-w-[200px] w-full">
                    <a href="https://www.linkedin.com/in/arnaud-lahaual/"> <BsLinkedin className="cursor-pointer m-5 " size={30}/></a>
                    <a href="https://github.com/ArnaudLahaual"> <BsGithub className="cursor-pointer m-5 " size={30}/></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main