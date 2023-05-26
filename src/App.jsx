import Left from "./components/Left";
import Right from "./components/Right";
const App = () => {
  return (
    <form>
      <div className=" m-5 sm:m-8 md:m-14 ">
        <div className="bg-gradient-to-r from-transparent via-white to-white">
          <div className="px-5 py-20 sm:px-8 sm:py-20 bg-white bg-opacity-90 flex text-main relative flex-col md:flex-row">
            <div className="py-2 px-3 z-10 absolute right-0 top-0 bg-gray-50 cursor-pointer">
              <img src="assets/react.svg" className="h-7 w-7 " alt="" />
            </div>
            <Left />
            <Right />
            <div className="mt-8 md:hidden">
              <button className="w-full p-5 rounded-lg text-center text-white bg-[#025efe] font-bold">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default App;
