import React from "react";

const Section = () => {
  return (
    <div className="bg-[#DDE1FF] flex flex-col px-32 py-10 items-center gap-5">
      <p className="text-[#B734A7] text-[28px] leading-normal font-[400]">
        About Us
      </p>
      <h3 className="text-[#505CA9] text-[36px] font-[400] leading-normal">
        About the family playhouse
      </h3>
      <p className="text-[18px] text-[#353846] leading-normal font-[400]">
        The Family Playhouse offers a vibrant indoor play space that ignites
        creativity and sparks joy, creating unforgettable moments for kids of
        all ages.
      </p>
      <div className="flex gap-5">
        <div className="relative w-[383px] h-[429px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="383"
            height="430"
            viewBox="0 0 383 430"
            fill="none"
          >
            <path
              d="M0 91.4056C0 47.6295 32.8922 11.6536 74.5386 9.87908L302.163 0.180526C346.268 -1.69868 383 35.3468 383 81.7074V348.406C383 393.469 348.218 430 305.312 430H77.6876C34.7819 430 0 393.469 0 348.406V91.4056Z"
              fill="#7192DD"
            />
          </svg>
          <div className="absolute top-5 left-4">
            <img src="/one.png" alt="one" />
          </div>
          <div className="flex flex-col items-center absolute bottom-16 left-6 w-[332px] h-[71px] text-white">
            <h3 className="text-[24px] font-[400] leading-normal">Parties</h3>
            <p>
              At Playhouse, we create unforgettable party themes! Celebrate with
              custom themes, engaging activities, and stress-free fun.
            </p>
          </div>
        </div>
        <div className="relative w-[383px] h-[429px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="384"
            height="430"
            viewBox="0 0 384 430"
            fill="none"
          >
            <path
              d="M0 91.3173C0 47.5298 32.9781 11.5445 74.7332 9.76956L302.952 0.0684832C347.172 -1.81121 384 35.2439 384 81.6166V348.385C384 393.459 349.127 430 306.11 430H77.8905C34.8727 430 0 393.459 0 348.385V91.3173Z"
              fill="#6BD18E"
            />
          </svg>
          <div className="absolute top-5 left-4">
            <img src="/two.png" alt="one" />
          </div>
          <div className="flex flex-col items-center absolute bottom-16 left-6 w-[332px] h-[71px] text-white">
            <h3 className="text-[24px] font-[400] leading-normal">Open Play</h3>
            <p>
              At Playhouse, we create unforgettable party themes! Celebrate with
              custom themes, engaging activities, and stress-free fun.
            </p>
          </div>
        </div>
        <div className="relative w-[383px] h-[429px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="383"
            height="430"
            viewBox="0 0 383 430"
            fill="none"
          >
            <path
              d="M0 91.3173C0 47.5298 32.8922 11.5445 74.5386 9.76956L302.163 0.0684832C346.268 -1.81121 383 35.2439 383 81.6166V348.385C383 393.459 348.218 430 305.312 430H77.6876C34.7819 430 0 393.459 0 348.385V91.3173Z"
              fill="#FF8170"
            />
          </svg>
          <div className="absolute top-5 left-4">
            <img src="/three.png" alt="one" />
          </div>
          <div className="flex flex-col items-center absolute bottom-16 left-6 w-[332px] h-[71px] text-white">
            <h3 className="text-[24px] font-[400] leading-normal">Events</h3>
            <p>
              At Playhouse, we create unforgettable party themes! Celebrate with
              custom themes, engaging activities, and stress-free fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
