import React, { useEffect, useState } from 'react'

import { jwt, login } from './cart'
import Login from './Login'

const CartContent = () => {
	const [token, setToken] = useState('')
	const [items, setItems] = useState([])

	useEffect(() => {
		return jwt.subscribe((val) => setToken(val ?? ''))
	}, [])

	return (
		<div>
			JWT: {token} <Login />
		</div>
	)
}

export default CartContent
