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
  }
];