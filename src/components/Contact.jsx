import React from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailJSKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = React.forwardRef((props, ref) => {
	console.log({ serviceId, templateId, emailJSKey });
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(serviceId, templateId, ref.current, emailJSKey).then(
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
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!"
					// footer: '<a href="#">Why do I have this issue?</a>'
				});
				console.log(error);
			}
		);
	};

	return (
		<div className="container-fluid mb-3 contact">
			<form className="p-3 mt-2 shadow border-2 rounded fw-bold" ref={ref} onSubmit={sendEmail}>
				<h2>Contact Me 👇</h2>
				<div className="row pt-2 mx-auto">
					<div className="col-lg-4 col-md-5 col-sm-8">
						<div className="input-group">
							<span className="input-group-text" id="basic-addon1">
								Name
							</span>
							<input type="text" className="form-control" id="name" name="name" placeholder="Enter your name..." />
						</div>
					</div>
					<div className="col-lg-5 col-md-6 col-sm-9">
						<div className="input-group">
							<span className="input-group-text" id="basic-addon1">
								Email
							</span>
							<input type="text" className="form-control" id="email" name="email" placeholder="Enter your email..." />
						</div>
					</div>
				</div>
				<div className="col-lg-9 col-md-8 col-sm-10 mx-auto">
					<h3 className="pb-1">Write me a message</h3>
					{/* <div className="input-group"> */}
					{/* <span className="input-group-text">Message</span> */}
					<textarea
						name="message"
						className="form-control "
						id="message"
						// rows="3"
						aria-label="With textarea"
						placeholder="Write message here..."
					></textarea>
					{/* </div> */}
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-3 col-xs-3">
						<button variant="outline-primary" className="contact-submit btn btn-success" value="Send" type="submit">
							Send
						</button>
					</div>
				</div>
			</form>
		</div>
	);
});

export default Contact;
