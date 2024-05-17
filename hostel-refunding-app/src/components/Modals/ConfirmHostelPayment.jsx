
export default function ConfirmHostelPayment() {
    return (
        <div className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)] ">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pt-[20px] px-[20px] pb-[30px] w-[50%] ">
                <h2 className="text-center text-[24px] mb-[10px] font-[700]">Confirm Hostel Payment  Details</h2>

                <div className="border-[1px] border-[#DFE5DA] rounded-[8px] ">
                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Full Name</p>
                        <p>Vincent Chosen Goteh</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Level</p>
                        <p>400</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Mat. No</p>
                        <p>U2019/5570049</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Department</p>
                        <p>Computer Sc.</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] ">
                        <p>Amount</p>
                        <p>N25,000</p>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-[20px] ">
                    <button className='bg-[#101720] rounded-[16px] py-[12px] px-[10px] w-[300px] text-[#fff] '>Proceed</button>
                </div>
            </div>
        </div>
    )
}