import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="relative bg-[url('Assets/Background.png')] w-full h-[400px] flex flex-col items-center p-4">
      {/* Wrapper for nav items and button */}
      <div className="relative flex sm:flex-row items-center gap-4 sm:gap-10 pl-0 sm:pl-64">
        
        {/** here i have call the navbar component to reduse the complexity in the header file itself by reducing the line of code and moving it to another component */}
        <Navbar icon="&#65088;" />
        <button className="text-white border-2 border-white rounded-full px-6 py-2 mt-4 sm:mt-0">
          SIGN IN
        </button>
      </div>
      <hr className="border-gray-600 border w-full sm:w-[900px] mt-6" />
      <div className="h-full items-center font-altivo flex flex-col justify-center text-center sm:text-left">
        <h1 className="text-white text-3xl sm:text-5xl mb-4">
          M V P &nbsp;&nbsp;&nbsp;&nbsp;S U B S C R I P T I O N
        </h1>
        <p className="text-white text-sm sm:text-base">
          Your go&minus;to Movie Membership Program
        </p>
      </div>
    </div>
  );
};

export default Header;
