import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className="header bg-[#F3F4F6] py-8 px-16">
        <div className="container mx-auto flex justify-between items-center gap-20">
          <div className="logo">
            <h1 className="text-2xl font-black">Logo</h1>
          </div>
          <NavBar />
          <div className="flex gap-3">
            <Button text="login" />
            <Button text="sign up" clicked />
          </div>
        </div>
      </div>
    );
}

export default Header;
