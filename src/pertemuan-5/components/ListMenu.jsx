import React from 'react';
import { MdDashboardCustomize } from 'react-icons/md';
import { BiCart } from 'react-icons/bi';
import { AiFillCustomerService } from 'react-icons/ai';

export function ListMenu() {
    return (
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-">
              <MdDashboardCustomize className="mr-4 text-xl" />
              Dashboard
            </div>
          </li>
          <li>
            <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-">
              <BiCart className="mr-4 text-xl" />
              Orders
            </div>
          </li>
          <li>
            <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-">
              <AiFillCustomerService className="mr-4 text-xl" />
              Customers
            </div>
          </li>
        </ul>
      </div>
    );
  }
  