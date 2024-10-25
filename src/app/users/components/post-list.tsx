"use client";
import React from "react";
import { BiX } from "react-icons/bi";

import { Card } from "@/components/UI";
import { useDataContext } from "@/context/data-context";
import { useRouter } from "next/navigation";

const PostList: React.FC = () => {
  const { postList, setPostId, setUid } = useDataContext();
  const router = useRouter();

  const showPost = (e: React.MouseEvent, postId: number) => {
    router.push(`/posts/${postId}`);
    setPostId(postId);
  };
  const isEmpty = postList.length === 0;
  return (
    <section
      className={`bg-gray-900 rounded-2xl fixed top-0 bottom-0 max-w-96 m-4 overflow-y-auto transition-all ${isEmpty ? "-right-full" : "right-0"}`}
    >
      <header className="flex justify-between m-4">
        <h2>postList</h2>
        <button
          onClick={() => {
            setUid(null);
          }}
        >
          <BiX size={44} />
        </button>
      </header>
      <div className="m-4">
        {postList.length !== 0 &&
          postList.toReversed().map((post) => {
            return (
              <Card
                key={post.id}
                title={post.title}
                className="mb-5"
                onClick={(e) => {
                  showPost(e, post.id);
                }}
              />
            );
          })}
      </div>
    </section>
  );
};

export default PostList;
