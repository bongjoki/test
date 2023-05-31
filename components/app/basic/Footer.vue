<style lang="less" scoped>
.basic-footer {
  background: rgba(37, 40, 45, 0.9);
  .content {
    width: 100%;
    padding: 40px 60px;
    max-width: 1440px;
    margin: 0 auto;
  }
  .title {
    display: flex;
    align-content: center;
    gap: 8px;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
  }
  .terms {
    margin-top: 8px;
    display: flex;
    .caption-p12;
    align-items: center;
    gap: 16px;
    color: #a0a8b5;
  }
  .description {
    .caption-p12;
    color: #6e798c;
  }
  .email {
    margin-top: 8px;
    display: flex;
    align-content: center;
    .caption-p12;
    color: #a0a8b5;
    .caption {
      color: #6e798c;
    }
  }
  .copyright {
    .caption-p12;
    color: #6e798c;
  }
}
</style>
<template lang="pug">
  .basic-footer
    .content
      .title
        native-icon(src="logo" :width="45" :height="10")
        .text 원트
      .terms
        a.term 이용약관
        a.term 개인정보처리방침
        a.term 환불규정
        a.term 고객센터
      .description.m-t-8 (주)롸잇나우 • 대표이사: 김형철  l  개인정보책임관리자: 김형철
      .description 사업자번호 : 687-87-02728  l  통신판매업: 제2023-서울관락-0266
      .description 주소: 서울특별시 관악구 남부순환로 1799, 2층  l  대표번호: 070-8830-5540  l  운영시간: 11:00 - 16:00 (주말 공휴일 제외) (점심시간 12:30 - 13:30)
      .email
        .caption 제휴문의:
        .text business@rightnow.company
      .copyright COPYRIGHT © 2023 (주)라잇나우. ALL RIGHTS RESERVED
</template>
