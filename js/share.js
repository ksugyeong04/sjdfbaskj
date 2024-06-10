const url = 'https://traaaveltest.netlify.app/';
function setShare() {
  var resultImg = document.querySelector('#resultlmg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '요기 어때 여행 성향 테스트 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page.result-' + resultAlt + '.html';
}

function kakaoShare() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
