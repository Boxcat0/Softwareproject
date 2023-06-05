const postList = [
  {
    "no": 1,
    "title": "첫번째 게시글입니다.",
    "content": "첫번째 게시글 내용입니다.",
    "createDate": "2023-05-25",
    "readCount": 6
  },
  {
    "no": 2,
    "title": "두번째 게시글입니다.",
    "content": "두번째 게시글 내용입니다.",
    "createDate": "2023-05-25",
    "readCount": 5
  },
  {
    "no": 3,
    "title": "세번째 게시글입니다.",
    "content": "세번째 게시글 내용입니다.",
    "createDate": "2023-05-26",
    "readCount": 1
  },
  {
    "no": 4,
    "title": "네번째 게시글입니다.",
    "content": "네번째 게시글 내용입니다.",
    "createDate": "2023-05-28",
    "readCount": 2
  },
  {
    "no": 5,
    "title": "다섯번째 게시글입니다.",
    "content": "다섯번째 게시글 내용입니다.",
    "createDate": "2023-05-29",
    "readCount": 4
  },
];

const addPost = (title, content) => {
  const newPost = {
    no: postList.length + 1,
    title,
    content,
    createDate: new Date().toISOString().slice(0, 10),
    readCount: 0
  };
  postList.push(newPost);
};

const getPostByNo = no => {
  const array = postList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export {
  postList,
  addPost,
  getPostByNo
};
