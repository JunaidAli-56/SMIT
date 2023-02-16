import React, { useState } from "react";
import { firestore, storage } from "config/firebase";
import { doc, serverTimestamp, setDoc, } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const initialState = {
    fullName: "",
    email: '',
    city: "",
    country: "",
    subject: "",
    message: "",
}
function Contact() {

    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);
    const [file, setFile] = useState({});

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let { fullName, email, city, country, subject, message } = state;

        fullName = fullName.trim();
        subject = subject.trim();
        message = message.trim();


        if (fullName.length < 3) {
            return window.toastify('Enter full name correctly', 'error');
        }
        if (window.isEmail(email)) {
            return window.toastify('Enter email correctly', 'error');
        }
        if (subject.length < 3) {
            return window.toastify('Enter your subject correctly', 'error');
        }
        if (message.length < 3) {
            return window.toastify('Enter your message correctly', 'error');
        }
        // console.log(email, password)

        let formData = {
            fullName, email, city, country, subject, message,
            id: window.getRandomId,
            dateCreated: serverTimestamp(),
        }
        setIsProcessing(true)
        if (file.name) {
            uploadFile(formData);
        } else {
            createDocument(formData)
        }

        setIsProcessing(false);
    }
    const uploadFile = (formData) => {
        console.log('Uploading');

        const fileName = file.name;
        const storageRef = ref(storage, `images/${fileName}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                // window.toastify('Upload is ' + progress + '% done', "success");
            },
            (error) => {
                window.toastify("something went wrong in uploading image ", "error");
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    const data = { ...formData, photos: { name: fileName, url: downloadURL, } }
                    createDocument(data);
                });
            }
        );
    }
    const createDocument = async (formData) => {
        console.log("doc is created");
        try {
            await setDoc(doc(firestore, "messages", formData.id), formData);
            window.toastify("Document added successfully", "success");
            setState(initialState);
        } catch (e) {
            window.toastify("Error adding document", "error")
        }
    }
    return (
        <>
            <div className="container-fluid bg-primary contact-con p-5">
                <div className="row">
                    <div className="col">
                        <div className="card p-4" >
                            <h2 className="text-center mb-4">
                                Contact
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Full Name" name="fullName"
                                            value={state.fullName}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="email" className="form-control"
                                            placeholder="Enter email..." name="email"
                                            value={state.email}
                                            onChange={changeHandler} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="City" name="city"
                                            value={state.city}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Country" name="country"
                                            value={state.country}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Subject" name="subject"
                                            value={state.subject}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="file" className="form-control"
                                            onChange={(e) => { setFile(e.target.files[0]) }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <textarea className="form-control"
                                            name="message" onChange={changeHandler}
                                            value={state.message}
                                            placeholder="Entere here...">

                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 offset-md-3">
                                    <button className="btn btn-primary w-100" disabled={isProcessing}>
                                        {!isProcessing
                                            ? <span>Send Message</span>
                                            : <div className="spinner spinner-grow spinner-grow-sm"></div>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
