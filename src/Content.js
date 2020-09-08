import React from 'react';
import { Route, Switch} from 'react-router-dom';
import News from './Containers/News/News';
import Album from './Containers/Album/Album';
import Layout from './Layout';

class Content extends React.Component {

  render() {
    return (
        <Switch>

          <Route path="/news">
            <Layout title="Your news">
              <News />
            </Layout>
          </Route>

          <Route path="/album">
            <Layout title="Your album">
              <Album />
            </Layout>
          </Route>

        </Switch>

    );
  }
}

export default Content;



