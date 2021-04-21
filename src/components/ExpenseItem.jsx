import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<ExpenseDate
				date={props.date}
				title={props.title}
				amount={props.amount}
			/>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">${props.amount}</div>
		</div>
	);
}
