import React, {useState} from "react";

export function useFlip(){
    const [isFlipped, setIsFlipped] = useState(false)
    function toggleFlip(){
        setIsFlipped(!isFlipped)
    }
    return [isFlipped,toggleFlip]
}