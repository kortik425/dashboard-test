import React, { memo, useId } from "react";
import { BiSolidUserAccount, BiChat } from "react-icons/bi";
import { Tooltip } from "@/components/UI";
import { useDataContext } from "@/context/data-context";

// import { useModal } from "@/contexts/modals";

interface ActionsColumnProps {
  userId: number;
}

const ActionsColumn: React.FC<ActionsColumnProps> = ({ userId }) => {
  const postButtonTooltipId = useId();
  const userButtonTooltipId = useId();
  const { setUid } = useDataContext();
  // const { openModal } = useModal();
  // const isSelected = userId === user?.id;
  const handleclick = () => {
    // fetchUser(userId);
    // openModal(`user-${userId}`);
  };

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => setUid(userId)}
          aria-describedby={postButtonTooltipId}
        >
          <Tooltip tooltipId={postButtonTooltipId} text="Show Posts">
            <BiChat size={24} />
          </Tooltip>
        </button>
        <button
          onClick={() => handleclick()}
          aria-describedby={userButtonTooltipId}
        >
          <Tooltip tooltipId={userButtonTooltipId} text="Open User infos">
            <BiSolidUserAccount size={24} />
          </Tooltip>
        </button>
      </div>
    </>
  );
};

export default memo(ActionsColumn);
