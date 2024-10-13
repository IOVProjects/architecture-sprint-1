import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Login = lazy(() => import('auth/Login').catch(() => {
        return {default: () => <div className='error'>Component Login is not available!</div>};
    })
);
const Register = lazy(() => import('auth/Register').catch(() => {
        return {default: () => <div className='error'>Component Register is not available!</div>};
    })
);

const App = () => (
    <div className="container">
        <section className='App-content'>
            <Suspense>
                <Login />
            </Suspense>
        </section>
    </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(
    <App/>
)