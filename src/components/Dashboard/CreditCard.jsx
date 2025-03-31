import React from "react";

const CreditCard = ({
  balance = "5,756",
  cardHolder = "Eddy Cusuma",
  validThru = "12/22",
  cardNumber = "3778 **** **** 1234",
  index,
}) => {
  const isLight = index === 1;

  return (
    <div
      style={{ fontFamily: "Lato, sans-serif" }}
      className={`
      min-w-[280px] max-w-[300px] flex-shrink-0
      lg:min-w-0 lg:max-w-none lg:flex-[1_1_38%]
      h-[180px] sm:h-auto sm:aspect-[16/10] lg:aspect-[16/9]
      rounded-2xl shadow-xl p-4
      flex flex-col justify-between
      ${
        isLight
          ? "bg-white text-black"
          : "bg-[linear-gradient(to_right,#5B5A6F,#000000)] text-white"
      }
    `}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs">Balance</div>
          <div className="text-xl font-semibold">${balance}</div>
        </div>
        <div
          className={`w-6 h-6 rounded-md flex items-center justify-center ${
            isLight ? "bg-white bg-opacity-10" : "bg-black bg-opacity-10"
          }`}
        >
          <img
            src="/cardIcon.png"
            className={`${isLight ? "invert" : ""}`}
            alt="card icon"
          />
        </div>
      </div>

      <div
        className={`flex justify-between text-xs ${
          isLight ? "text-gray-600" : "text-gray-300"
        }`}
      >
        <div>
          <div className="uppercase text-[10px]">Card Holder</div>
          <div
            className={`text-sm font-medium ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            {cardHolder}
          </div>
        </div>
        <div>
          <div className="uppercase text-[10px]">Valid Thru</div>
          <div
            className={`text-sm font-medium ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            {validThru}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div
          className={`text-sm font-medium tracking-widest ${
            isLight ? "text-black" : "text-white"
          }`}
        >
          {cardNumber}
        </div>
        <div className="relative w-[60px] h-[30px] ml-2">
          <span
            className={`absolute left-0 w-[30px] h-[30px] rounded-full ${
              isLight ? "bg-gray-400" : "bg-gray-400 opacity-70"
            }`}
          />
          <span
            className={`absolute left-[15px] w-[30px] h-[30px] rounded-full ${
              isLight ? "bg-gray-300" : "bg-gray-300 opacity-70"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
