import React,{Component} from 'react';
import './Past.css';
function SingleDay(props){
    console.log(props.day,props.day.eth,props.day.date)
	return(
		<div className="history--section__box__inner">
            <h4>{props.day.date}</h4>
            <div className="columns">
                <div className="column">
                    <p>1 BTC = ${props.day.btc}</p>
                </div>
                <div className="column">
                    <p>1 ETH = ${props.day.eth}</p>
                </div>
                <div className="column">
                    <p>1 LTC = ${props.day.ltc}</p>
                </div>
            </div>
        </div>
	)
}

export default SingleDay;