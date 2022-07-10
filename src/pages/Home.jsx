import { useEffect, useState } from 'react';
import PizzaItem from '../components/Pizza/PizzaItem';
import Loader from '../components/Pizza/Loader';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

const sort = [
	{
		label: 'популярности',
		value: 'rating',
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
const categories = [
	{
		label: 'Все',
		value: 'all',
	},
	{
		label: 'Мясные',
		value: '1',
	},
	{
		label: 'Вегетарианская',
		value: '2',
	},
	{
		label: 'Гриль',
		value: '3',
	},
	{
		label: 'Острые',
		value: '4',
	},
	{
		label: 'Закрытые',
		value: '5',
	},
];

const Home = () => {
	const [pizzas, setPizzas] = useState([]);
	const [filteredPizzas, setFilteredPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSortOpen, setSortOpen] = useState(false);
	const [chosen, setChosen] = useState(sort[0]);
	const [chosenCategory, setChosenCategory] = useState(categories[0]);

	const onChooseSortHandler = (item) => {
		setChosen(item);
		setSortOpen(false);
		const sorted = sortPizzas(item);
		setFilteredPizzas(sorted);
	};
	const onChooseCategoryHandler = (item) => {
		setChosenCategory(item);
		categoriesPizzas(item);
		console.log(item);
		const sorted = categoriesPizzas(item);
		console.log(sorted);
		setFilteredPizzas(sorted);
	};
	const categoriesPizzas = (item) => {
		return item.value !== 'all'
			? [...pizzas].filter((pizza) => pizza.category === +item.value)
			: [...pizzas];
	};
	const sortPizzas = (item) => {
		let res = [...pizzas];
		switch (item.value) {
			case 'price':
				res = res.sort((a, b) => a.price - b.price);
				break;
			case 'rating':
				res = res.sort((a, b) => b.rating - a.rating);
				break;
			case 'alphabet':
				res = res.sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
				break;
		}
		return res;
	};

	const getPizzas = async () => {
		setIsLoading(true);
		await fetch('/pizzas.json')
			.then((resp) => resp.json())
			.then((data) => {
				setPizzas(data.pizzas);
				setFilteredPizzas(data.pizzas);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getPizzas();
	}, []);

	return (
		<>
			<div class="content__top">
				<Categories
					categories={categories}
					chosen={chosenCategory}
					onChooseHandler={onChooseCategoryHandler}
				/>
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
					: filteredPizzas.map((item, index) => {
							return <PizzaItem key={index} {...item} />;
					  })}
			</div>
		</>
	);
};

export default Home;
