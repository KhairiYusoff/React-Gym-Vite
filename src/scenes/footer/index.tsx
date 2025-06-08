import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <p className="text-green-700 font-bold">[DEPLOYMENT TEST] This message should appear on all environments! (Footer)</p>
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                    Your only rival is your comfort zone.
                    Break through. Level up. Become the strongest version of you.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Home</p>
                    <p className="my-5">Classes</p>
                    <p>Membership</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Trainers</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
