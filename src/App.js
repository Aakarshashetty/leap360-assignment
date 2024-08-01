import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import SectionTwo from "./components/Section-two";

function App() {
  return (
    <div className="font-[Capriola] bg-[#EBEEFF] w-screen flex flex-col items-center">
      <div>
        <Header />
        <Main />
        <div className="ml-[45%]">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="18"
          viewBox="0 0 86 18"
          fill="none"
        >
          <circle cx="43" cy="9" r="8.5" fill="#EBEEFF" stroke="#505CA9" />
          <circle cx="9" cy="9" r="8.5" fill="#EBEEFF" stroke="#505CA9" />
          <circle cx="77" cy="9" r="8.5" fill="#EBEEFF" stroke="#505CA9" />
          <circle cx="43" cy="9" r="4" fill="#505CA9" />
        </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="32"
          viewBox="0 0 1440 32"
          fill="none"
        >
          <path
            d="M1448 0H-2V32C-2 32 51.4688 14.1176 88.625 14.1176C125.781 14.1176 142.094 32 179.25 32C216.406 32 232.719 14.1176 269.875 14.1176C307.031 14.1176 323.344 32 360.5 32C397.656 32 413.969 14.1176 451.125 14.1176C488.281 14.1176 504.594 32 541.75 32C578.906 32 595.219 14.1176 632.375 14.1176C669.531 14.1176 685.844 32 723 32C760.156 32 776.469 14.1176 813.625 14.1176C850.781 14.1176 867.094 32 904.25 32C941.406 32 957.719 14.1176 994.875 14.1176C1032.03 14.1176 1048.34 32 1085.5 32C1122.66 32 1138.97 14.1176 1176.12 14.1176C1213.28 14.1176 1229.59 32 1266.75 32C1303.91 32 1320.22 14.1176 1357.38 14.1176C1394.53 14.1176 1448 32 1448 32V0Z"
            fill="#EBEEFF"
          />
        </svg>


        <Section />
        <SectionTwo/>
      </div>
    </div>
  );
}

export default App;
