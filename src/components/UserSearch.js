import React from 'react';
import axios from 'axios';
import * as yup from 'yup';

// class UserSearch extends React.Component {
//     state = {
//         search: ''
//     }

//     formSchema = yup.object().shape({
//         search: yup.string().required('Please enter a username')
//       })
     
//       validateChange = e => {
//         yup
//          .reach(this.formSchema, e.target.name)
//          .validate(e.target.value)
//          .then(valid => {
//            this.setState({error: ''})
//          })
//          .catch(err => {
//            this.setState({error: err.error[0]})
//          })
//       }
     
      
     
//       handleChange = e => {
//         e.persist();
//        this.setState({
//            search: e.target.value
//        })
//        this.validateChange(e);
//      };
     

//      onSubmit = e => {
//          e.preventDefault();
//         this.props.getUser(this.state.search);
//         this.setState({search: ''});
//      }

//      render() {
//          return (
//             <form onSubmit={this.onSubmit}>
//             <input 
//                     id='search'
//                     type='text'getUser
//                     placeholder='Search for a user'
//                     name='search'
//                     value={this.state.search}
//                     onChange={this.handleChange}
//                     />
//         <button type='submit'>Search</button>
//         </form>
//          )
//      }
// }

// export default UserSearch;



class UserSearch extends React.Component { 
  state = {
    formsearch: ''
  }

  handleChange = e => {
    this.setState({ formsearch: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();

    this.props.newUser(this.state.formsearch);

    this.setState({formsearch: ''});
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Search for a user"
          value={this.state.formsearch} 
          onChange={this.handleChange} 
        />
        <button type="submit">Search</button>
      </form>
      </>
    );
  }
}

export default UserSearch;