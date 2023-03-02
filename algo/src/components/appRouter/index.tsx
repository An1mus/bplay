import React from 'react';
import {ROUTES} from "../routes";
import {Routes, Route} from "react-router-dom";

const Router: React.FC = () => {
    return <Routes>
        {ROUTES.map((route) => <Route
            key={route.url}
            path={route.url}
            element={route.component}
        />)}
    </Routes>;
}

export default Router;