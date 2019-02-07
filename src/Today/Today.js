import React,{Component} from 'react';
import './Today.css';
import axios from 'axios';
class Today extends Component{
	constructor(){
		super();
		this.state = {
			btc : '',
			ltc : '',
			eth : '',
		}
	}
	componentWillMount(){
		axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
		.then(response=>{
			this.setState({
				btc : response.data.BTC.USD,
				ltc : response.data.LTC.USD,
				eth : response.data.ETH.USD
			});
		})
		.catch(error=>{
			this.setState({
				btc : '404 Price Not founed',
				ltc : '404 Price Not founed',
				eth : '404 Price Not founed'
			});
		})
	}

	render(){
		return(
			<div className="today--section container">
				<h2>Current Price</h2>
				<div className="columns today--section__box">
                    <div className="column btc--section">
                        <h5>${this.state.btc}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="column eth--section">
                        <h5>${this.state.eth}</h5>
                        <p>1 ETH</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltc}</h5>
                        <p>1 LTC</p>
                    </div>
                </div>
			</div>

		)
	}
}
export default Today;