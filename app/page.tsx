import { FaHandSpock, FaLaptopCode } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-[#2C92A5] flex">Hello, My name is Joseph Patrick&nbsp;<FaHandSpock className="flex mt-auto mb-auto" /></h1>
      <p className="flex">Here is some text about my life&nbsp;<FiCoffee className="flex mt-auto mb-auto" /></p>
      <p className="flex">Here is some text about my work&nbsp;<FaLaptopCode className="flex mt-auto mb-auto" /></p>
      <p className="flex">Here is a way to contact me&nbsp;<CiMail className="flex mt-auto mb-auto" /></p>
    </div >
  );
}
