import React from 'react';
import './index.scss';

export const App = ({ children }) =>
    <div className="app">
        {children}
    </div>;

export const Whoops404 = () =>
    <div className="nb-error">
        <div className="error-code">404</div>
        <h3 className="font-bold">We couldn't find the page..</h3>

        <div className="error-desc">
            Sorry, but the page you are looking for was either not found or does not exist.
            <div className="text-center">
                <p>Online notes, by <a href="https://github.com/Starotitorov">Starotitorov</a>.</p>
            </div>
        </div>
    </div>;
