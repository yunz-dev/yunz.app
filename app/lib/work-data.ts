export interface WorkItem {
  id: number;
  date_str: string;
  location: string;
  time_range: string;
  title_prefix: string;
}

export const workItems: WorkItem[] = [
  {
    id: 1,
    date_str: "01/06/2025",
    location: "Krispy Kreme",
    time_range: "17:30-00:00",
    title_prefix: "Evening Shift at",
  },
  {
    id: 2,
    date_str: "02/06/2025",
    location: "Krispy Kreme",
    time_range: "19:00-00:00",
    title_prefix: "Evening Shift at",
  },
  {
    id: 5,
    date_str: "04/06/2025",
    location: "Krispy Kreme",
    time_range: "05:30-13:30",
    title_prefix: "Early Morning Shift at",
  },
  {
    id: 6,
    date_str: "05/06/2025",
    location: "Krispy Kreme",
    time_range: "18:00-01:00",
    title_prefix: "Late Evening Shift at",
  },
  {
    id: 7, // Assuming unique IDs are needed; incrementing from the last ID
    date_str: "10/06/2025",
    location: "Krispy Kreme",
    time_range: "05:30-13:30",
    title_prefix: "Early Morning Shift at",
  },
  {
    id: 8,
    date_str: "11/06/2025",
    location: "Krispy Kreme",
    time_range: "05:30-13:30",
    title_prefix: "Early Morning Shift at",
  },
  {
    id: 9,
    date_str: "12/06/2025",
    location: "Krispy Kreme",
    time_range: "19:00-01:00",
    title_prefix: "Late Evening Shift at", // Adjusted based on time range
  },
  {
    id: 10,
    date_str: "15/06/2025",
    location: "Krispy Kreme",
    time_range: "18:00-00:00",
    title_prefix: "Evening Shift at",
  },
  {
    id: 11,
    date_str: "17/06/2025",
    location: "Krispy Kreme",
    time_range: "05:30-13:30",
    title_prefix: "Evening Shift at",
  },
  {
    id: 12,
    date_str: "18/06/2025",
    location: "Krispy Kreme",
    time_range: "05:30-13:30",
    title_prefix: "Evening Shift at",
  },
  {
    id: 13,
    date_str: "19/06/2025",
    location: "Krispy Kreme",
    time_range: "18:00-01:00",
    title_prefix: "Evening Shift at",
  },
];
