import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const index = () => {
  const inputRef = useRef();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const handleChange = ({ target }, index) => {
    const { value } = target;
    const newOTP = [...otp];
    newOTP[index] = value.substring(value.length - 1);

    if (!value) {
      setActiveOTPIndex(index - 1);
    } else {
      setActiveOTPIndex(index + 1);
    }
    setOtp(newOTP);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const onKeyUp = ({ key }, index) => {
    if (key === "Backspace") {
      setActiveOTPIndex(index);
    }
  };

  useEffect(() => {}, [otp]);
  return (
    <div>
      <div
        className={`absolute top-1/2 left-1/2 z-50 mx-2 h-[300px] w-[685px] -translate-x-1/2  -translate-y-1/2 rounded-[16px] bg-white max-[956px]:mx-6 max-[956px]:max-w-[500px] max-[768px]:h-[550px] max-[648px]:w-[340px]`}
      >
        <div className="flex h-[54px] w-full items-center justify-center rounded-[16px] bg-[#E5BA73]" />
        <div className="mt-9 flex justify-center">
          <h1 className="mx-auto text-xl font-semibold text-[#65647C] sm:text-2xl">
            Doğrulama kodunu giriniz
          </h1>
        </div>
        <div className="mt-[25px] flex justify-center">
          <div className="flex flex-col">
            <div className="flex-row-nowrap flex gap-x-[20px] px-2">
              {otp.map((_, index) => {
                return (
                  <React.Fragment key={index}>
                    <input
                      ref={index === activeOTPIndex ? inputRef : null}
                      type="number"
                      value={otp[index]}
                      onKeyUp={(e) => onKeyUp(e, index)}
                      onChange={(e) => handleChange(e, index)}
                      className="border-text2 w-[36px] border-b text-center text-4xl font-bold text-black outline-none"
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <button className="mx-auto flex justify-center items-center mt-[30px] text-2xl font-semibold text-[#ffff] sm:text-lg w-[250px] h-[60px] bg-[#E5BA73] rounded-xl">Doğrulama Kodu Gönder</button>
      </div>
    </div>
  );
};

export default index;
