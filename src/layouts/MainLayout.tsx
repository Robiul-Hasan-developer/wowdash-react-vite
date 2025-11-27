import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Header from './Header';

const MainLayout = () => {
    return (
        <div className='flex gap-6'>
            <h1>My Sidebar</h1>
        
            <div className="">
                <Header />
                <Nav />
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;