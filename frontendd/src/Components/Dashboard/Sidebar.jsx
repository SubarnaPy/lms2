import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc';
import { sidebarLinks } from '../../Components/Data/DashboardLinks';
import SidebarLink from './SidebarLinks';
import ConfirmationModal from '../../Components/Modal/ConfirmationModal';
import { Logout } from '../../Redux/authSlice';
import { Spin } from 'antd'; // For loading spinner

const Sidebar = () => {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const user = useSelector((state) => state.profile.data);
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Spin size="large" /> {/* Use a spinner for loading */}
      </div>
    );
  }

  return (
    <div className='text-black'>
      {/* Desktop Sidebar */}
      <div className='hidden min-w-[222px] flex-col border-r-[1px] border-r-slate-200 lg:flex h-full bg-white py-10 shadow-lg'>
        <div className='flex flex-col gap-1'>
          {sidebarLinks.map((link) => {
            if (link.type && user?.role !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>

        <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-slate-200'></div>

        <div className='flex flex-col'>
          <SidebarLink
            link={{ name: 'Settings', path: '/dashboard/settings' }}
            iconName='VscSettingsGear'
          />

          <button
            onClick={() =>
              setConfirmationModal({
                text1: 'Are You Sure?',
                text2: 'You will be logged out of your account.',
                btn1Text: 'Logout',
                btn2Text: 'Cancel',
                btn1Handler: () => dispatch(Logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className='mx-4 my-4 text-sm font-medium transition-all duration-300 rounded-lg text-slate-950 hover:bg-slate-100'
          >
            <div className='flex items-center p-4 gap-x-2'>
              <VscSignOut className='text-lg' />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className='fixed bottom-0 z-50 flex items-center justify-between w-full px-2 py-1 bg-white shadow-lg lg:hidden'>
        <div className='flex flex-row justify-between w-full gap-1'>
          {sidebarLinks.map((link) => {
            if (link.type && user?.role !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
          <SidebarLink
            link={{ name: 'Settings', path: '/dashboard/settings' }}
            iconName='VscSettingsGear'
          />
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </div>
  );
};

export default Sidebar;