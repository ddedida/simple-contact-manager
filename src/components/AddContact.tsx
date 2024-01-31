import { FormEvent, useState } from "react";

interface ContactData {
  id: string;
  name: string;
  email: string;
}

interface ContactProps {
  onData: (data: ContactData) => void;
}

const AddContact: React.FC<ContactProps> = ({ onData }) => {
  const [state, setState] = useState<ContactData>({
    id: "",
    name: "",
    email: "",
  });

  const add = (e: FormEvent) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the Fields are Mandatory!");
      return;
    }

    const uniqueID = crypto.randomUUID();
    onData({ ...state, id: uniqueID });
    setState({ ...state, id: "", name: "", email: "" });
  };

  return (
    <div className="flex flex-col gap-4 bg-white px-5 py-6 w-[640px] rounded-lg">
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12C11.21 12 13 10.21 13 8ZM11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6C10.1 6 11 6.9 11 8ZM1 18V20H17V18C17 15.34 11.67 14 9 14C6.33 14 1 15.34 1 18ZM3 18C3.2 17.29 6.3 16 9 16C11.69 16 14.78 17.28 15 18H3ZM20 15V12H23V10H20V7H18V10H15V12H18V15H20Z"
            className="fill-neutral-800"
          />
        </svg>
        <h1 className="text-xl font-sans font-bold">Add Contact</h1>
      </div>
      <form action="" className="flex flex-col gap-4" onSubmit={add}>
        <div className="block">
          <label
            htmlFor="name"
            className="block font-sans text-base font-medium leading-6 text-neutral-800"
          >
            Name
          </label>
          <div className="w-full mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-300">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full block outline-none font-sans flex-1 bg-transparent py-2 px-3 text-neutral-800 placeholder:text-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Contact Name"
              value={state.name}
              onChange={(e) => {
                setState({ ...state, name: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="block">
          <label
            htmlFor="email"
            className="block font-sans text-base font-medium leading-6 text-neutral-800"
          >
            Email
          </label>
          <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-300">
            <input
              type="email"
              name="email"
              id="email"
              className="block outline-none font-sans flex-1 bg-transparent py-2 px-3 text-neutral-800 placeholder:text-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="example@mail.com"
              value={state.email}
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-2 block rounded-md bg-yellow-400 py-2 text-base font-semibold text-neutral-800 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 transition duration-150 ease-in-out"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
