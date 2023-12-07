import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./views";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='*' element={
                <div>
                    <h1>Page not found</h1>
                </div>
            }/> 
        </Routes>
    );
}