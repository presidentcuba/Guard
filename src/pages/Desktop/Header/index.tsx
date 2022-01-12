import React from "react";
import logo from "../../images/logo_main.png";
export default function index() {
  return (
    <div className="header">
      <div className="width-default">
        <div className="header__content">
          <div className="header__logo">
            <img src={logo}></img>
          </div>
          <div className="header__link">
            <ul className="header__link-box">
              <li className="header__link-box-li">
                <a className="header__link-line active" href="#">
                  서비스 소개
                </a>
              </li>
              <li className="header__link-box-li">
                <a className="header__link-line" href="#">
                  법적효력·보안
                </a>
              </li>
              <li className="header__link-box-li">
                <a className="header__link-line" href="#">
                  활용 분야
                </a>
              </li>
              <li className="header__link-box-li">
                <a className="header__link-line" href="#">
                  이용 혜택
                </a>
              </li>
              <li className="header__link-box-li">
                <a className="header__link-line" href="#">
                  요금 안내
                </a>
              </li>
              <li className="header__link-box-li">
                <a className="header__link-line" href="#">
                  고객센터
                </a>
              </li>
            </ul>
          </div>
          <div className="header__link-right">
            <ul className="header__link-box">
              <li className="header__link-box-li">
                <a className="header__link-line" href="#">
                  로그인
                </a>
              </li>
              <li className="header__link-box-li">
                <a className="header__link-line" href="#">
                  고객센터
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
