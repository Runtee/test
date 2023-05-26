import React from "react";

export default function Right() {
  return (
    <div className=" h-[654px] flex basis-full  md:basis-1/3 flex-col mt-5 md:mt-0">
      <div className="relative h-full flex justify-center px-5">
        <div className="flex justify-center absolute -top-2 flex-col">
          <div className=" h-2 w-20 bg-blue-500 rounded"></div>
          <div className=" h-5 w-20 bg-blue-500 blur rounded"></div>
        </div>
        <div className="mt-32 bg-gradient-to-b from-[#e3e7eb] to-[#eff5f9]  rounded-2xl w-full">
          <div className="text-base p-10 pb-0 mt-[212px]">
            <div className="flex justify-between">
              <span className="text-secondary">Company</span>
              <span className="flex">
                <img
                  src="assets/apple-13.svg"
                  className="h-5 w-5 mr-2"
                  alt=""
                />
                <span className="font-semibold tracking-tight">Apple</span>
              </span>
            </div>
            <div className="mt-3 flex justify-between">
              <span className="text-secondary">Order Number</span>
              <span className="font-semibold tracking-tight">1266201</span>
            </div>
            <div className="mt-3 flex justify-between">
              <span className="text-secondary">Product</span>
              <span className="font-semibold tracking-tight">Macbook Air</span>
            </div>
            <div className="mt-3 flex justify-between">
              <span className="text-secondary">VAT (20%)</span>
              <span className="font-semibold tracking-tight">$100.00</span>
            </div>
          </div>
          <div className="my-7 border border-dashed flex justify-between relative">
            <div className="h-10 w-10 bg-white rounded-full absolute -left-5 -top-5"></div>
            <div className="w-10 h-10 bg-white rounded-full absolute -right-5 -top-5"></div>
          </div>
          <div className="flex justify-between items-center p-10 pt-0">
            <div className="">
              <span className="text-secondary text-sm">You have to Pay</span>
              <div className="flex items-end">
                <h1 className="text-main text-2xl font-semibold mr-2">
                  549<span className="text-base">.99</span>
                </h1>
                <span className="text-secondary text-base">USD</span>
              </div>
            </div>
            <img src="assets/receipt.svg" alt="" className="w-7 h-7" />
          </div>
        </div>
        <div className="mb-5 mx-16 mt-0 bg-[url('assets/seamless.jpg')] opacity-95 shadow-lg  absolute inset-0 h-fit  rounded-2xl">
          <div className=" bg-white bg-opacity-[.80] text-main p-7 rounded-2xl  relative overflow-hidden">
            <div className="absolute rounded-[50%] border-2 h-[800px] w-[700px] -left-36 top-14 -z-10">
              <span className="absolute rounded-[50%] border-2 h-[400px] w-[400px] left-36 top-14"></span>
              <span className="absolute rounded-[50%] border-2 h-[300px] w-[300px] left-52 top-28"></span>
              <span className="absolute rounded-[50%] border-2 h-[200px] w-[200px] left-64 top-40"></span>
            </div>
            <div className="flex justify-between items-center w-full mt-5">
              <img
                src="assets/chip.png"
                alt=""
                className="h-9 w-9 rounded-md"
              />
              <img src="assets/wifi.png" alt="" className="h-8 w-8" />
            </div>
            <div className="mt-20">
              <span className="font-normal">Jonathan Micheal</span>
              <div className="flex items-center mt-1">
                <div className="flex items-center mr-3">
                  <span className="mr-2 rounded-full h-2 bg-main w-2"></span>
                  <span className="mr-2 rounded-full h-2 bg-main w-2"></span>
                  <span className="mr-2 rounded-full h-2 bg-main w-2"></span>
                  <span className="mr-2 rounded-full h-2 bg-main w-2"></span>
                </div>
                <span className="font-semibold text-xl">3456</span>
              </div>
            </div>
            <div className="flex justify-between mt-6 items-center">
              <span className="font-semibold">09/22</span>
              <img src="assets/mastercard.svg" alt="" className="w-14 h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
