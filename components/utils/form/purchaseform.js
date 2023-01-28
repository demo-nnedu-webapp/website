import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../customButton/customButton";
import { CustomInput, CustomItem } from "./contactform";
import { Logo } from "../../logo/logo";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, saveForm } from "../../../redux";
import { usePaystackPayment } from "react-paystack";

export default function PurchaseForm() {
  const dispatch = useDispatch();

  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [config, setConfig] = useState({
    reference: new Date().getTime().toString(),
    email: "",
    amount: 10000 * 10,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
    metadata: "",
    channels: ["card", "bank_transfer"],
    currency: "NGN",
  });

  useEffect(() => {
    setConfig({
      ...config,
      email: formData.email,
      metadata: formData,
    });
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSuccess = (reference) => {
    setFormData(initialState);
    dispatch(hideModal());
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const onsubmit = (e) => {
    e.preventDefault();
    initializePayment(onSuccess, onClose);
  };

  let nairaCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "symbol",
  });

  return (
    <div className="w-full flex flex-col gap-4">
      <Logo width={180} height={65} />
      <form onSubmit={onsubmit} autoComplete="false" className="w-full flex flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <div className="w-full flex flex-col gap-y-1">
            <label
              htmlFor="firstname"
              className="font-inter tracking-[0.065rem]"
            >
              {" "}
              firstname
            </label>
            <CustomInput
              type="text"
              placeholder="firstname"
              value={formData.firstname}
              required={true}
              name="firstname"
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col gap-y-1">
            <label
              htmlFor="lastname"
              className="font-inter tracking-[0.065rem]"
            >
              lastname
            </label>
            <CustomInput
              type="text"
              placeholder="lastname"
              value={formData.lastname}
              required={true}
              name="lastname"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <div className="w-full flex flex-col gap-y-1">
            <label htmlFor="email" className="font-inter tracking-[0.065rem]">
              email
            </label>
            <CustomInput
              type="email"
              placeholder="email"
              value={formData.email}
              required={true}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <div className="w-full flex flex-col gap-y-1">
            <label htmlFor="amount" className="font-inter tracking-[0.065rem]">
              amount
            </label>
            <CustomInput
              disabled={true}
              type="text"
              placeholder={nairaCurrency.format(1000)}
            />
          </div>
        </div>
        <div className="mt-5">
          <PrimaryButton type="submit">Purchase form</PrimaryButton>
        </div>
      </form>
    </div>
  );
}
