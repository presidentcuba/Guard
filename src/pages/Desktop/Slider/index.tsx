import React from "react";
import { RightOutlined } from "@ant-design/icons";
export default function index() {
  return (
    <div className="slider">
      <div className="width-default">
        <div className="slider__content">
          <div className="slider__slogan">
            <span>모든 계약을 쉽고</span>
            <span>간단하게, 빠르게 처리하세요.</span>
          </div>
          <div className="slider__thread">
            <span>가드 시그니처를 이용하면 어떤 계약이든</span>
            <span>복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,</span>
            <span>문서 처리 및 관리까지 편리하게 이용할 수 있습니다.</span>
          </div>
          <div className="slider_btn">
            <span>지금 확인하기</span>
            <a href="#" className="btn">
              <RightOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
