import Container from "../UI/Container";
import {Link} from "react-router-dom";
import instagramIcon from "../../assets/instagram-icon.png";
import logo from "../../assets/logo.png";
import classes from "./Footer.module.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className={classes.footer}>
            <Container listofclasses={["display-flex"]}>
                <div className={`df ${classes["footer-content"]} `}>
                    <div className={classes.col}>
                        <ul>
                            <li>
                                <Link to={"/privacy-policy"}>Polityka Prywatności</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.col} ${classes["logo-container"]}`}>
                        <Link to={"/"}>
                            <img src={logo} alt={"BALU logo"}/>
                        </Link>
                    </div>
                    <div className={`${classes.col} ${classes["social-container"]}`}>
                        <span>Follow us on social</span>
                        <div>
                            <a href={"/"} target={"_blank"}>
                                <img src={instagramIcon} alt={"Instagram logo"}/>
                            </a>
                        </div>
                    </div>
                </div>

            </Container>
            <div className={classes.copyrights}>
                <p>© {currentYear} Kristina Klyap. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
