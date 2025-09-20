import Image from "next/image";
import Navbar from "@/components/navbar/navbarLists";
export default function Home() {
  return (
    <div>
       <Navbar />
        <div className="text-red-900  w-[200px] ">
         <h2 className="text-center w-full"> Foddie App </h2>
        </div>
      </div>
  );
}
