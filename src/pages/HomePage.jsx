import StockChart from "../components/StockChart";
import Features from "../components/Features";

const HomePage = () => {
  return (
    <div className="flex lg:flex-row dark:bg-main-dark-bg flex-col lg:gap-4 gap-10 sm:gap-24 md:gap-48 p-10">
      <div className="max-h-[70vh] pt-2 lg:w-[60vw] xl:w-[50vw] lg:p-5 lg:pr-10 lg:border-r-4 lg:border-gray-200">
        <StockChart />
      </div>
      <div className="xl:flex-1 xl:flex-nowrap">
        <Features />
      </div>
    </div>
  );
};

export default HomePage;
