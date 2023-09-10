const DatabaseIcon = ({ size = null }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || '25'}
    height={size || '25'}
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M12.5 10.4167C17.1021 10.4167 20.8334 8.55208 20.8334 6.24999C20.8334 3.94791 17.1021 2.08333 12.5 2.08333C7.89794 2.08333 4.16669 3.94791 4.16669 6.24999C4.16669 8.55208 7.89794 10.4167 12.5 10.4167Z"
      fill="#555555"
    />
    <path
      opacity="0.5"
      d="M4.16669 12.5V18.75C4.16669 21.0521 7.89794 22.9167 12.5 22.9167C17.1021 22.9167 20.8334 21.0521 20.8334 18.75V12.5C20.8334 14.8021 17.1021 16.6667 12.5 16.6667C7.89794 16.6667 4.16669 14.8021 4.16669 12.5Z"
      fill="#555555"
    />
    <path
      opacity="0.7"
      d="M4.16669 6.25V12.5C4.16669 14.8021 7.89794 16.6667 12.5 16.6667C17.1021 16.6667 20.8334 14.8021 20.8334 12.5V6.25C20.8334 8.55208 17.1021 10.4167 12.5 10.4167C7.89794 10.4167 4.16669 8.55208 4.16669 6.25Z"
      fill="#555555"
    />
  </svg>
);

export default DatabaseIcon;
