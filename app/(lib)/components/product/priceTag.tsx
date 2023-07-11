import { ReactNode } from "react";

export default function PriceTag({children}:{children:ReactNode}){

    return(
        <div className="
            price-tag-multiple
            bg-gradient-to-r 
            from-red-500 to-yellow-500 
            dark:from-red-400 dark:to-yellow-300 
           
            bg-clip-text text-transparent">

        {children}

        <span className="text-xs">
            (χωρίς&nbsp;ΦΠΑ)
        </span>

    </div>
    );
}