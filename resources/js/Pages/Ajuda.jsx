import {  Mail } from "lucide-react";
import React from "react";

const Ajuda = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded-xl  space-y-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
      <h2 className="text-2xl font-bold text-[#313A4B] dark:text-white">Entre em contato com nossa Equipe!</h2>

      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <Mail className="text-sky-800" />
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">Email</p>
            <p className="text-base font-medium text-neutral-700 dark:text-white">###</p>
          </div>
        </div>

        {/* Whatsapp */}
        <div className="flex items-center space-x-3">
          <Mail className="text-sky-800" />
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">Whatsapp</p>
            <p className="text-base font-medium text-neutral-700 dark:text-white">###</p>
          </div>
        </div>

        
 
      </div>

      
    </div>
  );
};


  
  export default Ajuda;
  