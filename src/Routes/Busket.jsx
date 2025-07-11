import BusketProducts from "../Components/Busker-products";
import isLogined from '../Components/isLogined'

export default function Busket() {
    isLogined()
    return (
        <div>
            <BusketProducts />
        </div>
    )
}