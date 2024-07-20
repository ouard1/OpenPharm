import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Detail = () => {
  return (
    <>
      <Header />
      <div className="break h-16"></div>
      <div className="hero bg-[#F3F4F6]">
        <div className="container mx-auto">
          <div className="cont1 text-center w-4/5 mx-auto pt-5 pb-14">
            <h2 className="text-5xl font-bold w-full">
              DOLIPRANE 100 mg suppos sécable
            </h2>
            <p className="text-lg font-semibold mt-2">COMMERCIALISÉ</p>
            <svg className="w-6 h-6 mx-auto  mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>
          </div>
        </div>
      </div>
      <div className="herotwo bg-[#F8F9FA]">
        <div className="container mx-auto text-center">
          <ul className="flex flex-wrap gap-1 cont2 relative bottom-6 text-center w-3/5 mx-auto text-white bg-[#fff]">
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem ipsum</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem ipsum</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem ipsum</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem ipsum</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem ipsum</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">lorem ipsum</li>
          </ul>
          <div className="cont3 moredetails text-left w-3/5 mx-auto pt-5 pb-8">
            <div className="box my-10">
              <h4 className="text-2xl font-semibold ml-10 mb-1">
                Title
              </h4>
              <div className="font-normal text-[#171A1F]">
                <p>
                  Adipisicing non officia voluptate incididunt in voluptate
                  cupidatat fugiat quis duis qui sit commodo nostrud consectetur
                  sint ad. Ut incididunt sint voluptate excepteur ut
                  reprehenderit reprehenderit minim nostrud cillum ullamco. Qui
                  mollit dolor quis pariatur minim ipsum cupidatat dolor minim
                  commodo exercitation exercitation officia pariatur veniam. Ea
                  est irure anim Lorem aliqua ea pariatur ullamco enim officia
                  nulla. Officia laboris duis ullamco elit esse excepteur.Labore
                  incididunt consectetur ut dolore dolore dolor reprehenderit
                  enim deserunt fugiat sunt magna amet. Magna minim esse
                  voluptate laborum cupidatat in magna officia fugiat aliqua in
                  exercitation voluptate id consequat excepteur.Ex mollit tempor
                  eiusmod ex
                </p>
              </div>
            </div>
            <div className="box my-10">
              <h4 className="text-2xl font-semibold ml-10 my-1">
                Title2
              </h4>
              <div className="font-normal text-[#171A1F]">
                <p>
                  Adipisicing non officia voluptate incididunt in voluptate
                  cupidatat fugiat quis duis qui sit commodo nostrud consectetur
                  sint ad. Ut incididunt sint voluptate excepteur ut
                  reprehenderit reprehenderit minim nostrud cillum ullamco. Qui
                  mollit dolor quis pariatur minim ipsum cupidatat dolor minim
                  commodo exercitation exercitation officia pariatur veniam. Ea
                  est irure anim Lorem aliqua ea pariatur ullamco enim officia
                  nulla. Officia laboris duis ullamco elit esse excepteur.Labore
                  incididunt consectetur ut dolore dolore dolor reprehenderit
                  enim deserunt fugiat sunt magna amet. Magna minim esse
                  voluptate laborum cupidatat in magna officia fugiat aliqua in
                  exercitation voluptate id consequat excepteur.Ex mollit tempor
                  eiusmod ex
                </p>
              </div>
            </div>




          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
