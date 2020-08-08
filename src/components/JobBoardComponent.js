import React from 'react';

const JobBoardComponent = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level];
  if (tools) {
    tags.push(...tools);
  }
  if (languages) {
    tags.push(...languages);
  }
  return (
    <div
      className={`flex flex-col bg-white shadow-md mx-10 my-16 m-4 p-6 rounded sm:my-8 ${
        featured && 'border-l-4 border-teal-500 border-solid'
      } sm:flex-row `}
    >
      <div>
        <img
          className="-mt-16 mb-2 h-15 w-15 sm:mt-0 sm:my-0 "
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {company}{' '}
          {isNew && (
            <span className="text-sm bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full uppercase">
              New
            </span>
          )}{' '}
          {featured && (
            <span className="text-sm bg-gray-700 text-white font-bold m-2 py-1 px-2 rounded-full uppercase">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-600">
          {postedAt} | {contract} | {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-2 border-t border-gray-500 sm:ml-auto sm:border-0 sm:mt-0 sm:pt-0 ">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="cursor-pointer text-teal-500 bg-teal-100 font-bold mb-2 mr-4 p-2 rounded sm:mb-0 "
              >
                {tag}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};
export default JobBoardComponent;
