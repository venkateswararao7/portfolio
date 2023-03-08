import React from "react";
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { Button } from "@mui/material";

function Footer() {
    return (
        <div className="App-Footer">
            <center>
                <Button href="https://www.instagram.com/venkateswararaogunturi/" target="_blank">
                    <InstagramIcon style={{ color: "white" }} className="Icons" />
                </Button>
                <Button href="https://www.facebook.com/profile.php?id=100068651208205" target="_blank">
                    <FacebookIcon style={{ color: "white" }} className="Icons" />

                </Button>
                <Button href="https://www.linkedin.com/in/gunturi-venkateswararao-985067214/" target="_blank">
                    <LinkedInIcon style={{ color: "white" }} className="Icons" />

                </Button>
                <Button href="" target="_blank">
                    <TwitterIcon style={{ color: "white" }} className="Icons" />
                </Button>
                <Button href="mailto:20pa1a0556@vishnu.edu.in">
                    <MailOutlineRoundedIcon style={{ color: "white" }} className="Icon" />

                </Button>

            </center>
            <h3 className="footer">Made with <span>❤</span> by Venkatesh</h3>
        </div>
    )
}

export default Footer;