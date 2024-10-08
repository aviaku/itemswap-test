import cardBgShape from "@assets/images/bg/card-bg-shape-small.png";
import styled from "styled-components";

const ProjectCardStyleWrapper = styled.div`
  .previous-item {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    row-gap: 20px;
    padding: 30px 30px;
    color: #ffffff;
    background: #1a1b30;
    overflow: hidden;
    transition: 0.4s;
    z-index: 11;

    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0%;
      top: 0;
      background: url(${cardBgShape.src});
      background-repeat: no-repeat;
      background-position: center;
      content: "";
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s;
      z-index: -1;
    }

    &:hover {
      background: radial-gradient(
        circle,
        rgba(96, 79, 169, 0.58) -7%,
        #1e1f35 30%
      );
      &::before {
        opacity: 0.7;
        visibility: visible;
      }
      .card-hover-wrapper {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .previous-gaming {
    display: flex;
    align-items: center;
    column-gap: 30px;
    width: 15%;
  }

  .previous-traits {
    display: flex;
    align-items: center;
    // column-gap: 30px;
    width: 20%;
  }

  .previous-price {
    h4 {
      margin-bottom: 10px;
    }
    .dsc {
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
    }
  }

  .previous-chaining {
    display: flex;
    align-items: center;
    column-gap: 4px;
    width: 30%;
  }

  .item-amount {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px 0px 0px 8px;
    background: #9f7319d1;
    padding: 1px 3px;
    display: flex;
    align-items: center;
    font-size: 8px;
    color: #ffffff;
  }

  .previous-raise {
    display: flex;
    align-items: center;
    column-gap: 35px;
    width: 20%;
  }

  .progressbar_wrapper {
    width: 197px;
    .progress_bar {
      height: 6px;
      background-size: 10px 20px;
      .progress_bar_overlay {
        background-size: 10px 20px;
      }
    }
  }

  .power-icon {
    height: 12px;
    width: 12px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .power-headliner {
  }

  .item {
    width: 40px;
  }

  .coin-img {
    width: 25px;
  }

  @media only screen and (max-width: 1199px) {
    .previous-chaining {
      column-gap: 60px;
    }

    .previous-raise {
      column-gap: 15px;
    }
    .progressbar_wrapper {
      width: 140px;
    }
  }

  @media only screen and (max-width: 991px) {
    .previous-item {
      padding: 20px;
    }
    .previous-gaming {
      column-gap: 16px;
      .previous-price {
        h4 {
          font-size: 18px;
          margin-bottom: 4px;
        }
      }
      .previous-image {
        img {
          width: 50px;
        }
      }
    }

    .previous-traits {
      width: 100%;
    }

    .previous-chaining {
      column-gap: 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    .previous-gaming {
      width: 100%;
    }

    .previous-trait {
      width: 100%;
    }

    .previous-chaining {
      width: 100%;
    }
    .previous-raise {
      width: 100%;
      flex-direction: column;
      align-items: baseline;
      row-gap: 10px;
    }

    .progressbar_wrapper {
      width: 100%;
    }
  }
`;

export default ProjectCardStyleWrapper;
