import { format, parseISO } from "date-fns";

/**
 * Formats a Supabase ISO string into a human-friendly date and time.
 * @param {string | Date} date
 * @returns {string} Example: "Jan 4, 2026, 07:54 AM"
 */
export const formatDateTime = (date) => {
  if (!date) return "N/A";

  const dateObj = typeof date === "string" ? parseISO(date) : date;

  // MMM d, yyyy -> Jan 4, 2026
  // p -> 3:52 PM (locale-aware time)
  return format(dateObj, "MMM d, yyyy, p");
};
