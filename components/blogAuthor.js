import React from 'react';
import Link from "next/link";
import Classes from '/styles/blogs.module.css';

function BlogAuthor(props) {
    

  return (
    <div className={`${Classes['author-brief']} `}>
    <div className={Classes['profile-pic-name']}>
      <img src="/assets/images/Abhishek-Pandey.webp" alt="profile-pic"  height='154px' width='154px'/>
      <Link href={ (props.blogName) ? (`/blogs/${props.blogName}/author/1`): '#' }>
        <span>By Kushal Kumar Singh</span>
        {
          (props.blogName) ? 
          ( 
            <>
          <img src="/assets/images/icons/sm-down-arrow-black.svg" alt="arrow" height='14px' width='15px' className={Classes['black']}/>
          <img src="/assets/images/icons/sm-down-arrow-red.svg" alt="arrow" height='14px' width='15px' className={Classes['red']}/>
          </>
          )  : ''
        }
       
      </Link>
    </div>

    <div className={Classes['author-desc']}>
      <p>I've expertise` in the field of robotics and emerging technologies. With a passion for innovation and a deep understanding of cutting-edge advancements, I have made significant contributions to the field through their insightful articles and thought-provoking research...</p>

    </div>
  </div>
  )
}

export default BlogAuthor
