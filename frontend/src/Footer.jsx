export default function Footer() {
  return (
    <div className="footer h-[200px] bg-white w-full text-white p-[5px]">
      <svg
        className="flex  w-full rotate-180 border-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill="#black"
          d="
            M0,75
            Q36,30 72,75
            T144,75
            T216,75
            T288,75
            T360,75
            T432,75
            T504,75
            T576,75
            T648,75
            T720,75
            T792,75
            T864,75
            T936,75
            T1008,75
            T1080,75
            T1152,75
            T1224,75
            T1296,75
            T1368,75
            T1440,75
            V0 H0 Z
          "
        />
      </svg>
      {/* Content */}
      <div className="black-box name-icon bg-black flex w-full h-full items-center">
        <div className="name">SHUVO</div>
        <div className="icons">
<a href="https://www.facebook.com/Drag0nzxy/"><i class='bx bxl-facebook'></i></a>
<a href=""><i class='bx bxl-instagram'></i></a>
<a href="https://github.com/Dragonzxy/Dragonzxy"><i class='bx bxl-github'></i></a>
        </div>
      </div>
      <div className="copyright">
        © Mehedi Hasan.All Right Reserved
      </div>
    </div>
  );
}
