import './end__loading.css'

const EndLoadingPage = () => {
    return (
      <div className="fixed end__loadings z-[400] top-0 left-0 right-0 flex justify-center items-center bottom-0 bg-[#fff] ">
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
         
          <div className="h-8 w-8 bg-[tomato] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-[tomato] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-[tomato] rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  };
  
  export default EndLoadingPage;
  