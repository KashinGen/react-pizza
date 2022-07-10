import { useEffect, useState } from 'react';
import PizzaItem from '../components/Pizza/PizzaItem';
import Loader from '../components/Pizza/Loader';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

const sort = [
	{
		label: 'популярности',
		value: 'popular',
	},
	{
		label: 'цене',
		value: 'price',
	},
	{
		label: 'алфавиту',
		value: 'alphabet',
	},
];

const Home = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSortOpen, setSortOpen] = useState(false);
	const [chosen, setChosen] = useState(sort[0]);

	const onChooseSortHandler = (item) => {
		setChosen(item);
		setSortOpen(false);
	};

	const getPizzas = async () => {
		setIsLoading(true);
		await fetch('/pizzas.json')
			.then((resp) => resp.json())
			.then((data) => {
				setPizzas(data.pizzas);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getPizzas();
	}, []);

	return (
		<>
			<div class="content__top">
				<Categories />
				<Sort
					onChooseSortHandler={onChooseSortHandler}
					setSortOpen={() => setSortOpen(!isSortOpen)}
					chosen={chosen}
					isSortOpen={isSortOpen}
					sort={sort}
				/>
			</div>
			<h2 class="content__title">Все пиццы</h2>
			<div class="content__items">
				{isLoading
					? [...new Array(7)].map((_, index) => <Loader key={index} />)
					: pizzas.map((item, index) => {
							return <PizzaItem key={index} {...item} />;
					  })}
			</div>
		</>
	);
};

export default Home;
