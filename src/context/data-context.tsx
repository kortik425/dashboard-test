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
import { insertPost, requestBody } from "@/api/data-post";

interface DataContextType {
  usersList: User[];
  postList: Post[];
  selectedPost: Post | null;
  selectedUser: User | null;
  setUid: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  setPostId: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  addNewPost: (requestBody: requestBody) => void;
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
  const [postList, setPostList] = useState<Post[]>(initialState.postList);
  const [uid, setUid] = useState<number | undefined | null>();
  const [postId, setPostId] = useState<number | undefined | null>();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredPostList = useCallback(() => {
    if (!uid) return [];
    const filteredList = postList.filter((post: Post) => post.userId === uid);
    return filteredList;
  }, [postList, uid]);

  useEffect(() => {
    if (uid) {
      const usr = usersList.find((user: User) => user.id === uid) || null;
      setSelectedUser(usr);
    }
  }, [uid, usersList]);

  useEffect(() => {
    if (postId) {
      const getPost = async () => {
        if (!!postList) {
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

  const addNewPost = async (requestBody: requestBody) => {
    if (!!uid) {
      const newPost = await insertPost(requestBody, uid);
      setPostList((prev) => [...prev, newPost]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        postList: filteredPostList(),
        usersList,
        selectedPost,
        selectedUser,
        setUid,
        setPostId,
        addNewPost,
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
