import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Header = React.lazy(() => import('home/Header'))
import Footer from 'home/Footer'

import './index.scss'
import SafeComponent from './SafeComponent'
import ProductContent from './ProductContent'

const App = () => {
	return (
		<Router>
			<div className='product-page-wrapper'>
				<SafeComponent>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
					</Suspense>
				</SafeComponent>
				<div className='text-3xl mx-auto max-w-6xl'>
					<Routes>
						<Route path='/products/:id' element={<ProductContent />}></Route>
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	)
}
ReactDOM.render(<App />, document.getElementById('app'))
