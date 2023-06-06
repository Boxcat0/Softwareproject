export const jobList = [
  {
    no: 1,
    title: '구인 글 1',
    content: '구인 글 내용 1',
    createDate: '2023-05-17',
    readCount: 0,
    comments: []
  },
  {
    no: 2,
    title: '구인 글 2',
    content: '구인 글 내용 2',
    createDate: '2023-05-16',
    readCount: 0,
    comments: []
  },
  {
    no: 3,
    title: '구인 글 3',
    content: '구인 글 내용 3',
    createDate: '2023-05-15',
    readCount: 0,
    comments: []
  }
];

export const addJob = (title, content) => {
  const newJob = {
    no: jobList.length + 1,
    title,
    content,
    createDate: new Date().toISOString().slice(0, 10),
    readCount: 0,
    comments: []
  };
  jobList.push(newJob);
};

export const getJobByNo = (jobId) => {
  const job = jobList.find((item) => item.no === parseInt(jobId));
  return job;
};
