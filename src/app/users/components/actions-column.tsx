import React, { memo, useId } from "react";
import { BiSolidUserAccount, BiChat, BiCommentAdd } from "react-icons/bi";
import { Tooltip } from "@/components/UI";
import { useDataContext } from "@/context/data-context";
import Link from "next/link";
import { useModal } from "@/context/modal-context";
import { MODAL_ID } from "./add-post-modal";

interface ActionsColumnProps {
  userId: number;
}

const ActionsColumn: React.FC<ActionsColumnProps> = ({ userId }) => {
  const postButtonTooltipId = useId();
  const userButtonTooltipId = useId();
  const { setUid } = useDataContext();
  const { openModal } = useModal();

  const handleNewPost = () => {
    console.log("enter");
    openModal(MODAL_ID);
    setUid(userId);
  };

  return (
    <>
      <div className="flex gap-2">
        <button onClick={handleNewPost} aria-describedby={postButtonTooltipId}>
          <Tooltip tooltipId={postButtonTooltipId} text="Add Post for user">
            <BiCommentAdd size={24} />
          </Tooltip>
        </button>
        <button
          onClick={() => setUid(userId)}
          aria-describedby={postButtonTooltipId}
        >
          <Tooltip tooltipId={postButtonTooltipId} text="Show Posts">
            <BiChat size={24} />
          </Tooltip>
        </button>
        <Link href={`/users/${userId}`} scroll={false}>
          <Tooltip tooltipId={userButtonTooltipId} text="Open User infos">
            <BiSolidUserAccount size={24} />
          </Tooltip>
        </Link>
      </div>
    </>
  );
};

export default memo(ActionsColumn);
