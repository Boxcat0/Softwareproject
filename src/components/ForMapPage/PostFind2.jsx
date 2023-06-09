import React from "react";
import DaumPostcode from "react-daum-postcode";
import '../css/Modal.css';

const Post = (props) => {

    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
    }

    return (
        <div className="parent-container">
            <DaumPostcode
                className="modal_review"
                autoClose
                onComplete={complete} />
        </div>
    );
};

export default Post;