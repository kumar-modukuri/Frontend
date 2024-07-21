import aboutcss from './about.module.css';

const About = () => {
    return ( 
        <div className={aboutcss.aboutContent}>
            <div className={aboutcss.myDetails}>
                <div className={aboutcss.profilePhoto}>
                    <img src="https://github.com/kumar-modukuri/assets/raw/main/Profile%20Pic.jpg" alt="" className={aboutcss.profilePic}/>
                </div>
                <div className={aboutcss.myData}>
                    <div className={aboutcss.nameLinks}>
                        <div>
                            <h4>Kumar Modukuri</h4>
                            <p>Fullstack Developer</p>
                        </div>
                        <div className={aboutcss.social}>
                            <a href="https://www.linkedin.com/in/kumar-modukuri-284288231" target='blank'><img src="https://github.com/kumar-modukuri/assets/raw/main/Linkedin.png" alt="Linkedin" className={aboutcss.socialIcon} id={aboutcss.linkedin}/></a>
                            <a href="https://github.com/kumar-modukuri" target='blank'><img src="https://github.com/kumar-modukuri/assets/raw/main/Github.png" alt="Github" className={aboutcss.socialIcon} id={aboutcss.github}/></a>
                        </div>
                    </div>
                    <div>
                        <p className={aboutcss.aboutMe}>
                            Hello! My name is Kumar Modukuri , a passionate Full Stack developer with expertise in building dynamic and responsive web applications. With a solid background in both frontend and backend development, I strive to create seamless and efficient user experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className={aboutcss.proDetails}>
                <div className={aboutcss.description}>
                    <div className={aboutcss.abtHeading}>
                        <h3>PROJECT DESCRIPTION</h3>
                        <div className={aboutcss.abtDivider}></div>
                    </div>
                    <p>
                        This is a comprehensive web application designed to manage employee data efficiently. This project aims to streamline HR processes by providing a user-friendly interface for managing employee records and handling administrative tasks.
                    </p>
                </div>
                <div className={aboutcss.tech}>
                    <div className={aboutcss.abtHeading}>
                        <h3>TECHNOLOGIES USED</h3>
                        <div className={aboutcss.abtDivider}></div>
                    </div>
                    <div className={aboutcss.techIcons}>
                        <img src="https://github.com/kumar-modukuri/assets/raw/main/Springboot.png" alt="Java Spring Boot" className={aboutcss.icons}/>
                        <img src="https://github.com/kumar-modukuri/assets/raw/main/Reactjs.png" alt="React.js" className={aboutcss.icons}/>
                        <img src="https://github.com/kumar-modukuri/assets/raw/main/Mongodb.png" alt="MongoDB Atlas" className={aboutcss.icons}/>
                        <img src="https://github.com/kumar-modukuri/assets/raw/main/Docker.png" alt="Render.com" className={aboutcss.icons}/>
                    </div>
                </div>
                <div className={aboutcss.keyFea}>
                    <div className={aboutcss.abtHeading}>
                        <h3>KEY FEATURES</h3>
                        <div className={aboutcss.abtDivider}></div>
                    </div>
                    <p>
                        <p>CRUD Operations : Create, Read, Update, and Delete employee records with ease.</p>
                        <p>Responsive Design : Accessible from both desktop and mobile devices.</p>
                    </p> 
                </div>
                <div className={aboutcss.conc}>
                    <div className={aboutcss.abtHeading}>
                        <h3>USAGE AND CONCLUSION</h3>
                        <div className={aboutcss.abtDivider}></div>
                    </div>
                    <p>
                         Why This Project? This Project was developed to address the need for an efficient and scalable solution for managing employee data. By leveraging modern technologies and best practices, this project ensures a robust and user-friendly platform for HR departments to streamline their operations.
                         This project showcases my ability to develop full-stack applications using a variety of tools and technologies. If you have any questions or would like to see a demo, feel free to reach out!
                    </p>
               </div>
                <div className={aboutcss.contact}>
                    <div>
                        <p>rajkumar87901311@gmail.com</p>
                    </div>
                    <div><span>|</span></div>
                    <div>
                        <p>+91 93476 37220</p>
                    </div>                 
                </div>
            </div>
        </div>
    );
}
 
export default About;