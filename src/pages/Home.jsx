import React from 'react';
import Header from "../components/Header/Header";
import profileImg from './../img/profileImg.jpg';

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <div className="profile-wrapper">
                        <h1 className="title-1">Ivan Bezniak</h1>

                        <div className='profile-description'>
                            <img className='profileImage' src={profileImg} alt="profile ing"/>
                            Hello,
                            <p>
                                Let's get to know each other a little better! My name is Ivan. I am 25 years old. I live
                                in Grodno, Belarus. In 2019, I graduated from Yanka
                                Kupala State University in Grodno (the Faculty of Law). After graduating from the
                                university, I
                                worked as a bailiff for almost 4 years. However, I felt out of my own skin. And all
                                because I
                                betrayed a dream. A dream that has accompanied me through life for the past 14 years.
                                And then the
                                moment came when in May 2021 I set out on the path to a brighter future! I started
                                learning
                                programming languages.
                            </p>

                            <p>
                                So, as a recent graduate of frontend developer courses and with a passion for software
                                development, I am excited about the opportunity to start my career with a company that
                                values innovation and growth.
                            </p>

                            <p>
                                During my studies, I had the opportunity to work on a variety of software development
                                projects, ranging from web site to social network (like VK). Through these experiences,
                                I have
                                developed a strong foundation in programming languages such as JavaScript, ReactJS,
                                HTML, CSS and Redux,
                                as well as experience with others various frameworks and tools. I am confident that I
                                have the
                                skills and knowledge necessary to be a successful Junior Developer in your company.
                            </p>

                            <p>
                                What I find most appealing about development is the commitment to using technology to
                                solve
                                real-world problems. I am passionate about using my skills to make a positive impact on
                                society, and I believe that your company shares this vision. I am excited about the
                                possibility of
                                working with like-minded individuals who are dedicated to making a difference in the
                                world.
                            </p>


                            <p>
                                As a recent graduate, I am eager to learn from experienced professionals and
                                contribute to the success of your team. I am a quick learner, adaptable, and able to
                                work under pressure. I am
                                confident that I can bring a fresh perspective to your team and provide valuable
                                insights.
                            </p>

                            <p>
                                In conclusion, I hope that you will consider my application as a I hope that you will
                                consider my application as a Junior ReactJS Developer. I believe that my skills,
                                passion, and
                                eagerness to learn make me a strong candidate for the position. Thank you for
                                considering my
                                application, and I look forward to hearing from you soon! :)
                            </p>

                            <p>
                                Sincerely, <br/>
                                Ivan Bezniak
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;