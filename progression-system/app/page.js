import "./globals.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className=" ">
        <h1 className="py-8 text-center text-5xl font-serif">
          Department of Computer Science (AIOU)
        </h1>
        <video
          src={"/assets/Campus.mp4"}
          style={{ width: "100%" }}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="text-4xl font-semibold ml-11 py-8 font-serif">CHAIRPERSON</div>
      <div className="flex items-center ml-44 p-16">
        
        <img src="/assets/saleem.jpg" alt="Avatar" className="w-1/3" />
        <div className="ml-4">
          <a href="https://www.aiou.edu.pk/dr-saleem-iqbal">
            <h4 className="text-4xl font-medium ml-32 decoration-black font-serif">
              ASSOCIATE PROFESSOR/CHAIRMAN
            </h4>
            <span className="text-6xl font-semibold ml-52 font-serif">
              Dr Saleem Iqbal
            </span>
          </a>
        </div>
      </div>

      <article className="mt-48">
        <h1 className="text-left ml-11 text-4xl font-semibold font-serif">
          Faculty &amp; Staff Members
        </h1>
      </article>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ml-40 gap-28 p-9 m-11">
        <div>
          <a href="https://www.aiou.edu.pk/dr-aftab-khan">
            <img
              src={"/assets/Dr-Aftab.jpg"}
              alt="Dr Aftab Khan"
              className="rounded-lg w-96 h-80"
            />

            <h2 className="text-xl font-semibold mt-2 ml-20 font-serif">Dr Aftab Khan</h2>
            <span className="mt-2 ml-20 font-medium ">Associate Professor</span>
          </a>
        </div>
        <div>
          <a href="https://www.aiou.edu.pk/dr-muhammad-arshad-awan">
            <img
              src={"/assets/Dr-Arshad.jpg"}
              alt="Dr Muhammad Arshad Awan"
              className="rounded-lg w-96 h-80"
            />
            <h2 className="text-xl font-semibold mt-2 ml-12 font-serif">
              Dr Muhammad Arshad Awan
            </h2>
            <span className="mt-2 ml-24 font-medium">Assistant Professor</span>
          </a>
        </div>

        <div>
          <a href="https://www.aiou.edu.pk/dr-muhammad-babar">
            <img
              src={"/assets/Dr-Babar.jpg"}
              alt="Dr Muhammad Babar"
              className="rounded-lg w-96 h-80"
            />
            <h2 className="text-xl font-semibold mt-2 ml-16 font-serif">
              Dr Muhammad Babar
            </h2>
            <span className="mt-2 ml-24 font-medium">Assistant Professor</span>
          </a>
        </div>
        <div>
          <a href="https://www.aiou.edu.pk/chaudhary-muhammad-shahbaz-anjum">
            <img
              src={"/assets/CH-Shahbaz.jpg"}
              alt="Chaudhary Muhammad Shahbaz Anjum"
              className="rounded-lg w-96 h-80"
            />

            <h2 className="text-xl font-semibold mt-2 ml-1 font-serif">
              Chaudhary Muhammad Shahbaz Anjum
            </h2>
            <span className="mt-2 ml-28 font-medium ">LECTURER</span>
          </a>
        </div>
        <div>
          <a href="https://www.aiou.edu.pk/dr-moiz-uddin-ahmed-siddiqui">
            <img
              src={"/assets/Dr-moiz.jpeg"}
              alt="Dr Moiz Uddin Ahmed Siddiqui"
              className="rounded-lg w-96 h-80"
            />
            <h2 className="text-xl font-semibold mt-2 ml-7 font-serif">
              Dr Moiz Uddin Ahmed Siddiqui
            </h2>
            <span className="mt-2 ml-16 font-medium">ASSISTANT PROFESSOR</span>
          </a>
        </div>
        <div>
          <a href="https://www.aiou.edu.pk/mr-tahir-javed-0">
            <img
              src={"/assets/Sir-Tahir.jpg"}
              alt="Mr Tahir Javed"
              className="rounded-lg w-96 h-80"
            />
            <h2 className="text-xl font-semibold mt-2 ml-20 font-serif">Mr Tahir Javed</h2>
            <span className="mt-2 ml-24 font-medium">LECTURER</span>
          </a>
        </div>
        <div>
          <a href="https://www.aiou.edu.pk/ms-sana-nasim">
            <img
              src={"/assets/Sana.jpg"}
              alt="Ms Sana Nasim"
              className="rounded-lg w-96 h-80"
            />
            <h2 className="text-xl font-semibold mt-2 ml-24 font-serif">Ms Sana Nasim</h2>
            <span className="mt-2 ml-32 font-medium">LECTURER</span>
          </a>
        </div>

        <div>
          <a href="https://www.aiou.edu.pk/mr-mohammad-qasim-khan">
            <img
              src={"/assets/Sir-Qasim.jpg"}
              alt="Mr Mohammad Qasim Khan"
              className="rounded-lg w-96 h-80"
            />
            <h2 className="text-xl font-serif font-semibold mt-2 ml-14">
              Mr Mohammad Qasim Khan
            </h2>
            <span className="mt-2 ml-24 font-medium">ASSISTANT PROFESSOR</span>
          </a>
        </div>
        <div>
          <a href="https://www.aiou.edu.pk/mr-basit-ismail">
            <img
              src={"/assets/Sir-basit.jpg"}
              alt="Mr Basit Ismail"
              className="rounded-lg w-96 h-80"
            />
            <h2 className="text-xl font-semibold mt-2 ml-20 font-serif">
              Mr Basit Ismail
            </h2>
            <span className="mt-2 ml-24 font-medium">LECTURER</span>
          </a>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* ------------------footer------------------------ */}
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
}
