import React from 'react'
import AppImageList from './AppImageList'
import {Box, Typography} from '@mui/material/';
import CreatePost from '../Dialogs/CreatePost';


const PostDetailsContainer=(props)=>{

  console.log("from router"+props)
  const getPost = (post) => {
    let obj=
      [
        {
          param: "id",
          val: post._id,
        },
        {
          param: "Description",
          val: post.description,
        },{
          param: "Notes",
          val: post.notes,
        },
        {
          param:"Class",
          val:post.classType
        }
      ]
      return obj;
  };

  console.log("postDetails",props)
    return (
      // <Box
      //   py={6}
      //   sx={{
      //     backgroundColor: "white",
      //   }}
      // >
        <CreatePost
                action="View Post"
                post={props.post}
              />
      // </Box>
    );
}




export default PostDetailsContainer
