import Logo from "../assets/ui.png";

const resources = [
  {
    title: "Blog",
    link: "/blog",
  },

  {
    title: "Help Center",
    link: "/blog",
  },
  {
    title: "Release Notes",
    link: "/blog",
  },
  {
    title: "Status",
    link: "/blog",
  },
];

const company = [
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Legal",
    link: "/legal",
  },
];

const community = [
  {
    title: "Twitter",
    link: "/twitter",
  },
  {
    title: "LinkedIn",
    link: "/linkedin",
  },
  {
    title: "Facebook",
    link: "/fb",
  },
  {
    title: "Dribble",
    link: "/dribble",
  },
  {
    title: "Podcast",
    link: "/podcast",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-black">
      <div className="container">
        {/* Footer Links */}
        <div
          data-aos="zoom-in"
          className="grid grid-cols-2 sm:grid-cols-5 col-span-1 md:grid-cols-3 lg:grid-cols-5"
        >
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Abstract
            </h1>
            <h6>Branches</h6>
          </div>

          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                {resources.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {community.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Company
              </h1>
              <ul className="flex flex-col gap-3">
                {company.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>

              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 mt-3">
                Contact Us
              </h1>

              <h6>info@abstract.com</h6>
            </div>
          </div>

          {/* social links */}

          <div>
            {/* <div>Hi</div> */}
            <div className="py-44">
              <div className="flex items-center gap-3 mt-6">
                <img src={Logo} width="35px" height="35px" />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <p>© Copyright 2022</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <p>Abstract Studio Design, Inc</p>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <p>All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
