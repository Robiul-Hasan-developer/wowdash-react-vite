import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const SidebarToggle = () => {
    return (
        <>
            <Button variant="ghost" className="!p-0 h-auto w-auto !bg-transparent cursor-pointer text-neutral-600 dark:text-neutral-200">
                <Menu className='size-5' />
            </Button>

        </>
    );
};

export default SidebarToggle;