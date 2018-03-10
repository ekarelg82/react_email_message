import React from 'react';
import './Email.css';
import Emailmessage from '../Emailmessage/Emailmessage';

var email = {
	sender: 'Roger',
	subject: 'Message From Kimosabi',
	date: '03/10/2018',
	message: 'Something has gone wrong Kimosabi',
};

class Email extends React.Component {
	render() {
		return (
			<div className="email-box">
				<div className="email-outline">
					<div className="email-message">
						Hello
						<Emailmessage email={email.sender} />
						<Emailmessage email={email.subject} />
						<Emailmessage email={email.date} />
						<Emailmessage email={email.message} />
					</div>
				</div>
			</div>
		);
	}
}

export default Email;
