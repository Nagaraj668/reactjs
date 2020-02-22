'use strict';

class MyComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost/rest/items.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });

           console.log(error);
        }
      )
  }

  render() {
     const {
        error,
        isLoaded,
        items
      } = this.state;
      
    console.log(error);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

// wrapper
const componentContainer = document.querySelector("#ajax");
ReactDOM.render(React.createElement(MyComponent), componentContainer);