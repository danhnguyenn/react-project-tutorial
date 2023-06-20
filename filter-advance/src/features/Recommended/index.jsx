import React from 'react';
import './style.css';
import Button from '../../components/Button';

const Recommended = ({ handleClick, activeButton }) => {
	return (
		<>
			<div>
				<h2 className="recommended-title">Recommended</h2>
				<div className="recommended-flex">
					<Button
						onClickHandler={handleClick}
						value=""
						title="All Products"
						activeValue={activeButton}
					/>
					<Button
						onClickHandler={handleClick}
						value="Nike"
						title="Nike"
						activeValue={activeButton}
					/>
					<Button
						onClickHandler={handleClick}
						value="Adidas"
						title="Adidas"
						activeValue={activeButton}
					/>
					<Button
						onClickHandler={handleClick}
						value="Puma"
						title="Puma"
						activeValue={activeButton}
					/>
					<Button
						onClickHandler={handleClick}
						value="Vans"
						title="Vans"
						activeValue={activeButton}
					/>
				</div>
			</div>
		</>
	);
};

export default Recommended;
