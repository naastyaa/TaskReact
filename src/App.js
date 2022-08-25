import '../src/assets/css/fonts.css';
import '../src/assets/css/login-credentials.css'
import '../src/assets/css/merge-user-accounts.css'
import '../src/assets/css/personal-info.css'
import '../src/assets/css/styles.css'
import '../src/assets/css/userRole.css'
import '../src/assets/bootstrap/css/bootstrap.min.css'
import { images } from '../src/constants'
import React from 'react';
import Inputer from './Inputer';
import Drop from './Drop';

const App = () => {

  return (
    <div className="main-container">
      <header>
        <nav className="navbar navbar-light navbar-expand-md">
          <div className="container-fluid"><a className="navbar-brand" href="#"><img src={images.logosvg} alt="logosvg" /></a>
            <div className="d-flex align-items-center align-items-sm-center mobile-profile"><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active" href="#" txt-key="txtUserMenu">User</a></li>
                <li className="nav-item"><a className="nav-link" id="admin-id" href="/oauth/services" txt-key="txtAdminMenu">Admin</a></li>
              </ul>
              <ul className="navbar-nav ml-auto burger-user-info">
                <li className="nav-item dropdown"><a className="dropdown-toggle nav-link d-none d-sm-none d-md-flex d-lg-flex d-xl-flex align-items-center align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center" aria-expanded="false" data-toggle="dropdown" href="#">&nbsp;&nbsp;<span id="profile-name-header"><br /></span>
                  <img id="user-img-id" className="profile__photo-header" src={images.avatar} alt="avatar" /></a>
                  <div className="dropdown-menu"><a className="dropdown-item" id="logout-id" href="/oauth/v2/logout">Logout</a></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="main">
        <div className="sidebar">
          <ul className="list-sidebar">
            <li><a href="home.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>&nbsp;<span txt-key="txtSidebarMenuHome">Home</span></a></li>
            <li><a className="active" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>&nbsp;<span txt-key="txtSidebarMenuPersonalInfo">Personal info</span></a></li>
            <li><a href="login-credentials.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>&nbsp;<span txt-key="txtSidebarMenuLoginCredentials">Login credentials</span></a></li>
            <li><a href="user-roles.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>&nbsp;<span txt-key="txtSidebarMenuUserRoles">User roles</span></a></li>
            <li><a href="../community/communities.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>&nbsp;<span txt-key="txtSidebarMenuCommunities">Communities</span></a></li>
          </ul>
        </div>
        <div className="comman-padding">
          <div className="container">
            <Drop/>
            <Inputer />
          </div>
        </div>
      </div>
      <footer className="footer-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <p txt-key="txtFooterCopyright"><strong>© 2022 - Gamanet a.s.</strong> All rights reserved. </p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <ul className="d-flex justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end justify-content-xl-end">
                <li><a href="#" txt-key="txtFooterLinkPrivacy">Privacy Policy</a></li>
                <li><a href="#" txt-key="txtFooterLinkTerms">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;
