import {useEffect,useReducer,useRef,useState, useMemo,} from "react";

import Profile from "./Profile";

import { useUser } from "../UserContext";

console.log("PRACTICE FILE LOADED");
// Course type
type Course = {
  id: number;
  name: string;
  price: number;
};

// Cart item
type CartItem = Course;

// Cart actions
type CartAction =
  | { type: "add"; course: Course }
  | { type: "remove"; id: number }
  | { type: "clear" };

// Reducer
function cartReducer(
  cart: CartItem[],
  action: CartAction
): CartItem[] {
  switch (action.type) {
    case "add":
      return [...cart, action.course];

    case "remove":
      return cart.filter((item) => item.id !== action.id);

    case "clear":
      return [];

    default:
      return cart;
  }
}

function Practice()
 {
  const [showProfile, setShowProfile] = useState(false);
  const { username,role} = useUser();
  // ---------------- STATE ----------------

  const [loggedIn, setLoggedIn] = useState(false);

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [seconds, setSeconds] = useState(0);

  // ---------------- USE EFFECT ----------------

  // 1. Login status effect
  useEffect(() => {
    console.log("Login status:", loggedIn);
  }, [loggedIn]);

  // 2. Dark mode + search effect
  useEffect(() => {
    console.log(
      "Dark mode changed:",
      darkMode,
      "Search:",
      search
    );
  }, [darkMode, search]);

  // 3. Timer effect
  useEffect(() => {
    if (!loggedIn) {
      return;
    }

    console.log("Timer started");

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup
    return () => {
      console.log("Timer stopped");

      clearInterval(timer);
    };
  }, [loggedIn]);

  // ---------------- USE REF ----------------

  const searchRef = useRef<HTMLInputElement>(null);

  // ---------------- USE REDUCER ----------------

  const [cart, dispatch] = useReducer(
    cartReducer,
    []
  );

  // ---------------- DATA ----------------

  const students = [
    "Niranjani",
    "Abinaya",
    "Rethika",
  ];

  const courses: Course[] = [
    {
      id: 1,
      name: "React",
      price: 500,
    },
    {
      id: 2,
      name: "TypeScript",
      price: 600,
    },
    {
      id: 3,
      name: "Tailwind CSS",
      price: 400,
    },
  ];

  // ---------------- SEARCH ----------------

  const filteredStudents = students.filter((student) =>
    student
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ---------------- USE MEMO ----------------

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");

    return cart.reduce(
      (total, course) => total + course.price,
      0
    );
  }, [cart]);

  // ---------------- FUNCTIONS ----------------

  const focusSearch = () => {
    searchRef.current?.focus();
  };

  // ---------------- LOGIN PAGE ----------------

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-[350px] rounded-lg bg-white p-8 shadow-lg">

          <h1 className="text-2xl font-bold text-blue-500">
            Student Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome! Please login.
          </p>

          <button
            onClick={() => setLoggedIn(true)}
            className="mt-5 w-full cursor-pointer rounded bg-blue-500 px-4 py-2 text-white"
          >
            Login
          </button>

        </div>
      </div>
    );
  } 
//{showProfile && <Profile onBack={() => setShowProfile(false)} />}
  // ---------------- DASHBOARD ----------------

  return (
    <div
      className={`min-h-screen p-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* HEADER */}

      <div className="mb-8 flex items-center justify-between">

        <div>
<button
  onClick={() => setShowProfile(true)}
  className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
>
  View Profile
</button>
{showProfile && <Profile onBack={() => setShowProfile(false)} />}

          <h1 className="text-3xl font-bold text-blue-500">
            Student Dashboard
          </h1>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-500"
            }
          >
            Welcome, {username}! 👋
          </p>
          <p className="text-gray-500">
  Role: {role}
</p>

          {/* TIMER */}

          <p
            className={
              darkMode
                ? "mt-2 text-gray-300"
                : "mt-2 text-gray-500"
            }
          >
            Time since login: {seconds} seconds
          </p>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-3">

          <button
            onClick={() => {
              console.log(
                "state before:",
                darkMode
              );

              setDarkMode(!darkMode);

              console.log(
                "after:",
                darkMode
              );
            }}
            className="cursor-pointer rounded bg-yellow-500 px-4 py-2 text-black"
          >
            {darkMode
              ? "☀️ Light"
              : "🌙 Dark"}
          </button>

          <button
            onClick={() => setLoggedIn(false)}
            className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white"
          >
            Logout
          </button>

        </div>

      </div>

      {/* DASHBOARD CARDS */}

      <div className="grid grid-cols-3 gap-6">

        {/* Students */}

        <div
          className={`rounded-lg p-6 shadow ${
            darkMode
              ? "bg-gray-800"
              : "bg-white"
          }`}
        >

          <h2 className="font-semibold">
            👩‍🎓 Students
          </h2>

          <p className="mt-3 text-3xl font-bold text-blue-500">
            {students.length}
          </p>

        </div>

        {/* Courses */}

        <div
          className={`rounded-lg p-6 shadow ${
            darkMode
              ? "bg-gray-800"
              : "bg-white"
          }`}
        >

          <h2 className="font-semibold">
            📚 Courses
          </h2>

          <p className="mt-3 text-3xl font-bold text-green-500">
            {courses.length}
          </p>

        </div>

        {/* Cart */}

        <div
          className={`rounded-lg p-6 shadow ${
            darkMode
              ? "bg-gray-800"
              : "bg-white"
          }`}
        >

          <h2 className="font-semibold">
            🛒 Cart
          </h2>

          <p className="mt-3 text-3xl font-bold text-purple-500">
            {cart.length}
          </p>

        </div>

      </div>

      {/* STUDENT SEARCH */}

      <div
        className={`mt-8 rounded-lg p-6 shadow ${
          darkMode
            ? "bg-gray-800"
            : "bg-white"
        }`}
      >

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Student List
          </h2>

          <button
            onClick={focusSearch}
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white"
          >
            Focus Search
          </button>

        </div>

        <input
          ref={searchRef}
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search student..."
          className="mt-5 w-full rounded border p-3 text-black"
        />

        <div className="mt-4 space-y-3">

          {filteredStudents.map(
            (student, index) => (
              <div
                key={index}
                className={`rounded p-3 ${
                  darkMode
                    ? "bg-gray-700"
                    : "bg-gray-100"
                }`}
              >
                👤 {student}
              </div>
            )
          )}

        </div>

      </div>

      {/* COURSES */}

      <div
        className={`mt-8 rounded-lg p-6 shadow ${
          darkMode
            ? "bg-gray-800"
            : "bg-white"
        }`}
      >

        <h2 className="text-xl font-bold">
          Available Courses 📚
        </h2>

        <div className="mt-5 grid grid-cols-3 gap-4">

          {courses.map((course) => (

            <div
              key={course.id}
              className={`rounded-lg p-5 ${
                darkMode
                  ? "bg-gray-700"
                  : "bg-gray-100"
              }`}
            >

              <h3 className="text-lg font-semibold">
                {course.name}
              </h3>

              <p className="mt-2">
                ₹{course.price}
              </p>

              <button
                onClick={() =>
                  dispatch({
                    type: "add",
                    course: course,
                  })
                }
                className="mt-4 cursor-pointer rounded bg-green-500 px-4 py-2 text-white"
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* CART */}

      <div
        className={`mt-8 rounded-lg p-6 shadow ${
          darkMode
            ? "bg-gray-800"
            : "bg-white"
        }`}
      >

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Shopping Cart 🛒
          </h2>

          <button
            onClick={() =>
              dispatch({
                type: "clear",
              })
            }
            className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white"
          >
            Clear Cart
          </button>

        </div>

        {cart.length === 0 ? (

          <p className="mt-4 text-gray-500">
            Cart is empty.
          </p>

        ) : (

          <div className="mt-4 space-y-3">

            {cart.map((course, index) => (

              <div
                key={`${course.id}-${index}`}
                className="flex items-center justify-between rounded bg-gray-100 p-3 text-black"
              >

                <span>
                  {course.name} - ₹{course.price}
                </span>

                <button
                  onClick={() =>
                    dispatch({
                      type: "remove",
                      id: course.id,
                    })
                  }
                  className="cursor-pointer rounded bg-red-500 px-3 py-1 text-white"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

        <div className="mt-5 text-right text-xl font-bold">
          Total: ₹{totalPrice}
        </div>

      </div>

    </div>
  );
}

export default Practice;