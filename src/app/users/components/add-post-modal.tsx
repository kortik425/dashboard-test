"use client";

import Modal from "@/components/modal/modal";
import { TextInput } from "@/components/UI";
import { useDataContext } from "@/context/data-context";
import { useModal } from "@/context/modal-context";
import React, { useState } from "react";

export const MODAL_ID = "add-post";

interface AddPostModalProps {
  // define your props here
}

const AddPostModal: React.FC<AddPostModalProps> = ({}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addNewPost } = useDataContext();
  const { closeModal, modalId } = useModal();

  const onFormUpdate = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    if (name === "title") {
      setTitle(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewPost({ title, body });
    closeModal();
  };

  return (
    <Modal
      title="Add new post"
      isModalOpen={modalId === MODAL_ID}
      footer={<CustomModalFooter cancel={closeModal} />}
      dismissFn={closeModal}
    >
      <form
        onSubmit={handleSubmit}
        id={MODAL_ID}
        className="max-w-full min-w-96"
      >
        <TextInput label={"Title"} name="title" onInput={onFormUpdate} />
        <label htmlFor={"contentPost"} className="stilised-p-500 pl-2">
          Content
        </label>
        <div className="flex min-h-10 pl-2 rounded-lg bg-white max-w-[100%] border border-black transition duration-150 ease-in-out focus-within:ring-2 focus-within:ring-blue-500 items-center">
          <textarea
            id="contentPost"
            placeholder="Content"
            className="flex-grow border-none outline-none m-2"
            name="body"
            onInput={onFormUpdate}
          />
        </div>
      </form>
    </Modal>
  );
};

interface ModalFooterProps {
  cancel: () => void;
}
const CustomModalFooter: React.FC<ModalFooterProps> = ({ cancel }) => {
  return (
    <footer className="pt-8 flex flex-row-reverse">
      <button
        form={MODAL_ID}
        type="submit"
        className="ml-3 inline-flex justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
      >
        {"Save"}
      </button>
      <button
        type="button"
        className="mt-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
        onClick={cancel}
      >
        {"Cancel"}
      </button>
    </footer>
  );
};

export default AddPostModal;
