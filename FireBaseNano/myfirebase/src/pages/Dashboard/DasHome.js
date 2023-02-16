import { firestore } from "config/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function DasHome() {
    const [document, setDocument] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const readDocuments = async () => {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(firestore, "messages"));

        const array = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let data = doc.data();
            array.push(data);
            setIsLoading(false);
        });
        setDocument(array)
    }
    useEffect(() => {
        readDocuments();
    }, []);

    const handleUpdate = async (message) => {
        try {
            await updateDoc(doc(firestore, "messages", message.id), { fullName: "Jarviz" });
            window.toastify("Document update successfully", "success");
        } catch (e) {
            window.toastify("Document is not updated", "error")
        }
    }
    const handleDelete = async (message) => {
        try {
            await deleteDoc(doc(firestore, "messages", message.id), { fullName: "Jarviz" });
            window.toastify("Document deleted successfully", "success");
        } catch (e) {
            window.toastify("Document is not delete", "error")
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">
                        Messages
                    </h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>ID</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {document.map((doc, i) => {
                                    return <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{doc.id}</td>
                                        <td>{doc.fullName}</td>
                                        <td>{doc.email}</td>
                                        <td>{doc.city}</td>
                                        <td>{doc.city}</td>
                                        <td>{doc.subject}</td>
                                        <td>{doc.message}</td>
                                        <td>
                                            <button className="btn btn-sm btn-info"
                                                onClick={(() => { handleUpdate(doc) })}>
                                                Update
                                            </button>
                                            <button className="btn btn-sm btn-danger"
                                                onClick={(() => { handleDelete(doc) })}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DasHome;
