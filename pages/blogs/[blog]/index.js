import React, { useEffect, useState , useRef} from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Classes from "/styles/blogs.module.css";
import Styles from "/styles/blog.module.css";
import Link from "next/link";
import CTA from "../../../components/cta";
import NewsLetter from "../../../components/news-letter";
import BlogAuthor from "../../../components/blogAuthor";
const Footer = dynamic(() => import("../../../components/footer"));
const Header = dynamic(() => import("../../../components/header"));



const Blog = (props) => {
  const [customClass, setCustomClass] = useState(" ");
  const [blogData, setBlogData] = useState(props.data);
  const [allBlogs, setAllBlogs] = useState([]);

  let router = useRouter();
  let {blog} = router.query;

  

  console.log( blogData.content)
console.log(blogData);
  useEffect(() => {
    // if (sessionStorage.getItem("lastActivePage")) {
    //   fetchAllBlogsList(
    //     `https://sagecrm.thesagenext.com/hexabellblog/api/posts?page=${sessionStorage.getItem(
    //       "lastActivePage"
    //     )}`
    //   );
    // } else {
    fetchAllBlogsList(`https://sagecrm.thesagenext.com/hexabellblog/api/posts`);
  }, []);

  const fetchAllBlogsList = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    //  console.log(data);
    setAllBlogs(data.data);
  };

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
              <div className={Styles['blog-data']}>
              {
                props.isDatafound ? (
                  <>
                  <div className={Classes["blog-banner-image"]}>
                      <img
                        src={`https://sagecrm.thesagenext.com/hexabellblog/${blogData.image}`}
                        alt={blogData.title}
                      />
                    </div>

                    <h1 className={Styles["blog-heading"]}>{blogData.title}</h1>

                    <p className={Styles['date-by']}>
                      Published on: {formatDate(blogData.created_at)} | Last
                      updated: {formatDate(blogData.updated_at)} | <Link href='#'>By Kushal Kumar Singh</Link>
                    </p>
                  
                  <p className={Styles['relevant-categories']}>
                    Technology | Robotics | Innovation
                  </p>
                      <article
                        dangerouslySetInnerHTML={{ __html: blogData.content }}
                      />
                    <p className={Styles['share-post']}>
                      Share post via:
                    </p>
                    <div className={`${Styles['share-links']}`}>
            <div className={`${Classes["blog-content-fb-insta-links"]} justify-content-start`}>
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

                    {/* <div className={Classes["blog-content-fb-insta-links"]}>
                      <Link
                        href="https://www.facebook.com/hexabells"
                        target="_blank"
                      >
                        <img
                          className="mb-3"
                          src="/assets/images/Blogs/facebook.svg"
                          alt="Facebook icon"
                        />
                      </Link>
                      <Link
                        href="https://www.instagram.com/p/Cq-SmqCrTXX"
                        target="_blank"
                      >
                        <img
                          src="/assets/images/Blogs/instagram.svg"
                          alt="Instagram Icon"
                        />
                      </Link>
                    </div> */}
                    {/* <div className="d-flex justify-content-center">
                      <div className={Classes["prev-next-page"]}>
                        {blogData.previous_slug == "-1" ? (
                          <span className={Classes["first-btn"]}>
                            Previous Blog
                          </span>
                        ) : (
                          <a href={`/blogs/${blogData.previous_slug}`}>
                            <span className={Classes["first-btn"]}>
                              Previous Blog
                            </span>
                          </a>
                        )}
                        {blogData.next_slug == "-1" ? (
                          <span className={Classes["second-btn"]}>
                            Next Blog
                          </span>
                        ) : (
                          <a href={`/blogs/${blogData.next_slug}`}>
                            <span className={Classes["second-btn"]}>
                              Next Blog
                            </span>
                          </a>
                        )}
                      </div>
                    </div> */}
                  </>
                ) : (
                  <div className={Classes["show-when-data-not-available"]}>
                    <span>No Record</span>
                  </div>
                )
              }
          </div>  
      
      <div className={Classes['outer-top-margin']}>
      <BlogAuthor blogName={blog}/>
      </div>
   
    
    <div className={`${Styles['explore-more-blogs']} ${Classes['outer-top-margin']}`}>
    <div className={Styles['explore-heading']}>
      <h2>Explore more:</h2>
    </div>
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 768: 2, 992: 3}} className={Classes['inner-top-margin']}>
        <Masonry>
        {allBlogs?.slice(0, 3)?.map((el, index) => {
    return (
      <React.Fragment key={index}>
      <div className='maso-item'>
      <Link
          href={`/blogs/${el.slug}`}
          onClick={() =>
            sessionStorage.setItem(
              "lastActivePage",
              currentPageData.current_page
            )
          }
        >
          <div className={`${Classes["outer-d"]}  ${Classes[index !=0 ? 'mt-20' : '']}`}>
          <div
              className={`${Classes["blog-item"]}`}
              key={index}
            >
              <div className={Classes['blog-image']} >
                <img src={`https://sagecrm.thesagenext.com/hexabellblog/${el.image}`} alt="blog-image" />
              </div>
            </div>
            
            <div className={Classes["blog-item-content"]}>
              <p>
              <span className={Classes['create-date']}>
                {formatDate(el.created_at)} -{" "}
              </span>
              <span className={Classes['category']}> {el.get_category?.title}</span>
              </p>
              <h3 className={Classes['title']}>{el.title}</h3>
              <p className={Classes['summary']}>{el.summery}</p>
            </div>
          </div>
      </Link>
      </div>
        {/* {index === 2 && <NewsLetter />} */}
      </React.Fragment>
    );
  })}
        </Masonry>
      </ResponsiveMasonry>
           
           <div className={Styles["explore-all-articles"]}>
            <Link href="/blogs">
            <button>View all articles</button>
            </Link>
           </div>
            </div>

            </div>

            <NewsLetter/>
        </div>
        
        {/* <div className={Classes["explore-section"]}>
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
        </div> */}

        <Footer/>
      </div>
    </>
  );
};

export default Blog;

export async function getServerSideProps(context) {

const {blog} = context.params;
  const resp = await fetch(
    `https://sagecrm.thesagenext.com/hexabellblog/api/post/${blog}/1`
  );
 
  const data = await resp.json();
  // console.log(data);
  var isDataFound = false;
  if (Object.keys(data).length > 0) {
    isDataFound = true;
  }
  return {
    props:{
      data:data,
      isDatafound:isDataFound
    }
  }
}
