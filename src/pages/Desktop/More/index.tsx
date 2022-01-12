import React from "react";
import { RightOutlined } from "@ant-design/icons";
export default function index() {
  return (
    <div className="more">
      <div className="more__content">
        <div className="more__title">
          <span>지금 바로 시작하세요!</span>
        </div>
        <div className="more__info">
          <span>설명이 필요 없는 간단한 계약 과정,</span>
          <span>직접 경험해보세요!</span>
        </div>
        <div className="more__btn">
          <a href="#" className="btn">
            <span>더 살펴보기</span>
            <RightOutlined />
          </a>
        </div>
      </div>
    </div>
  );
}
