import React, {useCallback, useEffect, useState} from 'react';
import { useTransition, animated } from 'react-spring';
import "../css/youtube_button.css"

const images = [
    {
        url: '시판1.png',//이벤트
        link: '/mainPage',
    },
    {
        url: '시판2.png',//중고거래
        link: 'www.google.com',
    }
];

function SlideShow() {
    const [playing] = useState(true);
    const [index, setIndex] = useState(0);

    const nextVideo = useCallback(() => {
        setIndex((index + 1) % images.length);
    }, [index]);

    useEffect(() => {
        let interval;
        if (playing) {
            interval = setInterval(() => {
                nextVideo();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [playing, nextVideo]);

    const transitions = useTransition(index, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    const nextImage = () => {
        setIndex((index + 1) % images.length);
    };

    const prevImage = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    return (
        <div>
            <button className ="bannerButton" onClick={prevImage}>←</button>
            <button className ="bannerButton" onClick={nextImage}>→</button>
            <div style={{ position: 'relative', height: '300px' }}>
                {transitions((style, i) => (
                    <animated.a
                        key={i}
                        style={{
                            ...style,
                            position: 'absolute',
                            top: 0,
                            left: -50,
                            height: '200px',
                            width: '90%',

                        }}
                        href={images[i].link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <animated.img
                            style={{
                                width: '100%',
                                height: '100%',

                            }}
                            src={images[i].url}
                            alt="slide"
                        />
                    </animated.a>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
