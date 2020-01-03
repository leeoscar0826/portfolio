
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="footer full-width float-left">
                    <div className="full-width float-left">
                        <a href="https://www.google.com"><GitHubIcon className="footer-sm-icon float-left" /></a>
                        <a href="https://www.google.com"><LinkedInIcon className="footer-sm-icon float-left" /></a>
                    </div>
                    <div className="full-width float-left">
                        <p className="footer-cr float-left">Copyright &copy; 2019 Oscar Lee</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
