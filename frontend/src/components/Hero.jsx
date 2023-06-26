import { useGlobalState } from "./store";





const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return(
    
      <div className="flex  items-center justify-between text-white py-5 ">
        <div> 
        <div className="">
          <h1 className="text-4xl font-bold text-yellow-400"> Abstract Your Accounts </h1>
          <h2 className="text-2xl font-bold mt-1"> Abstraction for Smoother Contract Execution. </h2>
          <p className="text-xl mt-2 text-yellow-300" >Break Free from Limitations: Embrace Account Abstraction in Your Contracts.</p>
        </div>
        </div>
       
        <div  className="hidden lg:flex items-center space-x-3 font-semibold opacity-50 ">
          
          
         
          </div>
          
          
          
    
        </div>
  ) 
};

export default Hero;
