import React from 'react';
import axios from 'axios';
import * as yup from 'yup'
import './App.css';
import Card from './components/Card';
import FollowersCard from './components/FollowersCard';
import UserSearch from './components/UserSearch';
import './components/Cards.css';

class App extends React.Component {
 state = {
  user: [],
  followers: [],
  error: '', 
  search: '',
  serverError: '',
 }

//  formSchema = yup.object().shape({
//    search: yup.string().required('Please enter a username')
//  })

//  validateChange = e => {
//    yup
//     .reach(this.formSchema, e.target.name)
//     .validate(e.target.value)
//     .then(valid => {
//       this.setState({...error, [e.target.name] : ''})
//     })
//     .catch(err => {
//       this.setState({error: err.error[0]})
//     })
//  }


 handleChange = e => {
  //  e.persist();
  this.setState({
      search: e.target.value
  })
  // this.validateChange(e);
};

getUser = e => {
  axios.get(`https://api.github.com/users/${this.state.search}`)
    .then((res) => {
      if(res.status === 'error') {
        this.setState({error: res.data})
      } else {
        this.setState({ user: res.data })
      }
      
    })
    .catch((err) => {
      this.setState({serverError: err});
    })

  axios.get(`https://api.github.com/users/${this.state.search}/followers`)
    .then((res) => {
      if(res.status === 'error') {
        this.setState({error: res.data})
      } else {
          this.setState({ followers: res.data });
      }
    
    })
    .catch((err) => {
      this.state({serverError: err});
    })
}

onSubmit = e => {
  e.preventDefault();
  this.getUser()
  this.setState({
    search: ''
  });
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


 

//  componentDidUpdate(prevProps, prevState) {
//    if(this.state.username !== prevState.username && this.state.followers !== prevState.followers) {
//       this.getUser(this.state.username)
//       this.getUser(this.state.followers)
//    }
//  }

 render () {
   return (
    
     <div className='App'>
       <div className='header'>
            <h1>Github Users</h1>
            {/* <UserSearch newUser={this.newUser} /> */}
            <form onSubmit={this.onSubmit}>
                <input 
                        id='search'
                        type='text'
                        placeholder='Search for a user'
                        name='search'
                        value={this.state.search}
                        onChange={this.handleChange}
                        />
          
            <button disabled={!this.state.search} type='submit'>Search</button>
            </form>
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
