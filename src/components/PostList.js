import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Anderson Ganhara',
          avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-371-456323.png'
        },
        date: '10 Nov 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png'
            },
            date: '11 Nov 2019',
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho emquem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png'
        },
        date: '10 Nov 2019',
        content: 'Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png'
            },
            date: '11 Nov 2019',
            content: 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!'
          },
          
          {
            id: 2,
            author: {
              name: 'César Toledo',
              avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png'
            },
            date: '11 Nov 2019',
            content: 'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div id='post-list'>
        {this.state.posts.map(post => 
          <PostItem key={post.id} {...post}/>
        )}
        
      </div>
    );
  }
}

export default PostList;