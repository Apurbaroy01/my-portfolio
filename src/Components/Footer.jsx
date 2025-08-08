

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral  items-center p-4 bg-white/5 backdrop-blur-md">
            <aside className="grid-flow-col items-center text-sm text-center ">
                <p>Copyright Apurba-roy © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;