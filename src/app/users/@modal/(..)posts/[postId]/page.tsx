"use client";
import { useDataContext } from "@/context/data-context";
import React from "react";
import { Modal } from "../../modal";

interface PostProps {
  // define your props here
}

const Post: React.FC<PostProps> = ({}) => {
  const { selectedPost } = useDataContext();

  return (
    <Modal>
      <h1 className="page-heading">{selectedPost?.title}</h1>
      <p>{selectedPost?.body || "Entra"}</p>
    </Modal>
  );
};

export default Post;
