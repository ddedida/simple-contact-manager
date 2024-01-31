import React from "react";

interface ContactCard {
  id: string;
  name: string;
  email: string;
  clickHandler: (id: string) => void;
}

const ContactCard: React.FC<ContactCard> = ({
  id,
  name,
  email,
  clickHandler,
}) => {
  return (
    <div className="h-16 mt-2 border border-gray-300 flex justify-between rounded-md overflow-hidden">
      <div className="w-fit h-full bg-yellow-400 px-2 py-2 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            className="fill-neutral-800"
          />
        </svg>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4">
        <div className="font-sans font-medium">{name}</div>
        <div className="font-sans">{email}</div>
      </div>
      <button
        className="w-fit h-full bg-red-500 px-2 py-2 flex justify-center items-center hover:bg-red-400 transition duration-150 ease-in-out"
        onClick={() => clickHandler(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
            className="fill-white"
          />
        </svg>
      </button>
    </div>
  );
};

export default ContactCard;
