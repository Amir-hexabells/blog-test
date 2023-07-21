import React, { useEffect, useState , useRef} from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Classes from "/styles/blogs.module.css";
import Link from "next/link";
import CTA from "../../../../components/cta";
import Head from "next/head";
import BlogAuthor from "../../../../components/blogAuthor";
import NewsLetter from "../../../../components/news-letter";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Header = dynamic(() => import("../../../../components/header"));
const Footer = dynamic(() => import("../../../../components/footer"));

const Blog = (props) => {
  const [customClass, setCustomClass] = useState(" ");
  const [blogData, setBlogData] = useState(props.data);

  const ref1 = useRef(null);
  const ref2 = useRef(null);


  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

// React.useEffect(()=>{
//   [ref1.current, ref2.current].forEach((btn)=>{

//    let observer = new IntersectionObserver((entries, ob)=>{
//       if(entries[0].isIntersecting){
//         // console.log(entries[0].target.offsetHeight);
//       }
      
//     }, options);
//   observer.observe(btn);
// });

  
// },[])


  const formatDate = (date) => {
    const newDate = new Date(date); // replace with your own Date object
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <> 

      <div className={`${customClass} ${Classes['APP']}`} style={{ zIndex: "2" }}>
        <Header
          onMenuClick={(v) => setCustomClass(v ? "active" : "")}
          page={"Blogs"}
        />
        <div className={Classes['filter-section']}>
            <div className={`${Classes['main-blog-content']}`}>

              <div className={Classes['']}>
              <BlogAuthor/>
              </div>
              
            
            <div className={`${Classes['social-media-links']}`}>
            <div className={Classes["blog-content-fb-insta-links"]}>
            <Link href="https://twitter.com/InfoHexabells" target="_blank">
                  <img
                    src="/assets/images/twitter-icon.svg"
                    className="img-fluid"
                    alt="Twitter Icon"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/hexabells"
                  target="_blank"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/linkedin.svg"
                    alt="LinkedIn icon"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/p/Cq-SmqCrTXX"
                  target="_blank"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/Blogs/instagram.svg"
                    alt="Instagram icon"
                  />
                </Link>
                <Link href="https://www.facebook.com/hexabells" target="_blank">
                  <img
                    src="/assets/images/fb-icon.svg"
                    className="img-fluid"
                    alt="Facebook Icon"
                  />
                </Link>
                    </div>
            </div>
            
            <div className={`${Classes['author-data']}`}>
                <p className={`text-center ${Classes['']}`}>
                  I've expertise` in the field of robotics and emerging technologies. With a passion for innovation and a deep understanding of cutting-edge advancements, I have made significant contributions to the field through their insightful articles and thought-provoking research. Kushal is an accomplished author and expert in the field of robotics and emerging technologies. With a passion for innovation and a deep understanding of cutting-edge advancements, Kushal has made significant contributions to the field through their insightful articles and thought-provoking research. With a career spanning several years, Kushal has established themselves as a respected authority in the realm of robotics. Their articles have been featured in prestigious publications and online platforms, where they explore the intersection of technology, robotics, and society, offering unique perspectives and analysis. Renowned for their ability to explain complex concepts in a clear and engaging manner, [Your Name] has a knack for making intricate technical topics accessible to a wide range of readers. Their writing style combines technical expertise with a humanistic approach, delving into the ethical implications, societal impacts, and future possibilities of robotics and related technologies. Throughout their career, Kushal has cultivated an extensive network of industry professionals, researchers, and thought leaders. This network has enabled them to stay at the forefront of technological advancements and gain firsthand insights into the latest breakthroughs in the field. In addition to their contributions as an author, Kushal has also been a sought-after speaker at conferences and industry events, where they have shared their knowledge and vision for the future of robotics. Their ability to engage and inspire audiences has made them a highly regarded figure within both academic and professional circles. Outside of their work in robotics, Kushal maintains a deep curiosity about other scientific and technological domains. This multidisciplinary approach allows them to draw connections between various fields, providing readers with a holistic understanding of the impact of technology on our lives. Kushal's dedication to advancing the field of robotics, combined with their exceptional writing skills and insightful analysis, make them a valuable contributor to the discourse surrounding technology and its societal implications. With each article they publish, Kushal continues to shape and inspire the future of robotics, leaving an indelible mark on the field. Please note that this bio is a general template, and you can customize it further based on your specific achievements, notable works, and personal experiences.
                </p>
            </div>

            <div className={`${Classes['my-articles']} ${Classes['outer-top-margin']}`}>
               <h2>My Articles</h2>
               <p>Available Categoires</p>

                <div className={Classes['category-btns']}>
                    <button ref={ref1}>Technology</button>
                    <button  ref={ref2}>Mobile Application</button>
                </div>

                <div className={`${Classes['articles-container']} ${Classes['inner-top-margin']}`}>
                <Link href="#">
                <div  className="d-flex  flex-wrap flex-sm-nowrap">
                <div className={Classes['article-banner']}>
                    <img src="/assets/images/abhishek-pandey.webp" alt="img" />
                </div>
                <div className={Classes['article-content']}>
                    <p className={Classes['category-date']}>
                        <span>Date-</span>
                        <span>Category</span>
                    </p>

                <h3 className={Classes['article-title']}>7 Latest Innovations in Robotics</h3>
                   
                    

                    <p className={Classes['article-summary']}>
                      An automated device created by Universal Robots known as UR3 can build its own replacement parts on the fly. The cute and nimble robot can handle a variety of tasks, such as gluing, painting, soldering, and grasping...
                    </p>
                </div>
                </div>
                </Link>
        
                </div>
            </div>
            </div>
        </div>
        
        <div className={`${Classes["explore-section"]} ${Classes["outer-top-margin"]}`}>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <span className={Classes["heading"]}>
                Well sometimes it is quite <br /> complicated to explain
                simplicity!
              </span>
              <p>We let our work speak for itself.</p>
              <CTA CtaName="Explore" href="/contact-us" />
            </div>
          </div>
        </div>

        <div className={`${Classes['two-by-two-blogs']} ${Classes['inner-top-margin']}`}>
<ResponsiveMasonry 
          columnsCountBreakPoints={{350: 1, 768: 2, 992: 2}} className={Classes['inner-top-margin']}
>
    <Masonry>
    <Link href="#">
        <div className={Classes['blog-image']}>
        <img src="/assets/images/abhishek-pandey.webp" alt="img" />
        </div>
        <div className={Classes['blog-content']}>
        <p className={Classes['category-date']}>
                        <span>Date-</span>
                        <span>Category</span>
                    </p>
            <h3 className={Classes['blog-title']}>UX is not UI</h3>
            <p className={Classes['brief-summary']}>
            While UX targets optimizing a product or a service to make it easy, effective and pleasant for someone to use, UI focuses on the visual components, sensations and interactivity...
            </p>
        </div>
        </Link>

        <Link href="#">
        <div className={Classes['blog-image']}>
        <img src="/assets/images/abhishek-pandey.webp" alt="img" />
        </div>
        <div className={Classes['blog-content']}>
              <p className={Classes['category-date']}>
                        <span>Date-</span>
                        <span>Category</span>
                    </p>

            <h3 className={Classes['blog-title']}>UX is not UI</h3>
            <p className={Classes['brief-summary']}>
            While UX targets optimizing a product or a service to make it easy, effective and pleasant for someone to use, UI focuses on the visual components, sensations and interactivity...
            </p>
        </div>
        </Link>
    </Masonry>
</ResponsiveMasonry>
       
        
        </div>
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  );
};

export default Blog;

// export async function getServerSideProps(context) {
//   try {
//     const { slug } = context.params;
//     const resp = await fetch(
//       `https://sagecrm.thesagenext.com/hexabellblog/api/post/${slug}/0`
//     );
//     const data = await resp.json();
//     var isDataFound = false;
//     if (Object.keys(data).length > 0) {
//       isDataFound = true;
//     }
//     return {
//       props: {
//         data: data,
//         isDatafound: isDataFound,
//       },
//     };
//   } catch (e) {
//     return {
//       props: {
//         data: [],
//         isDataFound: false,
//       },
//     };
//   }
// }
