import { useEffect, useState } from "react";
import { ISSERVER } from "../Utils";

export function useNetStat(){
    const [netStat, setNetStat] = useState(true);
    useEffect(()=>{
        window?.addEventListener('online', ()=>{
            setNetStat(true)
        })
        window?.addEventListener('offline', ()=>{
            setNetStat(false)
        })
        return ()=>{
            window?.removeEventListener('offline', ()=>{});
            window?.removeEventListener('online', ()=>{});
        }
    }, [])

    return {
        netStat,
        setNetStat
    }
}