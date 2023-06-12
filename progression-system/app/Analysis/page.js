import React from "react";
import Header from "@/components/Header";

const Analysis =()=>{
    return(
<>
<Header/>
<button className="bg-red-700 p-2 rounded-md mr-6 ml-11 text-2xl font-serif"><a href="/Dashboard"> Dashboard</a></button>
<div className="bg-white h-28 border-b flex justify-center items-center gap-3 ml-12 ">
        <h2 classname="font-bold font-serif">Analysis & Design Phase</h2>
        </div>
        <div className="flex justify-between gap-4  m-2">

<div className="max-w-6xl flex-1 mx-auto  p-6 mt-3 bg-white rounded shadow-md border-4  ">
    <h1 className="flex bg-white rounded shadow-md border-4 h-24 mb-5 font-serif  ">Submission Status</h1>
    <h1 className="flex bg-white rounded shadow-md border-4 h-24 mb-5 font-serif ">Grading Status</h1>
    <h1 className="flex bg-white rounded shadow-md border-4 h-24 mb-5 font-serif ">Submission Status</h1>
    <h1 className="flex bg-white rounded shadow-md border-4 h-24 mb-5 font-serif ">File Submissions</h1>
    </div> 
    <div className="max-w-6xl w-96  mx-auto  p-6 mt-3 bg-white rounded shadow-md border-4  ">
    <h1 className="flex bg-white rounded shadow-md border-4 h-24 mb-5 font-serif  ">Submission Status</h1>
      
    </div>
</div>
</>

    );
};
export default Analysis;