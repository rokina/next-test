import { Header } from '../components/Index';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout
