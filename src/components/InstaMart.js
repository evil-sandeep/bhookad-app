import { useState } from "react"

const Section = ({ title, description ,isShow,setIsShow}) => {
    return (
        <>
            <h3 className=" font-bold text-2xl">{title}</h3>
            {
                isShow ? <button
                    className="underline border-lime-300"
                    onClick={() => {
                        setIsShow(false)
                    }}
                >
                    Hide
                </button> : <button
                    className="underline border-lime-300"
                    onClick={() => {
                        setIsShow(true)
                    }}
                >
                    Show
                </button>
            }



            <p>{isShow && description}</p>
        </>
    )
}
const InstaMart = () => {
    const[isVisible,setIsVisible]=useState('title')
    return (
        <>
            <div className=" border m-2 p-2 border-r-2 border-rose-500 shadow-md">
                <Section
                    title={"title"}
                    description={'It seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?It seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?  is not clear or may contain a typo. Could you please provide more context or clarify your questionIt seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?It seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?  is not clear or may contain a typo. Could you please provide more context or clarify your question? '}
                    isShow={isVisible==='title'}
                   setIsShow={()=>setIsVisible('title')}
                />
            </div>
            <div className=" border m-2 p-2 border-r-2 border-rose-500 shadow-lg">
                <Section
                    title={"Carrer"}
                    description={'hijsdnfjsdnsIt seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?It seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?  is not clear or may contain a typo. Could you please provide more context or clarify your questionmnkjndnsdvjen'}
                    isShow={isVisible==='Carrer'}
                    setIsShow={()=>setIsVisible('Carrer')}
                />
               
            </div>
            <div className=" border m-2 p-2 border-r-2 border-rose-500 shadow-2xl">
                <Section
                    title={"Team"}
                    description={'hijsdnfjsdnsmIt seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?It seems like your input "kfkdf" is not clear or may contain a typo. Could you please provide more context or clarify your question?  is not clear or may contain a typo. Could you please provide more context or clarify your questionnkjndnsdvjen'}
                    isShow={isVisible==='Team'}
                    setIsShow={()=>setIsVisible('Team')}
                />
                
            </div>
        </>
    )
}

export default InstaMart;