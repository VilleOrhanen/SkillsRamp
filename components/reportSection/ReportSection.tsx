import { CSSProperties } from "react"
import { IReport } from "_lib/types"
import Image from "components/Image"

const ReportSection = ({ reportUrl, companyName, logo }: IReport) => {
    const iframeStyle: CSSProperties = {
        height: "98vh",
        width: "100%",
        border: "none"
    }

    return (
        <div>
            <div className="lg:absolute">
                <Image {...logo} alt={companyName} className="object-cover px-4 py-2 w-44" />
            </div>
            <div className="mx-auto py-2">
                <iframe title="Tietotili Data" style={iframeStyle} src={reportUrl} frameBorder={0} allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

export default ReportSection
