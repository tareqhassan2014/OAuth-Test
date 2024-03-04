import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../config";

const Dashboard = () => {
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const response = await axios.get(`${SERVER_URL}/login/sucess`, {
                withCredentials: true,
            });

            console.log("response", response);
        } catch (error) {
            navigate("*");
        }
    };

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
