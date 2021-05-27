import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import PersonalPage from '../src/pages/personal-page/personal-page';
import PaymentPage from './pages/payment-page/payment-page';
import BillingPage from '../src/pages/billing-page/billing-page';
import CardsPage from '../src/pages/cards-page/cards-page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Redirect to='/personal-info' />}
          />
          <Route
            name='personal-info'
            path='/personal-info'
            component={PersonalPage}
          />
          <Route
            name='credit-cards'
            path='/credit-cards'
            component={CardsPage}
          />
          <Route
            name='payment-plan'
            path='/payment-plan'
            component={PaymentPage}
          />
          <Route name='billing' path='/billing' component={BillingPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
