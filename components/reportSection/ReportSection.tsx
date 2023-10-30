import Image from "components/Image"
import { CSSProperties } from "react"



const ReportSection = ({reportUrl, companyName, logo}) => {
    const iframeStyle: CSSProperties = {
        width: "100vw",
        height: "98vh",
        border: "none"
    }

    return (
        <div>
            <div className="lg: absolute">
                <Image {...logo} alt={companyName} className="object-cover px-4 py-2 w-44" />
            </div>
            <div className="mx-auto py-2">
                <iframe title="Tietotili Data" style={iframeStyle} src={reportUrl} frameBorder={0} allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

export default ReportSection