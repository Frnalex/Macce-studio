import React from "react";

//Components
import FixedTitle from "../../components/FixedTitle";
import PageTransition from "../../components/PageTransition/pageTransition";

//Liste des services
const services = [
    {
        title: "Stratégie digitale",
        content: ["Définir vos objectifs", "Créer ensemble", "Identifier vos attentes"],
    },
    {
        title: "Brand Content",
        content: ["Création d’un contenu qui vous ressemble", "Développer votre identité visuelle", "Mise en place de Storytelling"],
    },
    {
        title: "Social Media",
        content: ["Gagner en visibilité", "Dynamiser votre contenu", "Créer une communauté"],
    },
    {
        title: "Travaux visuels",
        content: ["Montage vidéo", "Photographie de produits", "Photographie Lifestyle"],
    },
];

const Services = ({ dimensions }) => {
    return (
        <main className='main'>
            <PageTransition>
                <FixedTitle dimensions={dimensions}>Nos Services</FixedTitle>
            </PageTransition>
            <FixedTitle dimensions={dimensions}>Nos Services</FixedTitle>
            <section className='container'>
                <div className='services'>
                    <p className='intro text-sub'>
                        Chacun a sa propre histoire, son univers. Macce Studio s’éfforce de vous comprendre pour qu’ensemble nous puissons créer
                        quelque chose qui vous ressemble.
                    </p>
                    <div className='categories'>
                        {services.map(({ title, content }) => (
                            <div className='category' key={title}>
                                <h3 className='text-lg'>{title}</h3>
                                <div className='content'>
                                    {content.map((service, key) => (
                                        <p key={key}>{service}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
