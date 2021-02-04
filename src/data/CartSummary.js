import React,{Component} from "react";
import {Link } from "react-router-dom";

export class CartSummary extends Component
{
    getSummary =() =>
    {
        if(this.props.cartItems > 0 )
        {
            return <span>
                {this.props.cartItems} item(s),
                ${this.props.cartPrice.toFixed(2)}
            </span>
        }else{
            return <span> Your Cart : (Empty)</span>
        }
        }
        

        getLinkClasses =() =>{
            return `btn bt-n-sm bg-dark text-white ${this.props.cartItems === 0 ?
                 "disabled" : ""}`; 
            }


            render()
            {
                return <div className="float-right">
                    <small>
                        {this.getSummary()}
                    </small>
                </div>
            }
    }
