import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import PageTransition from "../../components/PageTransition/pageTransition";

//Liste des projets
import projets from "../../dataProjets.json";

//image
import Masonry from "react-masonry-css";
import Photo from "../../components/Photo/photo";
import ProgressiveImage from "react-progressive-image";
const imagesGallery = [
    {
        src: "https://source.unsplash.com/user/erondu/100x50",
        height: 100,
        width: 50,
    },
    {
        src: "https://source.unsplash.com/user/s_auk_/1200x800",
        height: 1200,
        width: 800,
    },
    {
        src: "https://source.unsplash.com/user/erondu/800x500",
        height: 800,
        width: 500,
    },
    {
        src: "https://source.unsplash.com/user/s_auk_/1000x1000",
        height: 1000,
        width: 1000,
    },
    {
        src: "https://source.unsplash.com/user/erondu/800x1000",
        height: 800,
        width: 1000,
    },
    {
        src: "https://source.unsplash.com/user/s_auk_/1000x400",
        height: 1000,
        width: 400,
    },
    {
        src: "https://source.unsplash.com/user/erondu/400x400",
        height: 400,
        width: 400,
    },
    {
        src: "https://source.unsplash.com/user/s_auk_/600x400",
        height: 600,
        width: 400,
    },
    {
        src: "https://source.unsplash.com/user/erondu/800x1000",
        height: 800,
        width: 1000,
    },
    {
        src: "https://source.unsplash.com/user/s_auk_/1000x400",
        height: 1000,
        width: 400,
    },
];

const ProjetPage = () => {
    //Projet qui a été sélectionné
    let { id } = useParams();
    const selectedProjet = projets.find((projet) => projet.path === id);

    //Projet suivant
    let nextIndex = projets.indexOf(selectedProjet) + 1;
    if (nextIndex >= projets.length) {
        nextIndex = 0;
    }

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);

    const transition = { duration: 0.4, ease: [0.43, 0.13, 0.26, 0.96] };

    //Masonry gallery
    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1,
    };

    return (
        <main className='projetPage'>
            <PageTransition />
            <article>
                <header>
                    <motion.img
                        // src={require(`../../assets/projets/${selectedProjet.path}/${selectedProjet.couverture}`)}
                        src='https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        alt=''
                        style={{
                            scale,
                        }}
                    />
                    <h1 className='text-lg'>{selectedProjet.name}</h1>
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
                        </div>
                        <hr />
                        <div className='description'>
                            {selectedProjet.description.map((paragraphe, index) => (
                                <p key={index}>{paragraphe}</p>
                            ))}
                        </div>
                    </div>
                    <Masonry breakpointCols={breakpointColumnsObj} className='images-grid' columnClassName='images-grid_column'>
                        {imagesGallery.map((photo, id) => (
                            <Photo key={id}>
                                <ProgressiveImage
                                    src={photo.src}
                                    placeholder='https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/96/6d/09/966d09df-0771-df82-e290-df6e5f9bfbb1/source/256x256bb.jpg'
                                >
                                    {/* {(src, loading) => <motion.img whileHover={{ scale: 1.15 }} transition={transition} src={src} alt='an image' />} */}
                                    {(src, loading) => {
                                        const ratio = (100 * photo.width) / photo.height + "%";
                                        const color = getComputedStyle(document.documentElement).getPropertyValue("--red");
                                        console.log(color);
                                        return loading ? (
                                            <div style={{ backgroundColor: color, paddingBottom: ratio }} />
                                        ) : (
                                            <motion.img
                                                whileHover={{ scale: 1.15 }}
                                                transition={transition}
                                                src={src}
                                                height={photo.height}
                                                width={photo.width}
                                                alt=''
                                            />
                                        );
                                    }}
                                </ProgressiveImage>
                            </Photo>
                        ))}
                    </Masonry>
                </div>
            </article>
            <motion.div className='next-projet' exit={{ opacity: 0 }}>
                <img
                    src='https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    alt=''
                />
                <div className='text'>
                    <p className='text-sub'>Projet suivant</p>
                    <NavLink to={projets[nextIndex].path} exact>
                        <h2 className='text-lg'>{projets[nextIndex].name}</h2>
                    </NavLink>
                </div>
            </motion.div>
        </main>
    );
};

export default ProjetPage;
