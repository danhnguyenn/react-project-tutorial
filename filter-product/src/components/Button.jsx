const Button = ({ onClickHandler, value, title, activeValue }) => {
	const isActive = activeValue === value;

	const handleClick = (e) => {
		onClickHandler(e);
	};
	return (
		<button
			onClick={handleClick}
			value={value}
			className={`btns ${isActive && 'active'}`}
		>
			{title}
		</button>
	);
};

export default Button;
