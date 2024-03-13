import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div>
            <div  className="flex justify-between my-8 items-center" ><h1 className='text-2xl font-semibold '>Knowledge Cafe</h1>
            <img src={profile} alt="" /></div>
            <hr />
        </div>
        
    );
};

export default Header;