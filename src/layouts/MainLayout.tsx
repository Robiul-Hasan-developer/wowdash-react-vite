import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const MainLayout = () => {
    return (
        <div className='flex gap-6'>
            <h1>My Sidebar</h1>
        
            <div className="">
                <Nav />
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;