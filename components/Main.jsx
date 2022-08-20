import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full felx items-center justify-center pt-40  px-2 pb-2 mx-auto">
        <div>
          <p className="tracking-widest text-sm text-gray-600 ">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#64748b]"> Shaghayegh</span>
            <br />
            <span className="py-2">A Front-End Web Developer</span>
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <ul className="flex  items-center justify-evenly max-w-[330px] m-auto py-4 ">
            <Link href="/">
              <li className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-primary-600">
                <FaLinkedinIn />
              </li>
            </Link>
            <Link href="/">
              <li className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-primary-600">
                <FaGithub />
              </li>
            </Link>
            <Link href="/">
              <li className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-primary-600">
                <AiOutlineMail />
              </li>
            </Link>
            <Link href="/">
              <li className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-primary-600">
                <BsFillPersonPlusFill />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
// import Link from "next/link";
// import React from "react";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// const Main = () => {
//   return (
//     <div id="home" className="w-full h-screen text-center">
//       <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
//         <div>
//           <p className="uppercase text-sm tracking-widest text-gray-600">
//             LET&#39;S BUILD SOMETHING TOGETHER
//           </p>
//           <h1 className="py-4 text-gray-700">
//             Hi, I&#39;m <span className="text-[#5651e5]"> Clint</span>
//           </h1>
//           <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
//           <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
//             I’m focused on building responsive front-end web applications while
//             learning back-end technologies.
//           </p>
//           <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
//             <a
//               href="https://www.linkedin.com/in/clint-briley-50056920a/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <FaLinkedinIn />
//               </div>
//             </a>
//             <a
//               href="https://github.com/fireclint"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <FaGithub />
//               </div>
//             </a>
//             <Link href="/#contact">
//               <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <AiOutlineMail />
//               </div>
//             </Link>
//             <Link href="/resume">
//               <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <BsFillPersonLinesFill />
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
