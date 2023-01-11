import { Form, Input, notification } from "antd";
import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../customButton/customButton";
import { plunk } from "../../../lib/plunk";

const { Item } = Form;

const CustomInput = styled(Input)`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  outline: none;
  font-weight: 500;
  color: #1f1839;
  box-shadow: none;
  background-color: white;
  width: 100%;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.06em;
  border: 1px solid #1f1839;

  &:hover {
    border: 2px solid #dec918;
    box-shadow: none;
  }

  &:focus {
    border: 2px solid #0074a8;
    box-shadow: none;

    &:active {
      border: 2px solid #0074a8;
      box-shadow: none;
    }

    &:disabled {
      background-color: #e8e8e8;
    }
  }
`;

const CustomItem = styled(Item)`
  margin: 0;
  color: #1f1839;

  & .ant-form-item-label {
    margin: 0;
    margin-bottom: 6px;
    font-family: inter;
    letter-spacing: 0.06em;
    font-weight: 500;
    padding: 0;
    color: #1f1839;
  }
`;

export const ContactForm = () => {
  const [form] = Form.useForm();

  const openNotification = () => {
    notification.open({
      message: <h3 className="font-inter text-white">Message sent</h3>,
      description: "Your message have been received",
      style: {
        backgroundColor: "#0074A8",
        color: "white",
        fontFamily: "montserrat",
        letterSpacing: "0.06em",
      },
    });
  };

  const onFinish = async (values) => {
    openNotification();

    await plunk.events.publish({
      event: "contact nnedu",
      email: values.email,
      data: {
        message: values.message,
      },
    });

    console.log(values);
  };

  return (
    <>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <div className="flex flex-col gap-4">
          <CustomItem label="full name" name="fullname">
            <CustomInput />
          </CustomItem>
          <CustomItem label="email" name="email">
            <CustomInput />
          </CustomItem>
          <CustomItem label="message" name="message">
            <CustomInput.TextArea rows={8} placeholder="message" />
          </CustomItem>
        </div>
        <div className="mt-5">
          <PrimaryButton type="submit">Send</PrimaryButton>
        </div>
      </Form>
    </>
  );
};
