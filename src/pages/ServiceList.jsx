import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import allData from "../api/api";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Fade } from "react-awesome-reveal";

const ServiceList = () => {
    const { serviceList, serviceRequestList } = allData();

    useEffect(() => {
        serviceRequestList();
    }, []);



    return (
        <Layout>
            
            {/* all contents goes on */}
            <section className="ServiceList-section mt-32 mb-60">
                <div className="container  mx-auto h-[400px] bg-indigo-600 flex flex-col items-center justify-center">
                    <Fade direction="fade" delay={200} cascade duration={1000}>
                    <h1 className="lg:text-9xl md:text-9xl sm:text-4x1 text-slate-50  font-bold">Service List</h1>
                    </Fade>
                    <div className="text-sm breadcrumbs mt-4">
                        <ul className="lg:text-sm md:text-5xl sm:text-sm text-slate-50 font-bold">
                            <li><Link to={"/"}>Home</Link></li> 
                            <li><Link to={"/service-list"}>Service List</Link></li>
                        </ul>
                    </div>  
                </div>   



                <div className="container mx-auto bg-slate-950 mt-52 px-5 py-16 rounded-3xl">
                    <h3 className="lg:text-7xl font-bold text-gray-50 border-b-2 border-indigo-300 pb-4">My Expertise</h3>
                         <Fade direction="down" cascade duration={1000}>   
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 justify-items-center my-24">
                            {
                                !serviceList ? (
                                     <Skeleton count={3} />
                                )  : (
                                    serviceList.map((service, index) => (
                                        <div key={index} className="card w-96 bg-slate-800 shadow-xl">
                                            <div className="card-body">
                                                <h2 className="card-title text-slate-50">{service.serviceName}</h2>
                                                <p className="text-slate-200 mt-5">{service.feature}</p>
                                                <div className="card-actions justify-end mt-5">
                                                    <Link to={`/service/${service.id}`} className="btn btn-primary">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )                                
                            }
                           
                         </div>


                    </Fade>
                </div>
            </section>
            {/* all contents goes on */}

        </Layout>
    );
};

export default ServiceList;