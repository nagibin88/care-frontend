import React from 'react'
import { compose } from "redux";

import { Home } from './pages'

import { Header } from './components'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
		cp: any;
		dataLayer: any
		YaPay: any
		mindbox: any
	}
}

const App: React.FC = () => {
	return (
		<div className='wrapper'>
			{/* <Header /> */}

			<Home />
		</div>
	)
}

export default App