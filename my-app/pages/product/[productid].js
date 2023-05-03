

import {useRouter} from 'next/router'

function Productid(){
    const router=useRouter()
    const productId=router.query.productid

    return <h1>product details {productId} </h1>
    
}

export default Productid