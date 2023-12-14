// PostItem 컴포넌트입니다.

interface PostElement {
    "useId": number,
    "id": number,
    "title" : string,
    "body" : string
}

interface Props {
    posts: PostElement[]
}

const PostItem = (props: {key:number, post:PostElement}) => {
    const { post } = props;
  
    return (
      <div className='PostItem'>
        <div>
          <span className='id'>No. {post.id}</span>
          <span className='title'>- {post.title}</span>
        </div>
        <p className='body'>{post.body.slice(0, 120)}...</p>
      </div>
    );
  };
  
  export default PostItem;