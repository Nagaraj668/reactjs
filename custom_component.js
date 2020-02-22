'use strict';

class CustomComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      Liked: false
    }
    console.log(this.state.Liked);
  }

  /* render() {
    return React.createElement('button', {
      onClick: () => {
        this.setState({
          Liked: true
        });
        console.log(this.state.Liked);
      }
    }, 'Create');
  } */

  render() {
    return <div>Normal Component</div>;
  }
}

// wrapper
const componentContainer = document.querySelector("#custom_component");
ReactDOM.render(React.createElement(CustomComponent), componentContainer);
