import React from 'react';
import { Link } from 'react-router-dom';

const Nomatch = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <img className="img-fluid" src="https://www.hptranscoders.com/assets/images/404.gif" alt="" />
            </div>
            <div className="text-center mt-4 ">
                <Link to="/"><button className="btn-primary py-2 px-4 rounded">Go Home</button></Link>
            </div>
        </div>
    );
};

export default Nomatch;