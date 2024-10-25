import React from "react";
import Modal from "@/components/modal/modal";
import { TextInput } from "@/components/UI";
import { fetchUserList } from "@/api/data-fetching";

interface ModalUserInfoProps {
  params: {
    userId: string; // Define the type for userId
  };
}
const ModalUserInfo: React.FC<ModalUserInfoProps> = async ({ params }) => {
  const userList = await fetchUserList();
  const selectedUser = userList.find(
    (user) => user.id === Number(params.userId)
  );

  return (
    <Modal title={`User Information`} isModalOpen={true} isRouting>
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
    </Modal>
  );
};

export default ModalUserInfo;
