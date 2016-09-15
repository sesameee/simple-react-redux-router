import Home from '../components/Home';
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { bindActionCreators } from 'redux';

const AppContainer = connect(
  state => ({
    number: state.count.number
  }),
  dispatch => bindActionCreators({
    increase,
    decrease
  }, dispatch)
)(Home);

export default AppContainer;
