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
    date_str: "01/06/2025",
    location: "Krispy Kreme",
    time_range: "09:00-17:00",
    title_prefix: "Day Shift at",
  },
  {
    id: 3,
    date_str: "01/06/2025",
    location: "Krispy Kreme",
    time_range: "12:00-16:00",
    title_prefix: "Afternoon Shift at",
  }
];
