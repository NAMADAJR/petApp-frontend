import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

export const Select = ({ children, className }) => {
  return <div className={`relative ${className}`}>{children}</div>;
};

export const SelectLabel = ({ text, className }) => {
  return <div className={`text-gray-700 font-medium mb-1 ${className}`}>{text}</div>;
};

export const SelectTrigger = ({ value, onClick, placeholder, className }) => {
  return (
    <button
      className={`flex justify-between items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      onClick={onClick}
    >
      <span className="text-gray-700">{value || placeholder}</span>
      <ChevronDown className="h-4 w-4 text-gray-500" />
    </button>
  );
};

export const SelectContent = ({ isOpen, children, className }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg ${className}`}
    >
      <ul className="py-2">{children}</ul>
    </div>
  );
};

export const SelectItem = ({ value, onClick, children, className }) => {
  return (
    <li
      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 ${className}`}
      onClick={() => onClick(value)}
    >
      {children}
    </li>
  );
};

export const SelectValue = ({ value }) => {
  return <span className="text-gray-700">{value}</span>;
};

// New SelectGroup component
export const SelectGroup = ({ label, children, className }) => {
  return (
    <div className={`px-4 py-2 ${className}`}>
      <div className="text-gray-500 text-sm font-semibold uppercase">{label}</div>
      <ul className="mt-1">{children}</ul>
    </div>
  );
};

// PropTypes for components
Select.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectTrigger.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

SelectContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectValue.propTypes = {
  value: PropTypes.string,
};

SelectGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
