import { Link } from 'react-router-dom';

interface RoundedLinkButtonProps {
    to: string;
    children: React.ReactNode;
}

const RoundedLinkButton: React.FC<RoundedLinkButtonProps> = ({ to, children }) => {
    return (
        <Link
            to={to}
            className=" text-black font-semibold rounded-xl bg-purple-100 py-3 px-4 shadow-lg hover:shadow-lg focus:outline-none focus:ring focus:border-purple-300"
        >
            {children}
        </Link>
    );
};

export default RoundedLinkButton;
