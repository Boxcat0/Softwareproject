document.addEventListener('DOMContentLoaded', function(){
    //별점선택 이벤트 리스너
    document.querySelector('.rating').addEventListener('click',function(e){
        let elem = e.target;
        if(elem.classList.contains('rate_radio')){
            rating.setRate(parseInt(elem.value));
        }
    })
    //리뷰 글자수 초과 체크
    document.querySelector('.review_textarea').addEventListener('keydown',function(){
        //리뷰 400자 초과 안되게 자동 자름
        let review = document.querySelector('.review_textarea');
        let lengthCheckEx = /^.{400,}$/;
        if(lengthCheckEx.test(review.value)){
            //400자 초과 컷
            review.value = review.value.substr(0,400);
        }
    });

    //저장 전송전 체크
    document.querySelector('#save').addEventListener('click', function(e){
        //별점 선택 안했으면 메시지 표시
        if(rating.rate === 0){
            rating.showMessage('rate');
            return false;
        }
        //리뷰 1글자 미만이면 메시지 표시
        if(document.querySelector('.review_textarea').value.length < 1){
            rating.showMessage('review');
            return false;
        }
        //폼 초기화
        alert(`별점: ${rating.rate}\n내용: ${document.querySelector('.review_textarea').value}`);
        rating.setRate(0);
        document.querySelector('.review_t_textarea').value = '';
        document.querySelector('.review_textarea').value = '';
    });
});


//별점 마킹 모듈 프로토타입으로 생성
function Rating(){}
Rating.prototype.rate = 0;
Rating.prototype.setRate = function(newrate) {
    //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
    this.rate = newrate;
    let items = document.querySelectorAll('.rate_radio');
    items.forEach(function (item, idx) {
        item.checked = idx < newrate;
    });
};
Rating.prototype.showMessage = function(type){//경고메시지 표시
    switch(type)
    {
        case 'rate':
            //안내메시지 표시
            document.querySelector('.review_rating .warning_msg').style.display = 'block';
            //지정된 시간 후 안내 메시지 감춤
            setTimeout(function(){
                document.querySelector('.review_rating .warning_msg').style.display = 'none';
            },1000);
            break;
        case 'review':
            //안내메시지 표시
            document.querySelector('.review_contents .warning_msg').style.display = 'block';
            //지정된 시간 후 안내 메시지 감춤
            setTimeout(function(){
                document.querySelector('.review_contents .warning_msg').style.display = 'none';
            },1000);
            break;
        default :
            break;
    }
}

let rating = new Rating();//별점 인스턴스 생성