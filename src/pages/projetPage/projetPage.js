import React from "react";
import { NavLink } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import PageTransition from "../../components/PageTransition/pageTransition";

//image
import img1 from "../../assets/projet/header.jpg";
import img2 from "../../assets/projet/image-2.jpg";
import img3 from "../../assets/projet/image-3.jpg";
import img4 from "../../assets/projet/image-4.jpg";
import img5 from "../../assets/projet/image-5.jpg";
// import projetsuivant from "../../assets/projet/projet-suivant.jpg";

const ProjetPage = ({ dimensions }) => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.5]);

    return (
        <main className='projetPage'>
            <PageTransition />
            <article>
                <header>
                    <motion.img
                        src={img1}
                        alt=''
                        style={{
                            scale,
                        }}
                    />
                    <h1 className='text-lg'>Jeu d'ombres et de lumières</h1>
                </header>
                <div className='content'>
                    <div className='text container'>
                        <div className='infos'>
                            <div className='item'>
                                <p className='text-sub'>date</p>
                                <p>2020</p>
                            </div>
                            <div className='item'>
                                <p className='text-sub'>Services</p>
                                <div className='services'>
                                    <p>Photographie</p>
                                    <p>Branding</p>
                                    <p>Storytelling</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='description'>
                            <p>
                                Ce qui est génial dans le métier de créateur de contenu forcément : la création. Le plus dur : ne pas s’éparpiller et
                                trouver sa propre « patte artistique ». Mais plus on travaille, plus la recherche sur nos envies évolue.J’adore
                                prendre du temps pour photographier des portraits.
                            </p>
                            <p>
                                Voici plusieurs shooting qui m’ont permit d’agrémenter mon compte Instagram. Entre la montagne et la mer, c’est avec
                                mes modèles que j’aime bouger en Corse, découvrir des paysages à couper le souffle et photographier ces instants pour
                                vous mais aussi pour moi.
                            </p>
                        </div>
                    </div>
                    <div className='images'>
                        <img src={img2} alt='' />
                        <img src={img3} alt='' />
                        <img src={img4} alt='' />
                        <img src={img5} alt='' />
                    </div>
                </div>
            </article>
            <div className='next-projet'>
                <img src={img1} alt='' />
                <div className='text'>
                    <p className='text-sub'>Projet suivant</p>
                    <NavLink to='/projet-page' exact>
                        <h2 className='text-lg'>Jeu d'ombres et de lumières</h2>
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default ProjetPage;
