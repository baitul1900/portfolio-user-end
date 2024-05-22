import {BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ServiceList from "./pages/ServiceList";
import BlogListingPage from "./pages/BlogListingPage";



const App = () => {


  
  return (
    
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="blog-details/:id" element={<BlogDetailsPage/>}/>
                <Route path="blog-list" element={<BlogListingPage/>}/>
                <Route path="/service-list" element={<ServiceList/>}/>
            </Routes>
    </BrowserRouter>
   
  );
};

export default App;
