import Category from './components/Category';
import Price from './components/Price';
import Colors from './components/Colors';
import './style.css';

const Sidebar = ({ handleChangeSelected }) => {
	return (
		<>
			<section className="sidebar">
				<div className="logo-container">
					<h1>🛒</h1>
				</div>
				<Category handleChange={handleChangeSelected} />
				<Price handleChange={handleChangeSelected} />
				<Colors handleChange={handleChangeSelected} />
			</section>
		</>
	);
};

export default Sidebar;
