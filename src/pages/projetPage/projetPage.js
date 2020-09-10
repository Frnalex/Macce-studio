import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Transitions
import TransitionOutDefault from "../../components/PageTransition/transitionOutDefault";
import TransitionInDefault from "../../components/PageTransition/transitionInDefault";

//Liste des projets
import projets from "../../dataProjets.json";

//image
import Masonry from "react-masonry-css";
import Photo from "../../components/Photo/photo";
import ProgressiveImage from "react-progressive-image";

const ProjetPage = ({ dimensions }) => {
    //Projet qui a été sélectionné
    let { id } = useParams();
    const selectedProjet = projets.find((projet) => projet.path === id);

    //Projet suivant et précédent
    let nextIndex = projets.indexOf(selectedProjet) + 1;
    if (nextIndex >= projets.length) {
        nextIndex = 0;
    }
    const nextProject = projets[nextIndex];
    let prevIndex = projets.indexOf(selectedProjet) - 1;
    if (prevIndex === -1) {
        prevIndex = projets.length - 1;
    }
    const prevProject = projets[prevIndex];

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
    const scaleNextProjet = useTransform(scrollYProgress, [0.5, 1], [1.3, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

    const transition = { duration: 0.4, ease: [0.43, 0.13, 0.26, 0.96] };

    //Masonry gallery
    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1,
    };

    const [transitionOutDefault, setTransitionOutDefault] = useState(true);

    let lastLocation = useLastLocation();
    useEffect(() => {
        if (lastLocation && lastLocation.pathname === `/${prevProject.path}`) {
            setTransitionOutDefault(false);
        }
    });

    return (
        <main className='projetPage'>
            {transitionOutDefault && <TransitionOutDefault />}
            {transitionOutDefault && <TransitionInDefault />}

            <article>
                <header>
                    <ProgressiveImage
                        src={require(`../../assets/projets/${selectedProjet.path}/${
                            dimensions.width > 600 ? selectedProjet.couvertureXl : selectedProjet.couvertureMobile
                        }`)}
                        placeholder={require(`../../assets/projets/${selectedProjet.path}/tiny/${
                            dimensions.width > 600 ? selectedProjet.couvertureXl : selectedProjet.couvertureMobile
                        }`)}
                    >
                        {(src) => (
                            <motion.img
                                style={{
                                    scale,
                                }}
                                src={src}
                                alt=''
                            />
                        )}
                    </ProgressiveImage>
                    <motion.div
                        style={{
                            opacity,
                        }}
                        className='overlay'
                    ></motion.div>
                    <h1 className='text-lg'>{selectedProjet.name}</h1>
                    <div className='scroll'></div>
                </header>
                <div className='content'>
                    <div className='text container'>
                        <div className='infos'>
                            <div className='item'>
                                <p className='text-sub'>date</p>
                                <p>{selectedProjet.date}</p>
                            </div>
                            <div className='item'>
                                <p className='text-sub'>Services</p>
                                <div className='services'>
                                    {selectedProjet.services.map((service) => (
                                        <p key={service}>{service}</p>
                                    ))}
                                </div>
                            </div>
                            {selectedProjet.links && (
                                <div className='item'>
                                    <p className='text-sub'>Liens</p>
                                    <div className='services'>
                                        {selectedProjet.links.map(({ name, url }) => (
                                            <p key={url}>
                                                <a href={url} target='_blank' rel='noopener noreferrer'>
                                                    {name}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <hr />
                        <div className='description'>
                            {selectedProjet.description.map((paragraphe, index) => (
                                <p key={index}>{paragraphe}</p>
                            ))}
                        </div>
                    </div>
                    <Masonry breakpointCols={breakpointColumnsObj} className='images-grid' columnClassName='images-grid_column'>
                        {selectedProjet.photos.map((photo, id) => (
                            <Photo key={id}>
                                <ProgressiveImage
                                    src={require(`../../assets/projets/${selectedProjet.path}/${photo}`)}
                                    placeholder={require(`../../assets/projets/${selectedProjet.path}/tiny/${photo}`)}
                                >
                                    {(src) => <motion.img whileHover={{ scale: 1.15 }} transition={transition} src={src} alt='' />}
                                </ProgressiveImage>
                            </Photo>
                        ))}
                    </Masonry>
                </div>
            </article>
            <motion.div className='next-projet'>
                <ProgressiveImage
                    src={require(`../../assets/projets/${nextProject.path}/${
                        dimensions.width > 600 ? selectedProjet.couvertureXl : selectedProjet.couvertureMobile
                    }`)}
                    placeholder={require(`../../assets/projets/${nextProject.path}/tiny/${
                        dimensions.width > 600 ? selectedProjet.couvertureXl : selectedProjet.couvertureMobile
                    }`)}
                >
                    {(src) => (
                        <motion.img
                            initial={{ scale: 1.1 }}
                            exit={{ scale: 1 }}
                            transition={transition}
                            style={{ scale: scaleNextProjet }}
                            src={src}
                            alt=''
                        />
                    )}
                </ProgressiveImage>
                <motion.div className='overlay' initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}></motion.div>
                <motion.div className='overlay black' initial={{ opacity: 0 }} exit={{ opacity: 0.3 }} transition={transition}></motion.div>
                <motion.div className='text' initial={{ color: "000" }} exit={{ color: "#fff" }} transition={transition}>
                    <div className='text-block'>
                        <motion.p className='text-sub' initial={{ y: 0 }} exit={{ y: -20 }} transition={transition}>
                            Projet suivant
                        </motion.p>
                    </div>
                    <NavLink to={nextProject.path} exact onClick={() => setTransitionOutDefault(false)}>
                        <h2 className='text-lg'>{nextProject.name}</h2>
                    </NavLink>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default ProjetPage;
