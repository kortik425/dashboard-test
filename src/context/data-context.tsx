"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Post } from "@/interfaces/post";
import { User } from "@/interfaces/user";
import { fetchPost } from "@/api/data-fetching";

interface DataContextType {
  usersList: User[];
  postList: Post[];
  selectedPost: Post | null;
  setUid: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  setPostId: React.Dispatch<React.SetStateAction<number | null | undefined>>;
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
  const [postId, setPostId] = useState<number | undefined | null>();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const filteredPostList = useCallback(() => {
    if (!uid) return [];
    const filteredList = postList.filter((post: Post) => post.userId === uid);
    return filteredList;
  }, [postList, uid]);

  useEffect(() => {
    if (postId) {
      const getPost = async () => {
        if (!!postList) {
          console.log("postlist exist");
          const pid = postList.find((post) => post.id === postId);
          console.log("post  ", { pid, postId });
          const post = postList.find((post) => post.id === postId) || null;
          setSelectedPost(post);
        } else {
          const post = await fetchPost(postId);
          setSelectedPost(post);
        }
      };
      getPost();
    }
  }, [postId, postList]);

  return (
    <DataContext.Provider
      value={{
        postList: filteredPostList(),
        usersList,
        setUid,
        setPostId,
        selectedPost,
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
