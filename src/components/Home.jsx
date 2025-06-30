const Home = () => {
  return (
    <div className="p-2">
      <div>
        <h2>Track your Habits!</h2>
        <button className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
          Get Started!
        </button>

        <p>Habit tracker to your rescue</p>
        <p>
          Add new habits and complete them as your daily goals
          <br />
          Track your progress in an integrated calander
        </p>
      </div>
      <div>
        <h2>Here is how it works</h2>
        <div>
          <img
            src="src/assets/number-1.png"
            alt="1)"
            srcset=""
            className="h-20 w-20"
          />
          <p>
            Enter your desired habits that you would like to follow everyday
          </p>
        </div>
        <div>
          <img
            src="src/assets/number-2.png"
            alt="2)"
            srcset=""
            className="h-20 w-20"
          />
          <p>Mark them as complete or incomplete</p>
        </div>
        <div>
          <img
            src="src/assets/number-3.png"
            alt="3)"
            srcset=""
            className="h-20 w-20"
          />
          <p>Track your progress in the calendar</p>
        </div>
        <div>
          <img
            src="src/assets/number-4.png"
            alt="4)"
            srcset=""
            className="h-20 w-20"
          />
          <p>Check your daily Streak!</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
