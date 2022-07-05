import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import Header from 'home/Header'
import Footer from 'home/Footer'
import CartContent from './CartContent'

const App = () => (
	<div className='cart-page-wrapper'>
		<Header />
		<div className='mx-auto max-w-6xl'>
			<CartContent />
		</div>
		<Footer />
	</div>
)
ReactDOM.render(<App />, document.getElementById('app'))
