import React from 'react';
import Input from '../../../../components/Input';
import './style.css';

const Category = ({ handleChange }) => {
	return (
		<div>
			{' '}
			<h2 className="sidebar-title">Category</h2>
			<div>
				<Input
					handleChange={handleChange}
					value=""
					title="All"
					name="test"
					checked={true}
				/>

				<Input
					handleChange={handleChange}
					value="sneakers"
					title="Sneakers"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="flats"
					title="Flats"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="sandals"
					title="Sandals"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="heels"
					title="Heels"
					name="test"
				/>
			</div>
		</div>
	);
};

export default Category;
