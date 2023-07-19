import { ItemUpdateData, updateItem } from "@/app/(Admin)/api/items";
import { CoolButton } from "@/app/(Shared)/components/Global"
import { Category } from "@chec/commerce.js/types/category";
import { Product } from "@chec/commerce.js/types/product";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const ChangeItemServer = ({item,categories}:{item:Product,categories:Category[]}) => {

    const itemCategoryNames = item.categories.map(category=>category.name);


    


    return (
        <form 

            id="itemForm"
            action={handleSubmit}
            className="
                    px-2
                    flex flex-col
                    text-lg 
                    gap-y-2">



                    <input
                        name="product_id"
                        defaultValue={item.id} 
                        className="hidden"/>
                    <div className="flex items-center justify-between">

                        <Image 
                            className="
                            rounded-md aspect-square"
                            alt={item.name}
                            height={50}
                            width={50}
                            src={item.image?.url || "/image.png"}/>

                        <div>
                            {/* &ensp;<input  */}
                                        {/* name="imgFile" */}
                                        {/* type="file"/>  */}
                        </div>
                    
                    </div>
                    
                    <div
                        className="flex flex-wrap">
                        Item Name:&ensp;
                        <CoolInput>
                            <input
                            minLength={4}
                            maxLength={20}
                            name="name"
                            defaultValue={item.name}/>
                        </CoolInput>
                    </div>
                    <div
                        className="flex flex-wrap">
                        Permalink:&ensp;
                        <CoolInput>
                            <input
                            pattern="([^ \W \s ]|-)+"
                            title="Permalink shouldn't contain any whitespaces. You can use '_' or '-' e.g. 'cool_item'"
                            minLength={4}
                            name="permalink"
                            defaultValue={item.permalink}/>
                        </CoolInput>
                    </div>
                    <div
                        className="flex flex-wrap">
                        Active:&ensp;
                        <input
                            type="checkbox"
                            defaultChecked={item.active}
                            name="active"
                            className="text-inherit bg-inherit hover:bg-slate-50 dark:hover:bg-slate-950" />
                    </div>

                    <div
                        className="flex flex-wrap">
                        Item SKU:&ensp;
                        {/* better 8-12 */}
                        <CoolInput>
                            <input
                            minLength={8}
                            maxLength={12}
                            name="sku"
                            defaultValue={item.sku+""}/>
                        </CoolInput>

                    </div>
                    <div
                        className="flex flex-wrap">
                        Description:&ensp;
                        <CoolInput>
                            <input
                            minLength={10}
                            name="description"
                            defaultValue={item.description+""}/>
                        </CoolInput>

                    </div>
                    <div 
                        className="flex flex-wrap">
                        Price:&ensp;
                        <CoolInput>

                            <input
                            type="number"
                            className="w-[80px]"
                            step={0.01}
                            min={1}
                            defaultValue={item.price.raw}
                            name="price"/> 
                        </CoolInput>
                        Euro
                    </div>
                    <div 
                        className="flex flex-wrap">
                        Managed Stock:&ensp;
                        <input
                            className="peer"
                            name="managed"
                            type="checkbox" 
                            defaultChecked={item.inventory.managed}/>
                            
                            <div
                                className=
                                " hidden peer-checked:flex">  

                                <CoolInput>
                                <input  
                                    className="w-14"
                                    type="number"
                                    name="available" 
                                    min={0}
                                    defaultValue={item.inventory.available}
                                    /> 
                                </CoolInput>
                                Left
                            
                            </div>

                    </div>
                    <div 
                        className="flex flex-wrap">

                        Categories:&ensp;
                        <ul>
                        {categories.map(
                            category=>(
                                <li key={category.slug}>
                                    <input 
                                        name={`category.${category.id}`}
                                        type="checkbox" 
                                        defaultChecked={itemCategoryNames.includes(category.name)}/>{category.name}
                                </li>
                            )
                        )}
                        </ul>

                        {/* {item.categories.map((category,index)=><span key={index}>{index>0&&","}{category.name}</span>)} */}

                    </div>

                    <div 
                        className="flex flex-wrap justify-center">
                        
                        <CoolButton>
                            <input 
                            defaultValue={"Submit"}
                            type="submit" 
                            className="
                            cursor-pointer
                            w-44 h-10 
                            bg-slate-200 hover:bg-slate-100 rounded-md
                            dark:bg-transparent
                            capitalize"/>
                                {/* {loading?"Loading":"Make Changes"} */}
                        </CoolButton>
                    </div>


                </form>
    )

}

const CoolInput = ({children}:{children:ReactNode}) => (
    <div
    className="
    max-w-[100%]
    text-inherit px-1 rounded-md
    hover:bg-slate-50 bg-slate-200 
    dark:hover:bg-slate-950 dark:bg-slate-900">
        {children}
    </div>
)



const handleSubmit = async(formData:FormData)=>{
    "use server"
    
    const data:ItemUpdateData = {
        product_id:"",
        properties:{
            product:{
                name:"",
                permalink:"",
                active:false,
                sku:null,
                description:"",
                price:0,
                inventory:{
                    managed:false,
                    available:0,
                }
            },
            categories:{}
        }

    };

    let categoryIndex=0;

    const BooleanFields = ["managed","active"] as const;
    const NumberFields = ["price","available"] as const;
    const StringFields = ["description","permalink","product_id","name","sku"] as const;
    // const NotCategoryKey = [...BooleanFields,...NumberFields,...StringFields];


    for (const entry of formData.entries()){


        const [key,value]
            :[key:string,value:FormDataEntryValue]
            = entry;


        if (key=="product_id"){
            data.product_id=String(value);
        }

        else if(key.includes("category.cat")){

            data.properties.categories={
                
                ...data.properties.categories,
                [categoryIndex]:{
                
                    id:String(key.slice(9))
                
                }
                
            }

            categoryIndex++;
        }

        else{
            
            // @ts-ignore 
            if ( BooleanFields.includes(key) ){

                const fixedValue = value=="on"?true:value;
                
                
                if ( key == "managed" ) {
                    data.properties.product.inventory.managed = Boolean(fixedValue);
                }
                else{
                    
                    // @ts-ignore 
                    data.properties.product[key]=Boolean(fixedValue)
                } 
    
            }
            
            // @ts-ignore 
            else if ( NumberFields.includes(key) ){

                if ( key == "available") { 
                    data.properties.product.inventory.available = +value;
                }
                else{
                    
                    // @ts-ignore 
                    data.properties.product[key]=+value
                } 
            }
            
            // @ts-ignore 
            else if(StringFields.includes(key)){
                
                // @ts-ignore 
                data.properties.product[key]=String(value)
            }
        }
    }

    try{
        await updateItem(data.product_id,data.properties);
        console.log('success');

    }
    catch(error){
        redirect(String(error));
    }

}