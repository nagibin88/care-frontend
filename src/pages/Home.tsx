import React from 'react'

import { Quiz } from '../components'

import HomeMainImage from '../assets/images/home-main-image.jpg'

const Home: React.FC = () => {
	return (
		<>
			<Quiz />
			
			{/* <section className='home'>
				<div className="container">
					<div className="home-wrapper">
						<div className="home-main">
							<div className="home-main-text">
								<h1 className="home-main-text__title">
									Заботимся о ваших <br /> близких в <span>Москве</span>
								</h1>

								<p className="home-main-text__description">
									Помоем, оденем, покормим, сменим белье, дадим лекарства и позаботимся о вашем родном человеке
								</p>

								<button className="btn home-main-text__btn">
									Хочу узнать стоимость
								</button>
							</div>

							<div className="home-main-image" style={{ backgroundImage: `url("${HomeMainImage}")` }}></div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	)
}

export default Home