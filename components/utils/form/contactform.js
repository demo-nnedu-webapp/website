import { notification } from "antd";
import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../customButton/customButton";

export const CustomInput = styled.input`
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
export const CustomTextArea = styled.textarea`
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

export const ContactForm = () => {
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

  const onFinish = (e) => {
    e.preventDefault();
    openNotification();
  };

  return (
    <>
      <form onSubmit={onFinish}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="fullname">fullname</label>
            <CustomInput name="fullname" placeholder="full name" />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <CustomInput name="email" placeholder="email" />
          </div>

          <div>
            <label htmlFor="message">message</label>
            <CustomTextArea
              rows={8}
              placeholder="message here"
              name="message"
            />
          </div>
        </div>
        <div className="mt-5">
          <PrimaryButton type="submit">Send</PrimaryButton>
        </div>
      </form>
    </>
  );
};
