import React from "react";

const Field = ({ name, formData, setFormData }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" grid grid-flow-col grid-cols-3 grid-rows-4">
      {months.map((month) => (
        <input
          key={`${name}-${month}`}
          type="number"
          onChange={handleInputChange}
          name={`${name}-${month}`}
          value={formData?.[`${name}-${month}`] || ""}
          placeholder={month}
          className="flex-1 bg-transparent block border-b border-maincolor outline-none text-maincolor"
        />
      ))}
    </div>
  );
};
export default Field;
