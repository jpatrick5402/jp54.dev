import { FaHandSpock, FaLaptopCode } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex">
      <video autoPlay muted loop className="fixed blur-sm brightness-(--video-brightness) -z-1 object-cover h-full w-full hidden sm:flex">
        <source src="/typing.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <div className="w-full">
        <div className="flex p-2 m-auto">
          <h1 className="m-auto p-2 text-2xl text-[#2C92A5] flex bg-(--background) rounded-sm">Hello, My name is Joseph Patrick&nbsp;
            <FaHandSpock className="flex mt-auto mb-auto" />
          </h1>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="m-auto mb-10">
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">Life&nbsp;
              <FiCoffee className="flex mt-auto mb-auto" />
            </p>
          </div>
          <div className="m-auto mb-10">
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">Work&nbsp;
              <FaLaptopCode className="flex mt-auto mb-auto" />
            </p>
          </div>
          <div className="m-auto mb-10">
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">Contact&nbsp;
              <IoIosMail className="flex mt-auto mb-auto" />
            </p>
          </div>
          <div className="m-auto mb-10">
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">Socials&nbsp;
              <IoShareSocial className="flex mt-auto mb-auto" />
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
