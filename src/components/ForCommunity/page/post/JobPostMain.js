import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobPostList from './JobPostList';
import JobPostViews from './JobPostViews';

const JobPostMain = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    navigate('/jobPostMain');
  }, []);

  const handleJobClick = (jobId) => {
    setSelectedJob(jobId);
  };

  const handleBackClick = () => {
    setSelectedJob(null);
  };

  return (
    <>
      {selectedJob ? (
        <JobPostViews jobId={selectedJob} onBackClick={handleBackClick} />
      ) : (
        <JobPostList onJobClick={handleJobClick} />
      )}
    </>
  );
};

export default JobPostMain;
