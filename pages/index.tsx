import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
<h1>Hello world! - UA : {userAgent} </h1>
);


export default Home;