import React from "react";

import { fetchUserList } from "@/api/data-fetching";
import Image from "next/image";
import { TextInput } from "@/components/UI";

interface UserInfoProps {
  params: {
    userid: string;
  };
}

const UserInfo: React.FC<UserInfoProps> = async ({ params }) => {
  const userList = await fetchUserList();
  const selectedUser = userList.find(
    (user) => user.id.toString() === params.userid
  );

  return (
    <>
      <Image
        width={150}
        height={150}
        className="rounded-full"
        src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
        alt="Avatar"
      />
      <div className="flex flex-col gap-5">
        <section
          id="details"
          className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-4 border-b-1"
        >
          <TextInput label="Name" disabled defaultValue={selectedUser?.name} />
          <TextInput
            label="Username"
            disabled
            defaultValue={selectedUser?.username}
          />
          <TextInput
            label="Email"
            type="email"
            disabled
            defaultValue={selectedUser?.email}
          />
          <TextInput
            label="Phone number"
            type="tel"
            disabled
            defaultValue={selectedUser?.phone}
          />
        </section>
        <section
          id="address"
          className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] gap-4 max-w-full"
        >
          <TextInput
            label="Address"
            containerClassName="col-span-full row-span-1"
            disabled
            defaultValue={selectedUser?.address?.street}
          />
          <TextInput
            label="Suite"
            containerClassName="col-start-1 col-end-2"
            disabled
            defaultValue={selectedUser?.address?.suite}
          />
          <TextInput
            label="City"
            containerClassName="col-start-2 col-end-3"
            disabled
            defaultValue={selectedUser?.address?.city}
          />
          <TextInput
            label="Zip Code"
            containerClassName="col-start-3 col-end-4"
            disabled
            defaultValue={selectedUser?.address?.zipcode}
          />
        </section>
        <section id="others" className="grid grid-rows-[1fr_1fr] gap-4">
          <TextInput
            label="Company"
            disabled
            defaultValue={selectedUser?.company?.name}
          />
          <TextInput
            label="Personal Website"
            disabled
            defaultValue={selectedUser?.website}
          />
        </section>
      </div>
    </>
  );
};

export default UserInfo;
