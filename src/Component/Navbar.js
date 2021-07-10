import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <Link to="/chessboard">
                ChessBoard
            </Link>
        </div>
    )
}

export default Navbar;