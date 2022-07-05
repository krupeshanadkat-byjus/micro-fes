import React, { useState, useEffect } from 'react'
import { getProductById, currency } from 'home/products'

const ProductContent = () => {
	const id = 1
	const [product, setProduct] = useState({})

	useEffect(() => {
		if (id) {
			getProductById(id).then(setProduct)
		} else {
			setProduct(null)
		}
	}, [id])

	return (
		<div className='grid grid-cols-2 gap-5'>
			<div>
				<img src={product.image} alt={product.name} className='h-72' />
			</div>
			<div>
				<div className='flex mt-4'>
					<h1 className='font-bold text-xl flex-grow'>{product.name}</h1>
					<div className='font-bold text-xl flex-end'>
						{currency.format(product.price)}
					</div>
				</div>
				<div className='mt-10 text-base'>{product.description}</div>
				<div className='mt-10 text-base'>{product.longDescription}</div>
			</div>
		</div>
	)
}

export default ProductContent
