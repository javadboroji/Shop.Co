import RModal from "@/app/components/Local/RModal/RModal";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
import React, { useState } from "react";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewProduct: React.FC<IProps> = ({ open, setOpen }) => {
  return (
    <RModal open={open} setOpen={setOpen}>
      <h1> Test</h1>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </RModal>
  );
};

export default ViewProduct;
