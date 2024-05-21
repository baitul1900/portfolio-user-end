import {BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ServiceList from "./pages/ServiceList";



const App = () => {


  
  return (
    
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="blog-details/:id" element={<BlogDetailsPage/>}/>
                <Route path="/service-list" element={<ServiceList/>}/>
            </Routes>
    </BrowserRouter>
   
  );
};

export default App;
