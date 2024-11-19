import { useState } from "react";
interface SearchProps {
  getSearch: (text: string) => void;
}

export const Search = ({ getSearch }: SearchProps) => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData.search);
    getSearch(formData.search.trim());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="p-3" onSubmit={onFormSubmit}>
      <div className="flex gap-5 max-sm:flex-col">
        <input
          type="text"
          name="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Gaseosa coca cola 500m"
          onChange={handleChange}
          value={formData.search}
        />
        <div className="max-sm:flex justify-center">
          <button
            type="submit"
            className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 flex gap-3"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};
