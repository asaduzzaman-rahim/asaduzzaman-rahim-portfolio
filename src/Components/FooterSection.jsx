import React from "react";
import Section from "./Section";
import Container from "./Container";
import ButtonSection from "./SocialIconSection";
import MenuBer from "./MenuBer";
import LogoPart from "./LogoPart";


const FooterSection = () => {


  return (
    <>
      <footer className="text-center mx-auto py-9">
        <Container>
            <div className="grid gap-5">
               <div>
                {/* <ButtonSection className="!justify-center"/> */}
               </div>
              <LogoPart className="text-3xl"/>
              <div>
                <MenuBer className="!gap-7 !flex-wrap justify-center !text-[14px] !my-[12px] flex"/>
              </div>
                <p className="text-white text-[18px]">© 2026 All rights reserved by <button className="cursor-pointer hover:text-primary transition-all duration-500" 
                onClick={() => window.open("https://www.linkedin.com/in/rahimasaduzzaman/", "_blank")}>   
                    Asaduzzaman Rahim</button></p>
            </div>
          </Container>
        </footer>
    </>
  );
};

export default FooterSection;
