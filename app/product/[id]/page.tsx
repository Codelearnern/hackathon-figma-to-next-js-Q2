import React from 'react'

const page = async (props:{ parmas:}) => {
    const id = props.params.id;
    // console.log("Props: ", props.param.id)
    const singleBooksData = await fetch (`https://simple-books-api.glitch.me/books/`)
    const jsonBooksData = await singleBooksData.json();
    console.log("SINGLE BOOK:", jsonBooksData)
    return(
        <div>
            <h1 className='font-bold text 2xl'>DYNAMIC ROUTE</h1>
            <h2>ID: {jsonBooksData}</h2>
            <h2>NAME: {jsonBooksData}</h2>
            <h2>AUTHOR:{jsonBooksData}</h2>
            <h2>TYPE: {jsonBooksData}</h2>
            <h2>PRICE: {jsonBooksData}</h2>
            <h2>AVAILABLE: {jsonBooksData}</h2>
            <h2>CURRENT STOCK: {jsonBooksData}</h2>
        </div>
    )
}
export default page


