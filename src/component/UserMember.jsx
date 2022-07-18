import React , {Component} from 'react'

class UserMember extends Component {

  state = {
    dataUsers : JSON.parse(localStorage.getItem('usersData')),
    Users : [],
    counter: 0
  }

  add = () => {
    if(this.state.counter < this.state.dataUsers.length) {
      this.setState({
        counter : this.state.counter + 1
      })
      this.state.Users.push(this.state.dataUsers[this.state.counter])
    }
  }

  remove = () => {
    this.state.Users.pop();
    this.setState({
      counter : this.state.counter - 1
    })
  }
  removeAll = () => {
    this.state.Users.length = 0;
    this.setState({
      counter : 0
    })
  }

  render() {

    return (
      <>
        <div className="output">
          {
            this.state.Users.map(user => {
              const {id, name, website} = user;
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={id}>
                  <ul className="list-unstyled user-member">
                    <li>Id: {id}</li>
                    <li>Name: {name}</li>
                    <li>Web: {website}</li>
                  </ul>
                </div>
              )
            })
          }
        </div>
        <div className="clear-fix"></div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={this.add}>Add</button>
          <button className="btn btn-warning" onClick={this.remove}>Remove</button>
          <button className="btn btn-danger" onClick={this.removeAll}>Remove All</button>
        </div>
      </>
      
    )
  }
}

export default UserMember;