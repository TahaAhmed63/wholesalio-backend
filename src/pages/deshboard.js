import Layout from '@/Components/layout'
import Header from '@/Components/navbar/Header';
// import Navbar from '@/Components/navbar/Navbar'
// import Sidebar from '@/Components/sidebar.js/Sidebar';
import Link from 'next/link';
import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
// import { BarChart } from '@mui/x-charts/BarChart';
// import img1 from "/assets/images/"
const Deshboard = () => {
  return (
<>
<Layout>
<div className="page-content-wrapper">
  <div className="page-content">
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">
        Dashboard
      </div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0 align-items-center">
            <li className="breadcrumb-item">
              <Link href="javascript:;">
                <ion-icon name="home-outline" />
              </Link>
            </li>
            <li
              aria-current="page"
              className="breadcrumb-item active"
            >
              eCommerce
            </li>
          </ol>
        </nav>
      </div>
      <div className="ms-auto">
        <div className="btn-group">
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            Settings
          </button>
          <button
            className="btn btn-outline-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            type="button"
          >
            {' '}
            <span className="visually-hidden">
              Toggle Dropdown
            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
            {' '}
            <Link
              className="dropdown-item"
              href="javascript:;"
            >
              Action
            </Link>
            <Link
              className="dropdown-item"
              href="javascript:;"
            >
              Another action
            </Link>
            <Link
              className="dropdown-item"
              href="javascript:;"
            >
              Something else here
            </Link>
            <div className="dropdown-divider" />
            {' '}
            <Link
              className="dropdown-item"
              href="javascript:;"
            >
              Separated link
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-4">
      <div className="col">
        <div className="card radius-10">
          <div className="card-body">
            <div className="d-flex align-items-start gap-2">
              <div>
                <p className="mb-0 fs-6">
                  Total Revenue
                </p>
              </div>
              <div className="ms-auto widget-icon-small text-white bg-gradient-purple">
                <ion-icon name="wallet-outline" />
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div>
                <h4 className="mb-0">
                  $92,854
                </h4>
              </div>
              <div className="ms-auto">
                +6.32%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card radius-10">
          <div className="card-body">
            <div className="d-flex align-items-start gap-2">
              <div>
                <p className="mb-0 fs-6">
                  Total Customer
                </p>
              </div>
              <div className="ms-auto widget-icon-small text-white bg-gradient-info">
                <ion-icon name="people-outline" />
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div>
                <h4 className="mb-0">
                  48,789
                </h4>
              </div>
              <div className="ms-auto">
                +12.45%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card radius-10">
          <div className="card-body">
            <div className="d-flex align-items-start gap-2">
              <div>
                <p className="mb-0 fs-6">
                  Total Orders
                </p>
              </div>
              <div className="ms-auto widget-icon-small text-white bg-gradient-danger">
                <ion-icon name="bag-handle-outline" />
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div>
                <h4 className="mb-0">
                  88,234
                </h4>
              </div>
              <div className="ms-auto">
                +3.12%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card radius-10">
          <div className="card-body">
            <div className="d-flex align-items-start gap-2">
              <div>
                <p className="mb-0 fs-6">
                  Conversion Rate
                </p>
              </div>
              <div className="ms-auto widget-icon-small text-white bg-gradient-success">
                <ion-icon name="bar-chart-outline" />
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div>
                <h4 className="mb-0">
                  48.76%
                </h4>
              </div>
              <div className="ms-auto">
                +8.52%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-lg-3">
      <div className="col">
        <div className="card radius-10 w-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0">
                Sales by Countries
              </h6>
              <div className="dropdown options ms-auto">
                <div
                  className="dropdown-toggle dropdown-toggle-nocaret"
                  data-bs-toggle="dropdown"
                >
                  <ion-icon
                    class="md hydrated"
                    name="ellipsis-horizontal-outline"
                  />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="countries-list">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="country-icon">
                  <img
                    alt=""
                    src="/assets/images/icons/usa.png"
                    width="35"
                  />
                </div>
                <div className="country-name flex-grow-1">
                  <h5 className="mb-0">
                    $84.5K
                  </h5>
                  <p className="mb-0 text-secondary">
                    United states
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      25%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="country-icon">
                  <img
                    alt=""
                    src="/assets/images/icons/india.png"
                    width="35"
                  />
                </div>
                <div className="country-name flex-grow-1">
                  <h5 className="mb-0">
                    $750
                  </h5>
                  <p className="mb-0 text-secondary">
                    India
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      18%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="country-icon">
                  <img
                    alt=""
                    src="/assets/images/icons/china.png"
                    width="35"
                  />
                </div>
                <div className="country-name flex-grow-1">
                  <h5 className="mb-0">
                    $38.5
                  </h5>
                  <p className="mb-0 text-secondary">
                    China
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-danger d-flex gap-1 align-items-center fw-500">
                    <i className="bx bx-down-arrow-alt" />
                    <span>
                      14%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="country-icon">
                  <img
                    alt=""
                    src="/assets/images/icons/russia.png"
                    width="35"
                  />
                </div>
                <div className="country-name flex-grow-1">
                  <h5 className="mb-0">
                    $88.0K
                  </h5>
                  <p className="mb-0 text-secondary">
                    France
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      28%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="country-icon">
                  <img
                    alt=""
                    src="/assets/images/icons/australia.png"
                    width="35"
                  />
                </div>
                <div className="country-name flex-grow-1">
                  <h5 className="mb-0">
                    $78.3K
                  </h5>
                  <p className="mb-0 text-secondary">
                    Australia
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-danger d-flex gap-1 align-items-center fw-500">
                    <i className="bx bx-down-arrow-alt" />
                    <span>
                      16%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="country-icon">
                  <img
                    alt=""
                    src="/assets/images/icons/brazil.png"
                    width="35"
                  />
                </div>
                <div className="country-name flex-grow-1">
                  <h5 className="mb-0">
                    $10.5K
                  </h5>
                  <p className="mb-0 text-secondary">
                    Brazil
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      25%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-0">
                <div className="country-icon">
                  <img
                    alt=""
                    src="/assets/images/icons/UAE.png"
                    width="35"
                  />
                </div>
                <div className="country-name flex-grow-1">
                  <h5 className="mb-0">
                    $30.5K
                  </h5>
                  <p className="mb-0 text-secondary">
                    UAE
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      25%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card radius-10">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0">
                Total Earning
              </h6>
              <div className="dropdown options ms-auto">
                <div
                  className="dropdown-toggle dropdown-toggle-nocaret"
                  data-bs-toggle="dropdown"
                >
                  <ion-icon
                    class="md hydrated"
                    name="ellipsis-horizontal-outline"
                  />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <h2 className="mb-0">
                68%
              </h2>
              <div className="">
                <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500 fs-6">
                  <i className="bx bx-up-arrow-alt" />
                  <span>
                    25%
                  </span>
                </p>
              </div>
            </div>
            <div id="chart1" />
            <div className="mt-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="widget-icon-small rounded bg-light-success text-success">
                  <ion-icon name="wallet-outline" />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0">
                    $545.69
                  </h6>
                  <p className="mb-0 text-secondary">
                    Last Month Sales
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500 fs-6">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      35%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="widget-icon-small rounded bg-light-tiffany text-tiffany">
                  <ion-icon name="flag-outline" />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0">
                    $956.34
                  </h6>
                  <p className="mb-0 text-secondary">
                    Last Month Sales
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-danger d-flex gap-1 align-items-center fw-500 fs-6">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      45%
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="widget-icon-small rounded bg-light-danger text-danger">
                  <ion-icon name="school-outline" />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0">
                    $6956.48
                  </h6>
                  <p className="mb-0 text-secondary">
                    Last Year Sales
                  </p>
                </div>
                <div className="">
                  <p className="mb-0 text-success d-flex gap-1 align-items-center fw-500 fs-6">
                    <i className="bx bx-up-arrow-alt" />
                    <span>
                      66%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card radius-10 overflow-hidden w-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0">
                Total Traffic
              </h6>
              <div className="dropdown options ms-auto">
                <div
                  className="dropdown-toggle dropdown-toggle-nocaret"
                  data-bs-toggle="dropdown"
                >
                  <ion-icon name="ellipsis-horizontal-outline" />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center font-13 gap-2">
              <span className="border px-1 rounded cursor-pointer">
                <i className="bx bxs-circle me-1 text-tiffany" />
                Cliks
              </span>
              <span className="border px-1 rounded cursor-pointer">
                <i className="bx bxs-circle me-1 text-success" />
                Views
              </span>
            </div>
            <div id="chart2" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-xl-8 d-flex">
        <div className="card radius-10 w-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0">
                Earning Reports
              </h6>
              <div className="dropdown options ms-auto">
                <div
                  className="dropdown-toggle dropdown-toggle-nocaret"
                  data-bs-toggle="dropdown"
                >
                  <ion-icon name="ellipsis-horizontal-outline" />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-4 align-items-center mb-4">
              <div className="col-12 col-xl-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <h1 className="mb-0">
                    $856
                  </h1>
                  <p className="mb-0 text-success bg-light-success px-2 rounded py-1">
                    +10.6%
                  </p>
                </div>
                <p className="mb-0">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                </p>
              </div>
              <div className="col-12 col-xl-8">
                <div id="chart3" />
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center align-self-end justify-content-lg-between border p-3 gap-3 mb-0 rounded-3">
              <div className="d-flex align-items-center gap-3">
                <div className="widget-icon rounded-circle bg-light-success text-success">
                  <ion-icon name="card-outline" />
                </div>
                <div className="">
                  <h4 className="mb-0">
                    $95,286.50
                  </h4>
                  <p className="mb-0 text-secondary">
                    Total Revenue
                  </p>
                </div>
              </div>
              <div className="vr d-none d-lg-block" />
              <div className="d-flex align-items-center gap-3">
                <div className="widget-icon rounded-circle bg-light-info text-info">
                  <ion-icon name="diamond-outline" />
                </div>
                <div className="">
                  <h4 className="mb-0">
                    $58,820
                  </h4>
                  <p className="mb-0 text-secondary">
                    Total Profit
                  </p>
                </div>
              </div>
              <div className="vr d-none d-lg-block" />
              <div className="d-flex align-items-center gap-3">
                <div className="widget-icon rounded-circle bg-light-purple text-purple">
                  <ion-icon name="people-circle-outline" />
                </div>
                <div className="">
                  <h4 className="mb-0">
                    $26,498
                  </h4>
                  <p className="mb-0 text-secondary">
                    Total Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4 d-flex">
        <div className="card radius-10 overflow-hidden w-100">
          <div className="card-body">
            <div className="d-flex flex-column gap-3">
              <div className="card border shadow-none radius-10 flex-grow-1 mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-start gap-2">
                    <div>
                      <h5 className="mb-0 ">
                        Total Accounts
                      </h5>
                    </div>
                    <div className="ms-auto widget-icon-2 text-white bg-info rounded-circle">
                      <ion-icon name="people-outline" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="mb-2">
                      68,542
                    </h3>
                    <div className="d-flex align-items-center gap-2">
                      <div className="widget-icon-small bg-light-danger text-danger">
                        <ion-icon name="arrow-down-outline" />
                      </div>
                      <p className="mb-0">
                        +9% last year
                      </p>
                    </div>
                  </div>
                  <div id="chart4" />
                </div>
              </div>
              <div className="card border shadow-none radius-10 mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-start gap-2">
                    <div>
                      <p className="mb-0">
                        Disk Space
                      </p>
                    </div>
                    <div className="dropdown options ms-auto">
                      <div
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                      >
                        <ion-icon name="ellipsis-horizontal-outline" />
                      </div>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="javascript:;"
                          >
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="javascript:;"
                          >
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="javascript:;"
                          >
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div>
                      <h4 className="mb-3">
                        48GB
                      </h4>
                      <div className="d-flex align-items-center gap-2">
                        <div className="widget-icon-small bg-light-danger text-danger">
                          <ion-icon name="arrow-down-outline" />
                        </div>
                        <p className="mb-0">
                          +7% last month
                        </p>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div
                        className="w_chart"
                        data-percent="60"
                        id="chart5"
                      >
                        <span className="w_percent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-12 col-xl-6 d-flex">
        <div className="card radius-10 w-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0">
                Customers
              </h6>
              <div className="dropdown options ms-auto">
                <div
                  className="dropdown-toggle dropdown-toggle-nocaret"
                  data-bs-toggle="dropdown"
                >
                  <ion-icon name="ellipsis-horizontal-outline" />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="javascript:;"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-3 align-items-center">
              <div className="col-lg-7 col-xl-7 col-xxl-7 order-2">
                <div id="chart6" />
              </div>
              <div className="col-lg-5 col-xl-5 col-xxl-5">
                <div className="">
                  <div className="mb-4">
                    <h2 className="mb-0">
                      846
                    </h2>
                    <p className="mb-0">
                      Total Customers
                    </p>
                  </div>
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="widget-icon-small rounded bg-light-purple text-purple">
                      <ion-icon name="gift-outline" />
                    </div>
                    <div>
                      <p className="mb-1">
                        Current Customers
                      </p>
                      <p className="mb-0 h5">
                        124
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="widget-icon-small rounded bg-light-info text-info">
                      <ion-icon name="briefcase-outline" />
                    </div>
                    <div>
                      <p className="mb-1">
                        New Customers
                      </p>
                      <p className="mb-0 h5">
                        386
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="widget-icon-small rounded bg-light-orange text-orange">
                      <ion-icon name="book-outline" />
                    </div>
                    <div>
                      <p className="mb-1">
                        Retargeted Customers
                      </p>
                      <p className="mb-0 h5">
                        425
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-12 col-xl-6 d-flex">
        <div className="card radius-10 w-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0">
                Sales By Country
              </h6>
              <div className="dropdown options ms-auto">
                <div
                  className="dropdown-toggle dropdown-toggle-nocaret"
                  data-bs-toggle="dropdown"
                >
                  <ion-icon
                    aria-label="ellipsis horizontal outline"
                    class="md hydrated"
                    name="ellipsis-horizontal-outline"
                    role="img"
                  />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-borderless align-middle mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div className="country-icon">
                        <img
                          alt=""
                          src="/assets/images/icons/india.png"
                          width="32"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="country-name h6 mb-0">
                        India
                      </div>
                    </td>
                    <td className="w-100">
                      <div
                        className="progress flex-grow-1"
                        style={{
                          height: '5px'
                        }}
                      >
                        <div
                          className="progress-bar bg-gradient-info"
                          role="progressbar"
                          style={{
                            width: '82%'
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="percent-data">
                        82%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="country-icon">
                        <img
                          alt=""
                          src="/assets/images/icons/usa.png"
                          width="32"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="country-name h6 mb-0">
                        USA
                      </div>
                    </td>
                    <td className="w-100">
                      <div
                        className="progress flex-grow-1"
                        style={{
                          height: '5px'
                        }}
                      >
                        <div
                          className="progress-bar bg-gradient-purple"
                          role="progressbar"
                          style={{
                            width: '70%'
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="percent-data">
                        70%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="country-icon">
                        <img
                          alt=""
                          src="/assets/images/icons/china.png"
                          width="32"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="country-name h6 mb-0">
                        China
                      </div>
                    </td>
                    <td className="w-100">
                      <div
                        className="progress flex-grow-1"
                        style={{
                          height: '5px'
                        }}
                      >
                        <div
                          className="progress-bar bg-gradient-success"
                          role="progressbar"
                          style={{
                            width: '60%'
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="percent-data">
                        60%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="country-icon">
                        <img
                          alt=""
                          src="/assets/images/icons/russia.png"
                          width="32"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="country-name h6 mb-0">
                        Russia
                      </div>
                    </td>
                    <td className="w-100">
                      <div
                        className="progress flex-grow-1"
                        style={{
                          height: '5px'
                        }}
                      >
                        <div
                          className="progress-bar bg-gradient-warning"
                          role="progressbar"
                          style={{
                            width: '45%'
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="percent-data">
                        45%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="country-icon">
                        <img
                          alt=""
                          src="/assets/images/icons/russia.png"
                          width="32"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="country-name h6 mb-0">
                        Russia
                      </div>
                    </td>
                    <td className="w-100">
                      <div
                        className="progress flex-grow-1"
                        style={{
                          height: '5px'
                        }}
                      >
                        <div
                          className="progress-bar bg-gradient-danger"
                          role="progressbar"
                          style={{
                            width: '30%'
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="percent-data">
                        30%
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card radius-10 w-100">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h6 className="mb-0">
            Recent Orders
          </h6>
          <div className="fs-5 ms-auto dropdown">
            <div
              className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-three-dots" />
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  href="#"
                >
                  Action
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="#"
                >
                  Another action
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="#"
                >
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="table-responsive mt-2">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>
                  #ID
                </th>
                <th>
                  Product
                </th>
                <th>
                  Quantity
                </th>
                <th>
                  Price
                </th>
                <th>
                  Date
                </th>
                <th>
                  Status
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  #89742
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img
                        alt=""
                        src="/assets/images/products/11.png"
                      />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">
                        Smart Mobile Phone
                      </h6>
                    </div>
                  </div>
                </td>
                <td>
                  2
                </td>
                <td>
                  $214
                </td>
                <td>
                  <span className="badge bg-success">
                    Completed
                  </span>
                </td>
                <td>
                  Apr 8, 2021
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3 fs-6">
                    <Link
                      aria-label="Views"
                      className="text-primary"
                      data-bs-original-title="View detail"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="eye-outline" />
                    </Link>
                    <Link
                      aria-label="Edit"
                      className="text-warning"
                      data-bs-original-title="Edit info"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="pencil-outline" />
                    </Link>
                    <Link
                      aria-label="Delete"
                      className="text-danger"
                      data-bs-original-title="Delete"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="trash-outline" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  #68570
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img
                        alt=""
                        src="/assets/images/products/07.png"
                      />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">
                        Sports Time Watch
                      </h6>
                    </div>
                  </div>
                </td>
                <td>
                  1
                </td>
                <td>
                  $185
                </td>
                <td>
                  <span className="badge bg-success">
                    Completed
                  </span>
                </td>
                <td>
                  Apr 9, 2021
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3 fs-6">
                    <Link
                      aria-label="Views"
                      className="text-primary"
                      data-bs-original-title="View detail"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="eye-outline" />
                    </Link>
                    <Link
                      aria-label="Edit"
                      className="text-warning"
                      data-bs-original-title="Edit info"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="pencil-outline" />
                    </Link>
                    <Link
                      aria-label="Delete"
                      className="text-danger"
                      data-bs-original-title="Delete"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="trash-outline" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  #38567
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img
                        alt=""
                        src="/assets/images/products/17.png"
                      />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">
                        Women Red Heals
                      </h6>
                    </div>
                  </div>
                </td>
                <td>
                  3
                </td>
                <td>
                  $356
                </td>
                <td>
                  <span className="badge bg-danger">
                    Cancelled
                  </span>
                </td>
                <td>
                  Apr 10, 2021
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3 fs-6">
                    <Link
                      aria-label="Views"
                      className="text-primary"
                      data-bs-original-title="View detail"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="eye-outline" />
                    </Link>
                    <Link
                      aria-label="Edit"
                      className="text-warning"
                      data-bs-original-title="Edit info"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="pencil-outline" />
                    </Link>
                    <Link
                      aria-label="Delete"
                      className="text-danger"
                      data-bs-original-title="Delete"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="trash-outline" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  #48572
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img
                        alt=""
                        src="/assets/images/products/04.png"
                      />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">
                        Yellow Winter Jacket
                      </h6>
                    </div>
                  </div>
                </td>
                <td>
                  1
                </td>
                <td>
                  $149
                </td>
                <td>
                  <span className="badge bg-success">
                    Completed
                  </span>
                </td>
                <td>
                  Apr 11, 2021
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3 fs-6">
                    <Link
                      aria-label="Views"
                      className="text-primary"
                      data-bs-original-title="View detail"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="eye-outline" />
                    </Link>
                    <Link
                      aria-label="Edit"
                      className="text-warning"
                      data-bs-original-title="Edit info"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="pencil-outline" />
                    </Link>
                    <Link
                      aria-label="Delete"
                      className="text-danger"
                      data-bs-original-title="Delete"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="trash-outline" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  #96857
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img
                        alt=""
                        src="/assets/images/products/10.png"
                      />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">
                        Orange Micro Headphone
                      </h6>
                    </div>
                  </div>
                </td>
                <td>
                  2
                </td>
                <td>
                  $199
                </td>
                <td>
                  <span className="badge bg-danger">
                    Cancelled
                  </span>
                </td>
                <td>
                  Apr 15, 2021
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3 fs-6">
                    <Link
                      aria-label="Views"
                      className="text-primary"
                      data-bs-original-title="View detail"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="eye-outline" />
                    </Link>
                    <Link
                      aria-label="Edit"
                      className="text-warning"
                      data-bs-original-title="Edit info"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="pencil-outline" />
                    </Link>
                    <Link
                      aria-label="Delete"
                      className="text-danger"
                      data-bs-original-title="Delete"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="trash-outline" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  #96857
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="product-box border">
                      <img
                        alt=""
                        src="/assets/images/products/12.png"
                      />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name mb-1">
                        Pro Samsung Laptop
                      </h6>
                    </div>
                  </div>
                </td>
                <td>
                  1
                </td>
                <td>
                  $699
                </td>
                <td>
                  <span className="badge bg-warning">
                    Pending
                  </span>
                </td>
                <td>
                  Apr 18, 2021
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3 fs-6">
                    <Link
                      aria-label="Views"
                      className="text-primary"
                      data-bs-original-title="View detail"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="eye-outline" />
                    </Link>
                    <Link
                      aria-label="Edit"
                      className="text-warning"
                      data-bs-original-title="Edit info"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="pencil-outline" />
                    </Link>
                    <Link
                      aria-label="Delete"
                      className="text-danger"
                      data-bs-original-title="Delete"
                      data-bs-placement="bottom"
                      data-bs-toggle="tooltip"
                      href="javascript:;"
                      title=""
                    >
                      <ion-icon name="trash-outline" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

</Layout>






</>
 
  )
}

export default Deshboard