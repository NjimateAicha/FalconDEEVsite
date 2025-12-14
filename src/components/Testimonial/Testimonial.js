import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle/SectionTitle';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Excellente collaboration ! Site livré rapidement, design moderne et conforme à nos attentes. Je recommande à 100 %.",
        Title: 'Madame Hanan Bounit',
        Sub: "Avocate",
        Link: "https://cabinethbavocats.com/",
        LinkText: "Cabinet HB Avocats"
    },
    {
        id: '02',
        tImg: ts2,
        Des: "Merci beaucoup Aïcha 🙏 Le site est exactement comme je voulais, je suis très content du résultat 🤩. Bravo pour ton travail et ton professionnalisme.",
        Title: 'Monsieur Mohamed Arab',
        Sub: "E-commerce",
        Link: "https://santebliss.com/",
        LinkText: "SanteBliss"
    },
    {
        id: '03',
        tImg: ts3,
        Des: "Réservation en ligne fluide, calcul dynamique impeccable. Notre taux de conversion a augmenté.",
        Title: 'Yassine Serrafi',
        Sub: "CEO — Afrilavage",
        Link: "https://www.afrilavage.com/",
        LinkText: "Afrilavage"
    },
    {
        id: '04',
        tImg: ts1,
        Des: "Satisfait du travail d'Aicha, qui a créé un site web conforme à toutes nos attentes. Elle a fait preuve de grande patience, a bien compris nos besoins et a été ouverte à toutes les révisions. Une collaboration agréable, et j'espère continuer à travailler avec elle sur de futurs projets.",
        Title: 'Ayoub Ait Ali',
        Sub: "",
        Link: "https://bayticare.fr",
        LinkText: "bayticare.fr"
    },
    {
        id: '05',
        tImg: ts3,
        Des: "Excellent travail. Plusieurs sites livrés avec un design premium et une exécution sérieuse.",
        Title: 'Youssef Naji',
        Sub: "Architecte / Entrepreneur",
        Link: "https://mooninterior.ma/",
        LinkText: "Mooninterior"

    },
    {
        id: '06',
        tImg: ts3,
        Des: "Travailler avec FalconDev a été une expérience exceptionnelle. Aicha a parfaitement compris nos besoins et livré un site web de grande qualité, répondant à toutes nos attentes.",
        Title: 'Monsieur Mohammed Rezki',
        Sub: "",
        Link: "https://arfakvoyage.com/",
        LinkText: "arfakvoyage"
    },
    {
        id: '07',
        tImg: ts1,
        Des: "Collaboration très professionnelle et résultats au rendez-vous.",
        Title: 'Monsieur Noureddine Abad',
        Sub: "",
        Link: "https://ab-services.ma",
        LinkText: "ab-services.ma"
    }
    ,
    {
        id: '08',
        tImg: ts2,
        Des: "Très satisfaite ! Site pro, clair et moderne. Livraison rapide et communication au top.",
        Title: 'Arif Abdessamed',
        Sub: "Parapharmacie",
        Link: "https://paradesoliviers.com/",
        LinkText: "Paradesoliviers"
    },
    {
        id: '09',
        tImg: ts3,
        Des: "Excellent travail. Plusieurs sites livrés avec un design premium et une exécution sérieuse.",
        Title: 'Youssef Naji',
        Sub: "Architecte / Entrepreneur",
        Link: "https://najiprom.ma/",
        LinkText: "Najiprom "
    },
    {
        id: '10',
        tImg: ts1,
        Des: "Application mobile livrée avec une expérience fluide. Très bon suivi et livraison conforme.",
        Title: 'Mehdi',
        Sub: "Application mobile",
        Link: "Application mobile",
        LinkText: "ScroiJob (Matching Job)"
    },
    {
        id: '11',
        tImg: ts2,
        Des: "Très bonne collaboration. App claire, solide, et bien pensée pour le métier.",
        Title: 'Client Rakayib',
        Sub: "Application mobile",
        Link: "#",
        LinkText: "Rakayib (Enchères de chevaux)"
    },
    {
        id: '12',
        tImg: ts3,
        Des: "Excellent travail. Plusieurs sites livrés avec un design premium et une exécution sérieuse.",
        Title: 'Youssef Naji',
        Sub: "Architecte / Entrepreneur",
        Link: "https://marocsol.com/",
        LinkText: "Marocsol"
    },
    {
        id: '13',
        tImg: ts2,
        Des: "Un grand merci à FalconDev pour le développement de notre application desktop. Leur expertise et réactivité ont été essentielles pour répondre à nos besoins. Nous sommes très satisfaits du résultat et recommandons vivement leurs services.",
        Title: 'IchraQ Opticienne',
        Sub: "",
        Link: "application desktop",
        LinkText: "Application desktop"

    }
]

const Testimonial = (props) => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle subTitle={'CLIENT TESTIMONIAL'} Title={'Best Word Our Clients'} />
                            <div className="wpo-testimonial-items">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                    {
                                        testimonial.slice(0, props.limit ? props.limit : testimonial.length).map((tesmnl, tsm) => (
                                            <div className="wpo-testimonial-item" key={tsm}>
                                                <div className="wpo-testimonial-text">
                                                    <p>“{tesmnl.Des}”</p>
                                                    <div className="wpo-testimonial-text-btm">
                                                        {tesmnl.Sub && <span>{tesmnl.Sub}</span>}
                                                        <h3>{tesmnl.Title}</h3>
                                                        {tesmnl.Link && tesmnl.Link !== "#" && (
                                                            <a
                                                                href={tesmnl.Link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="testimonial-link"
                                                                title="Open project in new tab"
                                                            >
                                                                <p className="link-label">View project</p>
                                                                <span className="link-text">{tesmnl.LinkText} <span className="link-icon">↗</span></span>
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        {/* <div className="col-lg-5 offset-lg-1">
                            <div className="testimonial-right-side">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    fade={true}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="testimonial-img" key={tsm}>
                                                <img src={tesmnl.tImg} alt="" />
                                            </div>
                                        ))
                                    }

                                </Slider>
                                <div className="video-holder">
                                    <VideoModal />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;