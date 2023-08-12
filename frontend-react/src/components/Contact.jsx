import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailJSKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
	const form = useRef();
	console.log({ serviceId, templateId, emailJSKey });
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceId, templateId, form.current, emailJSKey).then(
			(result) => {
				console.log(result.text);
				console.log("message sent");
				Swal.fire({
					title: "Message was sent successfully.",
					color: "#6d0000",
					backdrop: `
							rgba(29,0,57,0.6)
							url("https://sweetalert2.github.io/images/nyan-cat.gif")
							center top
							no-repeat
						`
				});
				e.target.reset();
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<form className="bg-dark p-3 mt-2 shadow border-2 rounded fw-bold" ref={form} onSubmit={sendEmail}>
			<h2>Send me a message 👇</h2>
			<div className="row pt-2">
				<div className="col-md-1 ms-4 "></div>
				<div className="col-md-4 ms-4">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Name
						</span>
						<input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
					</div>
				</div>
				<div className="col-md-5 ms-1">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Email
						</span>
						<input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" />
					</div>
				</div>
			</div>

			<div className="col-md-9 mx-auto">
				<div className="input-group">
					<span className="input-group-text">With textarea</span>
					<textarea name="message" className="form-control " id="message" rows="3" aria-label="With textarea"></textarea>
				</div>
			</div>

			<button variant="outline-primary" className="contact-submit my-3 btn btn-success" value="Send" type="submit">
				Send
			</button>
		</form>
	);
};

export default Contact;
