import React, { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {   
    return(
        <div className="m-2 p-2 border border-black">
            <h1 className="text-xl font-bold">{title}</h1>
            {
                isVisible ? <button className="cursor-pointer underline" onClick={() => {
                    setIsVisible(false);
                }}>hide</button> : <button 
                className="cursor-pointer underline "
                onClick={() => {setIsVisible(true)}}>Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [isVisibleSection, setIsVisibleSection] = useState("");
    
    return(
       <div>
        <h1 className="text-3xl font-bold">Instamart</h1>
        <Section title={"Instamart Career"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible = {isVisibleSection === "career"}
        setIsVisible={() => {
            setIsVisibleSection("career");
        }}
        />

        <Section title={"About Instamart"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible = {isVisibleSection === "about"}
        setIsVisible={() => {
            setIsVisibleSection("about");
        }}
        
        />
       </div>
    );
}

export default Instamart;