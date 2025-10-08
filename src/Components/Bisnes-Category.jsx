import { useEffect, useState } from 'react';
import { fetchData } from '../firebase';
import CategoryItem from './Category-Item';

export default function BsinesCategory() {
    const [bisnesCategories, setBisnesCategories] = useState([]);
    useEffect(() => { fetchData('bisnesCategories', setBisnesCategories) }, []);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {bisnesCategories.map((el) => <CategoryItem key={el.id} title={el.title} body={el.body} imgURL={el.imgURL} />)}
                </div>
            </div>
        </section>
    );
}
