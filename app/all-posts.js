function loadPosts() {
    $.get('https://qmeme-project.herokuapp.com/memes', (posts) => {
      for (let p of posts) {
        $('#content').append(
          $(`
            <div class="card rounded m-2  " id="${filterXSS(p._id)}">
            <div class="card-body">
            <div class="tp">
            <div class="card-title">Name: ${filterXSS(p.name)}</div>
            <div class="dt">
            <div >${p.createdAt.slice(0,10)}</div>
            <div >${p.createdAt.slice(11,19)}</div>
            </div>
            </div>
            <div>
            <div class="tq">
            <div class="card-text">${filterXSS(p.caption)}</div> 
            <a class="delete" href="https://qmeme-project.herokuapp.com/memes/delete/${p._id}"><i class="fa fa-trash"></i></a>
            </div>
            </div>
            </div>
            <img class="card-img-top" src="${filterXSS(p.url)} onerror="if (this.src != 'https://i.ibb.co/3fs2L5C/image.png') this.src = 'https://i.ibb.co/3fs2L5C/image.png';"">
            </div>
          `)
        )
      }
    })
  }
