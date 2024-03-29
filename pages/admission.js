import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../components/customButton/customButton";
import PurchaseForm from "../components/utils/form/purchaseform";
import { Modals } from "../components/utils/modal/modal";
import { showModal } from "../redux";

const Admission = () => {
  const modal = useSelector((state) => state.locationReducer.modal);

  const dispatch = useDispatch();

  return (
    <div className="bg-accent">
      <Head>
        <title>NNEDU | Addmission</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="w-full bg-white max-w-[1440px] flex items-center justify-center">
          <div className="w-full flex items-center justify-center backgroundAdmisiion">
            <div className="w-full max-w-[73.5rem] h-96 flex items-center justify-start">
              <div className="px-6 py-4 flex flex-col gap-y-3">
                <h2 className="text-white text-4xl font-semibold font-inter tracking-[0.065rem]">
                  NNSS Admissions
                </h2>
                <p className="text-white tracking-[0.065rem] font-montserrat w-full max-w-lg">
                  If you are interested in being considered for admission into
                  the secondary school, please complete and submit this
                  application form as soon as possible so that we can consider
                  your application.
                </p>
                <div className="flex gap-4">
                  <PrimaryButton
                    className="w-fit"
                    onClick={() => dispatch(showModal())}
                  >
                    Buy your form
                  </PrimaryButton>
                  <PrimaryButton
                    style={{ backgroundColor: "#0074A8", color: "#ffffff" }}
                    className="w-fit bg-accent"
                  >
                    Check admission status
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full bg-green-500 max-w-[1440px] flex items-center justify-center">

        </div> */}
      </div>
      <>
        {modal && (
          <Modals open={modal}>
            <PurchaseForm />
          </Modals>
        )}
      </>
    </div>
  );
};

export default Admission;
