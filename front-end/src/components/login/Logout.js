import React from 'react'
import { useHistory } from "react-router-dom";

export default function Logout() {
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push("/")
    }
    return (
        <div>
            <button type="submit" onClick={logout} className="btn btn-outline-dark btn-block">LOG OUT <i class="material-icons">exit_to_app</i></button>
        </div>
    )
}
