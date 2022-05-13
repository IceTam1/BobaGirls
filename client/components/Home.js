import React from "react";
import { connect } from "react-redux";
import auth from "../store/auth";
import users from "../store/users";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username, users, auth, ping } = props;

  const sendPing = (user) => {
    console.log(user);
    const message = { from: auth.id, to: user.id };
    window.socket.send(JSON.stringify(message));
    console.log(message);
  };
  
  return (
    <div>
      <div className="content">
        <h3 className='welcome'>Welcome {username}!</h3>
      </div>
      {/* <ul>
      {console.log(users)}
        {users.map((user) => {
          return (
            <li key={user.id} onClick={() => sendPing(user)}>
              {user.username}
            </li>
          );
        })}
        </ul> */}
      <div className="hero">
        <div className="content">
          <div>
            <p>'Best bubble tea I've ever had!' - Everyone</p>
            <Link to='/products'>
            <h1><button className="shopnow">
              SHOP NOW
              </button></h1>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    users: state.users,
    auth: state.auth,
  };
};

export default connect(mapState)(Home);
