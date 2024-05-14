import Navbar from "../components/Dashboard/Navbar"

export default function Dashboard(){
    return (
        <main className="lg:flex lg:items-start">
            <Navbar />

            {/* <div className="lg:bg-[#27779B] w-full ">
                <section className="px-[20px] lg:px-[30px] bg-[#fff] lg:rounded-l-[40px] py-[30px] w-full h-full ">
                    
                    <Statistics />

                    <div className="flex flex-col lg:flex-row lg:gap-[30px] 2xl:gap-[50px]">
                        <AvailableCourses />
                        <Activities />
                    </div>
                </section>
            </div> */}
        </main>
    )
}