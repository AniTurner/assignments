import React from 'react'


function Products() {
    return (
        <div class='products'>
            <div className='product-container'>
                <h3 className='burger'>The burger</h3>
                <div className='picture1'>
                    <img src='https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=621&q=80'></img>
                    <p className='p-tag'>A Burger a day keeps the ex-wife away.</p>
                </div>
            </div>
            <div className='product-container'>
            <h3 className='dessert'>The Dessert</h3>
                <div className='picture1'>
                    <img src='https://images.unsplash.com/photo-1549394518-2ab89075a91b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></img>
                    <p className='p-tag'>Felt like poop? These goodies can make you feel just like new.</p>
                </div>
            </div>
            <div>
                <div className='product-container'>
                    <h3>The Salat</h3>
                    <div className='picture1'>
                        <img src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></img>
                        <p className='p-tag'>The healthy one for the win.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='product-container'>
                    <h3>The Tiny</h3>
                    <div className='picture1'>
                        <img src='https://images.unsplash.com/photo-1486335370770-0b094c34ac2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></img>
                        <p className='p-tag'>Tiny but has umpf.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;