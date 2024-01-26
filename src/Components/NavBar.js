import React, { useState } from "react";

function NavBar({ mobile }) {
  const [active, setActive] = useState(false);
  console.log(active);
  const linksStyle = mobile
    ? active
      ? "p-6 font-light dark:text-white opacity-100 transition-all duration-1000"
      : "p-6 font-light dark:text-white opacity-0 transition-all duration-1000"
    : "p-6 font-light dark:text-white";
  return (
    <div>
      {mobile && (
        <div
          className={
            active
              ? "fixed opacity-80 z-50 flex flex-col px-20 w-screen drop-shadow-sm justify-items-start items-center bg-white dark:bg-black h-96 transition-all duration-700"
              : "fixed opacity-80 z-50 flex flex-col px-20 w-screen drop-shadow-sm justify-items-start items-center bg-white dark:bg-black h-20 transition-all duration-700"
          }
        >
          <button onClick={() => setActive(!active)}>
            <svg
              className="w-11 h-20 mx-5 fill-black dark:fill-white"
              width="454"
              height="264"
              viewBox="0 0 454 264"
            >
              <path d="M0 258.24C2.47 258.08 4.94 258.01 7.4 257.74C14.21 257 20.66 255.24 26.11 250.82C29.36 248.18 31.46 244.74 33.14 240.98C36.41 233.65 38.42 225.94 40.02 218.11C42.15 207.7 43.47 197.16 44.41 186.58C44.5 185.55 44.61 184.52 44.73 183.3H48.69C48.93 185.42 49.16 187.5 49.41 189.58C51.15 204.17 53.25 218.7 57.8 232.74C59.4 237.68 61.19 242.57 64.32 246.79C68.4 252.28 74.12 255.3 80.64 256.72C84.2 257.5 87.9 257.66 91.54 258.1C91.85 258.14 92.17 258.15 92.55 258.17V263.22H90.99C61.02 263.22 31.04 263.22 1.07 263.22C0.71 263.22 0.35 263.24 0 263.26C0 261.58 0 259.9 0 258.22L0 258.24Z" />
              <path d="M11.61 6.28993V0.259932C12.08 0.239932 12.51 0.199932 12.93 0.199932C36.2 0.199932 59.46 0.199932 82.73 0.179932C83.66 0.179932 84.11 0.419932 84.49 1.31993C106.77 55.0799 129.07 108.83 151.38 162.58C153.28 167.15 155.14 171.73 157.17 176.24C157.85 177.74 158.86 179.16 159.97 180.38C162.81 183.51 166.09 184.08 169.96 182.33C173.42 180.76 176.2 178.27 178.61 175.43C181.29 172.26 183.83 168.97 186.18 165.55C187.29 163.93 188.37 163.03 190.47 163.69C190.36 163.98 190.24 164.32 190.11 164.67C177.43 197.18 164.75 229.7 152.09 262.22C151.81 262.95 151.48 263.33 150.63 263.25C149.41 263.14 147.9 263.56 147.02 262.98C146.19 262.44 146 260.9 145.55 259.8C123.78 205.92 102.01 152.03 80.24 98.1499C71.47 76.4399 62.94 54.6299 53.86 33.0499C48.19 19.5799 37.76 11.1399 23.49 7.72993C20.14 6.92993 16.62 6.83993 13.18 6.42993C12.67 6.36993 12.16 6.32993 11.61 6.27993V6.28993Z" />
              <path d="M220.63 4.86001V0.26001H312.26V4.85001C310.05 4.99001 307.82 5.07001 305.61 5.29001C301.48 5.69001 297.5 6.66001 293.92 8.87001C288.65 12.12 286.04 17.12 285.02 23.01C284.57 25.63 284.32 28.33 284.32 30.99C284.27 54.25 284.27 77.51 284.3 100.76C284.3 106.06 285.28 111.16 288.1 115.78C289.85 118.63 292.2 120.85 295.02 122.62C301.87 126.92 309.4 129.53 317.2 131.36C322.71 132.65 328.32 133.52 333.88 134.59C334.23 134.66 334.58 134.74 334.99 134.82V137.3C332.95 137.58 330.9 137.82 328.87 138.13C318.7 139.68 308.73 141.96 299.36 146.39C293.78 149.03 289.14 152.59 286.71 158.52C285.09 162.46 284.31 166.56 284.3 170.78C284.27 191.6 284.27 212.42 284.3 233.24C284.3 236.84 284.71 240.42 285.76 243.88C288.05 251.44 293.19 255.93 300.84 257.47C303.84 258.07 306.94 258.17 309.99 258.48C310.49 258.53 311.01 258.48 311.57 258.48V263.17H219.94V258.83C223.27 258.31 226.59 258.01 229.78 257.24C239.93 254.78 246.47 246.96 247.3 236.54C247.45 234.63 247.53 232.71 247.54 230.8C247.55 164.18 247.55 97.57 247.54 30.95C247.54 26.27 246.84 21.71 244.72 17.48C241.4 10.81 235.73 7.29001 228.66 5.80001C226.45 5.34001 224.15 5.26001 221.89 5.01001C221.5 4.97001 221.11 4.93001 220.62 4.88001L220.63 4.86001Z" />
              <path d="M361.51 4.86002V0.27002H453.9V4.84002C451.66 4.98002 449.44 5.07002 447.23 5.28002C443.75 5.61002 440.37 6.39002 437.24 8.00002C431.14 11.13 428.17 16.46 427.03 22.94C426.54 25.72 426.29 28.57 426.29 31.39C426.25 98.4 426.24 165.41 426.31 232.42C426.31 235.74 426.71 239.13 427.43 242.38C429.31 250.81 434.78 255.81 443.18 257.48C446.65 258.17 450.21 258.36 453.87 258.79V263.18H361.56V258.58C363.08 258.47 364.66 258.41 366.24 258.24C371.82 257.63 377.03 256.05 381.44 252.41C385.95 248.68 388.24 243.73 389.07 238.05C389.38 235.93 389.51 233.76 389.51 231.61C389.53 164.76 389.53 97.91 389.51 31.06C389.51 25.96 388.58 21.04 385.93 16.59C382.25 10.4 376.51 7.21002 369.68 5.80002C367.43 5.33002 365.09 5.25002 362.79 5.00002C362.4 4.96002 362 4.92002 361.52 4.86002H361.51Z" />
            </svg>
          </button>
          <text className={linksStyle}>Home</text>
          <text className={linksStyle}>Portfolio</text>
          <text className={linksStyle}>About</text>
          <text className={linksStyle}>Contact</text>
        </div>
      )}
      {!mobile && (
        <div>
          <div className="fixed opacity-80 z-50 flex py-6 px-20 w-screen flex-row drop-shadow-sm justify-between items-center bg-white dark:bg-black h-20 ">
            <svg
              className="w-11 fill-black dark:fill-white"
              width="454"
              height="264"
              viewBox="0 0 454 264"
            >
              <path d="M0 258.24C2.47 258.08 4.94 258.01 7.4 257.74C14.21 257 20.66 255.24 26.11 250.82C29.36 248.18 31.46 244.74 33.14 240.98C36.41 233.65 38.42 225.94 40.02 218.11C42.15 207.7 43.47 197.16 44.41 186.58C44.5 185.55 44.61 184.52 44.73 183.3H48.69C48.93 185.42 49.16 187.5 49.41 189.58C51.15 204.17 53.25 218.7 57.8 232.74C59.4 237.68 61.19 242.57 64.32 246.79C68.4 252.28 74.12 255.3 80.64 256.72C84.2 257.5 87.9 257.66 91.54 258.1C91.85 258.14 92.17 258.15 92.55 258.17V263.22H90.99C61.02 263.22 31.04 263.22 1.07 263.22C0.71 263.22 0.35 263.24 0 263.26C0 261.58 0 259.9 0 258.22L0 258.24Z" />
              <path d="M11.61 6.28993V0.259932C12.08 0.239932 12.51 0.199932 12.93 0.199932C36.2 0.199932 59.46 0.199932 82.73 0.179932C83.66 0.179932 84.11 0.419932 84.49 1.31993C106.77 55.0799 129.07 108.83 151.38 162.58C153.28 167.15 155.14 171.73 157.17 176.24C157.85 177.74 158.86 179.16 159.97 180.38C162.81 183.51 166.09 184.08 169.96 182.33C173.42 180.76 176.2 178.27 178.61 175.43C181.29 172.26 183.83 168.97 186.18 165.55C187.29 163.93 188.37 163.03 190.47 163.69C190.36 163.98 190.24 164.32 190.11 164.67C177.43 197.18 164.75 229.7 152.09 262.22C151.81 262.95 151.48 263.33 150.63 263.25C149.41 263.14 147.9 263.56 147.02 262.98C146.19 262.44 146 260.9 145.55 259.8C123.78 205.92 102.01 152.03 80.24 98.1499C71.47 76.4399 62.94 54.6299 53.86 33.0499C48.19 19.5799 37.76 11.1399 23.49 7.72993C20.14 6.92993 16.62 6.83993 13.18 6.42993C12.67 6.36993 12.16 6.32993 11.61 6.27993V6.28993Z" />
              <path d="M220.63 4.86001V0.26001H312.26V4.85001C310.05 4.99001 307.82 5.07001 305.61 5.29001C301.48 5.69001 297.5 6.66001 293.92 8.87001C288.65 12.12 286.04 17.12 285.02 23.01C284.57 25.63 284.32 28.33 284.32 30.99C284.27 54.25 284.27 77.51 284.3 100.76C284.3 106.06 285.28 111.16 288.1 115.78C289.85 118.63 292.2 120.85 295.02 122.62C301.87 126.92 309.4 129.53 317.2 131.36C322.71 132.65 328.32 133.52 333.88 134.59C334.23 134.66 334.58 134.74 334.99 134.82V137.3C332.95 137.58 330.9 137.82 328.87 138.13C318.7 139.68 308.73 141.96 299.36 146.39C293.78 149.03 289.14 152.59 286.71 158.52C285.09 162.46 284.31 166.56 284.3 170.78C284.27 191.6 284.27 212.42 284.3 233.24C284.3 236.84 284.71 240.42 285.76 243.88C288.05 251.44 293.19 255.93 300.84 257.47C303.84 258.07 306.94 258.17 309.99 258.48C310.49 258.53 311.01 258.48 311.57 258.48V263.17H219.94V258.83C223.27 258.31 226.59 258.01 229.78 257.24C239.93 254.78 246.47 246.96 247.3 236.54C247.45 234.63 247.53 232.71 247.54 230.8C247.55 164.18 247.55 97.57 247.54 30.95C247.54 26.27 246.84 21.71 244.72 17.48C241.4 10.81 235.73 7.29001 228.66 5.80001C226.45 5.34001 224.15 5.26001 221.89 5.01001C221.5 4.97001 221.11 4.93001 220.62 4.88001L220.63 4.86001Z" />
              <path d="M361.51 4.86002V0.27002H453.9V4.84002C451.66 4.98002 449.44 5.07002 447.23 5.28002C443.75 5.61002 440.37 6.39002 437.24 8.00002C431.14 11.13 428.17 16.46 427.03 22.94C426.54 25.72 426.29 28.57 426.29 31.39C426.25 98.4 426.24 165.41 426.31 232.42C426.31 235.74 426.71 239.13 427.43 242.38C429.31 250.81 434.78 255.81 443.18 257.48C446.65 258.17 450.21 258.36 453.87 258.79V263.18H361.56V258.58C363.08 258.47 364.66 258.41 366.24 258.24C371.82 257.63 377.03 256.05 381.44 252.41C385.95 248.68 388.24 243.73 389.07 238.05C389.38 235.93 389.51 233.76 389.51 231.61C389.53 164.76 389.53 97.91 389.51 31.06C389.51 25.96 388.58 21.04 385.93 16.59C382.25 10.4 376.51 7.21002 369.68 5.80002C367.43 5.33002 365.09 5.25002 362.79 5.00002C362.4 4.96002 362 4.92002 361.52 4.86002H361.51Z" />
            </svg>

            <div>
              <text className={linksStyle}>Home</text>
              <text className={linksStyle}>Portfolio</text>
              <text className={linksStyle}>About</text>
              <text className={linksStyle}>Contact</text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
