import Header from "@/components/Header";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div>
        <Header />
        </div>
       <div className=" container mx-auto px-8 ">
       <p className="text-2xl py-28 font-serif"> The final year of study is usually the busiest and most stressful year of study.
        The Final Year Project is the most important module as it carries most of the percentage for the total marks. 
        The students must get important guidance and consultation to tackle their Final Year Project. <br /> <br />

Here we have listed 6 key factors that a student must think about when it comes to tackling their Final Year Project.
<br /> <br />

It is important to remember that the Final Year Projects vary greatly by discipline. It is difficult to cover all subject areas when writing a guide. A student must follow the guidelines issued by their respective department/supervisor. If you need help with the guidance issued by your university, then mentors at FYP Help can assist you.
</p>
<h1 className="text-5xl font-bold font-sans ">1. Time Management is Key</h1>

<p className="text-2xl mt-4 font-serif">Undoubtedly, it is very important to manage your time to achieve the grade that you desire for your Final Year Project. If you need help with managing your time, then mentors at FYP Help can certainly help you. We have developed a comprehensive guide for managing your time. The guide will help with improving your time management skills as it considers distractions and postponements. Please remember that time management is a high-value skill that will also help you with further studies and a potential future career.</p>

<h1 className="text-5xl font-bold mb-2 py-4  font-sans">2. Literature Review is Important</h1>

<p className="text-2xl font-serif">When it comes to literature review for your Final Year Project, it can be a difficult task. You may find that there are hundreds of thousands of literature pieces related to the topic of your choice. It is important that students carefully plan their search and easily identify the appropriate literature.

The mentors at FYP Help can help and guide students in finding the most applicable and appropriate resources for their projects.</p>

<h1 className="text-5xl font-bold mb-2 py-4 font-sans">3. Effective Research Methodology</h1>
<p className="text-2xl font-serif">Data analysis and interpretation are important skills that students must possess. Importantly, all final year projects involve dealing with some form of data. Students must choose appropriate research methods that will enable them to arrive at conclusions for their research question. There are various research methods available that you can employ to interpret any kind of data, whether the data is quantitative, qualitative, primary, or secondary.</p>

<h1 className="text-5xl font-bold mb-2 py-4 font-sans"> 4. Draw up a Strong Conclusion
</h1>
<p className="text-2xl font-serif"> As part of your project report, you must write a strong and clear conclusion. You should mention whether the project is a success or otherwise. In case the project is a success, you must back this up with the results achieved. You should clearly explain why the project objectives are not met in case the project is not a success. <br />
<br />
You must also include future work ideas in your conclusion. The conclusion should also retrospectively mention alternative methodologies that you may have used for this project.
</p>
<h1 className="text-5xl font-bold mb-2 py-4 font-sans">5. Effective Academic Writing</h1>

<p className="text-2xl font-serif">It is important to realize that your final year project is the conclusion of your undergraduate degree course and thus requires a high standard of academic writing for your Final Year Project Report. Hence, you must go through frequent writing practice sessions and get someone to give you feedback to improve your writing.
<br /> <br />
It is equally important that any work you submit as part of your Final Year Project report must be yours. You should also recognize the person if you have used someone else’s work to seek your idea. You must fully cite all the work that is taken from research papers. The citation must follow the referencing style required by your university. If you do not acknowledge the ideas and work of others then you will be penalized by your university
</p>

<h1 className="text-5xl font-bold mb-2 py-4 font-sans">6. Create a Readable Document</h1>
<p className="text-2xl">You must prepare all the documentation, presentations or verbal explanation of your project such that a layman should be able to understand them. Your work must be readable and should make sense to all types of readers. Proper formatting, use of headings, spacing, layout and style of your reports must be harmonious.</p>
<br />
</div>
<footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Allama Iqbal Open University</h4>
              <ul>
                <li>
                  <a href="https://www.aiou.edu.pk/aiou-glance">about us</a>
                </li>
                <li>
                  <a href="https://www.aiou.edu.pk/jobs">Jobs</a>
                </li>
                <li>
                  <a href="https://www.aiou.edu.pk/tender-notices">
                    Tender Notice
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="https://www.aiou.edu.pk/downloads-2#">Downloads</a>
                </li>
                <li>
                  <a href="https://www.aiou.edu.pk/research-journals">
                    Research
                  </a>
                </li>
                <li>
                  <a href="https://www.aiou.edu.pk/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.aiou.edu.pk/pressmediacliping">Events</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect Us</h4>
              <ul>
                <li>
                  <a href="#">Fm Radio</a>
                </li>
                <li>
                  <a href="#">Live TV</a>
                </li>
                <li>
                  <a href="#">Video On Demand</a>
                </li>
                <li>
                  <a href="http://library.aiou.edu.pk/">Aiou-Library</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/AIOU.OfficialAccount">
                  <i class="fa fa-facebook-f" />
                </a>
                <a href="https://twitter.com/OfficialAIOU">
                  <i class="fa fa-twitter" />
                </a>
                <a href="https://www.youtube.com/aiou-official">
                  <i class="fa fa-youtube-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="end-footer">
          <p>© Copyright AIOU 2023. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
export default AboutPage;
