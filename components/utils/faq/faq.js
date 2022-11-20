import React from "react";
import { Collapse } from "antd";
import { Icon } from "@iconify/react";

const { Panel } = Collapse;

export const FAQ = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        className="w-fit font-inter border-0 tracking-[0.06em] font-medium lg:w-[750px]"
        onChange={onChange}
        expandIcon={({ isActive }) => (
          <Icon
            icon="ant-design:caret-right-outlined"
            className="text-white"
            rotate={isActive ? 45 : 180}
          />
        )}
      >
        <Panel
          key={1}
          className="bg-accent"
          header={
            <h3 className="text-white">
              How many schools does the NNEDU have?
            </h3>
          }
        >
          <p className="font-montserrat tracking-[0.06em] font-normal">
            {text}
          </p>
        </Panel>
        <Panel
          key={2}
          className="bg-accent"
          header={
            <h3 className="text-white">
              How many schools does the NNEDU have?
            </h3>
          }
        >
          <p className="font-montserrat tracking-[0.06em] font-normal">
            {text}
          </p>
        </Panel>
        <Panel
          key={3}
          className="bg-accent"
          header={
            <h3 className="text-white">
              How many schools does the NNEDU have?
            </h3>
          }
        >
          <p className="font-montserrat tracking-[0.06em] font-normal">
            {text}
          </p>
        </Panel>
      </Collapse>
    </>
  );
};
