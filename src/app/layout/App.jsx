import React, { Component, Fragment } from 'react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../features/user/UserDtailed/UserDetailedPage'
import SettingDashboard from '../../features/user/Settings/SettingsDashboard'

import NavBar from '../../features/nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react'
import { Route, Switch, withRouter } from 'react-router-dom'
import EventForm from '../../features/event/EventForm/EventForm'
import TestComponent from '../../features/testarea/TestComponent'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingDashboard} />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    )
  }
}

export default withRouter(App)
