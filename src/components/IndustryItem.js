import { useState } from 'react';

function IndustryItem() {
  const [showInputs, setShowInputs] = useState(false);

  return (
    <li
      className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl cursor-pointer"
      onClick={() => setShowInputs(!showInputs)}
    >
      Industry
      {showInputs && (
        <div className="mt-2 space-y-2">
          <label>
            Industry labels:
            <input
              type="text"
              placeholder="enter industry label"
              className="w-50 ml-2"
            />
          </label>
          <br />
          <label>
            SIC:<br />
            <input
              type="text"
              placeholder="enter industry SIC"
              className="w-50"
            />
          </label>
          <br />
          <label>
            NAICS:
            <input
              type="text"
              placeholder="enter industry NAICS"
              className="w-50 ml-2"
            />
          </label>
        </div>
      )}
    </li>
  );
}
export default IndustryItem;