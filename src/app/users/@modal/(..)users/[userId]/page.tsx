"use client";

import React from "react";
import Modal from "@/components/modal/modal";

interface ModalUserInfoProps {
  // define your props here
}
console.log("page");
const ModalUserInfo: React.FC<ModalUserInfoProps> = ({}) => {
  return (
    <Modal title={`title`} isModalOpen={true} abortFn={() => {}} isRouting>
      <p>Modal user info</p>
    </Modal>
  );
};

export default ModalUserInfo;
