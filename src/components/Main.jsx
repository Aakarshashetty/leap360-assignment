import React from "react";

const Main = () => {
  return (
    <div className="flex justify-between text-[#505CA9] px-32 py-10">
      <div className="flex flex-col items-start gap-5">
        <h2 className="font-[400] text-[56px] leading-[72px]">
          Step into our unique indoor play area
        </h2>
        <p className="text-[#4CA549] text-[36px] font-[400] leading-normal">
          Fun fulled by imagination!
        </p>
        <button className="w-[153px] h-[48px] text-white bg-[#B734A7] rounded-[17px_71px_32px_75px]">
          Book a Party
        </button>
      </div>
      <div className="relative w-[550px] h-[416px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="552"
          height="418"
          viewBox="0 0 552 418"
          fill="none"
        >
          <path
            d="M33.7916 11.8895C24.7133 18.5679 17.0992 27.915 11.6208 39.1064C6.14242 50.2978 2.96813 62.9897 2.37788 76.0627C-2.20969 171.451 1.03959 267.355 17.0328 355.931C20.7056 375.807 30.3734 393.184 44.0507 404.494C57.7282 415.804 74.377 420.188 90.5784 416.747C211.748 391.649 348.948 388.066 477.267 410.359C486.17 411.942 495.242 411.19 503.897 408.154C512.551 405.118 520.596 399.864 527.513 392.732C534.43 385.599 540.064 376.747 544.053 366.746C548.041 356.745 550.294 345.818 550.668 334.669C550.668 333.922 550.668 333.122 550.728 332.344C551.536 309.322 551.585 294.846 551.536 279.568C551.349 222.522 547.935 165.563 541.318 109.11C538.92 88.5751 530.172 70.005 516.928 57.3328C503.684 44.6606 486.984 38.8817 470.364 41.2203C313.543 63.8726 201.62 72.3532 94.2317 8.44934C84.7021 2.83035 74.2053 0.205184 63.6653 0.805065C53.1254 1.40499 42.8662 5.2116 33.7916 11.8895Z"
            fill="#505CA9"
          />
        </svg>
        <div className="absolute top-6 left-5">
          <img src="/Vector.png" alt="banner" className="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
