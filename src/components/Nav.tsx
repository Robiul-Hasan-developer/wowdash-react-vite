import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="max-w-[1320px] mx-auto py-6">
            <nav className="flex items-center gap-4">
                <NavLink to="/" className={({isActive}) => `text-neutral-600 hover:text-orange-600 font-semibold ${isActive ? 'bg-orange-600 text-white px-6 py-2 rounded hover:text-white hover:bg-orange-700' : ''}`}>Home</NavLink>
                <NavLink to="/crm" className={({isActive}) => `text-neutral-600 hover:text-orange-600 font-semibold ${isActive ? 'bg-orange-600 text-white px-6 py-2 rounded hover:text-white hover:bg-orange-700' : ''}`}>CRM</NavLink>
                <NavLink to="/ecommerce" className={({isActive}) => `text-neutral-600 hover:text-orange-600 font-semibold ${isActive ? 'bg-orange-600 text-white px-6 py-2 rounded hover:text-white hover:bg-orange-700' : ''}`}>Ecommerce</NavLink>
            </nav>
        </div>
    );
};

export default Nav;