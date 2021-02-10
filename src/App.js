import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    }
  }
  
  // testMethod(){
  //   console.log('testing')
  // axios.get('https://randomuser.me/api/?results=100')

  //     .then((response) => {
  //       // handle success
  //       this.setState({
  //         users:response.data.results
  //       })
  //       console.log(this.state);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // }

  componentDidMount(){
    
    axios.get('https://randomuser.me/api/?results=10')

      .then((response) => {
        // handle success
        this.setState({
          users:response.data.results
        })
        console.log(this.state);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render() {
    // console.log(this.state)
    // if (!this.state.users.length){
    //  this.testMethod()
    // }
    
    return (
      <div>
        {/* <table>
      
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
          {this.state.users.map(user =>(
            <tr>
              <td>{user.name.first} {user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.location.country}</td>
            </tr>
          
          )) }
        </table> */}
        {/* <ul> */}
        {this.state.users.map(user =>(
            // <li>
            <ul>
              <li>{user.name.first} {user.name.last}</li>
              <li>{user.email}</li>
              <li>{user.location.country}</li>
            </ul>
          // </li>
          
          )) }
        {/* </ul> */}
      </div>
    );
  }
}

export default App;
