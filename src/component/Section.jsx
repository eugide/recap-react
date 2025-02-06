function Section() {
  return (
    <>
      <div className="grid grid-cols-1 w-11/12 m-auto mt-10 
         xl:grid-cols-2 lg:grid-cols-2 md-grid-cols-1 sm-grid-cols-1">
        <div className="bg-[#8247C9] pt-3 h-[450px] flex flex-col items-center">
          <img
            className="rounded-full xl:w-[55%] h-[300px] lg:w-[50%] 
                        lg:h-[280px] md:w-[40%] md:h-[280px] sm:w-[35%] sm:h-[210px]"
            src="/image/boy.png"
            alt="A boy"
          />
          <p className="w-1/2 text-[#ffff] mt-10">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla.
          </p>
        </div>
        <div className="bg-[#C8ADE9] h-[450px] flex flex-col pt-3 items-center">
          <p className="w-1/2 text-[#ffff]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla.
          </p>
          <img
            className="rounded-full xl:w-[55%] h-[300px] lg:w-[50%] 
                        lg:h-[280px] md:w-[40%] md:h-[280px] sm:w-[35%] sm:h-[210px] mt-10"
            src="/image/girl.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Section;
