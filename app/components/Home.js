import React, { PropTypes } from 'react';


class Home extends React.Component {
  render() {
    return (
      <div>
        Some state changes:
        {this.props.number}
        <button onClick={() => this.props.increase(1)}>Increase</button>
        <button onClick={() => this.props.decrease(1)}>Decrease</button>
     </div>
    );
  }
}

Home.propTypes = {
    number: PropTypes.number,
    increase: PropTypes.func,
    decrease: PropTypes.func
};



export default Home;
