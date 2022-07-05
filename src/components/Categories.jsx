import { useState } from 'react';
const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const Categories = () => {
	const [chosen, setChosen] = useState('Все');
	return (
		<div class="categories">
			<ul>
				{categories &&
					categories.map((item, index) => {
						return (
							<li
								key={item + index}
								className={chosen === item ? 'active' : ''}
								onClick={() => setChosen(item)}
							>
								{item}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Categories;
