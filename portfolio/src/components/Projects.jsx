import React from "react";
import ProjectItem from "./ProjectItem";
import neolys from '../assets/neolys.png';
import pokedex from '../assets/pokemon.jpg';

const Projects = () => {
    return(
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quasi impedit, incidunt tempore odio distinctio eaque molestias necessitatibus quibusdam? Inventore neque nulla aut dolorum eos maxime nihil cumque labore sunt, dolore, autem totam incidunt quisquam quae ipsa ducimus accusamus eveniet recusandae! Facere veritatis ea eius ad dignissimos odio aspernatur omnis!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={neolys} title='Neolys Patrimoine' site={"https://neolys-patrimoine.fr/"} />
                <ProjectItem img={pokedex} title='Pokedex'site={"https://arno-pokedex.netlify.app"} /> 
            </div>
        </div>
    )
}

export default Projects;