import { Suspense } from "react";
import Item_StoreFront, { Store_Front_Fallback } from "@/app/(User)/(lib)/components/homepage/store_front";
import NextPage, { NextPageWithQuery, PageNotFoundComponent } from "@/app/(User)/(lib)/components/browsing/nextPage";
import { fetchItems } from "@/app/(User)/(lib)/api/items";
import Link from "next/link";
import { CoolLink } from "@/app/(Shared)/components/Global";
import { redirect } from "next/navigation";
import { SortByForm } from "./SortByForm";

export default async function Explore(
        {params:{page},
        searchParams}
        :{params:{page:number},
        searchParams:{sortBy:string,sortDirection:string}}
    
    ) {



    if (! (+page>0) ){
        redirect('/explore/1?sortBy=created_at&sortDirection=desc')
    }


    const sortByOptions = ["price","created_at"];
    const sortDirectionOptions = ["asc","desc"];

    if (
        Object.entries(searchParams).length != 2 
        || searchParams.sortBy == "" 
        || searchParams.sortDirection == ""
        || !sortByOptions.includes(searchParams.sortBy)
        || !sortDirectionOptions.includes(searchParams.sortDirection)
        ){
         
        redirect(`/explore/1?sortBy=created_at&sortDirection=desc`)
    }
    const limit = 5;


    const items = await fetchItems({
        "limit":`${limit}`,
        "page":`${Number(page)}`,
        "sortBy":searchParams.sortBy,
        "sortDirection":searchParams.sortDirection,
        "active":"1"


    });

    const nextPageExists = await fetchItems({
        "limit":`${limit}`,
        "page":`${Number(page)+1}`,
        "sortBy":searchParams.sortBy,
        "sortDirection":searchParams.sortDirection,
        "active":"1"


    })
    .then(result=> result != undefined);



    
    if (items){

        return (
            <>
            <main>

                <div className="
                product-list-div">

                <Suspense fallback={<Store_Front_Fallback/>}>
                
                    {items.map(
                        (item,index)=>(
                        (!item.inventory.managed||item.inventory.available>0)&&
                        // <Store_Front_Fallback key={index}/>
                        <Item_StoreFront item={item} key={item.id}/>
                        )
                    )}

                </Suspense>
                </div>

            </main>


            <NextPageWithQuery currentPage={Number(page)} nextPageExists={nextPageExists} searchQuery={`?sortBy=${searchParams.sortBy}&sortDirection=${searchParams.sortDirection}`}/>
            <SortByForm sortBy={searchParams.sortBy} sortDirection={searchParams.sortDirection}/>
            </>

        )
    }
    else{
        return  <PageNotFoundComponent goBackURL="/explore"/>
    }
} 
