import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function CartLeft() {

    const styles = {
        main: "bg-[#F15C53] w-[100px] min-h-screen sticky fixed right-0 flex items-center justify-center text-white text-3xl cursor-pointer"
    }

    return (
        <div className={styles.main}>
            <AiOutlineShoppingCart />
        </div>
    )
}

export default CartLeft
    