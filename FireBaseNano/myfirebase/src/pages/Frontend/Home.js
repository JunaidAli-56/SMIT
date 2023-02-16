import { auth } from "config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

function Home() {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            } else {
                console.log("User is signed out");
            }
            setIsLoading(false)
        });
        console.log("Working");

    }, [])
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                window.toastify("Logout successful", "success")
            }).catch = (err => {
                console.error(err);
                window.toastify("Logout failed", "error")
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Home</h1>
                </div>
                <div className="col">
                    {!isLoading
                        ? <>
                            <h2>EMAIL: <span className="text-success">
                                {user.email}</span>
                            </h2>
                            <h2>UID: <span className="text-success">
                                {user.uid}</span>
                            </h2>

                            <button onClick={handleLogout}
                                className="btn btn-danger">
                                Logout
                            </button>
                        </>
                        :
                        <div>
                            <span className="spinner spinner-border"></span>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Home;
