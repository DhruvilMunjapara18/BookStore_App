import React from 'react'

const Cards = ({item}) => {
    console.log(item);
    return (
        <>
            <div className='mt-4 my-2 p-3'>
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline mt-1">${item.price}</div>
                            <div className=" cursor-pointer  hover:bg-pink-500 duration-200 hover:text-white px-2 py-1 rounded-full border-[2px]">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards