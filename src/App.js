import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }
    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img className='w-full' src="/images/bg-header-desktop.svg" alt="bg" />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div
            className={`flex flex-wrap  bg-white shadow-md mx-10 -my-20 mb-16 m-4 p-6 z-10 relative rounded `}
          >
            {filters.map((filter) => (
              <span
                onClick={() => handleFilterClick(filter)}
                className="cursor-pointer text-teal-500 bg-teal-100 font-bold mb-2 mr-4 p-2 rounded  sm:mb-0 "
              >
                {filter}
                <span className="text-sm bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full uppercase">
                  &#10006;
                </span>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="text-sm bg-gray-500 text-teal-100 font-bold ml-auto m-2 py-1 px-2 rounded-full uppercase"
            >
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
