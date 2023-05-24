import React, { useEffect, useState } from "react";
import "../css/map.css";
import "../css/youtube_button.css";
import "../css/star.css";
import axios from "axios";
import qs from "qs";

function useReview() {
    const userName = sessionStorage.getItem('Id');
    const gymName = sessionStorage.getItem('targetName');
    const [rate, setRate] = useState(0);

    useEffect(() => {
        const items = document.querySelectorAll('.rate_radio');
        items.forEach((item, idx) => {
            item.checked = idx < rate;
        });
        document.getElementById('rate').value = rate;
    }, [rate]);

    const handleClick = (newRate) => {
        setRate(newRate);
    };
    const handleModal = () => {
        console.log('false');
        window.location.assign('/SeparatePage');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const rate = parseInt(document.getElementById('rate').value);
        if (!rate) {
            showMessage('review_rating');
            return;
        }

        const reviewTextArea = document.querySelector('.review_contents textarea');
        const review = reviewTextArea.value.trim();
        if (!review) {
            showMessage('review_contents');
            return;
        }

        alert(`별점: ${rate}\n내용: ${review}`);
        reviewTextArea.value = '';
        axios.post('/Review', qs.stringify({
            id: userName,
            gym : gymName,
            star : rate,
            reviews : review
        })).then((response) => {
            console.log(response.data);
            window.location.assign('/SeparatePage');
        })
            .catch((error) => {
            console.error(error);
        });
    };

    const showMessage = (type) => {
        const warningMsg = document.querySelector(`.${type} .warning_msg`);
        warningMsg.style.display = 'block';
        setTimeout(() => {
            warningMsg.style.display = 'none';
        }, 1000);
    };

    return (
        <div className="modal_review">
            <div className="modal-container-review">
                <div>
                    <button className="modalBackbutton" onClick={handleModal}></button>
                </div>
                <form method="post" onSubmit={handleSubmit}>
                    <input type="hidden" name="id" value={userName} />
                    <input type="hidden" name="gym" value={gymName} />
                    <input type="hidden" name="rate" id="rate" value="0" />
                    <p className="title_star">
                        <h2>별점과 리뷰를 남겨주세요.</h2>
                    </p>
                    <div className="review_rating">
                        <div className="warning_msg">별점을 선택해 주세요.</div>
                        <div className="rating">
                            <input
                                type="checkbox"
                                name="star"
                                id="rating1"
                                value="1"
                                className="rate_radio"
                                title="1점"
                                onClick={() => handleClick(1)}
                            />
                            <label htmlFor="rating1"></label>
                            <input
                                type="checkbox"
                                name="star"
                                id="rating2"
                                value="2"
                                className="rate_radio"
                                title="2점"
                                onClick={() => handleClick(2)}
                            />
                            <label htmlFor="rating2"></label>
                            <input
                                type="checkbox"
                                name="star"
                                id="rating3"
                                value="3"
                                className="rate_radio"
                                title="3점"
                                onClick={() => handleClick(3)}
                            />
                            <label htmlFor="rating3"></label>
                            <input
                                type="checkbox"
                                name="star"
                                id="rating4"
                                value="4"
                                className="rate_radio"
                                title="4점"
                                onClick={() => handleClick(4)}
                            />
                            <label htmlFor="rating4"></label>
                            <input
                                type="checkbox"
                                name="star"
                                id="rating5"
                                value="5"
                                className="rate_radio"
                                title="5점"
                                onClick={() => handleClick(5)}
                            />
                            <label htmlFor="rating5"></label>
                        </div>
                    </div>
                    <div className="review_contents">
                        <div className="warning_msg">1자 이상 400자 이하로 작성해 주세요.</div>
                        <textarea className="textArea2" name="reviews" rows="10" cols="50"></textarea>
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}

export default useReview;
