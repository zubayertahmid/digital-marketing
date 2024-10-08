import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <div
      className="
      overflow-hidden
      p-10
      

    rounded-[6px]
    top-5
    sticky
    md:mx-auto

    transform 
    z-50
xl:w-4/5 
2xl:w-[68%]

   
    bg-white 
    flex 
    items-center
    justify-between py-6
    px-4
    md:px-8
    mx-6
    
    "
    >
      <Link href="/">
      <Image
        src="/logo/logo.webp"
        alt="Bird Logo"
        width={1000}
        height={1000}
        className="w-28"
      />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
  <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg">
    
    <Link
      href="/"
      className="
        text-gray-700 
        font-medium 
        transition 
        duration-200 
        px-4 py-2
        rounded-[6px]
        hover:bg-[#ef4444]
        hover:text-white
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
      "
    >
      Services
    </Link>

    <Link
      href="/"
      className="
        text-gray-700 
        font-medium 
        transition 
        duration-200 
        px-4 py-2
        rounded-[6px]
        hover:bg-[#ef4444]
        hover:text-white
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
      "
    >
      Process
    </Link>

    <Link
      href="/"
      className="
        text-gray-700 
        font-medium 
        transition 
        duration-200 
        px-4 py-2
        rounded-[6px]
        hover:bg-[#ef4444]
        hover:text-white
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
      "
    >
      Guarantees
    </Link>

  </div>
</div>



      <div className="flex items-center gap-x-4">

      <Link
      href={"/meeting"}
        className="py-3 px-6
      text-lg
      hover:bg-[#ef4444] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
           bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
      >
        Book a call
      </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
