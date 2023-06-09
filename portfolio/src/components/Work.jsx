import React from "react";
import WorkItem from './WorkItem';

const data = [
    {
        year:2012,
        title: 'Sixt',
        duration: '8 ans',
        details:'Conseiller Commercial',
    },

    {
        year:2020,
        title: 'Studi',
        duration: '2 ans',
        details:'Conseiller Commercial'
    },

    {
        year:2022,
        title: "O'Clock",
        duration: '6 mois',
        details:'Formation Developpeur web'
    },
]

const Work=()=> {
    console.log(data)

    return(
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {
                data.map((item,idx)=> (
                    <WorkItem 
                    key={idx} 
                    year={item.year}
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                    />
                ))
            }
        </div>
    )
}
export default Work;