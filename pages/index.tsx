import { NextPage } from 'next';
import { Container, Avatar } from '@material-ui/core';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Container>
    <h1>Hello world! - UA : {userAgent} </h1>
    <img src="/goma.png" alt="goma" />
    <Avatar src="/goma.png" alt="goma" />
  </Container>
);


export default Home;