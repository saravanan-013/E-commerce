import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()
    const {id} = useSearchParams();
    URL="https://e-commerce-e1f2.onrender.com";
    //URL="http://localhost:8000/api/v1";
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch( URL +`/products?${id}`);
                
                if (!response.ok) {
                    console.log(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                console.log('Error fetching products:', err);
            }
        };

        fetchProducts();
    }, [searchParams]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${URL}/products?${id}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                console.error('Error fetching products:', err.message);
                setProducts([]);
               
            }
        };

        fetchProducts();
    }, [searchParams]);


    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard key={product.name} product={product}/>)} 
        </div>
        </section>
    </Fragment>
}