import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom'

const Header = React.lazy(() => import('home/Header'))
import Footer from 'home/Footer'

import './index.scss'
import SafeComponent from './SafeComponent'

const App = () => {
	return (
		<div className='product-page-wrapper'>
			<SafeComponent>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
				</Suspense>
			</SafeComponent>
			<div className='text-3xl mx-auto max-w-6xl'>
				<div className='my-10'>Product Page Content</div>
			</div>
			<Footer />
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('app'))
