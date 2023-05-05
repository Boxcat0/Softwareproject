import React, {useEffect} from 'react';
import DaumPostcode from 'react-daum-postcode';

const Post = () => {
    useEffect(() => {
        if (sessionStorage.getItem("toReload") === "true") {
            window.location.reload();
            sessionStorage.setItem("toReload", "False");
        }
    });
    const handleComplete = (data) => {
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
        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        console.log(data.address);
    }

    return (
        <DaumPostcode onComplete={handleComplete}/>
    );
}

export default Post;