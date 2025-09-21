import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
export default function Home() {
  return (
    <div>
       <Navbar />
        <div className="  w-[200px] ">
         <h2 className="text-center text-private  bg-public  w-full"> Foddie App </h2>
        </div>
      </div>
  );
}


