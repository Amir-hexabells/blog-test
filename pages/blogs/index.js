import React, { useEffect, useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import dynamic from "next/dynamic.js";
import Classes from "/styles/blogs.module.css";
import getBlogsData from "../../components/BlogsData";
import PaginationBar from "../../components/Paginationbar";
import GetMetaData from "../../components/metadata";
import CustomHead from "../../components/CustomHead";
import Link from "next/link";
const Footer = dynamic(() => import("../../components/footer"));
const Header = dynamic(() => import("../../components/header"));
const NewsLetter = dynamic(() => import("../../components/news-letter"));

const Blogs = () => {
  const MetaData = GetMetaData("Blogs");
  const [allBlogs, setAllBlogs] = useState([]);
  
  // const allBlogs = getBlogsData();
  const [blogsData, setBlogsData] = useState(null);
  // const [blogsData, setBlogsData] = useState(getBlogsData());
  // const [totalBlogs, setTotalBlogs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [customClass, setCustomClass] = useState(" ");
  const [showFilterList, setShowFilterList] = useState(false);
  const [blogFilterSticky, setBlogFilterSticky] = useState("");
  const [isApiHitComplete, setIsApiHitComplete] = useState(false);
  const [isBlogsFound, setIsBlogsFound] = useState(false);
  const [blogsPerPage, setBlogsPerPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState({});
  const [currentPageUrl, setCurrentPageUrl] = useState("");

  const [numLatestBlogs, setnumLatestBlogs] = useState(3);
  const [loadMoreClicked, setloadMoreClicked] = useState(false);
  const [loadMoreVisible, setloadMoreVisible] = useState(true);
  const [allCategoryName, setAllCategoryName] = useState([]);
  const [selectedFilter, setselectedFilter] = useState(null);
 
  const[totalBlogs, settotalBlogs] = useState([]);
 

  let pageNumber =0;

  const [Filters, setFilters] = useState(null);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 100) {
        setBlogFilterSticky("blog-filter-sticky");
      } else {
        setBlogFilterSticky("");
      }
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", stickNavbar);
  //   };
  // }, []);

  const sliceBlogs = (
    selectedFilterCategory,
    pageNum,
    totalBlogs,
    blogsPerPage
  ) => {
    let arr = [];
    
      if (selectedFilterCategory == "All Categories") {
        arr = totalBlogs;
      } else {
        arr = totalBlogs.filter(
          (blog) => blog.get_category.title == selectedFilterCategory
        );
      }
    
    return arr;
    // return arr.slice(
    //   (pageNum - 1) * blogsPerPage,
    //   (pageNum - 1) * blogsPerPage + blogsPerPage
    // );
  };

  const handleSelect = (selectedFilter, totalBlogs, blogsPerPage) => {
    // setCurrentPage(1);
    let selectedValue ;
      selectedValue = selectedFilter;
    if(selectedValue){
      sessionStorage.setItem('currentFilter', selectedValue);
      setselectedFilter(selectedFilter);
    }else{
      if(!sessionStorage.getItem('currentFilter')){
        sessionStorage.setItem('currentFilter', 'All Categories');
      }
      selectedValue = sessionStorage.getItem('currentFilter');
    }
    
    // const newFilters = 
    Filters?.forEach((el) => {
      let obj = el;
      obj.isActive  = el.value == selectedValue;
    });

    let slicedBlogs = sliceBlogs(selectedValue, 1, totalBlogs, blogsPerPage);
    setBlogsData(slicedBlogs);

  };

  // const setPageBlogsData = (pageNumber) => {
  //   setBlogsData(
  //     sliceBlogs(selectedFilter, pageNumber, allBlogs, blogsPerPage)
  //   );
  // };

  useEffect(()=>{
      if(loadMoreClicked){
        window.addEventListener('scroll', (e)=>{
            pageNumber++;
            // fetchAllBlogsList(`https://sagecrm.thesagenext.com/hexabellblog/api/posts?page=${pageNumber}`);
        })
      }
    
  },[loadMoreClicked]);


// runs only on first api request
useEffect(()=>{
 if(allCategoryName.length && !Filters){
    let arr= [
      {
        isActive : (sessionStorage.getItem('currentFilter')=='All Categories') ? true : false,
        value : 'All Categories',
      }
    ];

    allCategoryName.forEach((category)=>{
       arr.push({
         isActive : (sessionStorage.getItem('currentFilter')==category) ? true : false,
         value : category,
       })
    });

    setFilters(arr);
  }
},[allCategoryName]);





//   useEffect(()=>{
//     if(loadMoreClicked){
//       window.addEventListener('scroll', (e)=>{
//           pageNumber++;
          
//           fetchAllBlogsList(`https://sagecrm.thesagenext.com/hexabellblog/api/posts?page=${pageNumber}`);
//       })
//     }
  
// },[loadMoreClicked]);


  const fetchAllBlogsList = async (url) => {
    if(url){
      const resp = await fetch(url);
      const fetchedData = await resp.json();
      setIsBlogsFound(true);
      setIsApiHitComplete(true);
      setAllCategoryName(fetchedData.AllCategoryName);
      setAllBlogs(fetchedData.data);
      settotalBlogs(()=>{
       //check if data fetched exists
        return [...totalBlogs, ...fetchedData.data];
      });
     
      handleSelect(selectedFilter, totalBlogs, fetchedData.per_page);

    }
  };

  useEffect(()=>{
    console.log(totalBlogs)
  },[totalBlogs])


  useEffect(() => {
 fetchAllBlogsList(`https://sagecrm.thesagenext.com/hexabellblog/api/posts?page=${currentPage}`);  
      return ()=> fetchAllBlogsList(null);

  }, []);

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
      <div className={`${Classes["APP"]}`}>
        <CustomHead
          pagetitle={MetaData.pagetitle}
          description={MetaData.description}
          metatitle={MetaData.metatitle}
          canonical={MetaData.canonical}
        ></CustomHead>
        {/* <link rel="stylesheet" href="/assets/css/blog.css" /> */}

        {/* Header start */}
        <div className={`blog_page ${customClass}`}>
          <Header
            onMenuClick={(v) => setCustomClass(v ? "active" : "")}
            page={"Blogs"}
          />
          {/* Header End */}

          {/* Featured blog */}
          <div className={`${Classes["filter-section"]}`}>
            <div className={`${Classes["main-blog-content"]} ${Classes['outer-top-margin']}`}>
              {isApiHitComplete ? (
                isBlogsFound ? (
                  <>  
                  <div className={`${Classes['featured-blog']} ${Classes['inner-top-margin']}`}>
                  <ResponsiveMasonry
                           columnsCountBreakPoints={{350: 1, 768: 1, 992: 1}}
                        >
                        <Masonry>
                          {totalBlogs?.slice(0, 1)?.map((el, index) => {
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
                                <div className={Classes['blog-image']}
                               
                                >
                                  <img src={`https://sagecrm.thesagenext.com/hexabellblog/${el.image}`} alt="blog-banner" />
                                </div>
                              </div>
                              
                              
                              <div className={Classes["blog-item-content"]}>
                                <p className={Classes['featured-badge']}>
                                  <span>Featured</span>
                                </p>
                                <p  className={Classes['category-date']}>
                                <span className={Classes['create-date']}>
                                  {formatDate(el.created_at)} -{" "}
                                </span>
                                <span className={Classes['category']}> {el.get_category?.title}</span>
                                </p>
                                
                                <h2 className={Classes['title']}>{el.title}</h2>
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
                  </div>

                  <div className={`${Classes['latest-blogs']} ${Classes['outer-top-margin']}`}>
                    <div className={Classes['row-title']}>
                      <h2>Latest Blogs <span>0{numLatestBlogs} Posts</span></h2>
                      </div>   
                      <div className={`${Classes['inner-top-margin']}`}>
                        <ResponsiveMasonry
                           columnsCountBreakPoints={{350: 1, 768: 2, 992: 3}}
                        >
                          <Masonry>
                          {totalBlogs?.slice(0, numLatestBlogs)?.map((el, index) => {
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

                                <div className={Classes['blog-image']}

                                >

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
                        {/* shows three latest blogs of any category out of fetched blogs */}
                        </div>      
                    </div>

                     <div className={`${Classes['AllBlogs']} ${Classes['outer-top-margin']}`}>
                      <div className={`${Classes['categories']} ${blogFilterSticky ? Classes['blog-filter-sticky']: ''}`}>
                    <div className={`${Classes['category-list']} d-flex`}>
                    {isApiHitComplete ? Filters?.map((filter, index) => {
                      return (
                          <button key={index}
                                  className = {`${Classes[filter.isActive ? 'active': '']}`}
                                  onClick = {()=> handleSelect(filter.value, totalBlogs, blogsPerPage)}
                          >{filter.value}</button>
                         
                      );
                    }): ''}
                    </div>
                    </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 768: 2, 992: 3}}
                className={Classes['inner-top-margin']}
            >
                <Masonry>
                     { 
                    blogsData?.map((el, index) => {
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

                                <div className={Classes['blog-image']}
                                > 

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

                  <div className={`${Classes['load-more-blogs-btn']} text-center`}>
                           {loadMoreVisible ?
                            <button
                            onClick={()=>{
                              setloadMoreClicked(true);
                              className='d-flex align-items-center'
                            }}
                            >
                               <img src="/assets/images/icons/sm-down-arrow-red.svg" alt="arrow-down" 
                                width='12px'
                                height = '13px'
                                className={`${Classes['red-arrow']}`}
                            />
                              <span>Load more</span>
                              <img src="/assets/images/icons/sm-down-arrow-black.svg" alt="arrow-down"
                               width='12px'
                               height = '13px'
                               className={`${Classes['black-arrow']}`}
                             />
                              </button>
                            :  ''} 

                   </div>
                        
                     </div>
                  </>
                ) : (
                  <div className={Classes["data-not-available"]}>
                    <span>No Record</span>
                  </div>
                )
              ) : (
                <div className={Classes["data-not-available"]}>
                  <span>Loading...</span>
                </div>
              )}
            </div>
          </div>
          {/* Blog section end */}
        </div>
      </div>


      <NewsLetter/>

     <Footer/>
    </>
  );
};

export default Blogs;
