const url = 'https://traaaveltest.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTilte = '여행 성향 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt +'.png';
  const shareURL = url + 'page.result-' + resultAlt +'.html';

  kakaoShare(shareTitle, shareDes, shareImage, shareURL);
}

function kakaoShare(){
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTilte,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
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
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
