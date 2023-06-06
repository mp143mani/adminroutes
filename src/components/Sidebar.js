import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate=useNavigate()
  return <>
    <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<div className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</div>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<Link to={'/dashboard'}>
<li className="nav-item active">
    <div className="nav-link">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></div>
</li>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<Link to={'/adduser'}>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-solid fa-user-plus"></i>
        <span>Add User</span>
    </div>
</li>
</Link>

<Link to={'/profile'}>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-regular fa-address-card"></i>
        <span>profile</span>
    </div>
</li>
</Link>

<Link to={'/pendingrequest'}>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <span>Pending Request</span>
    </div>
</li>
</Link>



<li className="nav-item" onClick={()=>navigate('/task')}>
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-regular fa-file-pen"></i>
        <span>Task</span>
    </div>
</li>

</ul>
  </>
}

export default Sidebar