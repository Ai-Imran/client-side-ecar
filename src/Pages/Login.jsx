import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="text-gray-300 min-h-screen">
            <div className="text-center">
                <Link to={'/signup'}>sinup</Link>
            </div>
        </div>
    )
};
export default Login;