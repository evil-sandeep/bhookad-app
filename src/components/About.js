import React from "react";
import { Outlet, Link } from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('parent constructor');
        this.state = {
            profile: {
                show: false
            }
        };
    }

    handleToggleProfile = () => {
        this.setState((prevState) => ({
            profile: {
                show: !prevState.profile.show
            }
        }));
    }

    render() {
        const socialMediaProfiles = [
            { name: "Twitter", link: "https://twitter.com/Sandeep88034451" },
            { name: "Facebook", link: "https://www.facebook.com/sandeepkumarsahoo.chandan" },
            { name: "Instagram", link: "https://www.instagram.com/evil_sandeep/" },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/sandeep-kumar-sahoo0000/" },
            { name: "GitHub", link: "https://github.com/evil-sandeep" }
        ];

        return (
            <div className="p-8">
                <h1 className="flex justify-center items-start text-4xl font-serif">
                    About Me
                </h1>


                <h4 className="mb-4 flex items-center">
                    <span className="flex-grow  text-2xl ml-2 font-semibold text-gray-700">
                        Hello, I'm Sandeep Kumar Sahoo
                    </span>

                    <a href="https://evil-sandeep.github.io/Sandeep-Protfolio/" target="_blank" rel="noopener noreferrer">
                        <button className="ml-2 text-xl  bg-blue-500 text-white py-1 px-3 mr-3  rounded-md hover:shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 hover:left-9">
                            Portfolio
                        </button>
                    </a>
                </h4>


  
                <div className="p-8 card border rounded-md m-2 shadow-2xl border-gray-900">
                    <h1 className="text-4xl font-extrabold mb-6 underline-offset-auto  text-gray-800">About Me</h1>
                    <p className=" ml-8">
                        I'm Sandeep Kumar Sahoo, an enthusiastic React developer with a solid foundation in web development. My passion lies in crafting compelling user experiences and dynamic web applications that leave a lasting impact. Embarking on my journey, I earned a Master's degree in Computer Applications, honing my skills in HTML, CSS, and JavaScript. It was during this educational phase that I discovered my fervor for React and its capability to construct interactive and responsive web interfaces.Adaptability stands out as one of my key strengths. Committed to keeping pace with the rapidly evolving tech industry, I consistently explore new libraries and tools to elevate my development skills.
                    </p>
                    <p className="mb-4 ml-8">
                        What distinguishes me is my unwavering commitment to teamwork. I thrive in collaborative environments, employing effective communication to steer projects towards success. I firmly believe that diverse perspectives lead to more innovative solutions.
                        With a career goal centered around taking on challenging projects that make a positive impact, I am eager to contribute my skills to your organization or project. Let's connect and explore how we can collaborate for mutual success!
                    </p>
                </div>


                <Link to='/about/profile'>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={this.handleToggleProfile}>
                        Go to Profile
                    </button>
                </Link>

                <div className="flex justify-between shadow-md ml-2 gap-1  mt-8">
                    {socialMediaProfiles.map((profile, index) => (
                        <div key={index} className="bg-white p-4 border rounded w-1/5">
                            <h3 className="text-lg font-semibold">{profile.name}</h3>
                            <a href={profile.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>

                <Outlet />

            </div>
        );
    }
}

export default About;
