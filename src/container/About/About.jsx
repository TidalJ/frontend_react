import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import $ from 'jquery';
// import { images } from '../../constants';
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => {
            setAbouts(data);
        });

        $(".card").hover(function () {
            var vSrc = $(this).find('iframe').data('video');
            var video = $(this).find('iframe');
            video.attr('src', vSrc);
            setTimeout(function () {
                // Check if player is defined
                if (typeof window.player !== 'undefined') {
                    window.player.unMute();
                } else {
                    console.error('player is not defined');
                }
            }, 1000);
        },
            function () {
                $(this).find('iframe').attr('src', '');
            });

        $('.view').click(function () {
            var el = $(this);

            if (el.hasClass('series_lacasa') === true) {
                $('.episodes .episode').each(function () {
                    var toShow = $(this).data('lacasa');
                    $(this).css('background', 'url(' + toShow + ') no-repeat center/cover');
                });
            } else if (el.hasClass('series_got') === true) {
                $('.episodes .episode').each(function () {
                    var toShow = $(this).data('got');
                    $(this).css('background', 'url(' + toShow + ') no-repeat center/cover');
                });
            } else if (el.hasClass('series_vikings') === true) {
                $('.episodes .episode').each(function () {
                    var toShow = $(this).data('vikings');
                    $(this).css('background', 'url(' + toShow + ') no-repeat center/cover');
                });
            }

            $('.fullserie').addClass('active');
        });

        $('.fullserie .close').click(function () {
            $('.fullserie').removeClass('active');
        });

    }, [])


    return (
        <>
            <h2 className='head-text'>
                <span>Good Creativity</span>
                <br />
                has
                <span> Unlimited possibilities</span>
            </h2>

            <div className='app__profiles'>

                <div className="fullscreen">
                    <div className="container">

                        <div className="card card_1">
                            {/* <div className="date">
                                RAA Creative Advertising

                            </div> */}
                            <div className="content">
                                <div className="title">RAA</div>
                                <div className="text">
                                    RAA creative advertising!
                                </div>
                            </div>
                            <div className="sinopse">
                                <iframe
                                    id="ytplayer"
                                    type="text/html"
                                    data-video="https://fastly.jsdelivr.net/gh/TidalJ/Picture-Bed@main/1715353752138RAA%E5%B9%BF%E5%91%8A%E8%AE%BE%E8%AE%A12.mp4"
                                    src=""
                                    frameBorder={0}
                                    autoPlay=""
                                    title='A'
                                    allowFullScreen="true"
                                />
                                <div className="content-sinopse">
                                    <div className="title">Synopsis</div>
                                    <div className="text">
                                        Imagine that many years from now, fish in the sea will also have RAA insurance. The RAA will set up an underwater headquarters to handle fish coming from sea to buy insurance.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card_2">
                            {/* <div className="date">
                                RAA Creative Advertising

                            </div> */}
                            <div className="content">
                                <div className="title">DUNE</div>
                                <div className="text">
                                    Dune movie clip!
                                </div>
                            </div>
                            <div className="sinopse">
                                <iframe
                                    id="ytplayer"
                                    type="text/html"
                                    data-video="https://www.youtube.com/embed/RSGWI8ktw4E?si=nPA2yfUh3OxSIrpP"
                                    src=""
                                    frameBorder={0}
                                    autoPlay=""
                                    title='A'
                                    allowFullScreen="true"
                                />
                                <div className="content-sinopse">
                                    <div className="title">Synopsis</div>
                                    <div className="text">
                                        A clip from the first Dune movie. Gorgeous battle scenes combined with dynamic music make people's hearts beat.
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="card card_3">
                            {/* <div className="date">
                                RAA Creative Advertising

                            </div> */}
                            <div className="content">
                                <div className="title">Richard the Lionheart</div>
                                <div className="text">
                                    Richard the Lionheart AI Man!
                                </div>
                            </div>
                            <div className="sinopse">
                                <iframe
                                    id="ytplayer"
                                    type="text/html"
                                    data-video="https://www.youtube.com/embed/kDTRTRwbGAk?si=TF9rUJnhwuECKXkX"
                                    src=""
                                    frameBorder={0}
                                    autoPlay=""
                                    title='A'
                                    allowFullScreen="true"
                                />
                                <div className="content-sinopse">
                                    <div className="title">Synopsis</div>
                                    <div className="text">
                                        Artificial intelligence Richard the Lionheart implements digital spoken word broadcasting technology through lip synchronization matching. Cool, right?
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className="fullserie">
                    <img src="http://www.cartaodental.com/nbase/image/fullserie.svg" alt='raa' />
                </div> */}


                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt="raa" />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

// export default AppWrap(About, 'about');

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);