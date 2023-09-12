import profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
              <div className='flex max-w-4xl mx-auto justify-between items-center border-b-2  p-5'>
              <h1 className='text-2xl font-semibold'>Knoeledge cafe</h1>
               <img src={profile} alt="" />
              </div>
        </div>
    );
};

export default Header;