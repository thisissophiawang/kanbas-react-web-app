// src/Kanbas/Courses/Modules/ModuleControlButtons.tsx
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsPlus } from 'react-icons/bs';
import GreenCheckmark from './GreenCheckmark';

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: ModuleControlButtonsProps) {
  return (
    <div className="float-end">
      <FaPencilAlt onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 fs-4" onClick={() => deleteModule(moduleId)} />
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
