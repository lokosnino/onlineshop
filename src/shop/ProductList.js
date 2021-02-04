import React, {Component} from 'react';


//this is how we acecess the properties passed
//. to component 

class App extends React.Component{ 
render(){
	return(
	<div>
	<h1>{this.props.carProps}</h1>
	<h2>{this.props.bikeProp</h2>
	
	//this is how we pass the properties to a component
	
	ReactDOM(<App carProp ="1600cc" bikeProp ="150cc")
	}
	const route= ( 
	<Router> 
	<div>
	<h1> React router example</h1>
	<Routepath="/" component ={App}/>
	<Routepath ="/about" component= {About}/>
	<Routepath ="/contact" component={Contact}/>
	</div>
	</Router>
	
	function nameList(props){
		const myList = props.myLists;
		const listItems = myLists.map((myList) =>
		<li>{myList}</li>
	);
	
	return ( 
	<div> 
	<h2> 
	Rendering List inside the component</h2>
	<ul>{listItems}</ul>
	</div>
	);
	}
	const myList = ['Peter', 'Sachin','Kevin', 'Dhoni']
	ReactDOM.render(
	<NameList myLists = {myLists}/>,
	document.getElementById('app')
	);
	export default App;
	
	function nameList(props){
		const myList = props.myLists;
		const listItems = myLists.map((myList) =>
		<li>{myList}</li>
		);
		return(
		<div>
		<h2> Rendering Lists inside component</h2>
		<ul>{listItems}</ul>
		</div>
		);
		}
		
	
	class Simple extends React.Component{
		render(){
			return(
			<div>
			<h1 style ={{color:"blue")>Hello Simple!</h1>
			</div>
			);
			}
		   }
	}


export class ProductList extends Component 
{

    render()
    {
        if(this.props.product == null ||  this.props.products.length  === 0)
        {
            return <h4 className="p-2">No Products</h4>
        }
        return this.props.products.map(p =>
            <div  key={p.id}> 
                <h4>
                    {p.name}
                </h4>
                <span className="badge badge-pill badge-primary float-right">
                    ${p.price.toFixed(2)}
                </span>
                <div className="card-text bg-white p-1">
                    {p.description}
                </div>
            </div>
        )
    }
}