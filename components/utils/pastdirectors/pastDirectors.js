import { Table } from "antd";
import React from "react";
import styled from "styled-components";

const CustomTable = styled(Table)`
  width: 100%;
  .ant-table-thead > tr > th {
    background-color: #1f1839;
    color: white;
    font-family: inter;
    letter-spacing: 0.06em;
  }

  .ant-pagination-item-active {
    font-weight: 500;
    background: #fff;
    border-color: #1f1839;
  }

  .ant-pagination-item-active a {
    color: #DEC918;
  }
`;

export const PastDirectors = () => {
  const tableData = [
    {
      key: 1,
      serial: "Cdr",
      name: "M B OTIKO",
      merit: "FSS psc BSc",
      date: "1 Jan 1975 - Dec 1979",
    },
    {
      key: 2,
      serial: "Capt",
      name: "M B OTIKO",
      merit: "MSS psc BSc",
      date: "1 Jan 1980 - 31 Jan 1981",
    },
    {
      key: 3,
      serial: "Capt",
      name: "F O Asade",
      merit: "MSS psc BSc",
      date: "1 Feb 1981 - 15 Dec. 1981",
    },
    {
      key: 4,
      serial: "Capt",
      name: "M B OTIKO",
      merit: "DSS psc BSc",
      date: "16 Dec 1981 - 15 Dec 1983",
    },
    {
      key: 5,
      serial: "Cdre",
      name: "M B OTIKO",
      merit: "DSS psc BSc mni",
      date: "1 Feb 1983 - 3 Jan 1984",
    },
    {
      key: 6,
      serial: "Capt",
      name: "F O Asade",
      merit: "MSS psc BSc",
      date: "4 Jan 1984 - 26 Dec 1985",
    },
    {
      key: 7,
      serial: "Capt",
      name: "S O Lawuyi",
      merit: "MSS psc BSc",
      date: "27 Dec 1985 - 14 Dec 1986",
    },
    {
      key: 8,
      serial: "Capt",
      name: "F O Asade",
      merit: "DSS psc BSc",
      date: "15 Dec 1986 - 30 Sep 1987",
    },
    {
      key: 9,
      serial: "Cdre",
      name: "F O Asade",
      merit: "DSS psc BSc",
      date: "10 Oct 1987 - 31 Jan 1989",
    },
    {
      key: 10,
      serial: "Capt",
      name: "S O Lawuyi",
      merit: "DSS psc BSc mni",
      date: "2 Jan 1989 - Mar 1989",
    },
    {
      key: 11,
      serial: "Cdre",
      name: "S O Lawuyi",
      merit: "DSS psc BSc mni",
      date: "1 Apr 1989 - 31 Jan 1990",
    },
    {
      key: 12,
      serial: "Capt",
      name: "A A Davies",
      merit: "MSS psc BSc PGDE",
      date: "5 Mar 1990 - 30 Dec 1990",
    },
    {
      key: 13,
      serial: "Cdre",
      name: "M A Onawale",
      merit: "DSS mni PGDE",
      date: "24 Dec 1990 - 25 Oct 1991",
    },
    {
      key: 14,
      serial: "Cdre",
      name: "A A Davies",
      merit: "DSS psc BSc PGDE",
      date: "18 Dec 1991 - 16 Jan 1995",
    },
    {
      key: 15,
      serial: "Cdre",
      name: "J A Okitikpi",
      merit: "DSS psc+ BSC mni",
      date: "1 Apr 1996 - 11 Sept 1998",
    },
    {
      key: 16,
      serial: "Cdre",
      name: "V O Laseinde",
      merit: "DSS psc fwc MBA",
      date: "11 Sept 1998 - 24 Dec 2000",
    },
    {
      key: 17,
      serial: "Cdre",
      name: "Ike Owo-Onu",
      merit: "DSS psc fwc Msc",
      date: "14 Feb 2001 - 31 Dec 2003",
    },
    {
      key: 18,
      serial: "Capt",
      name: "S E A Olamilokun",
      merit: "MSS psc+ fwc MNIM BSc(Hons) Msc",
      date: "2 Jan 2004 - 26 Dec 2004",
    },
    {
      key: 19,
      serial: "Cdre",
      name: "S E A Olamilokun",
      merit: "DSS psc+ fwc MNIM BSc(Hons) Msc",
      date: "27 Dec 2004 - 16 Jun 2008",
    },
    {
      key: 20,
      serial: "Cdre",
      name: "O O Olawumi",
      merit: "DSS psc+ fdc BSc (Hons) MBA MSc",
      date: "16 June 2008 - 9 June 2010",
    },
    {
      key: 21,
      serial: "Cdre",
      name: "D T Hinga",
      merit: "DSS psc+ BSc (Hons) MBA MSc",
      date: "10 June 2010 - 20 Dec 2011",
    },
    {
      key: 22,
      serial: "Cdre",
      name: "IM Mankilik",
      merit: "Mss Psc(+) B.Ed Msc MA Ph.D MNIPROE",
      date: "20 Dec 2011 - Jan 2013",
    },
    {
      key: 23,
      serial: "Cdre",
      name: "A KPOU",
      merit: "DSS, Long C, psc(+), fdc(+), BSc, PGD, MBA, MSc",
      date: "Jan 2013 - 7 Jan 2014",
    },
    {
      key: 24,
      serial: "Cdre",
      name: "JA EDAKO",
      merit: "DSS, psc(+), fdc, BSc, MSc, PDGM ADSOM",
      date: "7 Jan 2014 – 27 JUL 2015",
    },
    {
      key: 25,
      serial: "Cdre",
      name: "A ALMU",
      merit: "DSS, psc, bsc(Hons), MSc, PGCPA",
      date: "27 Jul 2015 - 06 Dec 2017",
    },
    {
      key: 26,
      serial: "RAdm",
      name: "A ALMU",
      merit: "GSS, psc, bsc(Hons), MSc, PGCPA",
      date: "06 Dec 2017 - 06 Dec 2017",
    },
  ];

  const tableColumn = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: 1,
      render: (text) => (
        <p className="font-inter text-primary font-medium tracking-[0.06em]">
          {text}
        </p>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: 2,
      render: (text) => (
        <p className="font-inter text-primary font-medium tracking-[0.06em]">
          {text}
        </p>
      ),
    },
    {
      title: "Merit",
      dataIndex: "merit",
      key: 3,
      render: (text) => (
        <p className="font-inter text-secondary bg-primary w-fit font-medium tracking-[0.06em]">
          {text}
        </p>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: 4,
      render: (text) => (
        <p className="font-inter text-primary font-medium tracking-[0.06em]">
          {text}
        </p>
      ),
    },
  ];

  return (
    <>
      <CustomTable dataSource={tableData} columns={tableColumn} />
    </>
  );
};
