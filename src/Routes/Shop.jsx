import ProductsSlider from '../Components/Products-slider';
import ShopButtons from '../Components/Shop-buttons';
import ShopCategory from '../Components/Shop-Category';
import ShopNumbers from '../Components/Shop-Numbers';
import ShopPsudoHeader from '../Components/Shop-PseudoHeader';

export default function Shop() {
    return (
        <div className='bg-gray-100'>
            <ShopPsudoHeader />
            <ShopButtons />
            <ProductsSlider />
            <ShopNumbers />
            <ShopCategory />
        </div>
    );
}
