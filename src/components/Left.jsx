export default function Left() {
  return (
    <div className=" h-full flex basis-full w-full md:basis-2/3 pt-5 flex-col p-5">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center">
          <img
            src="assets/react.svg"
            className="h-8 w-8 rounded-full bg-blue-500 mr-3"
            alt=""
          />
          <h2 className="text-main text-xl">
            <span className="font-semibold">AceCoin</span>Pay
          </h2>
        </div>
        <div className="flex text-white font-bold">
          <span className="px-2 py-1 pt-[5px] mr-1 bg-[#1e2954] h-[35px] rounded">
            0
          </span>
          <span className="px-2 py-1 pt-[5px] mr-1 bg-[#1e2954]  h-[35px] rounded">
            1
          </span>
          <h3 className="py-1 pt-[5px] mr-1 text-[#1e2954] h-[35px] rounded">
            :
          </h3>
          <span className="px-2 py-1 pt-[5px] mr-1 bg-[#1e2954] h-[35px] rounded">
            1
          </span>
          <span className="px-2 py-1 pt-[5px] mr-1 bg-main h-[35px] rounded">
            9
          </span>
        </div>
      </div>
      <div className="mt-16 flex justify-between">
        <div className="">
          <h3 className="">Card Number</h3>
          <p className="text-sm text-gray-400 font-medium">
            Enter the 15-digit card number on the card
          </p>
        </div>
        <button className="text-blue-500 flex items-center font-medium">
          <img src="assets/edit.svg" className="w-4 h-4 mr-2" alt="" />
          <h4>Edit</h4>
        </button>
      </div>
      <div className="relative mt-5 w-full flex bg-[#fcfbfe]">
        <div className="absolute inset-y-0 left-5 flex items-center pl-0 pointer-events-none">
          <img src="assets/mastercard.svg" alt="" className="w-[25px] h-[25]" />
        </div>
        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
          <img src="assets/verified.svg" alt="" className="w-[25px] h-[25]" />
        </div>
        <input
          type="text"
          className="px-14 placeholder:font-medium"
          placeholder="2412   -   7512   -   3412   -   3456"
        />
      </div>
      <div className="flex mt-5 items-start flex-col md:mt-8 md:flex-row md:items-center">
        <div className="flex basis-1/2  pr-5 flex-col mb-2 md:mb-0">
          <h3 className="">CVV Number</h3>
          <p className="text-sm text-gray-400 font-medium">
            Enter the 3 or 4 digit number on the card
          </p>
        </div>
        <div className="flex basis-1/2">
          <div className="relative mb-6 w-full">
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <img src="assets/dots.svg" alt="" className="w-8 h-8" />
            </div>
            <input
              type="text"
              className="pr-14 text-center placeholder:text-main placeholder:text-center"
              placeholder="327"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-5 items-start flex-col md:mt-8 md:flex-row md:items-center">
        <div className="flex basis-1/2  pr-5 flex-col mb-2 md:mb-0">
          <h3 className="">Expiry Date</h3>
          <p className="text-sm text-gray-400 font-medium">
            Enter the expiration date of the card
          </p>
        </div>
        <div className="flex basis-1/2 items-center">
          <div className="">
            <input
              type="text"
              className="text-center text-main placeholder:text-main"
              placeholder="09"
            />
          </div>
          <span className="font-bold mx-5">/</span>
          <div className="">
            <input
              type="text"
              className="text-center text-main placeholder:text-main"
              placeholder="22"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-5 items-start flex-col md:mt-8 md:flex-row md:items-center">
        <div className="flex basis-1/2  pr-5 flex-col mb-2 md:mb-0">
          <h3 className="">Password</h3>
          <p className="text-sm text-gray-400 font-medium">
            Enter your Dynamic password
          </p>
        </div>
        <div className="flex basis-1/2">
          <div className="relative mb-6 w-full">
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <img src="assets/dots.svg" alt="" className="w-8 h-8" />
            </div>
            <input
              type="password"
              className="pr-14 text-3xl"
              placeholder="..........."
            />
          </div>
        </div>
      </div>
      <div className="mt-8 hidden md:block">
        <button className="w-full p-5 rounded-lg text-center text-white bg-[#025efe] font-bold">
          Pay Now
        </button>
      </div>
    </div>
  );
}
