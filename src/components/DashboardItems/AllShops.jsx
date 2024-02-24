import React from 'react';
import PropTypes from 'prop-types';
import useShop from '../../hooks/useShop';

const AllShops = props => {
    const [shop,refetch] = useShop()
    return (
        <div>
            <h2>Total Shops:{shop.length}</h2>
        </div>
    );
};

AllShops.propTypes = {
    
};

export default AllShops;