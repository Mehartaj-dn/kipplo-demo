import React from "react";

const PeopleTable = ({ people }) => {
  if (!people || people.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No people found.</p>;
  }

  return (
    <table className="w-full border-collapse border border-gray-300 bg-white rounded shadow">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Job Title</th>
          <th className="border border-gray-300 px-4 py-2">Department</th>
          <th className="border border-gray-300 px-4 py-2">Location</th>
          <th className="border border-gray-300 px-4 py-2">LinkedIn</th>
          <th className="border border-gray-300 px-4 py-2">About</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.peopleid} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-medium">
              {person.name || "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {person.jobtitle || "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {person.departments || "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {[person.plcities, person.plstates, person.plcountries]
                .filter(Boolean)
                .join(", ") || "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-blue-600 underline">
              {person.linkedinurl ? (
                <a
                  href={`https://${person.linkedinurl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Profile
                </a>
              ) : (
                "N/A"
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 max-w-md">
              {person.about ? person.about.slice(0, 120) + "..." : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
