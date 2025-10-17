const JobTitle = ({ jobTitle, setJobTitle }) => {
  return (
    <input
      type="text"
      placeholder="Job title"
      value={jobTitle}
      onChange={(e) => setJobTitle(e.target.value)}
      className="w-50 ml-4 rounded"
    />
  );
};

export default JobTitle;
