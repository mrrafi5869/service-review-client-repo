import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-DreamWeaver`;
    }, [title])
};

export default useTitle;