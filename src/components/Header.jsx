import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col justify-between text-[#424242]">
      <div className="w-[1400px] h-5 bg-[#505CA9] text-white flex gap-5">
        {/* <div>Waiver</div>
        <div>Contact</div>
        <div>Franchise</div> */}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1400"
        height="32"
        viewBox="0 0 1440 32"
        fill="none"
      >
        <path
          d="M1440 0H-10V32C-10 32 43.4688 14.1176 80.625 14.1176C117.781 14.1176 134.094 32 171.25 32C208.406 32 224.719 14.1176 261.875 14.1176C299.031 14.1176 315.344 32 352.5 32C389.656 32 405.969 14.1176 443.125 14.1176C480.281 14.1176 496.594 32 533.75 32C570.906 32 587.219 14.1176 624.375 14.1176C661.531 14.1176 677.844 32 715 32C752.156 32 768.469 14.1176 805.625 14.1176C842.781 14.1176 859.094 32 896.25 32C933.406 32 949.719 14.1176 986.875 14.1176C1024.03 14.1176 1040.34 32 1077.5 32C1114.66 32 1130.97 14.1176 1168.12 14.1176C1205.28 14.1176 1221.59 32 1258.75 32C1295.91 32 1312.22 14.1176 1349.38 14.1176C1386.53 14.1176 1440 32 1440 32V0Z"
          fill="#505CA9"
        />
          </svg>
          <div className='flex justify-between px-32'>
              
      <img src="/website-logo.png" alt="logo"/>
      <div className="flex gap-5 items-center justify-between">
        <div>Play Info</div>
        <div>Open Play</div>
        <div>Party</div>
        <div>Membership</div>
        <div>Events</div>
        <div>Classes</div>
        <div>Gift Cards</div>
        <div>Locations</div>
      </div>
          </div>
    </div>
  );
}

export default Header