// Each component has several "Life Cycle Methods" that you can override to run code at particular times in Process. 
// There are  4 phases in  Life Cycle Methods  =>>
// (1) =>  Intialization 
// (2) =>  Mounting 
// (3) =>  Updating 
// (4) =>  Un-Mounting 
// ( ) =>  Error handling  (not count in Life Cycle phase)


// (1) =>  Intialization =>  It is the birth phase of the lifecycle of a ReactJS component. Here, the component starts its journey on a way to the DOM. In this phase, a component contains the default Props and initial State. These default properties are done in the constructor of a component. The initial phase only occurs once and consists of the following methods.

// getDefaultProps() => It is used to specify the default value of this.props. It is invoked before the creation of the component or any props from the parent is passed into it.

// getInitialState() => It is used to specify the default value of this.state. It is invoked before the creation of the component.



// (2) =>  Mounting  =>  In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods.

// componentWillMount() => This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.

// render() =>  This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.

// componentDidMount() =>  This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.












