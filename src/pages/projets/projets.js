import React from "react";

//Components
import PageTransition from "../../components/PageTransition/pageTransition";
import FixedTitle from "../../components/FixedTitle";
import Projet from "../../components/Projet/projet";

//liste des projets
import projets from "../../dataProjets.json";

const Projets = ({ dimensions }) => {
    return (
        <main className='main'>
            <PageTransition>
                <FixedTitle dimensions={dimensions}>Nos Projets</FixedTitle>
            </PageTransition>
            <FixedTitle dimensions={dimensions}>Nos Projets</FixedTitle>
            <section className='container'>
                {projets.map((projet, index) => (
                    <Projet key={index}>{projet}</Projet>
                ))}
            </section>
        </main>
    );
};

export default Projets;
