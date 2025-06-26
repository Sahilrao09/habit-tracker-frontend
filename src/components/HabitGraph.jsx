import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays, format } from "date-fns";

const HabitGraph = ({ habits }) => {
  const completionMap = {};

  habits.forEach((habit) => {
    habit.completionLogs.forEach((log) => {
      if (log.completed) {
        const dateStr = format(new Date(log.date), "yyyy-MM-dd");
        completionMap[dateStr] = (completionMap[dateStr] || 0) + 1;
      }
    });
  });

  const values = Object.entries(completionMap).map(([date, count]) => ({
    date,
    count,
  }));

  const today = new Date();
  const startDate = subDays(today, 180); // last 6 months

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-2">Habit Completion Heatmap</h2>
      <CalendarHeatmap
        startDate={startDate}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) return "color-empty";
          if (value.count >= 4) return "color-github-4";
          if (value.count >= 3) return "color-github-3";
          if (value.count >= 2) return "color-github-2";
          return "color-github-1";
        }}
        tooltipDataAttrs={(value) => ({
          "data-tip": value.date
            ? `${value.date}: ${value.count} habit${value.count > 1 ? "s" : ""}`
            : "",
        })}
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default HabitGraph;
