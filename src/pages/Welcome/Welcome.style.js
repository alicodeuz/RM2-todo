import styled from 'styled-components';

export const StyledWelcome = styled.div`
  .main {
    display: flex;
    margin:50px;
    padding: 0;
    margin-bottom: 0;
  }
  .left__side img {
      margin-left: -30px;
      margin-top: 150px;
      height: 41%;
  }
  .right__side img {
      margin-top: 110px;
      height: 45%;
  }
  .middle__side {
      margin-left: -100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 80px;
  }
  .middle__side--title {
      margin-top: 15px;
      font-size: 40px;
      color: rgb(83, 78, 78);

  }
  .middle__side--subtitle {
      font-size: 20px;
      margin-top: -15px;
      /* width: 370px; */
      font-weight: 600;
  }
  .middle__side--img2 img {
      width: 300px;
  }
  .middle__side--button {
      border-radius: 6px;
      border: none;
      outline: none;
      background-color: #0078d4;
      color: white;
      font-size: 14px;
      font-weight: 700;
      height: 46px;
      width: 210px;
  }
  .middle__side h4 {
      color: #0078d4;
  }
  .middle__side h4:hover {
      border-bottom: 2px solid #0078d4;
  }
  .middle__side--icons {
      margin-top: -5px;
      display: flex;
  }
  .android {
      margin-right: 10px;
      border: 1px solid rgb(90, 85, 85);
      padding: 0px 13px;
      border-radius: 5px;
      font-size: 30px;
  }   
  .android:hover {
      background-color: rgba(214, 203, 203, 0.253);
  }
  .windows {
      margin-right: 10px;
      border: 1px solid rgb(75, 71, 71);
      padding: 0px 13px;
      border-radius: 5px;
      font-size: 30px;
  }
  .windows:hover {
      background-color: rgba(214, 203, 203, 0.253);
  }
  .apple {
      border: 1px solid rgb(71, 65, 65);
      padding: 0px 13px;
      border-radius: 5px;
      font-size: 30px;
  }
  .apple:hover {
      background-color: rgba(214, 203, 203, 0.253);
  }

  @media (max-width:1121px)  { 
      .main {
          display: flex;
          justify-content: center;
      }
      .middle__side--img2 img {
          display: block;
          width: 280px;
          margin-bottom: 25px;
      }
      .middle__side--subtitle {
          display: none;
      }
      .left__side img {
        display: none;
      }
      .right__side img {
        display: none;
      }
  }
`;