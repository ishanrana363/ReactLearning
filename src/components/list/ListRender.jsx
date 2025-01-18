import React from 'react'

const ListRender = () => {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];
    const renderProducts = products.map(product => (
        <li style={{color : product.title==="Garlic" ? "magenta" : "red"  }} key={product.id}>{product.title}</li>
    ));
    return (
        <div>
            {
                <ul>
                    {
                        renderProducts
                    }
                </ul>
            }
        </div>
    )
}

export default ListRender
