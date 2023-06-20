import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Product from './features/Product';
import Recommended from './features/Recommended';
import Sidebar from './features/Sidebar';
import products from './data/data';
import Card from './components/Card';

function App() {
	const [query, setQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [activeButton, setActiveButton] = useState('');

	const handleSearchChange = (e) => {
		setQuery(e.target.value);
	};

	const filteredItem = products.filter((product) =>
		product.title.toLowerCase().includes(query.toLowerCase())
	);

	const handleChangeSelected = (e) => {
		setSelectedCategory(e.target.value);
	};

	const handleClick = (e) => {
		setActiveButton(e.target.value);
		setSelectedCategory(e.target.value);
	};

	function filteredData(products, selected, query) {
		let filteredProducts = products;

		if (query) {
			filteredProducts = filteredItem;
		}

		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ category, color, company, newPrice, title }) =>
					category === selected ||
					color === selected ||
					company === selected ||
					newPrice === selected ||
					title === selected
			);
		}

		return filteredProducts.map((product, index) => (
			<Card product={product} key={index} />
		));
	}

	console.log(activeButton);

	const result = filteredData(products, selectedCategory, query);

	return (
		<>
			<Sidebar handleChangeSelected={handleChangeSelected} />
			<Navigation query={query} handleSearchChange={handleSearchChange} />
			<Recommended handleClick={handleClick} activeButton={activeButton} />
			<Product result={result} />
		</>
	);
}

export default App;
