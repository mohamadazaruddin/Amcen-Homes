export default function dateFormater(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: any = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
