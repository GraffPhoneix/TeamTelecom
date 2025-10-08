import BisnesAdd from "../Components/Bisnes-add"
import BsinesCategory from "../Components/Bisnes-Category"
import BisnesSection from "../Components/Bisnes-Section"
import TarifSlider from "../Components/Tarif-slider"
import TeamNumber from "../Components/Team-Number"
import isLogined from '../Components/isLogined'

export default function Bisnes() {
    isLogined()
    return (
        <div>
            <BisnesSection />
            <div>
                <div>
                    <div className="font-bold ml-65 mt-10 text-4xl text-[#2c3843]">Тарифы мобильной связи</div>
                    <TarifSlider />
                </div>
                <BsinesCategory />
                <TeamNumber />
                <BisnesAdd />
            </div>
        </div>
    )
}