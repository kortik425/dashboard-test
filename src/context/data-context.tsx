"use client";
import { createContext, useContext, useState, useCallback } from "react";
import { Post } from "@/interfaces/post";
import { User } from "@/interfaces/user";

interface DataContextType {
  usersList: User[];
  postList: Post[];
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

  return (
    <DataContext.Provider
      value={{ postList: filteredPostList(), usersList, setUid }}
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
