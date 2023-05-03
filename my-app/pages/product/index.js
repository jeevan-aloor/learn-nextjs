
import Link from 'next/link'

function Product({productid=100}){
    return (
        <>
        <Link href="/product/1">
        <h2>Product 1</h2>
        </Link>
        <Link href="/product/2">
        <h2>Product 2</h2>
        </Link>
        <Link href="/product/3" replace>
        <h2>Product 3</h2>
        </Link>
        <Link href={`/product/${productid}`}>
        <h2>Product {productid}</h2>
        </Link>
        </>
    )
}


export default Product

