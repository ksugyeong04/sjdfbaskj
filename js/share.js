function kakaoShare(){
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '요기 어때? 여행 테스트',
      description: '재밌고 간단한 테스트를 통한 나만의 여행 메이트 찾기',
      imageUrl:
        'https://ibb.co/FDxy1cF',
      link: {
        mobileWebUrl: 'https://traaaveltype.netlify.app/',
        webUrl: 'https://traaaveltype.netlify.app/',
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '나도 참여하기',
        link: {
          mobileWebUrl: 'https://traaaveltype.netlify.app/',
          webUrl: 'https://traaaveltype.netlify.app/,
        },
      },
    ],
  });
}
