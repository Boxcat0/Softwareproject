import React, {useCallback, useEffect, useState} from 'react';
import { useTransition, animated } from 'react-spring';
import "../css/youtube_button.css"

const images = [
    '시판1.png',
    '시판2.png'
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
    // react-spring useTransition hook을 이용해 index 변경시 슬라이드 애니메이션 실행
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
                    <animated.img
                        key={i}
                        style={{
                            ...style,
                            position: 'absolute',
                            top: 0,
                            left: -50,
                            height: '200px',
                            width: '85%',
                        }}
                        src={images[i]}
                        alt="slide"
                    />
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
