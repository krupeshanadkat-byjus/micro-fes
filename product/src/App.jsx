import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

const Header = React.lazy(() => import('home/Header'))
import Footer from 'home/Footer'

import './index.scss'
import SafeComponent from './SafeComponent'
import ProductContent from './ProductContent'

const App = () => {
	return (
		<div className='product-page-wrapper'>
			<SafeComponent>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
				</Suspense>
			</SafeComponent>
			<div className='text-3xl mx-auto max-w-6xl'>
				<ProductContent />
			</div>
			<Footer />
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('app'))
