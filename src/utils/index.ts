export default function compareDates(
  date1: Date,
  date2: Date
): { x_axis: string[]; y_axis: string[] } {
  // Set both dates to the same time to compare only the day
  const d1 = new Date(date1);
  d1.setHours(0, 0, 0, 0);
  const d2 = new Date(date2);
  d2.setHours(0, 0, 0, 0);

  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return {
      x_axis: getHoursInOneDay(),
      y_axis: getMinutes({ minuteArg: 60 }),
    };
  } else if (diffDays <= 7) {
    // Check if dates are within the same week or on the same day
    const days: string[] = [];

    for (let i = 0; i < diffDays; i++) {
      days.push(getDayOfWeek(d1.getDay() + i));
    }
    return { x_axis: days, y_axis: getHoursInOneDay() };
  } else if (diffDays > 7 && diffDays <= 31) {
    // Dates are within the same month
    return {
      x_axis: getDaysInMonth(d1.getMonth(), d1.getFullYear()),
      y_axis: getMinutes({ minuteArg: 60 }),
    };
  } else if (diffDays > 31 && diffDays <= 365) {
    // Dates are within the same month
    const days: string[] = [];

    for (let i = 0; i < 7; i++) {
      days.push(getDayOfWeek(d1.getDay() + i));
    }
    return {
      x_axis: getMonthsInYear(d1.getFullYear()),
      y_axis: days,
    };
  } else {
    return {
      x_axis: [],
      y_axis: [],
    };
  }
}
function getMonthsInYear(year: number): string[] {
  const months: string[] = [];
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 1);
    const monthName = date.toLocaleString("default", { month: "long" });
    months.push(monthName);
  }
  return months;
}
function getDaysInMonth(month: number, year: number): string[] {
  const days: string[] = [];
  const numDays = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= numDays; day++) {
    days.push(day.toString());
  }
  return days;
}
function getDayOfWeek(dayIndex: number): string {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[dayIndex % 7];
}

function getMinutes({ minuteArg }: { minuteArg: number }): string[] {
  const minutes: string[] = [];
  for (let minute = 0; minute < minuteArg; minute++) {
    minutes.push(minute.toString());
  }
  return minutes;
}
function getHoursInOneDay(): string[] {
  const hours: string[] = [];
  for (let houre = 0; houre < 24; houre++) {
    hours.push(houre.toString());
  }
  return hours;
}

/*
const date3 = new Date("2024-03-25T08:00:00");
const date4 = new Date("2024-03-26T08:00:00");
console.log(dateDiffInDays(date3, date4)); // Output: 1
*/
