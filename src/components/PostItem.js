import React from 'react';

function PostQuestion(data) {
  return (
    <div className='question'>
      <div className='header'>
        <div className='author'>
          <img className='photo' src={data.author.avatar} alt='Avatar'/>
          <div className='details'>
            <p>
              <strong>{data.author.name}</strong>
            </p>
            <p>{data.date}</p>
          </div>
        </div>
        
        <p className='content'>{data.content}</p>
      </div>
    </div>
  )
};

function PostAnswer({comments}) {
  return (<div className='comments'>
      {comments.map(comment => (
        <div className='comment' key={comment.id}>
        <img className='photo' src={comment.author.avatar} alt='Avatar'/>
        <p>
          <strong>{comment.author.name}</strong> {comment.content}
        </p>
        </div>
      ))}
  </div>);
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className='post'>
      <PostQuestion author={author} date={date} content={content}/>
      <PostAnswer comments={comments} />
    </div>
  );
}

export default PostItem;
