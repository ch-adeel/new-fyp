import Header from "@/components/Header";
import React from "react";

const DasboardPage = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-black w-full h-28 p-2  text-white">
        <h1 className="ml-11 text-2xl font-serif">Student Name  (e.g)</h1>
        <button className="bg-red-700 text-2xl p-2 rounded-md mr-6"><a href="/" className="font-serif"> Logout</a></button>
      </div>

      <div className="bg-white h-28 border-b flex justify-center items-center gap-3 ml-12 ">
        <h2 classname="font-bold font-serif">Dashboard</h2>
        </div>
        <div className="flex flex-col items-start justify-center h-auto bg-gray-200 p-20">
        <div className="flex flex-col gap-14">
        <h1 className="text-2xl font-semibold font-serif"> <a href="projectp"> Project Proposal</a></h1>
        <h1 className="text-2xl font-semibold font-serif"><a href="Analysis"> Analysis and Design</a></h1>
        <h1 className="text-2xl font-semibold font-serif"><a href="Report"> Report</a></h1>
        {/* <h1 className="text-lg font-semibold">Line 4</h1>
        <h1 className="text-lg font-semibold">Line 4</h1>
        <h1 className="text-lg font-semibold">Line 4</h1>
        <h1 className="text-lg font-semibold">Line 4</h1>
        <h1 className="text-lg font-semibold">Line 4</h1> */}
        
      </div>
    </div>
    </>
  );
};
export default DasboardPage;
