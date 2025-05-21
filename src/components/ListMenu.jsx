import React from 'react';
import { MdDashboardCustomize } from 'react-icons/md';
import { BiCart } from 'react-icons/bi';
import { AiFillCustomerService } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const menuClass = ({ isActive }) =>
  `flex cursor-pointer items-center rounded-xl p-4  space-x-2
  ${isActive ? 
      "text-hijau bg-green-200 font-extrabold" : 
      "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
  }`

export function ListMenu() {
    return (
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink to="/" id="menu-1" className={menuClass}>
              <MdDashboardCustomize className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" id="menu-2" className={menuClass}>
              <BiCart className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" id="menu-3" className={menuClass}>
              <AiFillCustomerService className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" id="menu-3" className={menuClass}>
              <AiFillCustomerService className="mr-4 text-xl" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/400" id="menu-4" className={menuClass}>
              <AiFillCustomerService className="mr-4 text-xl" />
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/401" id="menu-5" className={menuClass}>
              <AiFillCustomerService className="mr-4 text-xl" />
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/403" id="menu-6" className={menuClass}>
              <AiFillCustomerService className="mr-4 text-xl" />
              Error 403
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/404" id="menu-7" className={menuClass}>
              <AiFillCustomerService className="mr-4 text-xl" />
              Error 404
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
  