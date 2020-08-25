import React from "react";

//Components
import FixedTitle from "../../components/FixedTitle";
import PageTransition from "../../components/PageTransition/pageTransition";

//image
import eline from "../../assets/eline.jpg";

const About = ({ dimensions }) => {
    let container768 = "";
    let containerSmall = "container";

    if (dimensions.width > 768) {
        container768 = "container";
        containerSmall = "";
    }

    return (
        <main className='main'>
            <PageTransition>
                <FixedTitle dimensions={dimensions}>à Propos</FixedTitle>
            </PageTransition>
            <FixedTitle dimensions={dimensions}>à Propos</FixedTitle>
            <section className={`about ${container768}`}>
                <p className={`text-sub ${containerSmall}`}>Qui suis-je ?</p>
                <div className='description'>
                    <div className={`text-content ${containerSmall}`}>
                        <p>
                            Maccė studio n'est pas seulement un nom de marque c'est un studio de création de contenu qui accroit votre visibilité, met
                            en avant vos envies et vous parle avec le coeur. « Maccė » un simple dérivé de mon nom de famille et des quatre adjectifs
                            essentiels à la construction d’une marque : ambition, création, concept et échange.
                        </p>
                        <p>
                            C’est aussi issu de ma propre histoire. Je suis une femme des années 90’, mes premières années d’écoles, mes études, mes
                            amis, mes amours, mes échecs, mes peurs, mes envies, ma gourmandise, mes moments de farniente sur la plage de Capo di
                            Feno, mes pauses devant des films de Woody Allen, mes voyages, mes livres et bien plus encore.
                        </p>
                    </div>
                    <img src={eline} alt='' />
                    <div className={`text-content ${containerSmall}`}>
                        <p>
                            Je m’appelle Eline Mara. Je suis créative et passionnée depuis toujours par la photographie et le design. J’ai étudié
                            l’art, le graphisme et la communication visuelle. Ces domaines sont en constante évolution et c’est ce qui me passionne.
                            Pourquoi pas devenir «l’ambassadrice de vos idées » ?
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
