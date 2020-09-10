import React from "react";

//Components
import FixedTitle from "../../components/FixedTitle";

//Transitions
import TransitionOutDefault from "../../components/PageTransition/transitionOutDefault";
import TransitionInDefault from "../../components/PageTransition/transitionInDefault";

const MentionsLegales = ({ dimensions }) => {
    return (
        <main className='main'>
            <TransitionOutDefault />
            <TransitionInDefault>
                <FixedTitle dimensions={dimensions}>Mentions Légales</FixedTitle>
            </TransitionInDefault>
            <FixedTitle dimensions={dimensions}>Mentions Légale</FixedTitle>
            <section className='container'>
                <div className='mentions'>
                    <div className='mention'>
                        <h5 className='text-lg'>Présentation du site</h5>
                        <p>
                            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé
                            aux utilisateurs du site www.macce-studio.fr l’identité des différents intervenants dans le cadre de sa réalisation et de
                            son suivi.
                        </p>
                        <p className='text-sub'>Propriétaire</p>
                        <p>
                            Maccė Studio
                            <br />
                            <a href='http://www.macce-studio.fr'>www.macce-studio.fr</a>
                            <br />
                            <a href='tel:+336677592786'>06 77 59 27 86</a>
                            <br />
                            <a href='mailto: maccestudiopro@gmail.com'>maccestudiopro@gmail.com</a>
                        </p>
                        <p className='text-sub'>Création & Conception</p>
                        <p>
                            <a href='http://alexandre-fournou.com'>Alexandre Fournou, développement web</a>
                        </p>
                        <p className='text-sub'>Hébergeur</p>
                        <p>
                            OVH France SAS
                            <br />
                            SAS au capital de 10 069 020 €
                            <br />
                            RCS Lille Métropole 424 761 419 00045
                            <br />
                            Code APE 2620Z
                            <br />
                            N° TVA : FR 22 424 761 419
                            <br />
                            Siège social : 2 rue Kellermann - 59100 Roubaix - France
                        </p>
                    </div>

                    <div className='mention'>
                        <h5 className='text-lg'>Conditions générales d’utilisation du site et des services proposés</h5>
                        <p>
                            L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites.
                            Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment. Les utilisateurs du site sont
                            donc invités à les consulter de manière régulière.
                            <br />
                            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique
                            peut être toutefois décidée par Maccė Studio qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates
                            et heures de l’intervention.
                        </p>
                    </div>

                    <div className='mention'>
                        <h5 className='text-lg'>Description des services fournis</h5>
                        <p>
                            Le site a pour objet de fournir une information concernant l’ensemble des activités de Maccė Studio. Maccė Studio
                            s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu
                            responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu’elles soient de son fait ou du fait
                            des tiers partenaires qui lui fournissent ces informations.
                            <br />
                            Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d’évoluer. Par
                            ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications
                            ayant été apportées depuis leur mise en ligne.
                        </p>
                    </div>

                    <div className='mention'>
                        <h5 className='text-lg'>Limitations de responsabilité</h5>
                        <p>
                            Maccė Studio ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur lors de
                            l’accès au site. Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition
                            des utilisateurs. Maccė Studio se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans
                            cet espace qui conviendrait à la législation applicable en France, en particulier aux dispositions relatives à la
                            protection des données. Le cas échéant, Maccė Studio se réserve également la possibilité de mettre en cause la
                            responsabilité civile et/ ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux ou
                            diffamant.
                        </p>
                    </div>

                    <div className='mention'>
                        <h5 className='text-lg'>Gestion des données personnelles</h5>
                        <p>
                            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du
                            6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                        </p>
                        <ul>
                            <p>À l’occasion de l’utilisation du site peuvent être recueillis :</p>
                            <li>- l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site,</li>
                            <li>- le fournisseur d’accès de l’utilisateur,</li>
                            <li>- l’adresse de protocole Internet (IP) de l’utilisateur.</li>
                        </ul>
                        <p>
                            En tout état de cause, Maccė Studio ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin
                            de certains services proposés par le site. L’utilisateur fournit ces informations en toute connaissance de cause,
                            notamment lorsqu’il procède par luimême à leur saisie. Il est alors précisé à l’utilisateur du site l’obligation ou non de
                            fournir ces informations.
                        </p>
                        <p>
                            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux
                            fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données
                            personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec
                            signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.
                        </p>
                        <p>
                            Aucune information personnelle de l’utilisateur du site n’est publiée à l’insu de l’utilisateur, échangée, transférée,
                            cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de Maccė Studio et de ses droits
                            permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation
                            de conservation et de modification des données vis-àvis de l’utilisateur du site.
                            <br />
                            Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11
                            mars 1996 relative à la protection juridique des bases de données.
                        </p>
                    </div>

                    <div className='mention'>
                        <h5 className='text-lg'>Droit applicable et attribution de juridiction</h5>
                        <p>
                            Tout litige en relation avec l’utilisation du site est soumis au droit français. Il est fait attribution exclusive de
                            juridiction aux tribunaux compétents de Corse.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MentionsLegales;
