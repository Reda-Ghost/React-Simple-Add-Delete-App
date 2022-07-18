import React , {Component} from 'react';
import UserMember from './UserMember';


class Users extends Component {
  render() {
    return(
      <div className='users container'>
        <div className="row">
          <UserMember/>
        </div>
      </div>
    )
  }
}



export default Users;