import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import './style.css';

const Navigation = ({ query, handleSearchChange }) => {
	return (
		<nav>
			<div className="nav-container">
				<input
					onChange={handleSearchChange}
					value={query}
					type="text"
					placeholder="Enter you search shoes."
					className="search-input"
				/>
			</div>
			<div className="profile-container">
				<a href="">
					<FiHeart className="nav-icons" />
				</a>
				<a href="">
					<AiOutlineShoppingCart className="nav-icons" />
				</a>
				<a href="">
					<AiOutlineUserAdd className="nav-icons" />
				</a>
			</div>
		</nav>
	);
};

export default Navigation;
