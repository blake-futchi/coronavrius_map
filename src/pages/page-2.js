import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>About</h1>
        <p>A simple project practicing axios requests on API endpoints and locationally mapping the data.</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
