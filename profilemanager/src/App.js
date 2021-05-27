import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ProfileManager from '../src/components/profile-manager/profile-manager';
function App() {
  return (
    <div>
      <Header />
      <ProfileManager />
      <Footer />
    </div>
    // U switch ce uvijek biti component manager i kao komponenta? ce mu se slati koja vec treba za route
    // ako ne to onda pojma nemam
    /*     <BrowserRouter>
        <Header />
      <Switch>
        <Route name='test' path='/about' component={ProductsPage} />
      </Switch>
    </BrowserRouter> */
  );
}

export default App;
