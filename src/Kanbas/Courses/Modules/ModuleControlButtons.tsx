///Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Modules/ModuleControlButtons.tsx

import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // import the BsPlus icon
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
