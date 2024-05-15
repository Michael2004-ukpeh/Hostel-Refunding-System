
export default function Activities() {
    return (
        <div className="lg:w-[30%] ">
            <h3 className="text-[18px] font-[600] mb-[20px] ">Recent Activities</h3>

            <div className="flex flex-col gap-[10px] ">
                <div className="flex items-center gap-[5px] ">
                    <div className="w-[30px] h-[30px]  ">
                        <img 
                            src="/images/aliah.png" 
                            alt="Demi"
                            className="w-full h-full rounded-[50%]" 
                        />
                    </div>

                    <div className="text-[#344054]">
                        <p className="text-[14px] font-[500] ">Vincent Chosen</p>
                        <p className="text-[14px] font-[400] ">made payment for <span className="text-[#6941C6]">School fees</span></p>
                    </div>
                </div>

                <div className="flex items-center gap-[5px] ">
                    <div className="w-[30px] h-[30px]  ">
                        <img 
                            src="/images/aliah.png" 
                            alt="Aliah"
                            className="w-full h-full rounded-[50%]" 
                        />
                    </div>

                    <div className="text-[#344054]">
                        <p className="text-[14px] font-[500] ">Vincent Chosen</p>
                        <p className="text-[14px] font-[400] ">Registered all courses</p>
                    </div>
                      
                </div>
            </div>
        </div>
    )
}