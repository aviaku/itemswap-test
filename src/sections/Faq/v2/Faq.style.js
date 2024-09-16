import styled from "styled-components";

const FAQStyleWrapper = styled.section`
  background: #090a1a;
  padding-top: 0px;
  padding-bottom: 120px;
  position: relative;

  .section_title {
    text-align: center;
  }

  .faq-title {
    width: 70%;
    margin: 0 auto;
  }

  .gamfi_faq_content {
    max-width: 770px;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: 1;
  }

  .gamfi_faq_questions {
    margin-top: 57px;
    position: relative;
    .faq_bear_img {
      position: absolute;
      top: 80px;
      right: -163px;
      z-index: 2;
    }

    .faq_questions {
      position: relative;
      z-index: 1;

      .accordion__item + .accordion__item {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  }
  .accordion__item {
    background: rgba(30, 31, 53, 0.5);
    backdrop-filter: blur(10px);
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
  .accordion__header {
    h5 {
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.8);
      height: 76px;
      padding: 0 29px;
      font-size: 22px;
      line-height: 34px;
      margin-bottom: 0px;
    }
  }

  .accordion__body {
    p {
      padding: 0px 48px 24px 29px;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;
      max-width: 100%;
    }
  }

  .faq_cta_text {
    text-align: center;
    margin: 35px auto 0 auto;
    a {
      color: #a3ff12;
    }
  }

  .bg_shape {
    position: absolute;
    top: 63%;
    left: 42%;
    z-index: 0;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 991px) {
    .gamfi_faq_questions {
      .faq_bear_img {
        display: none;
      }
    }

    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .accordion__header {
      h5 {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .accordion__body {
      p {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .faq-title {
      width: 80% !important;
    }
    .accordion__header {
      h5 {
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .faq-title {
      h2 {
        font-size: 15px;
      }
      width: 100% !important;
    }
  }
`;

export default FAQStyleWrapper;
