import { format, isWithinInterval } from "date-fns";
import { format as formatTZ, utcToZonedTime } from "date-fns-tz";

/**
 * Formats a given date to a string without considering time zone.
 *
 * @param {Date} time - The date to format.
 * @returns {string} - The formatted time in "h:mm a" format.
 */
export function formatTime(time: Date): string {
  return format(time, "h:mm a");
}

/**
 * Checks if a given time is within a specified time interval.
 *
 * @param {Date} time - The time to check.
 * @param {Date} openingTime - The start of the interval.
 * @param {Date} closingTime - The end of the interval.
 * @returns {boolean} - True if the time is within the interval; otherwise, false.
 */
export function isWithinOperatingHours(
  time: Date,
  openingTime: Date,
  closingTime: Date
): boolean {
  const interval = { start: openingTime, end: closingTime };
  return isWithinInterval(time, interval);
}

/**
 * Formats a given date to a string with respect to a specified time zone.
 *
 * @param {Date} time - The date to format.
 * @param {string} timezone - The desired time zone for formatting.
 * @returns {string} - The formatted time in "h:mm a" format adjusted for the given time zone.
 */
export function formatTimeTZ(time: Date, timezone: string): string {
  const localTime = utcToZonedTime(time, timezone);
  return formatTZ(localTime, "h:mm a");
}

/**
 * Checks if a given time, in a specified time zone, is within a specified time interval.
 *
 * @param {Date} time - The time to check.
 * @param {Date} openingTime - The start of the interval.
 * @param {Date} closingTime - The end of the interval.
 * @param {string} timezone - The time zone in which the time should be evaluated.
 * @returns {boolean} - True if the time is within the interval; otherwise, false.
 */
export function isWithinOperatingHoursTZ(
  time: Date,
  openingTime: Date,
  closingTime: Date,
  timezone: string
): boolean {
  const localTime = utcToZonedTime(time, timezone);
  return localTime >= openingTime && localTime <= closingTime;
}
