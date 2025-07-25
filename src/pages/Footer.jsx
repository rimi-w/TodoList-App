const Footer = () => {
    return (
        <footer className="w-screen min-h-[130px] text-[#7d7d7d] border-t-[1.5px] border-[#393939] fixed bottom-[15px] flex justify-between items-end mb-1.5 px-[40px]">
            <div className="text-[15px] font-bold flex flex-col justify-center items-start">
                <h4 className="text-[17px] text-[#919191] pb-[5px]">📚 People for React Study 📚</h4>
                <p className="px-[10px] flex justify-center">
                    Leader&nbsp;&nbsp;
                    <a
                        className="no-underline font-medium text-[#7d7d7d]"
                        href="https://bulk-mini-project.vercel.app/">
                        -&nbsp;ThePott&nbsp;&nbsp;
                    </a>
                    <a href="https://github.com/ThePott/bulk-mini-project">
                        <img
                            className="h-[20px]"
                            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                    </a>
                </p>
                <div className="px-[10px] flex">
                    Members&nbsp;&nbsp;
                    <div className="flex flex-col items-start">
                        <div className="flex justify-center">
                            <a
                                className="no-underline font-medium text-[#7d7d7d]"
                                href="https://bok-project.vercel.app/">
                                -&nbsp;윤경복&nbsp;&nbsp;
                            </a>
                            <a href="">
                                <img
                                    className="h-[20px]"
                                    src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a
                                className="no-underline font-medium text-[#7d7d7d]"
                                href="">
                                -&nbsp;Rimi&nbsp;&nbsp;
                            </a>
                            <a href="https://github.com/rimi-w/TodoList-App.git">
                                <img
                                    className="h-[20px]"
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
            <p className="text-[15px]">
                &copy; 리미(Rimi)
            </p>
        </footer>
    )
}

export default Footer;