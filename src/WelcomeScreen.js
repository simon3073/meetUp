import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
	return props.showWelcomeScreen ? (
		<div className="welcome-screen">
			<div className="block">
				<h1>Welcome to...</h1>
				<div className="header-logo"></div>
				<h3>Log in to see upcoming events around the world for full-stack developers!</h3>
				<hr />
				<div align="center">
					<div className="google-btn">
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
						</div>
						<button
							onClick={() => {
								props.getAccessToken();
							}}
							rel="nofollow noopener"
							className="btn-text"
						>
							<b>Sign in with Google</b>
						</button>
					</div>
				</div>
				<a href="https://simon3073.github.io/meetUp/privacy.html" rel="nofollow noopener">
					The meetUp Privacy policy
				</a>
			</div>
		</div>
	) : null;
}
export default WelcomeScreen;
