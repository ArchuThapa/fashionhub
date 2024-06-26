import { Route, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import React from "react";
import Dashboard from "../components/user/dashboard/Dashboard";
import Details from "../components/user/Details";
import PaymentMethod from "../components/user/PaymentMethod";
import UserList from "../components/admin/UserList";
import Profile from "../components/admin/Profile";
import Hotproduct from "../components/admin/Hotproduct";
import UserProfile from "../components/user/userprofile/UserProfile";
import SearchProduct from "../components/user/SearchProduct";
import Sort from "../components/user/Sort";
const AuthLayout = React.lazy(() =>import("../components/layout/AuthLayout"))
const Signup = React.lazy(() =>import("../components/auth/Signup"))
const Login = React.lazy(() =>import("../components/auth/Login"))
const AdminLayout = React.lazy(() => import("../components/layout/AdminLayout"))
const UserLayout = React.lazy(() => import("../components/layout/UserLayout"))
const PageNotFound = React.lazy(() => import("../components/PageNotFound"))
const AdminDashboard = React.lazy(() => import("../components/admin/AdminDashboard"))
export const MainRouter = createBrowserRouter(
    createRoutesFromChildren(
        <Route>

        
            <Route path="/" element={<UserLayout />}>
            {/* <Route path="hotproduct" element={<HotProduct />} /> */}

                <Route index element={<Dashboard />} />
                <Route path="/details" element={<Details />}/>
                <Route path="user/profile" element={<UserProfile />}/>
                <Route path="searchproduct/:id" element={<SearchProduct/>}/>
                <Route path="sortdata" element={<Sort/>}/>




                

               
    

            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="userlist" element={<UserList/>} />
                <Route path="profile" element={<Profile />} />
                <Route path="hotproduct" element={<Hotproduct />} />



            </Route>

                
                <Route path="/"  element={<AuthLayout />}>
                <Route path="signup"  element={<Signup />}/>
                <Route path="login"  element={<Login />} />
                <Route path="payment" element={<PaymentMethod/>}/>
                </Route>
                

{/* 
<Route path="/details" element={<Details />}/> */}



                <Route path="*" element={<PageNotFound />} />
                </Route>
            
                )
                )