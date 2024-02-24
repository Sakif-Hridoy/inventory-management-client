import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { axiosSecure } from '../../hooks/useAxiosSecure';

const SalesSummery = props => {
    const {user} = useAuth()

    const { data: stats={} } = useQuery({
        queryKey: ["manager-stats"],
        queryFn: async () => {
          const res = await axiosSecure.get("/manager-stats");
          return res.data;
        },
      });
    return (
        <div>
            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Sale</div>
    <div className="stat-value text-primary">{stats.sales}</div>
    <div className="stat-desc">2% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Total Invest</div>
    <div className="stat-value text-secondary">{stats.invest}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
   
    <div className="stat-value">Profit</div>
    <div className="stat-value text-secondary">{stats.profit}</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
        </div>
    );
};

SalesSummery.propTypes = {
    
};

export default SalesSummery;