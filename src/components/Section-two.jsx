import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex flex-col gap-5 px-32 py-10 items-center">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-[36px] font-[400] leading-normal text-[#B734A7]">
          Enjoy the Space
        </h2>
        <p className="text-[18px] font-[600] leading-normal w-[337px] text-[#505CA9]">
          All of your child's favorite types of play - and new ones to explore!
        </p>
        <button className="w-[153px] h-[48px] text-white bg-[#B734A7] rounded-[17px_71px_32px_75px]">
          Book a Party
        </button>
      </div>
      <div className="flex justify-between gap-10 items-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div>1</div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#B734A7]">Climb</h4>
              <p className="text-[#000]">
                The multi-level playscape and climbing walls to get those wiggle
                out.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>2</div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#B734A7]">Climb</h4>
              <p className="text-[#000]">
                The multi-level playscape and climbing walls to get those wiggle
                out.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>3</div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#B734A7]">Climb</h4>
              <p className="text-[#000]">
                The multi-level playscape and climbing walls to get those wiggle
                out.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>4</div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#B734A7]">Climb</h4>
              <p className="text-[#000]">
                The multi-level playscape and climbing walls to get those wiggle
                out.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>5</div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#B734A7]">Climb</h4>
              <p className="text-[#000]">
                The multi-level playscape and climbing walls to get those wiggle
                out.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[617px] h-[528px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="671"
            height="529"
            viewBox="0 0 671 529"
            fill="none"
          >
            <path
              d="M0 201.718C0 132.514 0 97.9124 20.8216 74.9392C41.6433 51.966 76.1017 48.5486 145.019 41.7136L494.196 7.08338C576.803 -1.10921 618.105 -5.2055 644.553 18.7289C671 42.6632 671 84.1383 671 167.088V366.822C671 444.943 671 484.003 646.487 507.701C621.974 531.399 582.905 530.108 504.768 527.524L155.591 515.981C82.0398 513.55 45.264 512.333 22.632 488.958C0 465.583 0 428.815 0 355.278V201.718Z"
              fill="#B734A7"
            />
          </svg>
          <div className="absolute top-5 left-4">
            <img src="/four.png" alt="four" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
