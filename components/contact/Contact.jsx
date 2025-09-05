import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Contact = ({ open }) => {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "", phone: "", email: "", message: ""
    })

    // Regex patterns
    const regex = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^\+?[1-9]\d{1,14}$/,
    };

    function validateForm(user) {
        if (!user.name) {
            return { valid: false, error: "Name cannot be empty." };
        }
        if (!user.email) {
            return { valid: false, error: "Email cannot be empty." };
        }
        else if (!regex.email.test(user.email)) {
            return { valid: false, error: "Please enter a valid email address." };
        }
        if (!user.phone) {
            return { valid: false, error: "Phone cannot be empty." };
        }
        if (!regex.phone.test(user.phone)) {
            return { valid: false, error: "Please enter a valid phone number." };
        }
        if (!user.message) {
            return { valid: false, error: "Message cannot be empty." };
        }
        return { valid: true };
    }

    let onChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    let submit = (e) => {
        e.preventDefault();

        const validation = validateForm(user);
        if (!validation.valid) {
            alert(validation.error); // or set an error state
            return;
        }

        alert("We got your request. We'll contact you soon");
        setUser({ name: "", phone: "", email: "", message: "" });
        router.push('/');
    };

    return (
        <>
            <div id="contact-page">
                <div className={` contact-bg ${open ? 'page-anime page-open' : null}`}>
                    <div className="cont-img">
                        <div className="cont-img-rel">
                            <div className="black-overlay"></div>
                            <img src='/pexels-apasaric-1285625.jpg' />
                        </div>
                    </div>
                    <div className="contact-header">
                        <span className="contact-brand">ONE WORLD PRODUCTION</span>
                        <h1 className="contact-title">
                            DISCOVER YOUR NEXT
                            <br />
                            SCENE
                        </h1>
                    </div>
                    <div className="contact-form-box">
                        <form className="contact-form" onSubmit={submit}>
                            <div className="contact-form-main">
                                <span>
                                    Hello! My name is
                                    <input
                                        type="text"
                                        placeholder="type..."
                                        className="contact-input"
                                        name="name"
                                        value={user.name}
                                        onChange={onChange}
                                    />
                                    ,
                                </span>
                                <span>
                                    this is my email
                                    <input
                                        type="email"
                                        placeholder="type..."
                                        className="contact-input"
                                        name="email"
                                        value={user.email}
                                        onChange={onChange}
                                    />
                                </span>
                                <br />
                                <span>
                                    and my phone number
                                    <input
                                        type="phone"
                                        placeholder="type..."
                                        className="contact-input"
                                        name="phone"
                                        value={user.phone}
                                        onChange={onChange}
                                    />
                                </span>
                                <br />
                                <span>
                                    My message is
                                    <input
                                        type="text"
                                        placeholder="type..."
                                        className="contact-input"
                                        name="message"
                                        value={user.message}
                                        onChange={onChange}
                                    />
                                </span>
                            </div>
                            <div className="contact-form-footer">
                                <div className="contact-terms">

                                </div>
                                <div className="contact-side-info">
                                    <div className="contact-side-label">PHONE</div>
                                    <div className="contact-side-value">+91 9819350779</div>
                                    <div className="contact-side-label">EMAIL</div>
                                    <div className="contact-side-value">contact@oneworldhighwayproduction.com</div>
                                </div>
                            </div>
                            <button type="submit" className="contact-submit">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact