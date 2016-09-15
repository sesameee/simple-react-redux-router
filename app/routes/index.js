import React, { PropTypes } from 'react'
import { Router , Route , IndexRoute, browserHistory } from 'react-router'
import { App, Foo, Bar } from '../components'
import AppContainer from '../containers/AppContainer'

class RootRoute extends React.Component {
  render() {
    return (
      <Router history={ this.props.history} >
            <Route path="/" component={App}>
                <IndexRoute component={AppContainer}/>
                <Route path="foo" component={Foo}/>
                <Route path="bar" component={Bar}/>
            </Route>
      </Router>
    );
  }
}

RootRoute.propTypes = {
    history: PropTypes.object.isRequired
};

export default RootRoute;

