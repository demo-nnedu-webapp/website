import { Tabs } from "antd";
import React from "react";
import styled from "styled-components";

import { PrimarySchool } from "./schools/primaryschool";
import { SecondarySchool } from "./schools/secondaryschool";
import { MillitarySchool } from "./schools/millitaryschool";

const CustomTabs = styled(Tabs)`
  font-family: inter;

  .ant-tabs-tab {
    font-size: 16px;
    letter-spacing: 0.06em;
    font-weight: 500;
    color: #1f1839;
  }
  .ant-tabs-tab .ant-tabs-tab-active {
    color: #dec918;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #dec918;
    font-weight: 600;
  }

  .ant-tabs-ink-bar {
    background: #dec918;
  }

  .ant-tabs-tab-btn:active,
  .ant-tabs-tab-btn:focus,
  .ant-tabs-tab-remove:active,
  .ant-tabs-tab-remove:focus {
    color: #1f1839;
  }
`;

export const SchoolTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <CustomTabs
        defaultActiveKey="nnss"
        onChange={onChange}
        tabBarGutter={30}
        centered={true}
        items={[
          {
            label: "Nigerian Navy Primary School",
            key: "nnps",
            children: <PrimarySchool />,
          },
          {
            label: "Nigerian Navy Secondary School",
            key: "nnss",
            children: <SecondarySchool />,
          },
          {
            label: "Nigerian Navy Millitary School",
            key: "nnms",
            children: <MillitarySchool />,
          },
        ]}
      ></CustomTabs>
    </>
  );
};
