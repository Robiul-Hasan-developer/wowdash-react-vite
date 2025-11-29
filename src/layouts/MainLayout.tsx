// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import SidebarLayout from './SidebarLayout';

// const MainLayout = () => {
//     return (
//         <>
//             <SidebarProvider>
//                 <div className='flex gap-6'>

//                     <SidebarLayout />

//                     <div className="grow">
//                         <Header />
//                         <Outlet />
//                     </div>

//                 </div>
//             </SidebarProvider>
//         </>
//     );
// };

// export default MainLayout;



import { Outlet } from 'react-router-dom';
import Header from './Header';
import SidebarLayout from './SidebarLayout';

const MainLayout = () => {
    return (
        <SidebarLayout>
            <div className='flex gap-6'>
                <div className="grow">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </SidebarLayout>
    );
};

export default MainLayout;
