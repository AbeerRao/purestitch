import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { db } from "firebase.js"
import { getDocs, collection } from "firebase/firestore"

function Catalog() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const products = await(getDocs(collection(db, "products")))
            setData(
                products.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            console.log(data)
        }
        getProducts()
    }, [])

    const handleClick = () => (
        <div className="h-screen w-screen bg-red-500"></div>
    )

    const styles = {
        main: "flex flex-col w-full flex-1 h-full items-start space-y-14 text-[#193333] md:p-10 p-5 mt-10 md:mt-0 w-full",
        heading: "text-5xl md:text-6xl",
        filterDiv: "flex flex-row items-center w-full md:w-1/2 justify-between",
        filter: "cursor-pointer hover:text-[#F15C53] transition transform duration-300 ease-in-out",
        searchDiv: "flex flex-col items-start space-y-2 w-full md:w-1/2",
        searchTop: "flex flex-row items-end w-full justify-between",
        searchBar: "w-full border-b-2 border-[#193333] bg-[#FFFDEB] pr-5 pb-2 text-xl focus:outline-none",
        button: "cursor-pointer font-bold hover:text-[#F15C53] transition transform duration-300 ease-in-out border-b-2 border-[#193333] pb-2",
        resultDiv: "grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 w-full h-full justify-between gap-10",
        result: "flex flex-col items-start h-full w-full space-y-3 cursor-pointer",
        imageDiv: "flex flex-col items-center justify-center w-full h-[400px] 2xl:h-[500px] relative border-2 border-[#193333] overflow-hidden group",
        resultImage: "w-full h-full object-cover absolute group-hover:scale-125 2xl:group-hover:scale-150 transition transform duration-300 ease-in-out",
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
                <p>5 results</p>
            </div>
            <div className={styles.resultDiv}>
                {data?.map((item) => (
                    <div className={styles.result} key={item.id} onClick={handleClick}>
                        <div className={styles.imageDiv}>
                            <Image
                                src={item.data.image}
                                fill={true}
                                className={styles.resultImage} />
                        </div>
                        <div className={styles.infoDiv}>
                            <h1>{item.data.name}</h1>
                            <p>{item.data.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalog
