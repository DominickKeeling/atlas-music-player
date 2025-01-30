export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-8 dark:bg-darkBackground dark:text-darkText">&copy; {year} Atlas School</div>;
}
