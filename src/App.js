import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import { useEffect, useState } from 'react';
import './scss/app.scss';
import PizzaItem from './components/PizzaItem';

function App() {
	const [pizzas, setPizzas] = useState([]);
	const getPizzas = async () => {
		await fetch('/pizzas.json')
			.then((resp) => resp.json())
			.then((data) => setPizzas(data.pizzas));
	};
	useEffect(() => {
		getPizzas();
	}, []);
	return (
		<div className="App">
			<div class="wrapper">
				<Header />
				<div class="content">
					<div class="container">
						<div class="content__top">
							<Categories />
							<Sort />
						</div>
						<h2 class="content__title">Все пиццы</h2>
						<div class="content__items">
							{pizzas.map((item, index) => {
								return <PizzaItem key={index} {...item} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
