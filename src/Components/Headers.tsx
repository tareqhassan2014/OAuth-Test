import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../config";
import "./header.css";

interface User {
    displayName: string;
    image: string;
}

const Headers = () => {
    const [userData, setUserData] = useState<User>({} as User);

    const getUser = async () => {
        try {
            const response = await axios.get(`${SERVER_URL}/login/sucess`, {
                withCredentials: true,
            });

            setUserData(response.data.user);
        } catch (error) {
            console.log("error", error);
        }
    };

    // logoout
    const logout = () => {
        window.open(`${SERVER_URL}/logout`, "_self");
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <h1>Harsh Pathak</h1>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {Object?.keys(userData)?.length > 0 ? (
                                <>
                                    <li
                                        style={{
                                            color: "black",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {userData?.displayName}
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li onClick={logout}>Logout</li>
                                    <li>
                                        <img
                                            src={userData?.image}
                                            style={{
                                                width: "50px",
                                                borderRadius: "50%",
                                            }}
                                            alt=""
                                        />
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Headers;
