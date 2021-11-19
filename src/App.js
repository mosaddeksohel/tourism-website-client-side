import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Explore from './Page/Explore/Explore';
import Purchase from './Page/Purchase/Purchase';
import Home from './components/Home/Home/Home';
import Dashboard from './Page/Dashboard/Dashboard';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';
import ManageProducts from './Page/Dashboard/ManageProducts/ManageProducts';
import BuyForm from './Page/BuyForm/BuyForm';
import MyOrders from './Page/Dashboard/MyOrders/MyOrders';
import AddProducts from './Page/Dashboard/AddProducts/AddProducts';
import ManageOrders from './Page/Dashboard/ManageAllOrders/ManageOrders';
import Navigation from './components/Home/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageproducts">
              <ManageProducts></ManageProducts>
            </Route>
            <Route path="/addproducts">
              <AddProducts />
            </Route>
            <Route path="/manageorders">
              <ManageOrders />
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/buyform">
              <BuyForm></BuyForm>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
