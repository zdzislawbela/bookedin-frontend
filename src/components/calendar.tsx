import { Calendar as CalendarHeroui } from "@heroui/calendar";
import { today } from "@internationalized/date";

export const Calendar = () => {
  return (
    <div className="flex gap-4">
      <CalendarHeroui
        aria-label="Date (Uncontrolled)"
        defaultValue={today("UTC")}
      />
    </div>
  );
};
