const url = 'https://traaaveltest.netlify.app/';

function setShare(){
  var resultImg = document.querySelectot('#resultImg')
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTilte = '여행 성향 결과'
  const shareDes = infoList[resultAlt].name;
  const shareImg = url + 'img/image-' + resultAlt +'.png';
  const shareURL = url + 'page.result-' + resultAlt +'.html';
}

function kakaoShare(){
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '요기 어때? 여행 테스트',
      description: '재밌고 간단한 테스트를 통한 나만의 여행 메이트 찾기',
      imageUrl:
        'https://ibb.co/02ZkR8F.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '나도 하러가기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });
}
