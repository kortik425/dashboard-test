import { fetchPostList, fetchUserList } from "@/api/data-fetching";
import { Card } from "@/components/UI";
import { Post } from "@/interfaces/post";
import { User } from "@/interfaces/user";

export default async function Home() {
  const users: User[] = await fetchUserList();
  const posts: Post[] = await fetchPostList();

  return (
    <main className="mr-4">
      <h1>Welcome Dashboard</h1>
      <section className="flex flex-col md:flex-row">
        <Card
          title="Total posts"
          className="m-4 bg-slate-100 text-blue-900  h-[auto] pl-4 pt-4"
        >
          <p className="font-bold text-[3rem]">{`${posts.length} posts`}</p>
        </Card>
        <Card
          title="Total Users:"
          className="m-4 bg-slate-100 text-blue-900  h-[auto] pl-4 pt-4"
        >
          <p className="font-bold text-[3rem]">{`${users.length} users`}</p>
        </Card>
        <Card
          title="Avarage post/user:"
          className="m-4 bg-slate-100 text-blue-900 h-[auto] pl-4 pt-4"
        >
          <p className="font-bold text-[3rem]">{`${posts.length / users.length} post x user`}</p>
        </Card>
      </section>
      <section className="flex">
        <Card
          title="More Cool Stuff"
          className="m-4 bg-slate-100 text-blue-900 "
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque, fugit praesentium eligendi quo odio cumque molestias non enim nisi veritatis."
        />
        <Card
          title="More Cool Stuff"
          className="m-4 bg-slate-100 text-blue-900 "
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque, fugit praesentium eligendi quo odio cumque molestias non enim nisi veritatis."
        />
      </section>
    </main>
  );
}
