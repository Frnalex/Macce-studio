import React from "react";

//Components
import PageTransition from "../../components/PageTransition/pageTransition";
import FixedTitle from "../../components/FixedTitle";
import Intro from "../../components/Intro/intro";
import Projet from "../../components/Projet/projet";

//Liste des projets
import projets from "../../projets";
const homeProjets = projets.slice(0, 4);

const Home = ({ dimensions }) => {
    return (
        <main className='home'>
            <PageTransition>
                <FixedTitle dimensions={dimensions}>Maccė Studio</FixedTitle>
            </PageTransition>
            <FixedTitle dimensions={dimensions}>Maccė Studio</FixedTitle>
            <div className='container'>
                <Intro />
                <section className='projets'>
                    <p className='text-sub'>
                        <span>Derniers </span>
                        <span>projets</span>
                    </p>
                    <div className='projets-items'>
                        {homeProjets.map((projet, key) => (
                            <Projet key={key}>{projet}</Projet>
                        ))}
                    </div>
                </section>
                <section className='about'>
                    <p className='text-sub'>Contact</p>
                    <p className='text-sm'>
                        Retrouvez-moi sur{" "}
                        <a href='https://www.instagram.com/macce_studio/' target='_blank' rel='noopener noreferrer'>
                            Instagram
                        </a>
                        {" / "}
                        <a href='https://www.instagram.com/macce_studio/' target='_blank' rel='noopener noreferrer'>
                            Pinterest
                        </a>
                        {" / "}
                        <a href='https://www.instagram.com/macce_studio/' target='_blank' rel='noopener noreferrer'>
                            Behance
                        </a>
                        {" / "}
                        <a href='mailto: maccestudiopro@gmail.com'>Email</a>
                    </p>
                </section>
            </div>
        </main>
    );
};

export default Home;
