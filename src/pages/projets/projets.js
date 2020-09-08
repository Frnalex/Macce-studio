import React from "react";

//Components
import FixedTitle from "../../components/FixedTitle";
import Projet from "../../components/Projet/projet";

//Transitions
import TransitionOutDefault from "../../components/PageTransition/transitionOutDefault";
import TransitionInDefault from "../../components/PageTransition/transitionInDefault";

//liste des projets
import projets from "../../dataProjets.json";

const Projets = ({ dimensions }) => {
    return (
        <main className='main'>
            <TransitionOutDefault />
            <TransitionInDefault>
                <FixedTitle dimensions={dimensions}>Nos Projets</FixedTitle>
            </TransitionInDefault>
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
