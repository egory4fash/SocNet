import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

type myPostsPropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    addPost:(postMessage:string) => void
}


function MyPosts(props: myPostsPropsType) {


    const postElements = props.postsData.map(elem =>
        <Posts id={elem.id} message={elem.message} likesCount={elem.likesCount}/>)

    const NewPostElement:React.RefObject<any> = React.createRef()

    const addPost = () => {
        const postMessage = NewPostElement.current.value;
        props.addPost(postMessage)
    }
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div><textarea className={classes.item}></textarea></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;