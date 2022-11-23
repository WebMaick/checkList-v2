import React from "react";

export const BtnScroll = () => {
  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed left-4 bottom-4 z-30 flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-slate-900"
      onClick={handleClickBtn}
    >
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="#fff"
          fillRule="evenodd"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(6 3)"
        >
          <path d="m8.5 4.5-4-4-4.029 4" />
          <path d="m4.5.5v13" />
        </g>
      </svg>
    </div>
  );
};
