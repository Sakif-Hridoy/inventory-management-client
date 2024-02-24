import React from "react";
import PropTypes from "prop-types";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const AdminStats = (props) => {
    const {user} = useAuth()

    const { data: stats={} } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
          const res = await axiosSecure.get("/admin-stats");
          return res.data;
        },
      });

  return (
    <div>
      <h2>Sales View Section</h2>
      <div className="">
        <div className="grid grid-cols-3 gap-4 m-4">
          <div className="card w-76 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Total Income</h2>
              <p className="text-2xl">${stats.revenue}</p>
              
            </div>
          </div>
          <div className="card w-76 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Total Sales</h2>
              <p className="text-2xl">{stats.sales}</p>
              
            </div>
          </div>
          <div className="card w-76 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Total Products</h2>
              <p className="text-2xl">{stats.products}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminStats.propTypes = {};

export default AdminStats;
