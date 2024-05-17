import Navbar from "../components/Dashboard/Navbar"
import Statistics from "../components/Dashboard/Statistics"
import LearningMaterials from "../components/Dashboard/LearningMaterials"
import Activities from "../components/Dashboard/Activities"
import ConfirmHostelPayment from "../components/Modals/ConfirmHostelPayment"

export default function Dashboard(){
    return (
        <main className="lg:flex lg:items-start">
            <Navbar />

            <div className=" w-full ">
                <section className="px-[20px] lg:px-[30px] bg-[#fff] py-[30px] w-full h-full ">
                    
                    <Statistics />

                    <div className="flex flex-col lg:flex-row lg:gap-[30px] 2xl:gap-[50px]">
                        <LearningMaterials />
                        <Activities />
                    </div>
                </section>
            </div>

            <ConfirmHostelPayment />
        </main>
    )
}