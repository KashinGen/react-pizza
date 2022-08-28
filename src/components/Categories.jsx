import { useState } from 'react';
const Categories = ({ categories, chosen, onChooseHandler }) => {
	console.log(chosen, categories);
	return (
		<div class="categories">
			<ul>
				{categories &&
					categories.map((item, index) => {
						return (
							<li
								key={item + index}
								className={chosen.value === item.value ? 'active' : ''}
								onClick={() => onChooseHandler(item)}
							>
								{item.label}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Categories;
