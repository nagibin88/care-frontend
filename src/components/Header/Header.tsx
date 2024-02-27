import React from 'react'

import Logo from '../../assets/images/logo.svg'

const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className="container">
				<div className="header-wrapper">
					<div className="header-logo">
						<img src={Logo} alt="забота" className="header-logo__image" />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header