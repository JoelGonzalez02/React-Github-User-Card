import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import FollowersCard from './components/FollowersCard';
import './components/Cards.css';

class App extends React.Component {
 state = {
  user: [],
  followers: [],
  error: '', 
 }

 componentDidMount() {
   axios
      .get('https://api.github.com/users/JoelGonzalez02')
      .then(res => {
        console.log(res.data)
        if(res.status === 'error') {
          this.setState({error: res.data}); 
        } else {
          this.setState({user: res.data});
        }
      })
      .catch(err => {
        this.setState({error: err});
      });

    axios 
      .get('https://api.github.com/users/JoelGonzalez02/followers')
      .then(res => {
        console.log('followers', res.data)
        if(res.status === 'error'){
          this.setState({error: res.data});
        } else {
          this.setState({followers: res.data});
        }
      })
      .catch(err => {
        this.setState({error: err});
      })
 }

 render () {
   return (
     <div className='App'>
       <div class='header'>
            <h1>Github Users</h1>
       </div>
           <Card user={this.state.user} />
           <div class='follower-text'>
            <h2>{this.state.user.name}'s followers </h2> 
           </div>
           
           <FollowersCard user={this.state.user} followers={this.state.followers} />
     </div>
   )
 }

}

export default App;
