import Image from "components/Image"
import { CSSProperties } from "react"



const ReportSection = ({reportUrl, companyName, logo}) => {
    const iframeStyle: CSSProperties = {
        width: "100vw",
        height: "calc(99vh - 65px)",
    }
    const logoStyle: CSSProperties = {
        width: "100%",
        height: "65px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
    }

    const logoSize = {
        width: "130px",
        height: "100px"
    }

    return (
        <div>
            <div style={logoStyle}>
                <div style={logoSize}>
                    <Image {...logo} alt={companyName} className="py-2 h- object-contain"/>   
                </div>
            </div>
            <div className="mx-auto py-2">
                <iframe className="h-5/6" title="Tietotili Data" style={iframeStyle} src={reportUrl} frameBorder={0} allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

export default ReportSection