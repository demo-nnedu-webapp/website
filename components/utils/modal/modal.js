import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../redux";

export const Modals = ({ title, message, cancel, open }) => {
  const modal = useSelector((state) => state.locationReducer.modal);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(hideModal(modal));
  };

  return (
    <>
      <Modal
        className=""
        title={title}
        open={open}
        onCancel={handleCancel}
        footer=""
      >
        {message}
      </Modal>
    </>
  );
};
