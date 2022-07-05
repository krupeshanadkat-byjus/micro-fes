import React, { useEffect, useState } from 'react'

import { getProducts, currency } from './products'

const HomeContent = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts().then(setProducts)
	}, [])

	return (
		<div className='grid grid-cols-4 gap-5'>
			{products.map((product) => (
				<div key={product.id}>
					<img src={product.image} alt={product.name} className='h-32' />
					<div className='flex items-center'>
						<div className='flex-grow font-bold'>
							<a className='text-base'>{product.name}</a>
						</div>
						<div className='flex-end text-base'>
							{currency.format(product.price)}
						</div>
					</div>
					<div className='text-sm mt-4'>{product.description}</div>
				</div>
			))}
		</div>
	)
}

export default HomeContent
