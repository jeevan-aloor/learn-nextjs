import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){
  const router=useRouter()

  const handleClick=()=>{
    console.log("place your order")
    router.push('/product')
  }
  return(
    <div>
    <h1>Home</h1>
    <Link href="/jeev">
   blog
    </Link>
    <Link href="/product">Product</Link>
    <button onClick={handleClick}>place your order</button>
    </div>
  )
}

export default Home