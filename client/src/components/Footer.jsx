import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer className="border-t-8 border-indigo-500">
      <div className="w-full max-w-7xl mx-auto m-5 ml-5 mr-5">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Animesh's
              </span>
              blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="http://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="https://medium.com/@animesh.kumar7717"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animesh's Blog
                </Footer.Link>
                <Footer.Link
                  href="https://animesh-portfolio-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animesh's Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Animesh-Kumar7717"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex">
            <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Animesh blog" year={new Date().getFullYear()} />
            </div>
            <div className="flex gap-6 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
            </div>
        </div>
      </div>
    </Footer>
  );
}
