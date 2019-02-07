import React,{Component} from 'react';
import axios from 'axios';
import './Past.css';
import SingleDay from './SingleDay';
import moment from 'moment';

class Past extends Component{
	constructor(){
		super();
		this.state = {
			priceOfDate :[],
		}
	}
	async getPastPrices(){
		var  numberOfPastDays = 5;
		let tempDays = [];
		for(let i = 1 ; i <= numberOfPastDays; ++i){
			let t = moment().subtract(i,'days').unix();
			console.log(t)
			let temp = {date : moment.unix(t).format("MMMM Do YYYY")}
			await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD&ts=' + t)
			.then(response=>{
				temp.btc = response.data.BTC.USD;
				temp.ltc = response.data.LTC.USD;
				temp.eth = response.data.ETH.USD;
			})
			.catch(error=>{
				temp.btc = '404 Price Not founed';
				temp.ltc = '404 Price Not founed';
				temp.eth = '404 Price Not founed';
			})
			tempDays.push(temp)
		}
		this.setState({priceOfDate:tempDays});
	}
	componentWillMount(){
		this.getPastPrices();
	}
	render(){
		return(
			<div className="history--section container">
			<h2>History (Past 5 days)</h2>
				<div className="history--section__box">
					{this.state.priceOfDate.map((day,i)=><SingleDay key={i} day = {day} />)}
				</div>
			</div>
		)
	}
}
export default Past;