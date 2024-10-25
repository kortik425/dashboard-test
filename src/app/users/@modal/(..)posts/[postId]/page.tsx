"use client";
import { useDataContext } from "@/context/data-context";
import React from "react";
import Modal from "@/components/modal/modal";

interface PostProps {
  // define your props here
}

const Post: React.FC<PostProps> = ({}) => {
  const { selectedPost } = useDataContext();
  console.log(selectedPost);
  return (
    <Modal
      title={selectedPost?.title}
      isModalOpen={true}
      abortFn={() => {}}
      isRouting
    >
      <p>{selectedPost?.body || "Entra"}</p>
    </Modal>
  );
};

export default Post;
