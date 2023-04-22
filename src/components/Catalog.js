import React from 'react'
import Image from 'next/image'

function Catalog() {

    const data = [
        {
            id: 1,
            image: "https://cdn.discordapp.com/attachments/896756725833678928/1098820775793930250/0858026620_1_1_1.jpg",
            name: "Oversized T-Shirt",
            price: "₹999.00"
        },
        {
            id: 2,
            image: "https://cdn.discordapp.com/attachments/896756725833678928/1098820776183996506/0858470104_1_1_1.jpg",
            name: "Oversized T-Shirt",
            price: "₹999.00"
        },
        {
            id: 3,
            image: "https://cdn.discordapp.com/attachments/896756725833678928/1098820776465018931/0858026104_1_1_1.jpg",
            name: "Oversized T-Shirt",
            price: "₹999.00"
        },
        {
            id: 4,
            image: "https://cdn.discordapp.com/attachments/896756725833678928/1098820776808947834/0858026250_1_1_1.jpg",
            name: "Oversized T-Shirt",
            price: "₹999.00"
        },
        {
            id: 5,
            image: "https://cdn.discordapp.com/attachments/896756725833678928/1098820777098358905/0858026251_1_1_1.jpg",
            name: "Oversized T-Shirt",
            price: "₹999.00"
        },
    ]

    const styles = {
        main: "flex flex-col w-full flex-1 h-full items-start space-y-14 text-[#193333] p-10 w-full",
        heading: "text-6xl",
        filterDiv: "flex flex-row items-center w-1/2 justify-between",
        filter: "cursor-pointer hover:text-[#F15C53] transition transform duration-300 ease-in-out",
        searchDiv: "flex flex-col items-start space-y-2 w-1/2",
        searchTop: "flex flex-row items-end w-full justify-between",
        searchBar: "w-full border-b-2 border-[#193333] bg-[#FFFDEB] pr-5 pb-2 text-xl focus:outline-none",
        button: "cursor-pointer font-bold hover:text-[#F15C53] transition transform duration-300 ease-in-out border-b-2 border-[#193333] pb-2",
        resultDiv: "grid grid-cols-4 w-full h-full justify-between gap-10",
        result: "flex flex-col items-start h-full w-full space-y-3 cursor-pointer",
        imageDiv: "flex flex-col items-center justify-center w-full h-[400px] relative border-2 border-[#193333] overflow-hidden group",
        resultImage: "w-full h-full object-cover absolute group-hover:scale-125 transition transform duration-300 ease-in-out",
        infoDiv: "flex flex-row items-center justify-between w-full text-sm",
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>purestitch.co</h2>
            <div className={styles.filterDiv}>
                <h2 className={styles.filter}>Men</h2>
                <h2 className={styles.filter}>Women</h2>
                <h2 className={styles.filter}>Kids</h2>
            </div>
            <div className={styles.searchDiv}>
                <div className={styles.searchTop}>
                    <input type="text" placeholder="Search for a product" className={styles.searchBar} />
                    <input type="submit" value="Search" className={styles.button} />
                </div>
                <p>10 results</p>
            </div>
            <div className={styles.resultDiv}>
                {data.map((item) => (
                    <div className={styles.result} key={item.id}>
                        <div className={styles.imageDiv}>
                            <Image
                                src={item.image}
                                fill={true}
                                className={styles.resultImage} />
                        </div>
                        <div className={styles.infoDiv}>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalog
