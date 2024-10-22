"use client";
import { createContext, useContext, useState, useCallback } from "react";
import { Post } from "@/interfaces/post";
import { User } from "@/interfaces/user";
import { fetchPost } from "@/api/data-fetching";

interface DataContextType {
  usersList: User[];
  postList: Post[];
  getPost: (postId: number) => Post | Promise<Post> | undefined;
  setUid: React.Dispatch<React.SetStateAction<number | null | undefined>>;
}

interface DataProviderProps {
  children: React.ReactNode;
  initialState: { userList: User[]; postList: Post[] };
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({
  children,
  initialState,
}) => {
  const [usersList] = useState<User[]>(initialState.userList);
  const [postList] = useState<Post[]>(initialState.postList);
  const [uid, setUid] = useState<number | undefined | null>();

  const filteredPostList = useCallback(() => {
    if (!uid) return [];
    return postList.filter((post: Post) => post.userId === uid);
  }, [postList, uid]);

  const getPost = useCallback(
    (postId: number) => {
      if (!!postList) {
        return postList.find((post) => post.id === postId);
      }
      return fetchPost(postId);
    },
    [postList]
  );

  return (
    <DataContext.Provider
      value={{
        postList: filteredPostList(),
        usersList,
        setUid,
        getPost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("no context provided");
  }
  return context;
};
