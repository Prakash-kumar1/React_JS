import React , {Component} from 'react'

export  class UnControl extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            value : ""
        } ;

    // Creating  Refs which name is textInput
    this.textInput = React.createRef() ;
    }


    componentDidMount = () => {
        console.log(this.textInput.current) ;
        this.textInput.current.focus() ;   //in which ref is present , it got focus
    } ;


    handleSubmit = e => {
        e.preventDefault() ;
        console.log(this.textInput.current.value) ;
        this.setState({value : this.textInput.current.value})
    } ;

    
  render() {
    return (
      <div className='container'>
        <h1>UnControlled Components</h1>
        <h2>You Typed: {this.state.value}</h2>
        <form onSubmit={this.handleSubmit}>
            Name :     <input type="text"  ref={this.textInput}/> <br /><br />
            Password : <input type="text"  /> <br /><br />
            Address :  <input type="text" /> <br /><br />
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
  }
}
