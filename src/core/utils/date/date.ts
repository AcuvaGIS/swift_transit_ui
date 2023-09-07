// getLocalTime
import { format, isWithinInterval } from "date-fns";

export function formatTime(time: Date): string {
  return format(time, "h:mm a");
}

export function getLocalTime(timezone: string)/**: string */ {
  const currentTime = new Date();
//   return format(currentTime, "h:mm a", { timeZone: timezone });
}

export function isWithinOperatingHours(
  time: Date,
  openingTime: Date,
  closingTime: Date
): boolean {
  const interval = { start: openingTime, end: closingTime };
  return isWithinInterval(time, interval);
}


// import { format, utcToZonedTime } from "date-fns-tz";

// export function formatTime(time: Date): string {
//     return format(time, "h:mm a");
// }

// export function getLocalTime(timezone: string): string {
//     const currentTime = new Date();
//     const localTime = utcToZonedTime(currentTime, timezone);
//     return format(localTime, "h:mm a");
// }

// export function isWithinOperatingHours(
//     time: Date,
//     openingTime: Date,
//     closingTime: Date
// ): boolean {
//     return time >= openingTime && time <= closingTime;
// }
