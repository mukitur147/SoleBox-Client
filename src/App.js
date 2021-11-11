import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/HomePage/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import SizeChart from './Components/SizeChart/SizeChart';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     
   <AuthProvider>
   <BrowserRouter>
      <Switch>
        <Route exact path="/">
             <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/allProducts">
          <AllProducts></AllProducts>
        </Route>
        <Route path="/sizeChart">
          <SizeChart></SizeChart>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <PrivateRoute path="/productDetails/:id">
          <ProductDetails></ProductDetails>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
      </BrowserRouter>
   </AuthProvider>
     
    </div>
  );
}

export default App;
