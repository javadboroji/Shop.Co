import React from "react";

function EmailBox() {
  return (
    <div className="bg-black rounded-[1rem] p-8 flex flex-col lg:flex-row justify-between -mb-16 z-10 relative">
     
      <div className="lg:max-w-[30rem] mb-4 lg:mb-0">
        <p className="font-bold text-white text-2xl lg:text-4xl ">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
      </div>
      <div className="lg:w-1/2">
        <input
          placeholder="Enter your email address"
          className="rounded-lg p-4 w-full"
        />
        <button className="w-full rounded-xl bg-white text-ec-black p-4 mt-4 ">
        Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}

export default EmailBox;
