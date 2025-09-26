import { FaHandSpock, FaLaptopCode } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <video autoPlay muted loop className="fixed blur-sm brightness-(--video-brightness) -z-1 object-cover h-full w-full">
        <source src="/desk.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <div className="flex flex-col m-auto">
        <div className="p-2 m-auto">
          <h1 className="p-2 text-2xl text-[#2C92A5] flex bg-(--background)">Hello, My name is Joseph Patrick&nbsp;
            <FaHandSpock className="flex mt-auto mb-auto" />
          </h1>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <p className="p-1 m-auto flex bg-(--background)">Here is some text about my life&nbsp;
            <FiCoffee className="flex mt-auto mb-auto" />
          </p>
          <p className="p-1 m-auto flex bg-(--background)">Here is some text about my work&nbsp;
            <FaLaptopCode className="flex mt-auto mb-auto" />
          </p>
          <p className="p-1 m-auto flex bg-(--background)">Here is some text about my contact&nbsp;
            <IoIosMail className="flex mt-auto mb-auto" />
          </p>
          <p className="p-1 m-auto flex bg-(--background)">Here is some text about my socials&nbsp;
            <IoShareSocial className="flex mt-auto mb-auto" />
          </p>
        </div>
      </div>
    </div>
  );
}
