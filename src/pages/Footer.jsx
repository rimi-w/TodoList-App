const Footer = () => {
    return (
        <footer className="footer">
            <div className="members">
                <h4>📚 People for React Study 📚</h4>
                <p className="leader">
                    Leader&nbsp;&nbsp;
                    <a
                        className="name"
                        href="https://bulk-mini-project.vercel.app/">
                        -&nbsp;ThePott&nbsp;&nbsp;
                    </a>
                    <a href="https://github.com/ThePott/bulk-mini-project">
                        <img
                            className="github"
                            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                    </a>
                </p>
                <div>
                    Members&nbsp;&nbsp;
                    <div className="member">
                        <div>
                            <a
                                className="name"
                                href="https://bok-project.vercel.app/">
                                -&nbsp;윤경복&nbsp;&nbsp;
                            </a>
                            <a href="">
                                <img
                                    className="github"
                                    src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                            </a>
                        </div>
                        <div>
                            <a
                                className="name"
                                href="">
                                -&nbsp;Rimi&nbsp;&nbsp;
                            </a>
                            <a href="https://github.com/rimi-w/TodoList-App.git">
                                <img
                                    className="github"
                                    src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                            </a>
                        </div>
                        <div>
                            {/* <a>양은지</a>
                    <a href="">
                    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                    </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <p className="copyright">
                &copy; 리미(Rimi)
            </p>
        </footer>
    )
}

export default Footer;