import React, {} from "react";
const Header = () => {
    return ( 
    <header className="bg-slate-300">
       <div className="top-bar">
             <p className="bg-lime-800 h-11 flex justify-center " >
               <a href="http://support.aiou.edu.pk/" className="ml-10 flex text-2xl font-semibold mt-2 text-zinc-50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
</svg>

               Help desk</a>
               <a href="https://www.aiou.edu.pk/screen-reader"className="ml-10 flex text-2xl font-semibold mt-2 text-zinc-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
  <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
</svg>

               Screen Reader</a>
               <a href="tel:051-111-112-468"className="ml-10 flex text-2xl font-semibold mt-2 text-zinc-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-6">
  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
</svg>
051-111-112-468</a></p>
      </div>
    <div className="lg:flex justify-between items-center m-3 ">
      <div className="flex justify-center items-center gap-3 ml-3 ">
        <a href="/">
          <img
            className="w-10 h-10 lg:w-[120px] lg:h-[120px] p-2"
            src={"/assets/aiou.png"}
          />
        </a>
        <a href="/">
          <h1 className=" text-lg lg:text-3xl uppercase mt-2 underline hover:underline-offset-8 font-serif">
            E-progression system  <i className="fa fa-graduation-cap " style={{ fontSize: 36 }} />

          </h1>
        </a>
      </div>
      <nav>
        <ul className="flex gap-8 justify-center items-center text-lg lg:text-3xl lg:mr-20">
          <li>
            <a href="/" className="underline hover:underline-offset-8 font-serif">Home</a>
          </li>
          <li>
            <a href="/about"className="underline hover:underline-offset-8 font-serif">About</a>
          </li>
          <li>
            <a href="/login"className="underline hover:underline-offset-8 font-serif">Login</a>
          </li>
          <li>
            <a href="/Signup"className="underline hover:underline-offset-8 font-serif">Signup</a>
          </li>
          <li>
            <a href="https://www.aiou.edu.pk/contact-us"className="underline hover:underline-offset-8 font-serif">Contact</a>
          </li>
          </ul>
      </nav>
    </div>
  </header>
  
  )
}
export default Header;
