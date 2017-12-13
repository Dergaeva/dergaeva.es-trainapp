import './number.scss';


export const Numbers = ({ from, to, odd, even }) => {
	const arr = [];
	const count = () => {
		for (let i = from; i <= to; i++) {
			arr.push(i);
		}
	};
	if(odd) {
		count();
		let odds = arr.filter(n => n % 2);
		return (
			<ul>
				{
					odds.map((item, index) => <li key={ index }>{ item }</li>)
				}
			</ul>
		)
	}
	if(even) {
		count();
		let even = arr.filter(n => n % 2 === 0);
		return (
			<ul>
				{
					even.map((item, index) => <li  key={ index }>{ item }</li>)
				}
			</ul>
		)
	}
	else
		count();
		return (
			<ul>
				{
					arr.map((item, index) => <li  key={ index }>{ item }</li>)
				}
			</ul>
		)
};
