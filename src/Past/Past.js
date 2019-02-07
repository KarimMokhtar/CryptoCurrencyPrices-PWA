import React,{Component} from 'react';
import axios from 'axios';
import './Past.css';
import moment from 'moment';

class Past extends Component{
	constructor(){
		super();
		this.state = {
			priceOfDate :[],

		}
	}

	getBTCPrice = (date) => {
		return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
	}
	getETHPrice = (date) => {
		axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
	}
	getLTCPrice = (date) => {
		axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
	}
	getPastPrices = () => {
		const  numberOfPastDays = 5;
		let tempDays = [];
		for(let i = 1 ; i <= numberOfPastDays; ++i){
			let t = moment().subtract(i,'days').unix()
			axios.all([this.getETHPrice(t), this.getBTCPrice(t), this.getLTCPrice(t)]).
			then(axios.spread((btc,eth,ltc) => {
				let temp = {
					date : moment.unix(t).format("MMMM Do YYYY"),
					eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
				}
				tempDays.push(temp)
			})).
			catch(error=>{
				let temp = {
					date : moment.unix(t).format("MMMM Do YYYY"),
					eth: '404 Not found for this dat',
                    btc: '404 Not found for this dat',
                    ltc: '404 Not found for this dat'
				}
				tempDays.push(temp)
			})
			this.setState({priceOfDate:tempDays});
		}
		
	}
	componentWillMount(){
		this.getPastPrices();
	}
	render(){
		return(
			<div>
			{this.state.priceOfDate.map((i,day)=><div>{day.date}</div>)}
			</div>
		)
	}
}
export default Past;