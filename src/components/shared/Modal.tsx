import React, { FC, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "./Button";

export interface ModalProps {
  title: ReactNode;
  // CustomModalComponent?: FC<PropsWithChildren>
  // content: FC<ModalContentPropsInternal>
  clickOutsideToDismiss?: boolean;
  modalClassName?: string;
  modalContainerClassName?: string;

  max?: boolean;

  wrapper?: FC;

  overlay?: boolean;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ ...props }) => {
  const { title, children, ...rest } = props;
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>{title}</Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile.</Dialog.Description>
          <Dialog.Close></Dialog.Close>
          <Dialog.Close></Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default Modal;
