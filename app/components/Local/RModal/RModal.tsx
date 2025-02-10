import React, { ReactNode } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
interface IRmodal {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RModal: React.FC<IRmodal> = ({ children, open, setOpen }) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-white">{children}</AlertDialogContent>
    </AlertDialog>
  );
};
export default RModal;
