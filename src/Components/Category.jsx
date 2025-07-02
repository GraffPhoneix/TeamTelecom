import { useEffect, useState } from 'react';
import { fetchData } from '../firebase';
import CategoryItem from './Category-Item';

export default function Category() {
    const [categories, setCategories] = useState([]);
    useEffect(() => { fetchData('categories', setCategories) }, []);
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Наши услуги</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((el) => <CategoryItem key={el.id} title={el.title} body={el.body} imgURL={el.imgURL} />)}
                </div>
            </div>
        </section>
    );
}
